select "c"."customerId", "c"."firstName", "c"."lastName", sum("p"."amount") as "total spent"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  group by "customerId"
  order by "total spent" desc;
