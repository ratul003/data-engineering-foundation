with identifies as (
    select * from {{ ref('stg_segment_identifies') }}
),

resolved as (
    select
        user_id,

        -- MCID bridged via alias() — earliest alias_id is the original anonymous ID
        first_value(alias_id) over (
            partition by user_id
            order by received_at asc
            rows between unbounded preceding and unbounded following
        )                                               as original_mcid,

        -- Account linkage — latest group call wins (user may change org)
        last_value(account_id) ignore nulls over (
            partition by user_id
            order by received_at asc
            rows between unbounded preceding and unbounded following
        )                                               as account_id,

        last_value(group_id) ignore nulls over (
            partition by user_id
            order by received_at asc
            rows between unbounded preceding and unbounded following
        )                                               as group_id,

        -- Latest known traits
        last_value(email) ignore nulls over (
            partition by user_id
            order by received_at asc
            rows between unbounded preceding and unbounded following
        )                                               as email,

        last_value(user_role) ignore nulls over (
            partition by user_id
            order by received_at asc
            rows between unbounded preceding and unbounded following
        )                                               as user_role,

        min(received_at) over (
            partition by user_id
        )                                               as first_seen_at,

        max(received_at) over (
            partition by user_id
        )                                               as last_seen_at,

        row_number() over (
            partition by user_id
            order by received_at desc
        )                                               as _row_num

    from identifies
),

deduplicated as (
    select
        user_id,
        original_mcid,
        account_id,
        group_id,
        email,
        user_role,
        first_seen_at,
        last_seen_at
    from resolved
    where _row_num = 1
)

select * from deduplicated
