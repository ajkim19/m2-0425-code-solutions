update "products"
   set "firstName" = 'Baby',
       "lastName" = 'Yoda'
 where "actorId" = 15
 returning *;
