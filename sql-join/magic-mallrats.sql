select "customer"."firstName", "customer"."lastName"
   from "rentals"
   join "inventory" using ("inventoryId")
   join "customers" using ("customersId")
   join "films" using ("filmId")
   where "films"."title" = 'Magic Mallrats';
