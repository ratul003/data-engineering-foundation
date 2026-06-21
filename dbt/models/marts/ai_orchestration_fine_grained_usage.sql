with events as (
    select * from {{ ref('stg_ai_orchestration_events') }}
),

accounts as (
    select * from {{ ref('stg_ai_orchestration_accounts') }}
),

identity as (
    select * from {{ ref('int_identity_resolution') }}
),

enriched as (
    select
        e.event_id,
        e.received_at,
        e.event_date,
        e.event_name,

        -- identity
        e.account_id,
        a.account_name,
        a.plan_type,
        e.user_id,
        i.email                                         as user_email,
        i.user_role,
        i.original_mcid,

        -- event detail
        e.tool_name,
        e.tool_category,
        e.agent_id,
        e.workflow_id,
        e.session_id,

        -- billing
        e.credits_consumed,
        a.monthly_credit_limit,

        -- period context
        date_trunc('month', e.event_date)::date         as billing_month,

        -- load metadata
        e._loaded_at

    from events e
    inner join accounts a
        on e.account_id = a.account_id
    left join identity i
        on e.user_id = i.user_id
    where a.status = 'active'
)

select * from enriched
