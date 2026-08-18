import { CountryData } from './types';

/**
 * Complete European Dataset — 44 Countries
 */
export const EUROPE_COUNTRIES: CountryData[] = [
  {
    name: 'Albania',
    code: 'AL',
    code3: 'ALB',
    capital: 'Tirana',
    currency: 'ALL (Albanian Lek - L)',
    dialCode: '+355',
    divisionType: 'County (Qark)',
    divisions: [
      {
        name: 'Tirana County',
        type: 'County',
        cities: [
          { name: 'Tirana', lat: 41.3275, lng: 19.8187, timezone: 'Europe/Tirane', utcOffset: 'UTC+1', postalFormat: '1001' },
          { name: 'Blloku', lat: 41.3200, lng: 19.8180, timezone: 'Europe/Tirane', utcOffset: 'UTC+1', postalFormat: '1019' },
        ],
      },
      {
        name: 'Durrës County',
        type: 'County',
        cities: [
          { name: 'Durrës', lat: 41.3230, lng: 19.4414, timezone: 'Europe/Tirane', utcOffset: 'UTC+1', postalFormat: '2001' },
        ],
      },
    ],
  },
  {
    name: 'Andorra',
    code: 'AD',
    code3: 'AND',
    capital: 'Andorra la Vella',
    currency: 'EUR (Euro - €)',
    dialCode: '+376',
    divisionType: 'Parish (Parròquia)',
    divisions: [
      {
        name: 'Andorra la Vella Parish',
        type: 'Parish',
        cities: [
          { name: 'Andorra la Vella', lat: 42.5063, lng: 1.5218, timezone: 'Europe/Andorra', utcOffset: 'UTC+1', postalFormat: 'AD500' },
          { name: 'Santa Coloma', lat: 42.4942, lng: 1.4975, timezone: 'Europe/Andorra', utcOffset: 'UTC+1', postalFormat: 'AD500' },
        ],
      },
      {
        name: 'Escaldes-Engordany Parish',
        type: 'Parish',
        cities: [
          { name: 'Les Escaldes', lat: 42.5094, lng: 1.5386, timezone: 'Europe/Andorra', utcOffset: 'UTC+1', postalFormat: 'AD700' },
        ],
      },
    ],
  },
  {
    name: 'Austria',
    code: 'AT',
    code3: 'AUT',
    capital: 'Vienna',
    currency: 'EUR (Euro - €)',
    dialCode: '+43',
    divisionType: 'Federal State (Bundesland)',
    divisions: [
      {
        name: 'Vienna (Wien)',
        type: 'Federal State',
        cities: [
          { name: 'Innere Stadt (1st District)', lat: 48.2082, lng: 16.3738, timezone: 'Europe/Vienna', utcOffset: 'UTC+1', postalFormat: '1010' },
          { name: 'Leopoldstadt (2nd District)', lat: 48.2167, lng: 16.3833, timezone: 'Europe/Vienna', utcOffset: 'UTC+1', postalFormat: '1020' },
          { name: 'Neubau (7th District)', lat: 48.2017, lng: 16.3478, timezone: 'Europe/Vienna', utcOffset: 'UTC+1', postalFormat: '1070' },
        ],
      },
      {
        name: 'Salzburg',
        type: 'Federal State',
        cities: [
          { name: 'Salzburg City', lat: 47.8095, lng: 13.0550, timezone: 'Europe/Vienna', utcOffset: 'UTC+1', postalFormat: '5020' },
        ],
      },
      {
        name: 'Tyrol (Tirol)',
        type: 'Federal State',
        cities: [
          { name: 'Innsbruck', lat: 47.2692, lng: 11.4041, timezone: 'Europe/Vienna', utcOffset: 'UTC+1', postalFormat: '6020' },
        ],
      },
    ],
  },
  {
    name: 'Belarus',
    code: 'BY',
    code3: 'BLR',
    capital: 'Minsk',
    currency: 'BYN (Belarusian Ruble - Br)',
    dialCode: '+375',
    divisionType: 'Region (Oblast) / Capital City',
    divisions: [
      {
        name: 'Minsk Special Capital City',
        type: 'Special Capital City',
        cities: [
          { name: 'Minsk (Tsentralny)', lat: 53.9045, lng: 27.5615, timezone: 'Europe/Minsk', utcOffset: 'UTC+3', postalFormat: '220030' },
          { name: 'Minsk (Savetski)', lat: 53.9200, lng: 27.5800, timezone: 'Europe/Minsk', utcOffset: 'UTC+3', postalFormat: '220013' },
        ],
      },
      {
        name: 'Brest Region',
        type: 'Region',
        cities: [
          { name: 'Brest', lat: 52.0976, lng: 23.7341, timezone: 'Europe/Minsk', utcOffset: 'UTC+3', postalFormat: '224000' },
        ],
      },
    ],
  },
  {
    name: 'Belgium',
    code: 'BE',
    code3: 'BEL',
    capital: 'Brussels',
    currency: 'EUR (Euro - €)',
    dialCode: '+32',
    divisionType: 'Region / Province',
    divisions: [
      {
        name: 'Brussels-Capital Region',
        type: 'Region',
        cities: [
          { name: 'City of Brussels (Grand-Place)', lat: 50.8467, lng: 4.3528, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'Ixelles / Elsene', lat: 50.8333, lng: 4.3667, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '1050' },
          { name: 'Saint-Gilles / Sint-Gillis', lat: 50.8250, lng: 4.3450, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '1060' },
        ],
      },
      {
        name: 'Flanders (Antwerp)',
        type: 'Province',
        cities: [
          { name: 'Antwerp (Antwerpen)', lat: 51.2194, lng: 4.4025, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '2000' },
          { name: 'Ghent (Gent)', lat: 51.0543, lng: 3.7174, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '9000' },
          { name: 'Bruges (Brugge)', lat: 51.2093, lng: 3.2247, timezone: 'Europe/Brussels', utcOffset: 'UTC+1', postalFormat: '8000' },
        ],
      },
    ],
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    code3: 'BIH',
    capital: 'Sarajevo',
    currency: 'BAM (Convertible Mark - KM)',
    dialCode: '+387',
    divisionType: 'Canton / Entity',
    divisions: [
      {
        name: 'Sarajevo Canton',
        type: 'Canton',
        cities: [
          { name: 'Sarajevo (Centar)', lat: 43.8563, lng: 18.4131, timezone: 'Europe/Sarajevo', utcOffset: 'UTC+1', postalFormat: '71000' },
          { name: 'Stari Grad', lat: 43.8600, lng: 18.4300, timezone: 'Europe/Sarajevo', utcOffset: 'UTC+1', postalFormat: '71000' },
        ],
      },
      {
        name: 'Herzegovina-Neretva Canton',
        type: 'Canton',
        cities: [
          { name: 'Mostar', lat: 43.3438, lng: 17.8078, timezone: 'Europe/Sarajevo', utcOffset: 'UTC+1', postalFormat: '88000' },
        ],
      },
    ],
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    code3: 'BGR',
    capital: 'Sofia',
    currency: 'BGN (Bulgarian Lev - лв.)',
    dialCode: '+359',
    divisionType: 'Province (Oblast)',
    divisions: [
      {
        name: 'Sofia City Province',
        type: 'Province',
        cities: [
          { name: 'Sofia (Sredets)', lat: 42.6977, lng: 23.3219, timezone: 'Europe/Sofia', utcOffset: 'UTC+2', postalFormat: '1000' },
          { name: 'Lozenets', lat: 42.6700, lng: 23.3300, timezone: 'Europe/Sofia', utcOffset: 'UTC+2', postalFormat: '1164' },
          { name: 'Mladost', lat: 42.6500, lng: 23.3800, timezone: 'Europe/Sofia', utcOffset: 'UTC+2', postalFormat: '1784' },
        ],
      },
      {
        name: 'Plovdiv Province',
        type: 'Province',
        cities: [
          { name: 'Plovdiv', lat: 42.1354, lng: 24.7453, timezone: 'Europe/Sofia', utcOffset: 'UTC+2', postalFormat: '4000' },
        ],
      },
      {
        name: 'Varna Province',
        type: 'Province',
        cities: [
          { name: 'Varna', lat: 43.2141, lng: 27.9147, timezone: 'Europe/Sofia', utcOffset: 'UTC+2', postalFormat: '9000' },
        ],
      },
    ],
  },
  {
    name: 'Croatia',
    code: 'HR',
    code3: 'HRV',
    capital: 'Zagreb',
    currency: 'EUR (Euro - €)',
    dialCode: '+385',
    divisionType: 'County (Županija)',
    divisions: [
      {
        name: 'City of Zagreb (County)',
        type: 'County',
        cities: [
          { name: 'Zagreb (Donji Grad)', lat: 45.8150, lng: 15.9819, timezone: 'Europe/Zagreb', utcOffset: 'UTC+1', postalFormat: '10000' },
          { name: 'Gornji Grad - Medveščak', lat: 45.8200, lng: 15.9800, timezone: 'Europe/Zagreb', utcOffset: 'UTC+1', postalFormat: '10000' },
          { name: 'Novi Zagreb', lat: 45.7700, lng: 15.9800, timezone: 'Europe/Zagreb', utcOffset: 'UTC+1', postalFormat: '10020' },
        ],
      },
      {
        name: 'Split-Dalmatia County',
        type: 'County',
        cities: [
          { name: 'Split', lat: 43.5081, lng: 16.4402, timezone: 'Europe/Zagreb', utcOffset: 'UTC+1', postalFormat: '21000' },
        ],
      },
      {
        name: 'Dubrovnik-Neretva County',
        type: 'County',
        cities: [
          { name: 'Dubrovnik', lat: 42.6507, lng: 18.0944, timezone: 'Europe/Zagreb', utcOffset: 'UTC+1', postalFormat: '20000' },
        ],
      },
    ],
  },
  {
    name: 'Czechia',
    code: 'CZ',
    code3: 'CZE',
    capital: 'Prague',
    currency: 'CZK (Czech Koruna - Kč)',
    dialCode: '+420',
    divisionType: 'Region (Kraj)',
    divisions: [
      {
        name: 'Capital City of Prague',
        type: 'Region',
        cities: [
          { name: 'Prague 1 (Staré Město)', lat: 50.0878, lng: 14.4205, timezone: 'Europe/Prague', utcOffset: 'UTC+1', postalFormat: '110 00' },
          { name: 'Prague 2 (Vinohrady)', lat: 50.0755, lng: 14.4378, timezone: 'Europe/Prague', utcOffset: 'UTC+1', postalFormat: '120 00' },
          { name: 'Prague 5 (Smíchov)', lat: 50.0700, lng: 14.4000, timezone: 'Europe/Prague', utcOffset: 'UTC+1', postalFormat: '150 00' },
          { name: 'Prague 7 (Holešovice)', lat: 50.1000, lng: 14.4400, timezone: 'Europe/Prague', utcOffset: 'UTC+1', postalFormat: '170 00' },
        ],
      },
      {
        name: 'South Moravian Region',
        type: 'Region',
        cities: [
          { name: 'Brno', lat: 49.1951, lng: 16.6068, timezone: 'Europe/Prague', utcOffset: 'UTC+1', postalFormat: '602 00' },
        ],
      },
    ],
  },
  {
    name: 'Denmark',
    code: 'DK',
    code3: 'DNK',
    capital: 'Copenhagen',
    currency: 'DKK (Danish Krone - kr.)',
    dialCode: '+45',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Capital Region of Denmark (Hovedstaden)',
        type: 'Region',
        cities: [
          { name: 'Copenhagen (Indre By)', lat: 55.6761, lng: 12.5683, timezone: 'Europe/Copenhagen', utcOffset: 'UTC+1', postalFormat: '1050' },
          { name: 'Vesterbro', lat: 55.6690, lng: 12.5520, timezone: 'Europe/Copenhagen', utcOffset: 'UTC+1', postalFormat: '1620' },
          { name: 'Nørrebro', lat: 55.6920, lng: 12.5540, timezone: 'Europe/Copenhagen', utcOffset: 'UTC+1', postalFormat: '2200' },
          { name: 'Frederiksberg', lat: 55.6780, lng: 12.5330, timezone: 'Europe/Copenhagen', utcOffset: 'UTC+1', postalFormat: '2000' },
        ],
      },
      {
        name: 'Central Denmark Region (Midtjylland)',
        type: 'Region',
        cities: [
          { name: 'Aarhus', lat: 56.1629, lng: 10.2039, timezone: 'Europe/Copenhagen', utcOffset: 'UTC+1', postalFormat: '8000' },
        ],
      },
    ],
  },
  {
    name: 'Estonia',
    code: 'EE',
    code3: 'EST',
    capital: 'Tallinn',
    currency: 'EUR (Euro - €)',
    dialCode: '+372',
    divisionType: 'County (Maakond)',
    divisions: [
      {
        name: 'Harju County',
        type: 'County',
        cities: [
          { name: 'Tallinn (Kesklinn)', lat: 59.4370, lng: 24.7536, timezone: 'Europe/Tallinn', utcOffset: 'UTC+2', postalFormat: '10115' },
          { name: 'Tallinn (Põhja-Tallinn / Kalamaja)', lat: 59.4480, lng: 24.7290, timezone: 'Europe/Tallinn', utcOffset: 'UTC+2', postalFormat: '10412' },
          { name: 'Ülemiste City', lat: 59.4220, lng: 24.8000, timezone: 'Europe/Tallinn', utcOffset: 'UTC+2', postalFormat: '11415' },
        ],
      },
      {
        name: 'Tartu County',
        type: 'County',
        cities: [
          { name: 'Tartu', lat: 58.3780, lng: 26.7290, timezone: 'Europe/Tallinn', utcOffset: 'UTC+2', postalFormat: '51003' },
        ],
      },
    ],
  },
  {
    name: 'Finland',
    code: 'FI',
    code3: 'FIN',
    capital: 'Helsinki',
    currency: 'EUR (Euro - €)',
    dialCode: '+358',
    divisionType: 'Region (Maakunta)',
    divisions: [
      {
        name: 'Uusimaa',
        type: 'Region',
        cities: [
          { name: 'Helsinki (Kluuvi / Kamppi)', lat: 60.1699, lng: 24.9384, timezone: 'Europe/Helsinki', utcOffset: 'UTC+2', postalFormat: '00100' },
          { name: 'Kallio', lat: 60.1840, lng: 24.9500, timezone: 'Europe/Helsinki', utcOffset: 'UTC+2', postalFormat: '00530' },
          { name: 'Espoo (Otaniemi / Keilaniemi)', lat: 60.2055, lng: 24.6559, timezone: 'Europe/Helsinki', utcOffset: 'UTC+2', postalFormat: '02150' },
          { name: 'Vantaa', lat: 60.2934, lng: 25.0378, timezone: 'Europe/Helsinki', utcOffset: 'UTC+2', postalFormat: '01300' },
        ],
      },
      {
        name: 'Pirkanmaa',
        type: 'Region',
        cities: [
          { name: 'Tampere', lat: 61.4978, lng: 23.7610, timezone: 'Europe/Helsinki', utcOffset: 'UTC+2', postalFormat: '33100' },
        ],
      },
    ],
  },
  {
    name: 'France',
    code: 'FR',
    code3: 'FRA',
    capital: 'Paris',
    currency: 'EUR (Euro - €)',
    dialCode: '+33',
    divisionType: 'Region / Department',
    divisions: [
      {
        name: 'Île-de-France (Paris)',
        type: 'Region',
        cities: [
          { name: 'Paris (8e Arrondissement - Champs-Élysées)', lat: 48.8722, lng: 2.3126, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '75008' },
          { name: 'Paris (1er Arrondissement - Louvre)', lat: 48.8606, lng: 2.3376, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '75001' },
          { name: 'Paris (11e Arrondissement - Bastille)', lat: 48.8590, lng: 2.3780, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '75011' },
          { name: 'Boulogne-Billancourt', lat: 48.8350, lng: 2.2400, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '92100' },
          { name: 'Courbevoie (La Défense)', lat: 48.8970, lng: 2.2530, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '92400' },
        ],
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        type: 'Region',
        cities: [
          { name: 'Marseille', lat: 43.2965, lng: 5.3698, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '13001' },
          { name: 'Nice', lat: 43.7102, lng: 7.2620, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '06000' },
          { name: 'Cannes', lat: 43.5528, lng: 7.0174, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '06400' },
        ],
      },
      {
        name: 'Auvergne-Rhône-Alpes',
        type: 'Region',
        cities: [
          { name: 'Lyon', lat: 45.7640, lng: 4.8357, timezone: 'Europe/Paris', utcOffset: 'UTC+1', postalFormat: '69001' },
        ],
      },
    ],
  },
  {
    name: 'Germany',
    code: 'DE',
    code3: 'DEU',
    capital: 'Berlin',
    currency: 'EUR (Euro - €)',
    dialCode: '+49',
    divisionType: 'Federal State (Bundesland)',
    divisions: [
      {
        name: 'Berlin',
        type: 'Federal State',
        cities: [
          { name: 'Mitte', lat: 52.5200, lng: 13.4050, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '10115' },
          { name: 'Friedrichshain-Kreuzberg', lat: 52.5000, lng: 13.4300, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '10243' },
          { name: 'Charlottenburg', lat: 52.5167, lng: 13.3000, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '10585' },
          { name: 'Prenzlauer Berg', lat: 52.5400, lng: 13.4200, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '10405' },
        ],
      },
      {
        name: 'Bavaria (Bayern)',
        type: 'Federal State',
        cities: [
          { name: 'Munich (München - Altstadt)', lat: 48.1351, lng: 11.5820, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '80331' },
          { name: 'Schwabing', lat: 48.1600, lng: 11.5800, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '80801' },
          { name: 'Nuremberg (Nürnberg)', lat: 49.4521, lng: 11.0767, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '90403' },
        ],
      },
      {
        name: 'Hesse (Hessen)',
        type: 'Federal State',
        cities: [
          { name: 'Frankfurt am Main (Innenstadt)', lat: 50.1109, lng: 8.6821, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '60311' },
          { name: 'Westend', lat: 50.1200, lng: 8.6600, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '60325' },
        ],
      },
      {
        name: 'Hamburg',
        type: 'Federal State',
        cities: [
          { name: 'Hamburg (HafenCity / Mitte)', lat: 53.5511, lng: 9.9937, timezone: 'Europe/Berlin', utcOffset: 'UTC+1', postalFormat: '20457' },
        ],
      },
    ],
  },
  {
    name: 'Greece',
    code: 'GR',
    code3: 'GRC',
    capital: 'Athens',
    currency: 'EUR (Euro - €)',
    dialCode: '+30',
    divisionType: 'Region (Perifereia)',
    divisions: [
      {
        name: 'Attica Region',
        type: 'Region',
        cities: [
          { name: 'Athens (Syntagma)', lat: 37.9755, lng: 23.7348, timezone: 'Europe/Athens', utcOffset: 'UTC+2', postalFormat: '105 57' },
          { name: 'Kolonaki', lat: 37.9780, lng: 23.7420, timezone: 'Europe/Athens', utcOffset: 'UTC+2', postalFormat: '106 73' },
          { name: 'Piraeus', lat: 37.9429, lng: 23.6469, timezone: 'Europe/Athens', utcOffset: 'UTC+2', postalFormat: '185 31' },
          { name: 'Glyfada', lat: 37.8631, lng: 23.7533, timezone: 'Europe/Athens', utcOffset: 'UTC+2', postalFormat: '166 75' },
        ],
      },
      {
        name: 'Central Macedonia',
        type: 'Region',
        cities: [
          { name: 'Thessaloniki', lat: 40.6401, lng: 22.9444, timezone: 'Europe/Athens', utcOffset: 'UTC+2', postalFormat: '546 21' },
        ],
      },
    ],
  },
  {
    name: 'Hungary',
    code: 'HU',
    code3: 'HUN',
    capital: 'Budapest',
    currency: 'HUF (Hungarian Forint - Ft)',
    dialCode: '+36',
    divisionType: 'County (Megye) / Capital City',
    divisions: [
      {
        name: 'Budapest Capital City',
        type: 'Capital City',
        cities: [
          { name: 'District V (Belváros-Lipótváros)', lat: 47.5000, lng: 19.0500, timezone: 'Europe/Budapest', utcOffset: 'UTC+1', postalFormat: '1051' },
          { name: 'District VII (Erzsébetváros)', lat: 47.5020, lng: 19.0700, timezone: 'Europe/Budapest', utcOffset: 'UTC+1', postalFormat: '1075' },
          { name: 'District I (Várkerület / Buda Castle)', lat: 47.4962, lng: 19.0399, timezone: 'Europe/Budapest', utcOffset: 'UTC+1', postalFormat: '1014' },
        ],
      },
      {
        name: 'Pest County',
        type: 'County',
        cities: [
          { name: 'Szentendre', lat: 47.6667, lng: 19.0833, timezone: 'Europe/Budapest', utcOffset: 'UTC+1', postalFormat: '2000' },
        ],
      },
    ],
  },
  {
    name: 'Iceland',
    code: 'IS',
    code3: 'ISL',
    capital: 'Reykjavik',
    currency: 'ISK (Icelandic Króna - kr)',
    dialCode: '+354',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Capital Region (Höfuðborgarsvæðið)',
        type: 'Region',
        cities: [
          { name: 'Reykjavik (Miðborg / Downtown)', lat: 64.1466, lng: -21.9426, timezone: 'Atlantic/Reykjavik', utcOffset: 'UTC+0', postalFormat: '101' },
          { name: 'Kópavogur', lat: 64.1114, lng: -21.9056, timezone: 'Atlantic/Reykjavik', utcOffset: 'UTC+0', postalFormat: '200' },
          { name: 'Hafnarfjörður', lat: 64.0671, lng: -21.9575, timezone: 'Atlantic/Reykjavik', utcOffset: 'UTC+0', postalFormat: '220' },
        ],
      },
    ],
  },
  {
    name: 'Ireland',
    code: 'IE',
    code3: 'IRL',
    capital: 'Dublin',
    currency: 'EUR (Euro - €)',
    dialCode: '+353',
    divisionType: 'County / Province',
    divisions: [
      {
        name: 'County Dublin',
        type: 'County',
        cities: [
          { name: 'Dublin 2 (Grafton St / Silicon Docks)', lat: 53.3382, lng: -6.2591, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'D02 X285' },
          { name: 'Dublin 4 (Ballsbridge)', lat: 53.3283, lng: -6.2300, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'D04 C889' },
          { name: 'Dublin 1 (O\'Connell St)', lat: 53.3509, lng: -6.2603, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'D01 F5P2' },
          { name: 'Sandyford Industrial Estate', lat: 53.2750, lng: -6.2160, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'D18 X3P9' },
        ],
      },
      {
        name: 'County Cork',
        type: 'County',
        cities: [
          { name: 'Cork City', lat: 51.8985, lng: -8.4756, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'T12 A3P8' },
        ],
      },
      {
        name: 'County Galway',
        type: 'County',
        cities: [
          { name: 'Galway City', lat: 53.2707, lng: -9.0568, timezone: 'Europe/Dublin', utcOffset: 'UTC+0', postalFormat: 'H91 V8P9' },
        ],
      },
    ],
  },
  {
    name: 'Italy',
    code: 'IT',
    code3: 'ITA',
    capital: 'Rome',
    currency: 'EUR (Euro - €)',
    dialCode: '+39',
    divisionType: 'Region (Regione)',
    divisions: [
      {
        name: 'Lazio (Rome)',
        type: 'Region',
        cities: [
          { name: 'Rome (Municipio I - Centro Storico)', lat: 41.9028, lng: 12.4964, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '00186' },
          { name: 'EUR District', lat: 41.8333, lng: 12.4667, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '00144' },
          { name: 'Trastevere', lat: 41.8880, lng: 12.4700, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '00153' },
        ],
      },
      {
        name: 'Lombardy (Milan)',
        type: 'Region',
        cities: [
          { name: 'Milan (Centro Storico / Duomo)', lat: 45.4642, lng: 9.1900, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '20121' },
          { name: 'Porta Nuova / Isola', lat: 45.4850, lng: 9.1920, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '20124' },
          { name: 'Brera', lat: 45.4719, lng: 9.1878, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '20121' },
        ],
      },
      {
        name: 'Tuscany (Toscana)',
        type: 'Region',
        cities: [
          { name: 'Florence (Firenze)', lat: 43.7696, lng: 11.2558, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '50122' },
        ],
      },
      {
        name: 'Veneto',
        type: 'Region',
        cities: [
          { name: 'Venice (Venezia)', lat: 45.4408, lng: 12.3155, timezone: 'Europe/Rome', utcOffset: 'UTC+1', postalFormat: '30124' },
        ],
      },
    ],
  },
  {
    name: 'Latvia',
    code: 'LV',
    code3: 'LVA',
    capital: 'Riga',
    currency: 'EUR (Euro - €)',
    dialCode: '+371',
    divisionType: 'State City / Municipality',
    divisions: [
      {
        name: 'Riga State City',
        type: 'State City',
        cities: [
          { name: 'Riga (Centrs)', lat: 56.9496, lng: 24.1052, timezone: 'Europe/Riga', utcOffset: 'UTC+2', postalFormat: 'LV-1050' },
          { name: 'Old Town Riga (Vecrīga)', lat: 56.9475, lng: 24.1064, timezone: 'Europe/Riga', utcOffset: 'UTC+2', postalFormat: 'LV-1050' },
          { name: 'Skanste', lat: 56.9700, lng: 24.1200, timezone: 'Europe/Riga', utcOffset: 'UTC+2', postalFormat: 'LV-1013' },
        ],
      },
      {
        name: 'Jūrmala State City',
        type: 'State City',
        cities: [
          { name: 'Jūrmala (Majori)', lat: 56.9714, lng: 23.7972, timezone: 'Europe/Riga', utcOffset: 'UTC+2', postalFormat: 'LV-2015' },
        ],
      },
    ],
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    code3: 'LIE',
    capital: 'Vaduz',
    currency: 'CHF (Swiss Franc - CHF)',
    dialCode: '+423',
    divisionType: 'Municipality (Gemeinde)',
    divisions: [
      {
        name: 'Vaduz Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Vaduz', lat: 47.1410, lng: 9.5209, timezone: 'Europe/Vaduz', utcOffset: 'UTC+1', postalFormat: '9490' },
        ],
      },
      {
        name: 'Schaan Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Schaan', lat: 47.1667, lng: 9.5167, timezone: 'Europe/Vaduz', utcOffset: 'UTC+1', postalFormat: '9494' },
        ],
      },
    ],
  },
  {
    name: 'Lithuania',
    code: 'LT',
    code3: 'LTU',
    capital: 'Vilnius',
    currency: 'EUR (Euro - €)',
    dialCode: '+370',
    divisionType: 'County (Apskritis) / City Municipality',
    divisions: [
      {
        name: 'Vilnius City Municipality',
        type: 'City Municipality',
        cities: [
          { name: 'Vilnius (Senamiestis / Old Town)', lat: 54.6872, lng: 25.2797, timezone: 'Europe/Vilnius', utcOffset: 'UTC+2', postalFormat: 'LT-01100' },
          { name: 'Šnipiškės (CBD)', lat: 54.7000, lng: 25.2800, timezone: 'Europe/Vilnius', utcOffset: 'UTC+2', postalFormat: 'LT-09300' },
          { name: 'Užupis', lat: 54.6800, lng: 25.2950, timezone: 'Europe/Vilnius', utcOffset: 'UTC+2', postalFormat: 'LT-01200' },
        ],
      },
      {
        name: 'Kaunas City Municipality',
        type: 'City Municipality',
        cities: [
          { name: 'Kaunas', lat: 54.8985, lng: 23.9036, timezone: 'Europe/Vilnius', utcOffset: 'UTC+2', postalFormat: 'LT-44249' },
        ],
      },
    ],
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    code3: 'LUX',
    capital: 'Luxembourg City',
    currency: 'EUR (Euro - €)',
    dialCode: '+352',
    divisionType: 'Canton',
    divisions: [
      {
        name: 'Canton of Luxembourg',
        type: 'Canton',
        cities: [
          { name: 'Luxembourg City (Ville-Haute)', lat: 49.6116, lng: 6.1319, timezone: 'Europe/Luxembourg', utcOffset: 'UTC+1', postalFormat: 'L-1111' },
          { name: 'Kirchberg (Financial Center)', lat: 49.6250, lng: 6.1550, timezone: 'Europe/Luxembourg', utcOffset: 'UTC+1', postalFormat: 'L-1855' },
          { name: 'Gare District', lat: 49.6000, lng: 6.1330, timezone: 'Europe/Luxembourg', utcOffset: 'UTC+1', postalFormat: 'L-1616' },
        ],
      },
      {
        name: 'Canton of Esch-sur-Alzette',
        type: 'Canton',
        cities: [
          { name: 'Esch-sur-Alzette (Belval)', lat: 49.4958, lng: 5.9806, timezone: 'Europe/Luxembourg', utcOffset: 'UTC+1', postalFormat: 'L-4002' },
        ],
      },
    ],
  },
  {
    name: 'Malta',
    code: 'MT',
    code3: 'MLT',
    capital: 'Valletta',
    currency: 'EUR (Euro - €)',
    dialCode: '+356',
    divisionType: 'Region / Local Council',
    divisions: [
      {
        name: 'Southern Harbour Region',
        type: 'Region',
        cities: [
          { name: 'Valletta', lat: 35.8989, lng: 14.5146, timezone: 'Europe/Malta', utcOffset: 'UTC+1', postalFormat: 'VLT 1115' },
          { name: 'Floriana', lat: 35.8933, lng: 14.5056, timezone: 'Europe/Malta', utcOffset: 'UTC+1', postalFormat: 'FRN 1010' },
        ],
      },
      {
        name: 'Northern Harbour Region',
        type: 'Region',
        cities: [
          { name: 'Sliema', lat: 35.9122, lng: 14.5042, timezone: 'Europe/Malta', utcOffset: 'UTC+1', postalFormat: 'SLM 1540' },
          { name: "St Julian's (San Ġiljan)", lat: 35.9186, lng: 14.4900, timezone: 'Europe/Malta', utcOffset: 'UTC+1', postalFormat: 'STJ 1000' },
        ],
      },
    ],
  },
  {
    name: 'Moldova',
    code: 'MD',
    code3: 'MDA',
    capital: 'Chisinau',
    currency: 'MDL (Moldovan Leu - L)',
    dialCode: '+373',
    divisionType: 'Municipality / District',
    divisions: [
      {
        name: 'Chișinău Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Chișinău (Centru)', lat: 47.0105, lng: 28.8638, timezone: 'Europe/Chisinau', utcOffset: 'UTC+2', postalFormat: 'MD-2012' },
          { name: 'Rîșcani', lat: 47.0400, lng: 28.8500, timezone: 'Europe/Chisinau', utcOffset: 'UTC+2', postalFormat: 'MD-2068' },
        ],
      },
      {
        name: 'Bălți Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Bălți', lat: 47.7617, lng: 27.9289, timezone: 'Europe/Chisinau', utcOffset: 'UTC+2', postalFormat: 'MD-3100' },
        ],
      },
    ],
  },
  {
    name: 'Monaco',
    code: 'MC',
    code3: 'MCO',
    capital: 'Monaco',
    currency: 'EUR (Euro - €)',
    dialCode: '+377',
    divisionType: 'Ward / Quarter',
    divisions: [
      {
        name: 'Principality of Monaco',
        type: 'Ward',
        cities: [
          { name: 'Monte Carlo (Casino / Carré d\'Or)', lat: 43.7384, lng: 7.4246, timezone: 'Europe/Monaco', utcOffset: 'UTC+1', postalFormat: '98000' },
          { name: 'La Condamine (Port Hercules)', lat: 43.7347, lng: 7.4200, timezone: 'Europe/Monaco', utcOffset: 'UTC+1', postalFormat: '98000' },
          { name: 'Fontvieille', lat: 43.7290, lng: 7.4160, timezone: 'Europe/Monaco', utcOffset: 'UTC+1', postalFormat: '98000' },
          { name: 'Monaco-Ville (Le Rocher)', lat: 43.7310, lng: 7.4230, timezone: 'Europe/Monaco', utcOffset: 'UTC+1', postalFormat: '98000' },
        ],
      },
    ],
  },
  {
    name: 'Montenegro',
    code: 'ME',
    code3: 'MNE',
    capital: 'Podgorica',
    currency: 'EUR (Euro - €)',
    dialCode: '+382',
    divisionType: 'Municipality (Opština)',
    divisions: [
      {
        name: 'Podgorica Capital Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Podgorica (Centar)', lat: 42.4304, lng: 19.2594, timezone: 'Europe/Podgorica', utcOffset: 'UTC+1', postalFormat: '81000' },
          { name: 'Preko Morače', lat: 42.4400, lng: 19.2450, timezone: 'Europe/Podgorica', utcOffset: 'UTC+1', postalFormat: '81000' },
        ],
      },
      {
        name: 'Kotor Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Kotor', lat: 42.4247, lng: 18.7712, timezone: 'Europe/Podgorica', utcOffset: 'UTC+1', postalFormat: '85330' },
        ],
      },
      {
        name: 'Budva Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Budva', lat: 42.2864, lng: 18.8400, timezone: 'Europe/Podgorica', utcOffset: 'UTC+1', postalFormat: '85310' },
        ],
      },
    ],
  },
  {
    name: 'Netherlands',
    code: 'NL',
    code3: 'NLD',
    capital: 'Amsterdam',
    currency: 'EUR (Euro - €)',
    dialCode: '+31',
    divisionType: 'Province (Provincie)',
    divisions: [
      {
        name: 'North Holland (Noord-Holland)',
        type: 'Province',
        cities: [
          { name: 'Amsterdam (Centrum / Grachtengordel)', lat: 52.3676, lng: 4.9041, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '1012 JS' },
          { name: 'Amsterdam-Zuid (Zuidas Business District)', lat: 52.3380, lng: 4.8730, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '1082 MD' },
          { name: 'De Pijp', lat: 52.3550, lng: 4.8950, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '1072 SK' },
          { name: 'Haarlem', lat: 52.3874, lng: 4.6462, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '2011 RD' },
        ],
      },
      {
        name: 'South Holland (Zuid-Holland)',
        type: 'Province',
        cities: [
          { name: 'Rotterdam (Centrum / Kop van Zuid)', lat: 51.9244, lng: 4.4777, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '3011 AA' },
          { name: 'The Hague (Den Haag / Binnenhof)', lat: 52.0705, lng: 4.3007, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '2511 CV' },
          { name: 'Delft', lat: 52.0116, lng: 4.3571, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '2611 GS' },
        ],
      },
      {
        name: 'Utrecht',
        type: 'Province',
        cities: [
          { name: 'Utrecht City', lat: 52.0907, lng: 5.1214, timezone: 'Europe/Amsterdam', utcOffset: 'UTC+1', postalFormat: '3511 VA' },
        ],
      },
    ],
  },
  {
    name: 'North Macedonia',
    code: 'MK',
    code3: 'MKD',
    capital: 'Skopje',
    currency: 'MKD (Macedonian Denar - ден)',
    dialCode: '+389',
    divisionType: 'Statistical Region / Municipality',
    divisions: [
      {
        name: 'Skopje Statistical Region',
        type: 'Statistical Region',
        cities: [
          { name: 'Skopje (Centar)', lat: 41.9981, lng: 21.4254, timezone: 'Europe/Skopje', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'Karpoš', lat: 42.0000, lng: 21.3900, timezone: 'Europe/Skopje', utcOffset: 'UTC+1', postalFormat: '1000' },
        ],
      },
      {
        name: 'Southwestern Region',
        type: 'Statistical Region',
        cities: [
          { name: 'Ohrid', lat: 41.1172, lng: 20.8019, timezone: 'Europe/Skopje', utcOffset: 'UTC+1', postalFormat: '6000' },
        ],
      },
    ],
  },
  {
    name: 'Norway',
    code: 'NO',
    code3: 'NOR',
    capital: 'Oslo',
    currency: 'NOK (Norwegian Krone - kr)',
    dialCode: '+47',
    divisionType: 'County (Fylke)',
    divisions: [
      {
        name: 'Oslo County',
        type: 'County',
        cities: [
          { name: 'Oslo (Sentrum)', lat: 59.9139, lng: 10.7522, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '0150' },
          { name: 'Frogner (Aker Brygge)', lat: 59.9100, lng: 10.7250, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '0250' },
          { name: 'Grünerløkka', lat: 59.9240, lng: 10.7580, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '0552' },
          { name: 'Majorstuen', lat: 59.9300, lng: 10.7150, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '0360' },
        ],
      },
      {
        name: 'Vestland',
        type: 'County',
        cities: [
          { name: 'Bergen (Bryggen)', lat: 60.3913, lng: 5.3221, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '5003' },
        ],
      },
      {
        name: 'Rogaland',
        type: 'County',
        cities: [
          { name: 'Stavanger', lat: 58.9690, lng: 5.7331, timezone: 'Europe/Oslo', utcOffset: 'UTC+1', postalFormat: '4005' },
        ],
      },
    ],
  },
  {
    name: 'Poland',
    code: 'PL',
    code3: 'POL',
    capital: 'Warsaw',
    currency: 'PLN (Polish Złoty - zł)',
    dialCode: '+48',
    divisionType: 'Voivodeship (Województwo)',
    divisions: [
      {
        name: 'Masovian Voivodeship (Mazowieckie)',
        type: 'Voivodeship',
        cities: [
          { name: 'Warsaw (Śródmieście / City Center)', lat: 52.2297, lng: 21.0122, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '00-001' },
          { name: 'Mokotów', lat: 52.1939, lng: 21.0347, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '02-511' },
          { name: 'Wola (CBD / Warsaw Spire)', lat: 52.2383, lng: 20.9850, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '01-208' },
        ],
      },
      {
        name: 'Lesser Poland (Małopolskie)',
        type: 'Voivodeship',
        cities: [
          { name: 'Kraków (Stare Miasto)', lat: 50.0647, lng: 19.9450, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '31-042' },
          { name: 'Kazimierz', lat: 50.0520, lng: 19.9450, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '31-062' },
        ],
      },
      {
        name: 'Lower Silesia (Dolnośląskie)',
        type: 'Voivodeship',
        cities: [
          { name: 'Wrocław', lat: 51.1079, lng: 17.0385, timezone: 'Europe/Warsaw', utcOffset: 'UTC+1', postalFormat: '50-106' },
        ],
      },
    ],
  },
  {
    name: 'Portugal',
    code: 'PT',
    code3: 'PRT',
    capital: 'Lisbon',
    currency: 'EUR (Euro - €)',
    dialCode: '+351',
    divisionType: 'District / Autonomous Region',
    divisions: [
      {
        name: 'Lisbon District (Distrito de Lisboa)',
        type: 'District',
        cities: [
          { name: 'Lisbon (Baixa / Chiado)', lat: 38.7118, lng: -9.1388, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '1100-048' },
          { name: 'Parque das Nações (Expo)', lat: 38.7680, lng: -9.0940, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '1990-096' },
          { name: 'Cascais', lat: 38.6979, lng: -9.4215, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '2750-318' },
          { name: 'Sintra', lat: 38.8029, lng: -9.3817, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '2710-580' },
        ],
      },
      {
        name: 'Porto District (Distrito do Porto)',
        type: 'District',
        cities: [
          { name: 'Porto (Cedofeita / Ribeira)', lat: 41.1579, lng: -8.6291, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '4050-001' },
          { name: 'Vila Nova de Gaia', lat: 41.1239, lng: -8.6118, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '4400-001' },
        ],
      },
      {
        name: 'Faro District (Algarve)',
        type: 'District',
        cities: [
          { name: 'Faro', lat: 37.0194, lng: -7.9304, timezone: 'Europe/Lisbon', utcOffset: 'UTC+0', postalFormat: '8000-150' },
        ],
      },
    ],
  },
  {
    name: 'Romania',
    code: 'RO',
    code3: 'ROU',
    capital: 'Bucharest',
    currency: 'RON (Romanian Leu - lei)',
    dialCode: '+40',
    divisionType: 'County (Județ) / Municipality',
    divisions: [
      {
        name: 'Bucharest Municipality (București)',
        type: 'Municipality',
        cities: [
          { name: 'Sector 1 (Floreasca / Dorobanți)', lat: 44.4600, lng: 26.0900, timezone: 'Europe/Bucharest', utcOffset: 'UTC+2', postalFormat: '011701' },
          { name: 'Sector 3 (Centrul Vechi / Unirii)', lat: 44.4250, lng: 26.1150, timezone: 'Europe/Bucharest', utcOffset: 'UTC+2', postalFormat: '030167' },
          { name: 'Sector 2 (Pipera Business Area)', lat: 44.4800, lng: 26.1200, timezone: 'Europe/Bucharest', utcOffset: 'UTC+2', postalFormat: '020331' },
        ],
      },
      {
        name: 'Cluj County',
        type: 'County',
        cities: [
          { name: 'Cluj-Napoca (Center)', lat: 46.7712, lng: 23.6236, timezone: 'Europe/Bucharest', utcOffset: 'UTC+2', postalFormat: '400001' },
        ],
      },
      {
        name: 'Timiș County',
        type: 'County',
        cities: [
          { name: 'Timișoara', lat: 45.7537, lng: 21.2257, timezone: 'Europe/Bucharest', utcOffset: 'UTC+2', postalFormat: '300001' },
        ],
      },
    ],
  },
  {
    name: 'Russia',
    code: 'RU',
    code3: 'RUS',
    capital: 'Moscow',
    currency: 'RUB (Russian Ruble - ₽)',
    dialCode: '+7',
    divisionType: 'Federal Subject / Federal City',
    divisions: [
      {
        name: 'Moscow Federal City',
        type: 'Federal City',
        cities: [
          { name: 'Central Administrative Okrug (Tverskoy)', lat: 55.7558, lng: 37.6173, timezone: 'Europe/Moscow', utcOffset: 'UTC+3', postalFormat: '125009' },
          { name: 'Moscow International Business Center (Moscow-City)', lat: 55.7494, lng: 37.5375, timezone: 'Europe/Moscow', utcOffset: 'UTC+3', postalFormat: '123112' },
          { name: 'Arbat District', lat: 55.7500, lng: 37.5900, timezone: 'Europe/Moscow', utcOffset: 'UTC+3', postalFormat: '119002' },
        ],
      },
      {
        name: 'Saint Petersburg Federal City',
        type: 'Federal City',
        cities: [
          { name: 'Tsentralny District (Nevsky Prospekt)', lat: 59.9343, lng: 30.3351, timezone: 'Europe/Moscow', utcOffset: 'UTC+3', postalFormat: '191186' },
          { name: 'Petrogradsky District', lat: 59.9600, lng: 30.3000, timezone: 'Europe/Moscow', utcOffset: 'UTC+3', postalFormat: '197101' },
        ],
      },
    ],
  },
  {
    name: 'San Marino',
    code: 'SM',
    code3: 'SMR',
    capital: 'City of San Marino',
    currency: 'EUR (Euro - €)',
    dialCode: '+378',
    divisionType: 'Municipality (Castello)',
    divisions: [
      {
        name: 'City of San Marino Castello',
        type: 'Castello',
        cities: [
          { name: 'San Marino Historic Center', lat: 43.9333, lng: 12.4500, timezone: 'Europe/San_Marino', utcOffset: 'UTC+1', postalFormat: '47890' },
        ],
      },
      {
        name: 'Serravalle Castello',
        type: 'Castello',
        cities: [
          { name: 'Dogana', lat: 43.9780, lng: 12.4900, timezone: 'Europe/San_Marino', utcOffset: 'UTC+1', postalFormat: '47891' },
        ],
      },
    ],
  },
  {
    name: 'Serbia',
    code: 'RS',
    code3: 'SRB',
    capital: 'Belgrade',
    currency: 'RSD (Serbian Dinar - дин.)',
    dialCode: '+381',
    divisionType: 'District / Capital City',
    divisions: [
      {
        name: 'City of Belgrade',
        type: 'Capital City',
        cities: [
          { name: 'Belgrade (Stari Grad / Knez Mihailova)', lat: 44.8186, lng: 20.4578, timezone: 'Europe/Belgrade', utcOffset: 'UTC+1', postalFormat: '11000' },
          { name: 'New Belgrade (Novi Beograd)', lat: 44.8200, lng: 20.4100, timezone: 'Europe/Belgrade', utcOffset: 'UTC+1', postalFormat: '11070' },
          { name: 'Vračar', lat: 44.7950, lng: 20.4700, timezone: 'Europe/Belgrade', utcOffset: 'UTC+1', postalFormat: '11000' },
        ],
      },
      {
        name: 'South Bačka District',
        type: 'District',
        cities: [
          { name: 'Novi Sad', lat: 45.2671, lng: 19.8335, timezone: 'Europe/Belgrade', utcOffset: 'UTC+1', postalFormat: '21000' },
        ],
      },
    ],
  },
  {
    name: 'Slovakia',
    code: 'SK',
    code3: 'SVK',
    capital: 'Bratislava',
    currency: 'EUR (Euro - €)',
    dialCode: '+421',
    divisionType: 'Region (Kraj)',
    divisions: [
      {
        name: 'Bratislava Region',
        type: 'Region',
        cities: [
          { name: 'Bratislava (Staré Mesto)', lat: 48.1486, lng: 17.1077, timezone: 'Europe/Bratislava', utcOffset: 'UTC+1', postalFormat: '811 01' },
          { name: 'Ružinov (Business District)', lat: 48.1550, lng: 17.1550, timezone: 'Europe/Bratislava', utcOffset: 'UTC+1', postalFormat: '821 01' },
          { name: 'Petržalka', lat: 48.1200, lng: 17.1100, timezone: 'Europe/Bratislava', utcOffset: 'UTC+1', postalFormat: '851 01' },
        ],
      },
      {
        name: 'Košice Region',
        type: 'Region',
        cities: [
          { name: 'Košice', lat: 48.7164, lng: 21.2611, timezone: 'Europe/Bratislava', utcOffset: 'UTC+1', postalFormat: '040 01' },
        ],
      },
    ],
  },
  {
    name: 'Slovenia',
    code: 'SI',
    code3: 'SVN',
    capital: 'Ljubljana',
    currency: 'EUR (Euro - €)',
    dialCode: '+386',
    divisionType: 'Statistical Region / Municipality',
    divisions: [
      {
        name: 'Central Slovenia (Osrednjeslovenska)',
        type: 'Statistical Region',
        cities: [
          { name: 'Ljubljana (Center)', lat: 46.0569, lng: 14.5058, timezone: 'Europe/Ljubljana', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'Bežigrad', lat: 46.0700, lng: 14.5150, timezone: 'Europe/Ljubljana', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'BTC City Ljubljana', lat: 46.0650, lng: 14.5450, timezone: 'Europe/Ljubljana', utcOffset: 'UTC+1', postalFormat: '1000' },
        ],
      },
      {
        name: 'Drava Region (Podravska)',
        type: 'Statistical Region',
        cities: [
          { name: 'Maribor', lat: 46.5547, lng: 15.6459, timezone: 'Europe/Ljubljana', utcOffset: 'UTC+1', postalFormat: '2000' },
        ],
      },
    ],
  },
  {
    name: 'Spain',
    code: 'ES',
    code3: 'ESP',
    capital: 'Madrid',
    currency: 'EUR (Euro - €)',
    dialCode: '+34',
    divisionType: 'Autonomous Community (Comunidad Autónoma)',
    divisions: [
      {
        name: 'Community of Madrid',
        type: 'Autonomous Community',
        cities: [
          { name: 'Madrid (Centro / Gran Vía)', lat: 40.4200, lng: -3.7050, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '28013' },
          { name: 'Salamanca District (Serrano)', lat: 40.4280, lng: -3.6840, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '28001' },
          { name: 'Chamberí', lat: 40.4350, lng: -3.7000, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '28010' },
          { name: 'AZCA / Cuatro Torres (CBD)', lat: 40.4780, lng: -3.6870, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '28046' },
        ],
      },
      {
        name: 'Catalonia (Catalunya)',
        type: 'Autonomous Community',
        cities: [
          { name: 'Barcelona (Eixample)', lat: 41.3887, lng: 2.1589, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '08007' },
          { name: 'Poblenou (22@ Tech District)', lat: 41.4000, lng: 2.2000, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '08005' },
          { name: 'Gràcia', lat: 41.4030, lng: 2.1560, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '08012' },
        ],
      },
      {
        name: 'Valencian Community',
        type: 'Autonomous Community',
        cities: [
          { name: 'Valencia (Ciutat Vella)', lat: 39.4699, lng: -0.3763, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '46001' },
          { name: 'Alicante', lat: 38.3452, lng: -0.4810, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '03001' },
        ],
      },
      {
        name: 'Andalusia (Andalucía)',
        type: 'Autonomous Community',
        cities: [
          { name: 'Seville (Sevilla)', lat: 37.3891, lng: -5.9845, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '41001' },
          { name: 'Málaga', lat: 36.7213, lng: -4.4214, timezone: 'Europe/Madrid', utcOffset: 'UTC+1', postalFormat: '29001' },
        ],
      },
    ],
  },
  {
    name: 'Sweden',
    code: 'SE',
    code3: 'SWE',
    capital: 'Stockholm',
    currency: 'SEK (Swedish Krona - kr)',
    dialCode: '+46',
    divisionType: 'County (Län)',
    divisions: [
      {
        name: 'Stockholm County',
        type: 'County',
        cities: [
          { name: 'Stockholm (Norrmalm / City)', lat: 59.3326, lng: 18.0649, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '111 20' },
          { name: 'Östermalm', lat: 59.3390, lng: 18.0830, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '114 39' },
          { name: 'Södermalm', lat: 59.3150, lng: 18.0700, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '118 46' },
          { name: 'Kista (Tech Hub)', lat: 59.4030, lng: 17.9440, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '164 40' },
        ],
      },
      {
        name: 'Västra Götaland County',
        type: 'County',
        cities: [
          { name: 'Gothenburg (Göteborg)', lat: 57.7089, lng: 11.9746, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '411 05' },
        ],
      },
      {
        name: 'Skåne County',
        type: 'County',
        cities: [
          { name: 'Malmö', lat: 55.6050, lng: 13.0038, timezone: 'Europe/Stockholm', utcOffset: 'UTC+1', postalFormat: '211 20' },
        ],
      },
    ],
  },
  {
    name: 'Switzerland',
    code: 'CH',
    code3: 'CHE',
    capital: 'Bern',
    currency: 'CHF (Swiss Franc - CHF)',
    dialCode: '+41',
    divisionType: 'Canton',
    divisions: [
      {
        name: 'Canton of Zurich (Zürich)',
        type: 'Canton',
        cities: [
          { name: 'Zurich (Altstadt / Bahnhofstrasse)', lat: 47.3769, lng: 8.5417, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '8001' },
          { name: 'Zurich West (Kreis 5)', lat: 47.3880, lng: 8.5200, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '8005' },
          { name: 'Enge (Kreis 2)', lat: 47.3600, lng: 8.5300, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '8002' },
        ],
      },
      {
        name: 'Canton of Geneva (Genève)',
        type: 'Canton',
        cities: [
          { name: 'Geneva (Cité / Rues-Basses)', lat: 46.2044, lng: 6.1432, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '1204' },
          { name: 'Eaux-Vives', lat: 46.2050, lng: 6.1600, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '1207' },
        ],
      },
      {
        name: 'Canton of Basel-Stadt',
        type: 'Canton',
        cities: [
          { name: 'Basel (Grossbasel)', lat: 47.5596, lng: 7.5886, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '4051' },
        ],
      },
      {
        name: 'Canton of Bern',
        type: 'Canton',
        cities: [
          { name: 'Bern (Innere Stadt)', lat: 46.9480, lng: 7.4474, timezone: 'Europe/Zurich', utcOffset: 'UTC+1', postalFormat: '3011' },
        ],
      },
    ],
  },
  {
    name: 'Ukraine',
    code: 'UA',
    code3: 'UKR',
    capital: 'Kyiv',
    currency: 'UAH (Ukrainian Hryvnia - ₴)',
    dialCode: '+380',
    divisionType: 'Oblast / City with Special Status',
    divisions: [
      {
        name: 'Kyiv Special Status City',
        type: 'Special Status City',
        cities: [
          { name: 'Shevchenkivskyi District (Khreshchatyk)', lat: 50.4501, lng: 30.5234, timezone: 'Europe/Kyiv', utcOffset: 'UTC+2', postalFormat: '01001' },
          { name: 'Pecherskyi District', lat: 50.4350, lng: 30.5500, timezone: 'Europe/Kyiv', utcOffset: 'UTC+2', postalFormat: '01010' },
          { name: 'Podilskyi District', lat: 50.4680, lng: 30.5150, timezone: 'Europe/Kyiv', utcOffset: 'UTC+2', postalFormat: '04070' },
        ],
      },
      {
        name: 'Lviv Oblast',
        type: 'Oblast',
        cities: [
          { name: 'Lviv (Halytskyi District)', lat: 49.8397, lng: 24.0297, timezone: 'Europe/Kyiv', utcOffset: 'UTC+2', postalFormat: '79000' },
        ],
      },
      {
        name: 'Odesa Oblast',
        type: 'Oblast',
        cities: [
          { name: 'Odesa', lat: 46.4825, lng: 30.7233, timezone: 'Europe/Kyiv', utcOffset: 'UTC+2', postalFormat: '65000' },
        ],
      },
    ],
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    code3: 'GBR',
    capital: 'London',
    currency: 'GBP (British Pound - £)',
    dialCode: '+44',
    divisionType: 'Nation / Region',
    divisions: [
      {
        name: 'Greater London (England)',
        type: 'Region',
        cities: [
          { name: 'City of London', lat: 51.5128, lng: -0.0918, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'EC2V 6HD' },
          { name: 'City of Westminster (Mayfair)', lat: 51.5090, lng: -0.1478, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'W1J 7BN' },
          { name: 'Camden', lat: 51.5420, lng: -0.1420, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'NW1 8NH' },
          { name: 'Islington', lat: 51.5465, lng: -0.1058, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'N1 2XH' },
          { name: 'Canary Wharf (Tower Hamlets)', lat: 51.5054, lng: -0.0235, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'E14 5AB' },
          { name: 'Kensington and Chelsea', lat: 51.4988, lng: -0.1749, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'SW7 2AZ' },
        ],
      },
      {
        name: 'Greater Manchester (England)',
        type: 'County',
        cities: [
          { name: 'Manchester (City Centre)', lat: 53.4808, lng: -2.2426, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'M1 1AD' },
          { name: 'Salford (MediaCityUK)', lat: 53.4722, lng: -2.2989, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'M50 2EQ' },
          { name: 'Didsbury', lat: 53.4167, lng: -2.2333, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'M20 2RN' },
        ],
      },
      {
        name: 'West Midlands (England)',
        type: 'County',
        cities: [
          { name: 'Birmingham (Colmore Business District)', lat: 52.4862, lng: -1.8904, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'B3 2AA' },
          { name: 'Coventry', lat: 52.4068, lng: -1.5197, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'CV1 1FS' },
        ],
      },
      {
        name: 'Scotland',
        type: 'Nation',
        cities: [
          { name: 'Edinburgh (New Town)', lat: 55.9533, lng: -3.1883, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'EH2 2DF' },
          { name: 'Glasgow (Merchant City)', lat: 55.8642, lng: -4.2518, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'G1 1LE' },
        ],
      },
      {
        name: 'Wales',
        type: 'Nation',
        cities: [
          { name: 'Cardiff (Cardiff Bay)', lat: 51.4816, lng: -3.1791, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'CF10 4PZ' },
        ],
      },
      {
        name: 'Northern Ireland',
        type: 'Nation',
        cities: [
          { name: 'Belfast (Cathedral Quarter)', lat: 54.5973, lng: -5.9301, timezone: 'Europe/London', utcOffset: 'UTC+0', postalFormat: 'BT1 2JD' },
        ],
      },
    ],
  },
  {
    name: 'Vatican City',
    code: 'VA',
    code3: 'VAT',
    capital: 'Vatican City',
    currency: 'EUR (Euro - €)',
    dialCode: '+379',
    divisionType: 'City-State Territory',
    divisions: [
      {
        name: 'Holy See State Territory',
        type: 'Territory',
        cities: [
          { name: "St. Peter's Square & Basilica", lat: 41.9029, lng: 12.4534, timezone: 'Europe/Vatican', utcOffset: 'UTC+1', postalFormat: '00120' },
          { name: 'Vatican Gardens', lat: 41.9038, lng: 12.4490, timezone: 'Europe/Vatican', utcOffset: 'UTC+1', postalFormat: '00120' },
        ],
      },
    ],
  },
];
