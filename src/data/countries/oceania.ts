import { CountryData } from './types';

/**
 * Complete Oceania Dataset — 14 Countries
 */
export const OCEANIA_COUNTRIES: CountryData[] = [
  {
    name: 'Australia',
    code: 'AU',
    code3: 'AUS',
    capital: 'Canberra',
    currency: 'AUD (Australian Dollar - $)',
    dialCode: '+61',
    divisionType: 'State / Territory',
    divisions: [
      {
        name: 'New South Wales (NSW)',
        type: 'State',
        cities: [
          { name: 'Sydney (CBD / Martin Place / Barangaroo)', lat: -33.8688, lng: 151.2093, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2000' },
          { name: 'Surry Hills (Tech Hub)', lat: -33.8860, lng: 151.2120, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2010' },
          { name: 'North Sydney', lat: -33.8390, lng: 151.2070, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2060' },
          { name: 'Parramatta (Western Sydney CBD)', lat: -33.8150, lng: 151.0011, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2150' },
          { name: 'Bondi Beach', lat: -33.8915, lng: 151.2767, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2026' },
        ],
      },
      {
        name: 'Victoria (VIC)',
        type: 'State',
        cities: [
          { name: 'Melbourne (CBD / Collins Street)', lat: -37.8136, lng: 144.9631, timezone: 'Australia/Melbourne', utcOffset: 'UTC+10', postalFormat: '3000' },
          { name: 'Southbank', lat: -37.8250, lng: 144.9620, timezone: 'Australia/Melbourne', utcOffset: 'UTC+10', postalFormat: '3006' },
          { name: 'Richmond / Cremorne (Tech Silicon Yarra)', lat: -37.8280, lng: 144.9950, timezone: 'Australia/Melbourne', utcOffset: 'UTC+10', postalFormat: '3121' },
          { name: 'Carlton / Fitzroy', lat: -37.8000, lng: 144.9750, timezone: 'Australia/Melbourne', utcOffset: 'UTC+10', postalFormat: '3053' },
        ],
      },
      {
        name: 'Queensland (QLD)',
        type: 'State',
        cities: [
          { name: 'Brisbane (CBD / Queen St)', lat: -27.4698, lng: 153.0251, timezone: 'Australia/Brisbane', utcOffset: 'UTC+10', postalFormat: '4000' },
          { name: 'Fortitude Valley', lat: -27.4570, lng: 153.0360, timezone: 'Australia/Brisbane', utcOffset: 'UTC+10', postalFormat: '4006' },
          { name: 'Gold Coast (Surfers Paradise)', lat: -28.0003, lng: 153.4309, timezone: 'Australia/Brisbane', utcOffset: 'UTC+10', postalFormat: '4217' },
        ],
      },
      {
        name: 'Western Australia (WA)',
        type: 'State',
        cities: [
          { name: 'Perth (CBD / St Georges Terrace)', lat: -31.9505, lng: 115.8605, timezone: 'Australia/Perth', utcOffset: 'UTC+8', postalFormat: '6000' },
        ],
      },
      {
        name: 'Australian Capital Territory (ACT)',
        type: 'Territory',
        cities: [
          { name: 'Canberra (Civic / Parliamentary Triangle)', lat: -35.2809, lng: 149.1300, timezone: 'Australia/Sydney', utcOffset: 'UTC+10', postalFormat: '2601' },
        ],
      },
    ],
  },
  {
    name: 'Fiji',
    code: 'FJ',
    code3: 'FJI',
    capital: 'Suva',
    currency: 'FJD (Fijian Dollar - FJ$)',
    dialCode: '+679',
    divisionType: 'Division / Province',
    divisions: [
      {
        name: 'Central Division',
        type: 'Division',
        cities: [
          { name: 'Suva (Victoria Parade / Downtown)', lat: -18.1416, lng: 178.4419, timezone: 'Pacific/Fiji', utcOffset: 'UTC+12', postalFormat: '0000' },
          { name: 'Suva (Domain)', lat: -18.1500, lng: 178.4350, timezone: 'Pacific/Fiji', utcOffset: 'UTC+12', postalFormat: '0000' },
        ],
      },
      {
        name: 'Western Division',
        type: 'Division',
        cities: [
          { name: 'Nadi (Airport / Denarau Island)', lat: -17.7765, lng: 177.4167, timezone: 'Pacific/Fiji', utcOffset: 'UTC+12', postalFormat: '0000' },
          { name: 'Lautoka', lat: -17.6242, lng: 177.4528, timezone: 'Pacific/Fiji', utcOffset: 'UTC+12', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Kiribati',
    code: 'KI',
    code3: 'KIR',
    capital: 'South Tarawa',
    currency: 'AUD (Australian Dollar - $)',
    dialCode: '+686',
    divisionType: 'Island Group / District',
    divisions: [
      {
        name: 'Gilbert Islands (South Tarawa)',
        type: 'Island District',
        cities: [
          { name: 'Bairiki (Government Hub)', lat: 1.3292, lng: 172.9772, timezone: 'Pacific/Tarawa', utcOffset: 'UTC+12', postalFormat: '0000' },
          { name: 'Betio', lat: 1.3590, lng: 172.9230, timezone: 'Pacific/Tarawa', utcOffset: 'UTC+12', postalFormat: '0000' },
          { name: 'Bikenibeu', lat: 1.3650, lng: 173.1250, timezone: 'Pacific/Tarawa', utcOffset: 'UTC+12', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    code3: 'MHL',
    capital: 'Majuro',
    currency: 'USD (US Dollar - $)',
    dialCode: '+692',
    divisionType: 'Atoll / Municipality',
    divisions: [
      {
        name: 'Majuro Atoll',
        type: 'Municipality',
        cities: [
          { name: 'Delap-Uliga-Djarrit (Downtown Majuro)', lat: 7.1167, lng: 171.3667, timezone: 'Pacific/Majuro', utcOffset: 'UTC+12', postalFormat: '96960' },
          { name: 'Laura', lat: 7.1350, lng: 171.0450, timezone: 'Pacific/Majuro', utcOffset: 'UTC+12', postalFormat: '96960' },
        ],
      },
      {
        name: 'Kwajalein Atoll',
        type: 'Municipality',
        cities: [
          { name: 'Ebeye Island', lat: 8.7833, lng: 167.7333, timezone: 'Pacific/Kwajalein', utcOffset: 'UTC+12', postalFormat: '96970' },
        ],
      },
    ],
  },
  {
    name: 'Micronesia',
    code: 'FM',
    code3: 'FSM',
    capital: 'Palikir',
    currency: 'USD (US Dollar - $)',
    dialCode: '+691',
    divisionType: 'State',
    divisions: [
      {
        name: 'Pohnpei State',
        type: 'State',
        cities: [
          { name: 'Palikir (Federal Capital)', lat: 6.9178, lng: 158.1589, timezone: 'Pacific/Pohnpei', utcOffset: 'UTC+11', postalFormat: '96941' },
          { name: 'Kolonia (Commercial Center)', lat: 6.9644, lng: 158.2064, timezone: 'Pacific/Pohnpei', utcOffset: 'UTC+11', postalFormat: '96941' },
        ],
      },
      {
        name: 'Chuuk State',
        type: 'State',
        cities: [
          { name: 'Weno', lat: 7.4467, lng: 151.8467, timezone: 'Pacific/Chuuk', utcOffset: 'UTC+10', postalFormat: '96942' },
        ],
      },
    ],
  },
  {
    name: 'Nauru',
    code: 'NR',
    code3: 'NRU',
    capital: 'Yaren (de facto)',
    currency: 'AUD (Australian Dollar - $)',
    dialCode: '+674',
    divisionType: 'District',
    divisions: [
      {
        name: 'Yaren District',
        type: 'District',
        cities: [
          { name: 'Yaren (Parliament & Government Precinct)', lat: -0.5477, lng: 166.9189, timezone: 'Pacific/Nauru', utcOffset: 'UTC+12', postalFormat: 'NRU68' },
        ],
      },
      {
        name: 'Aiwo District',
        type: 'District',
        cities: [
          { name: 'Aiwo (Commercial Port)', lat: -0.5333, lng: 166.9111, timezone: 'Pacific/Nauru', utcOffset: 'UTC+12', postalFormat: 'NRU68' },
        ],
      },
    ],
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    code3: 'NZL',
    capital: 'Wellington',
    currency: 'NZD (New Zealand Dollar - $)',
    dialCode: '+64',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Auckland Region',
        type: 'Region',
        cities: [
          { name: 'Auckland CBD (Queen Street / Viaduct)', lat: -36.8485, lng: 174.7633, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '1010' },
          { name: 'Ponsonby / Grey Lynn', lat: -36.8580, lng: 174.7450, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '1011' },
          { name: 'Takapuna (North Shore)', lat: -36.7880, lng: 174.7730, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '0622' },
          { name: 'Newmarket (Tech & Commercial)', lat: -36.8680, lng: 174.7780, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '1023' },
        ],
      },
      {
        name: 'Wellington Region',
        type: 'Region',
        cities: [
          { name: 'Wellington (CBD / Lambton Quay)', lat: -41.2865, lng: 174.7762, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '6011' },
          { name: 'Te Aro (Digital Media / Tech Sector)', lat: -41.2950, lng: 174.7780, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '6011' },
        ],
      },
      {
        name: 'Canterbury',
        type: 'Region',
        cities: [
          { name: 'Christchurch (Central City)', lat: -43.5321, lng: 172.6362, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '8011' },
        ],
      },
      {
        name: 'Otago',
        type: 'Region',
        cities: [
          { name: 'Queenstown', lat: -45.0312, lng: 168.6626, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '9300' },
          { name: 'Dunedin', lat: -45.8788, lng: 170.5028, timezone: 'Pacific/Auckland', utcOffset: 'UTC+12', postalFormat: '9016' },
        ],
      },
    ],
  },
  {
    name: 'Palau',
    code: 'PW',
    code3: 'PLW',
    capital: 'Ngerulmud',
    currency: 'USD (US Dollar - $)',
    dialCode: '+680',
    divisionType: 'State',
    divisions: [
      {
        name: 'Koror State',
        type: 'State',
        cities: [
          { name: 'Koror (Commercial Center)', lat: 7.3417, lng: 134.4792, timezone: 'Pacific/Palau', utcOffset: 'UTC+9', postalFormat: '96940' },
          { name: 'Malakal Island', lat: 7.3300, lng: 134.4500, timezone: 'Pacific/Palau', utcOffset: 'UTC+9', postalFormat: '96940' },
        ],
      },
      {
        name: 'Melekeok State',
        type: 'State',
        cities: [
          { name: 'Ngerulmud (National Capitol Complex)', lat: 7.5006, lng: 134.6242, timezone: 'Pacific/Palau', utcOffset: 'UTC+9', postalFormat: '96939' },
        ],
      },
    ],
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    code3: 'PNG',
    capital: 'Port Moresby',
    currency: 'PGK (Papua New Guinean Kina - K)',
    dialCode: '+675',
    divisionType: 'National Capital District / Province',
    divisions: [
      {
        name: 'National Capital District (NCD)',
        type: 'Capital District',
        cities: [
          { name: 'Port Moresby (Downtown / Town)', lat: -9.4789, lng: 147.1494, timezone: 'Pacific/Port_Moresby', utcOffset: 'UTC+10', postalFormat: '121' },
          { name: 'Waigani (Government / Administrative)', lat: -9.4200, lng: 147.1850, timezone: 'Pacific/Port_Moresby', utcOffset: 'UTC+10', postalFormat: '131' },
          { name: 'Boroko (Commercial)', lat: -9.4500, lng: 147.1950, timezone: 'Pacific/Port_Moresby', utcOffset: 'UTC+10', postalFormat: '111' },
        ],
      },
      {
        name: 'Morobe Province',
        type: 'Province',
        cities: [
          { name: 'Lae (Top Town / Industrial Hub)', lat: -6.7280, lng: 146.9930, timezone: 'Pacific/Port_Moresby', utcOffset: 'UTC+10', postalFormat: '411' },
        ],
      },
    ],
  },
  {
    name: 'Samoa',
    code: 'WS',
    code3: 'WSM',
    capital: 'Apia',
    currency: 'WST (Samoan Tālā - WS$)',
    dialCode: '+685',
    divisionType: 'District',
    divisions: [
      {
        name: 'Tuamasaga District',
        type: 'District',
        cities: [
          { name: 'Apia (Beach Road / Downtown)', lat: -13.8333, lng: -171.7667, timezone: 'Pacific/Apia', utcOffset: 'UTC+13', postalFormat: 'WS1110' },
          { name: 'Vaitele Industrial Area', lat: -13.8400, lng: -171.8000, timezone: 'Pacific/Apia', utcOffset: 'UTC+13', postalFormat: 'WS1110' },
        ],
      },
    ],
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    code3: 'SLB',
    capital: 'Honiara',
    currency: 'SBD (Solomon Islands Dollar - SI$)',
    dialCode: '+677',
    divisionType: 'Capital Territory / Province',
    divisions: [
      {
        name: 'Honiara Capital Territory',
        type: 'Capital Territory',
        cities: [
          { name: 'Honiara (Point Cruz / Central)', lat: -9.4286, lng: 159.9556, timezone: 'Pacific/Guadalcanal', utcOffset: 'UTC+11', postalFormat: '0000' },
          { name: 'Kukum', lat: -9.4350, lng: 159.9800, timezone: 'Pacific/Guadalcanal', utcOffset: 'UTC+11', postalFormat: '0000' },
        ],
      },
      {
        name: 'Western Province',
        type: 'Province',
        cities: [
          { name: 'Gizo', lat: -8.1030, lng: 156.8419, timezone: 'Pacific/Guadalcanal', utcOffset: 'UTC+11', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Tonga',
    code: 'TO',
    code3: 'TON',
    capital: "Nuku'alofa",
    currency: 'TOP (Tongan Paʻanga - T$)',
    dialCode: '+676',
    divisionType: 'Island Division',
    divisions: [
      {
        name: 'Tongatapu Division',
        type: 'Island Division',
        cities: [
          { name: "Nuku'alofa (Taufa'ahau Road / Central)", lat: -21.1394, lng: -175.2019, timezone: 'Pacific/Tongatapu', utcOffset: 'UTC+13', postalFormat: '0000' },
          { name: 'Ma\'ufanga', lat: -21.1350, lng: -175.1850, timezone: 'Pacific/Tongatapu', utcOffset: 'UTC+13', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    code3: 'TUV',
    capital: 'Funafuti',
    currency: 'AUD (Australian Dollar - $)',
    dialCode: '+688',
    divisionType: 'Island Council',
    divisions: [
      {
        name: 'Funafuti Island Council',
        type: 'Island Council',
        cities: [
          { name: 'Vaiaku (Fongafale Islet / Government Precinct)', lat: -8.5211, lng: 179.1964, timezone: 'Pacific/Funafuti', utcOffset: 'UTC+12', postalFormat: '0000' },
          { name: 'Senala', lat: -8.5150, lng: 179.1990, timezone: 'Pacific/Funafuti', utcOffset: 'UTC+12', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    code3: 'VUT',
    capital: 'Port Vila',
    currency: 'VUV (Vanuatu Vatu - VT)',
    dialCode: '+678',
    divisionType: 'Municipality / Province',
    divisions: [
      {
        name: 'Shefa Province (Port Vila)',
        type: 'Municipality',
        cities: [
          { name: 'Port Vila (Kumul Highway / Waterfront)', lat: -17.7333, lng: 168.3222, timezone: 'Pacific/Efate', utcOffset: 'UTC+11', postalFormat: '0000' },
          { name: 'Nambatu', lat: -17.7450, lng: 168.3150, timezone: 'Pacific/Efate', utcOffset: 'UTC+11', postalFormat: '0000' },
        ],
      },
      {
        name: 'Sanma Province',
        type: 'Province',
        cities: [
          { name: 'Luganville (Espiritu Santo)', lat: -15.5333, lng: 167.1667, timezone: 'Pacific/Efate', utcOffset: 'UTC+11', postalFormat: '0000' },
        ],
      },
    ],
  },
];
