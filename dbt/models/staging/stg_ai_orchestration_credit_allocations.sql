with source as (
    select * from {{ source('ai_orchestration_raw', 'ai_orchestration_credit_allocations') }}
),

cleaned as (
    select
        allocation_id,
        account_id,
        period_start::date                              as period_start,
        period_end::date                                as period_end,
        credits_allocated::float                        as credits_allocated,
        lower(credits_type)                             as credits_type,
        _loaded_at::timestamp_ntz                       as _loaded_at,

        datediff('day', period_start::date, period_end::date) + 1
                                                        as period_days
    from source
    where credits_allocated > 0
)

select * from cleaned
