with balances as (
    select * from {{ ref('int_ai_orchestration_account_balances') }}
),

accounts as (
    select * from {{ ref('stg_ai_orchestration_accounts') }}
),

enriched as (
    select
        b.allocation_id,
        b.account_id,
        a.account_name,
        a.plan_type,
        a.status                                        as account_status,

        b.period_start,
        b.period_end,
        b.credits_allocated,
        coalesce(b.credits_consumed_in_period, 0)       as credits_consumed,
        greatest(b.credits_remaining, 0)                as credits_remaining,
        b.credits_overages,
        b.is_over_limit,
        b.active_days_in_period,

        -- utilization
        round(
            coalesce(b.credits_consumed_in_period, 0) / nullif(b.credits_allocated, 0) * 100,
            1
        )                                               as utilization_pct,

        -- risk classification for CS
        case
            when b.is_over_limit                    then 'over_limit'
            when coalesce(b.credits_consumed_in_period, 0) / nullif(b.credits_allocated, 0) >= 0.9
                                                    then 'at_risk'
            when coalesce(b.credits_consumed_in_period, 0) / nullif(b.credits_allocated, 0) >= 0.7
                                                    then 'high_usage'
            else 'healthy'
        end                                             as balance_status

    from balances b
    inner join accounts a
        on b.account_id = a.account_id
)

select * from enriched
