export interface CityData {
  name: string;
  lat: number;
  lng: number;
  timezone: string;
  utcOffset: string;
  populationEstimate?: string;
  postalFormat?: string;
}

export interface DivisionData {
  name: string;
  type: string; // 'State' | 'Province' | 'Region' | 'County' | 'Prefecture' | 'Governorate' | 'Department' | 'District' | 'Emirate' | 'Canton' | 'Parish' | 'Nation' | 'Territory'
  cities: CityData[];
}

export interface CountryData {
  name: string;
  code: string; // ISO 3166-1 alpha-2
  code3: string; // ISO 3166-1 alpha-3
  capital: string;
  currency: string;
  dialCode: string;
  divisionType: string; // Display label for administrative unit
  divisions: DivisionData[];
}

export interface ContinentData {
  id: string;
  name: string;
  code?: string;
  countries: CountryData[];
  note?: string;
}

export interface FullLocationResult {
  id: string;
  continent: string;
  country: string;
  countryCode: string;
  countryCode3: string;
  capital: string;
  divisionName: string;
  divisionType: string;
  cityName: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utcOffset: string;
  currency: string;
  dialCode: string;
  postalCode: string;
  streetAddress: string;
  formattedAddress: string;
  timestamp: string;
}
