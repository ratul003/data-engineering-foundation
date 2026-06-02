with daily as (
    select * from {{ ref('int_opal_daily_usage') }}
),

accounts as (
    select * from {{ ref('stg_opal_accounts') }}
),

with_running_total as (
    select
        d.event_date,
        d.account_id,
        a.account_name,
        d.plan_type,
        d.monthly_credit_limit,

        -- daily metrics
        d.total_events,
        d.agent_executions,
        d.tool_calls,
        d.workflow_runs,
        d.credits_consumed,
        d.active_users,
        d.distinct_tools_used,
        d.sessions,

        -- month-to-date running total
        sum(d.credits_consumed) over (
            partition by d.account_id, date_trunc('month', d.event_date)
            order by d.event_date
            rows between unbounded preceding and current row
        )                                               as credits_consumed_mtd,

        -- remaining headroom
        d.monthly_credit_limit - sum(d.credits_consumed) over (
            partition by d.account_id, date_trunc('month', d.event_date)
            order by d.event_date
            rows between unbounded preceding and current row
        )                                               as credits_remaining_mtd,

        date_trunc('month', d.event_date)::date         as billing_month

    from daily d
    inner join accounts a
        on d.account_id = a.account_id
)

select * from with_running_total
