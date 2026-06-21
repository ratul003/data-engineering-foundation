with events as (
    select * from {{ ref('stg_ai_orchestration_events') }}
),

accounts as (
    select * from {{ ref('stg_ai_orchestration_accounts') }}
),

daily_agg as (
    select
        e.event_date,
        e.account_id,
        a.plan_type,
        a.monthly_credit_limit,

        count(*)                                        as total_events,
        count(case when e.event_name = 'AGENT_EXECUTED' then 1 end)
                                                        as agent_executions,
        count(case when e.event_name = 'TOOL_CALLED' then 1 end)
                                                        as tool_calls,
        count(case when e.event_name = 'WORKFLOW_RUN' then 1 end)
                                                        as workflow_runs,

        sum(e.credits_consumed)                         as credits_consumed,
        count(distinct e.user_id)                       as active_users,
        count(distinct e.tool_name)                     as distinct_tools_used,
        count(distinct e.session_id)                    as sessions

    from events e
    inner join accounts a
        on e.account_id = a.account_id
    group by 1, 2, 3, 4
)

select * from daily_agg
