import { ContinentData, CountryData } from './types';
import { AFRICA_COUNTRIES } from './africa';
import { ASIA_COUNTRIES } from './asia';
import { EUROPE_COUNTRIES } from './europe';
import { NORTH_AMERICA_COUNTRIES } from './north-america';
import { SOUTH_AMERICA_COUNTRIES } from './south-america';
import { OCEANIA_COUNTRIES } from './oceania';

export * from './types';
export { AFRICA_COUNTRIES } from './africa';
export { ASIA_COUNTRIES } from './asia';
export { EUROPE_COUNTRIES } from './europe';
export { NORTH_AMERICA_COUNTRIES } from './north-america';
export { SOUTH_AMERICA_COUNTRIES } from './south-america';
export { OCEANIA_COUNTRIES } from './oceania';

/**
 * Official NETWHO 195-Country Hierarchy Database
 * Africa: 54
 * Asia: 48
 * Europe: 44
 * North America: 23
 * South America: 12
 * Oceania: 14
 * Total: 195 Countries
 */
export const WORLD_LOCATION_HIERARCHY: ContinentData[] = [
  {
    id: 'africa',
    name: 'Africa',
    code: 'AF',
    countries: AFRICA_COUNTRIES,
  },
  {
    id: 'asia',
    name: 'Asia',
    code: 'AS',
    countries: ASIA_COUNTRIES,
  },
  {
    id: 'europe',
    name: 'Europe',
    code: 'EU',
    countries: EUROPE_COUNTRIES,
  },
  {
    id: 'north-america',
    name: 'North America',
    code: 'NA',
    countries: NORTH_AMERICA_COUNTRIES,
  },
  {
    id: 'south-america',
    name: 'South America',
    code: 'SA',
    countries: SOUTH_AMERICA_COUNTRIES,
  },
  {
    id: 'oceania',
    name: 'Oceania',
    code: 'OC',
    countries: OCEANIA_COUNTRIES,
  },
];

/**
 * Total Country Count verification
 */
export const TOTAL_COUNTRIES_COUNT = WORLD_LOCATION_HIERARCHY.reduce(
  (acc, continent) => acc + continent.countries.length,
  0
);

/**
 * Quick lookup index by country name
 */
export const ALL_COUNTRIES_FLAT: (CountryData & { continent: string; continentCode: string })[] =
  WORLD_LOCATION_HIERARCHY.flatMap((continent) =>
    continent.countries.map((country) => ({
      ...country,
      continent: continent.name,
      continentCode: continent.code || '',
    }))
  );

/**
 * Get country by name
 */
export function getCountryByName(countryName: string) {
  return ALL_COUNTRIES_FLAT.find(
    (c) => c.name.toLowerCase() === countryName.trim().toLowerCase()
  );
}

/**
 * Get a random location respecting strict hierarchy
 */
export function getRandomLocation() {
  const randomContinent =
    WORLD_LOCATION_HIERARCHY[
      Math.floor(Math.random() * WORLD_LOCATION_HIERARCHY.length)
    ];
  const randomCountry =
    randomContinent.countries[
      Math.floor(Math.random() * randomContinent.countries.length)
    ];
  const randomDivision =
    randomCountry.divisions[
      Math.floor(Math.random() * randomCountry.divisions.length)
    ];
  const randomCity =
    randomDivision.cities[
      Math.floor(Math.random() * randomDivision.cities.length)
    ];

  return {
    continent: randomContinent,
    country: randomCountry,
    division: randomDivision,
    city: randomCity,
  };
}
