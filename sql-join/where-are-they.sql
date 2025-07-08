select "addresses"."line1", "cities"."name", and "addresses"."district"
  from "addresses"
  join "cities" using ("cityId")
