with source as (
    select * from {{ source('ai_orchestration_raw', 'ai_orchestration_events') }}
),

cleaned as (
    select
        event_id,
        received_at::timestamp_ntz                      as received_at,
        received_at::date                               as event_date,

        -- identity keys
        coalesce(user_id, 'anonymous_' || anonymous_id) as user_id,
        anonymous_id,
        account_id,

        -- event classification
        upper(event_name)                               as event_name,
        lower(tool_name)                                as tool_name,
        lower(tool_category)                            as tool_category,

        -- agent context
        agent_id,
        workflow_id,
        coalesce(session_id, md5(user_id || event_date::varchar)) as session_id,

        -- billing
        credits_consumed::float                         as credits_consumed,

        _loaded_at::timestamp_ntz                       as _loaded_at

    from source
    where event_name is not null
      and credits_consumed >= 0
)

select * from cleaned
