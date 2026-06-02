with balances as (
    select * from {{ ref('opal_customer_balances') }}
),

overage_periods as (
    select
        account_id,
        account_name,
        plan_type,
        period_start,
        period_end,
        credits_allocated,
        credits_consumed,
        credits_overages,
        utilization_pct,

        -- how many credits over limit
        credits_overages                                as overage_amount,

        -- sequential overage periods (for escalation logic)
        sum(case when credits_overages > 0 then 1 else 0 end) over (
            partition by account_id
            order by period_start
            rows between unbounded preceding and current row
        )                                               as cumulative_overage_periods,

        -- flag for consecutive overages (churn signal)
        case
            when lag(credits_overages, 1) over (
                partition by account_id order by period_start
            ) > 0 and credits_overages > 0
            then true
            else false
        end                                             as consecutive_overage

    from balances
    where credits_overages > 0
)

select
    *,
    case
        when consecutive_overage and cumulative_overage_periods >= 3
        then 'escalate_to_ae'
        when consecutive_overage
        then 'cs_outreach'
        else 'monitor'
    end                                                 as recommended_action

from overage_periods
order by account_id, period_start
