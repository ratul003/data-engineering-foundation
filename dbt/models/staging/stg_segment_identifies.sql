with source as (
    select * from {{ source('segment_raw', 'segment_identifies') }}
),

cleaned as (
    select
        message_id,
        received_at::timestamp_ntz                      as received_at,

        -- identity
        user_id,
        anonymous_id,
        alias_id,                                       -- MCID bridged via alias()
        group_id,

        -- traits from identify() call
        lower(traits_email)                             as email,
        traits_name                                     as full_name,
        traits_account_id                               as account_id,
        lower(traits_role)                              as user_role,

        _loaded_at::timestamp_ntz                       as _loaded_at

    from source
    where user_id is not null
)

select * from cleaned
