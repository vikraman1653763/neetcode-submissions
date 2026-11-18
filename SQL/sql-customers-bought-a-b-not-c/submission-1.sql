-- Write your query below
select c.customer_id, c.customer_name from customers as c where 
Exists (
    select 1 from orders as o where c.customer_id = o.customer_id and o.product_name = 'A'
       )
and Exists (
    select 1 from orders as o where c.customer_id = o.customer_id and o.product_name = 'B'
       )
and not Exists (
    select 1 from orders as o where c.customer_id = o.customer_id and o.product_name = 'C'
       ) order by c.customer_name ASC