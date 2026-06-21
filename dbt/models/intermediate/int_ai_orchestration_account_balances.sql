with allocations as (
    select * from {{ ref('stg_ai_orchestration_credit_allocations') }}
),

daily_usage as (
    select * from {{ ref('int_ai_orchestration_daily_usage') }}
),

period_consumption as (
    select
        du.account_id,
        al.allocation_id,
        al.period_start,
        al.period_end,
        al.credits_allocated,

        sum(du.credits_consumed)                        as credits_consumed_in_period,
        count(distinct du.event_date)                   as active_days_in_period

    from allocations al
    left join daily_usage du
        on  du.account_id   = al.account_id
        and du.event_date  >= al.period_start
        and du.event_date  <= al.period_end
    group by 1, 2, 3, 4, 5
),

with_balance as (
    select
        *,
        credits_allocated - coalesce(credits_consumed_in_period, 0)
                                                        as credits_remaining,
        greatest(
            coalesce(credits_consumed_in_period, 0) - credits_allocated,
            0
        )                                               as credits_overages,
        case
            when coalesce(credits_consumed_in_period, 0) >= credits_allocated
            then true
            else false
        end                                             as is_over_limit
    from period_consumption
)

select * from with_balance
