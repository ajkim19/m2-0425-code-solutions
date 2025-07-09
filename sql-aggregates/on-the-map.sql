select "countries"."name" as "country", count(*) as "# of cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
