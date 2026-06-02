with source as (
    select * from {{ source('opal_raw', 'opal_accounts') }}
),

deduped as (
    select
        account_id,
        account_name,
        lower(plan_type)                                as plan_type,
        monthly_credit_limit::float                     as monthly_credit_limit,
        credit_reset_day::int                           as credit_reset_day,
        billing_start_date::date                        as billing_start_date,
        lower(status)                                   as status,
        _loaded_at::timestamp_ntz                       as _loaded_at,
        row_number() over (
            partition by account_id
            order by _loaded_at desc
        )                                               as _row_num
    from source
),

final as (
    select
        account_id,
        account_name,
        plan_type,
        monthly_credit_limit,
        credit_reset_day,
        billing_start_date,
        status,
        _loaded_at,
        case plan_type
            when 'starter'    then 1
            when 'growth'     then 2
            when 'enterprise' then 3
        end                                             as plan_tier
    from deduped
    where _row_num = 1
)

select * from final
