update "countries"
   set "name" = 'Murica'
 where "countryId" = 'United States'
 returning *;
