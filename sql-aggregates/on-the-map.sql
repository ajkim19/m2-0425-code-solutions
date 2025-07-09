select "countries"."name" as "country", count("countryId") as "# of cities"
  from "cities"
  join "countries" using ("countryId")
  group by "country";
