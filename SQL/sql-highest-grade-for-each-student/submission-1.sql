-- Write your query below
with temps as(
    select *,
        ROW_NUMBER() over(
            PARTITION BY student_id
            ORDER BY score DESC,exam_id ASC
        ) as row_num
    from exam_results
)

select student_id,exam_id,score from temps where row_num = 1 order by student_id asc;