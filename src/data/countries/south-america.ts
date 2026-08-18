import { CountryData } from './types';

/**
 * Complete South American Dataset — 12 Countries
 */
export const SOUTH_AMERICA_COUNTRIES: CountryData[] = [
  {
    name: 'Argentina',
    code: 'AR',
    code3: 'ARG',
    capital: 'Buenos Aires',
    currency: 'ARS (Argentine Peso - $)',
    dialCode: '+54',
    divisionType: 'Autonomous City / Province',
    divisions: [
      {
        name: 'Autonomous City of Buenos Aires (CABA)',
        type: 'Autonomous City',
        cities: [
          { name: 'Palermo (Palermo Soho / Hollywood)', lat: -34.5880, lng: -58.4300, timezone: 'America/Argentina/Buenos_Aires', utcOffset: 'UTC-3', postalFormat: 'C1414' },
          { name: 'Puerto Madero (Financial Hub)', lat: -34.6118, lng: -58.3636, timezone: 'America/Argentina/Buenos_Aires', utcOffset: 'UTC-3', postalFormat: 'C1107' },
          { name: 'Recoleta', lat: -34.5875, lng: -58.3974, timezone: 'America/Argentina/Buenos_Aires', utcOffset: 'UTC-3', postalFormat: 'C1113' },
          { name: 'San Nicolás (Microcentro)', lat: -34.6037, lng: -58.3816, timezone: 'America/Argentina/Buenos_Aires', utcOffset: 'UTC-3', postalFormat: 'C1008' },
        ],
      },
      {
        name: 'Córdoba Province',
        type: 'Province',
        cities: [
          { name: 'Córdoba (Nueva Córdoba)', lat: -31.4201, lng: -64.1888, timezone: 'America/Argentina/Cordoba', utcOffset: 'UTC-3', postalFormat: 'X5000' },
        ],
      },
      {
        name: 'Santa Fe Province',
        type: 'Province',
        cities: [
          { name: 'Rosario', lat: -32.9468, lng: -60.6393, timezone: 'America/Argentina/Buenos_Aires', utcOffset: 'UTC-3', postalFormat: 'S2000' },
        ],
      },
      {
        name: 'Mendoza Province',
        type: 'Province',
        cities: [
          { name: 'Mendoza City', lat: -32.8895, lng: -68.8458, timezone: 'America/Argentina/Mendoza', utcOffset: 'UTC-3', postalFormat: 'M5500' },
        ],
      },
    ],
  },
  {
    name: 'Bolivia',
    code: 'BO',
    code3: 'BOL',
    capital: 'Sucre / La Paz',
    currency: 'BOB (Bolivian Boliviano - Bs.)',
    dialCode: '+591',
    divisionType: 'Department',
    divisions: [
      {
        name: 'La Paz Department',
        type: 'Department',
        cities: [
          { name: 'La Paz (Zona Sur / Calacoto)', lat: -16.5383, lng: -68.0875, timezone: 'America/La_Paz', utcOffset: 'UTC-4', postalFormat: '0000' },
          { name: 'La Paz (El Prado / Centro)', lat: -16.4957, lng: -68.1336, timezone: 'America/La_Paz', utcOffset: 'UTC-4', postalFormat: '0000' },
        ],
      },
      {
        name: 'Santa Cruz Department',
        type: 'Department',
        cities: [
          { name: 'Santa Cruz de la Sierra (Equipetrol)', lat: -17.7700, lng: -63.1900, timezone: 'America/La_Paz', utcOffset: 'UTC-4', postalFormat: '0000' },
        ],
      },
      {
        name: 'Chuquisaca Department',
        type: 'Department',
        cities: [
          { name: 'Sucre (Historic Center)', lat: -19.0196, lng: -65.2619, timezone: 'America/La_Paz', utcOffset: 'UTC-4', postalFormat: '0000' },
        ],
      },
    ],
  },
  {
    name: 'Brazil',
    code: 'BR',
    code3: 'BRA',
    capital: 'Brasília',
    currency: 'BRL (Brazilian Real - R$)',
    dialCode: '+55',
    divisionType: 'State / Federal District',
    divisions: [
      {
        name: 'São Paulo',
        type: 'State',
        cities: [
          { name: 'São Paulo (Avenida Paulista / Jardins)', lat: -23.5614, lng: -46.6560, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '01310-100' },
          { name: 'São Paulo (Itaim Bibi / Faria Lima Financial Hub)', lat: -23.5850, lng: -46.6850, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '04538-132' },
          { name: 'São Paulo (Pinheiros / Vila Madalena)', lat: -23.5600, lng: -46.7000, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '05414-010' },
          { name: 'Campinas (Tech Hub)', lat: -22.9099, lng: -47.0626, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '13010-001' },
        ],
      },
      {
        name: 'Rio de Janeiro',
        type: 'State',
        cities: [
          { name: 'Rio de Janeiro (Centro / Financial)', lat: -22.9068, lng: -43.1729, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '20040-002' },
          { name: 'Rio de Janeiro (Ipanema / Leblon)', lat: -22.9838, lng: -43.2045, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '22410-003' },
          { name: 'Barra da Tijuca', lat: -22.9997, lng: -43.3658, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '22640-100' },
        ],
      },
      {
        name: 'Federal District (Distrito Federal)',
        type: 'Federal District',
        cities: [
          { name: 'Brasília (Plano Piloto / Asa Sul)', lat: -15.7942, lng: -47.8822, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '70040-010' },
        ],
      },
      {
        name: 'Santa Catarina',
        type: 'State',
        cities: [
          { name: 'Florianópolis (Tech Island)', lat: -27.5954, lng: -48.5480, timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3', postalFormat: '88010-400' },
        ],
      },
    ],
  },
  {
    name: 'Chile',
    code: 'CL',
    code3: 'CHL',
    capital: 'Santiago',
    currency: 'CLP (Chilean Peso - $)',
    dialCode: '+56',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Santiago Metropolitan Region (Región Metropolitana)',
        type: 'Region',
        cities: [
          { name: 'Las Condes (Sanhattan Financial District)', lat: -33.4125, lng: -70.5986, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '7550000' },
          { name: 'Providencia', lat: -33.4314, lng: -70.6128, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '7500000' },
          { name: 'Santiago Centro (Civic Center)', lat: -33.4489, lng: -70.6693, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '8320000' },
          { name: 'Vitacura', lat: -33.3989, lng: -70.5800, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '7630000' },
        ],
      },
      {
        name: 'Valparaíso Region',
        type: 'Region',
        cities: [
          { name: 'Viña del Mar', lat: -33.0245, lng: -71.5518, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '2520000' },
          { name: 'Valparaíso', lat: -33.0472, lng: -71.6127, timezone: 'America/Santiago', utcOffset: 'UTC-4', postalFormat: '2340000' },
        ],
      },
    ],
  },
  {
    name: 'Colombia',
    code: 'CO',
    code3: 'COL',
    capital: 'Bogota',
    currency: 'COP (Colombian Peso - $)',
    dialCode: '+57',
    divisionType: 'Capital District / Department',
    divisions: [
      {
        name: 'Bogotá Capital District',
        type: 'Capital District',
        cities: [
          { name: 'Chapinero (Chico Norte / Calle 93)', lat: 4.6750, lng: -74.0530, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '110221' },
          { name: 'Usaquén (Santa Bárbara)', lat: 4.7000, lng: -74.0300, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '110111' },
          { name: 'Santa Fe (International Center)', lat: 4.6150, lng: -74.0700, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '110311' },
        ],
      },
      {
        name: 'Antioquia Department',
        type: 'Department',
        cities: [
          { name: 'Medellín (El Poblado / Provenza)', lat: 6.2088, lng: -75.5684, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '050021' },
          { name: 'Medellín (Laureles)', lat: 6.2442, lng: -75.5906, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '050031' },
        ],
      },
      {
        name: 'Valle del Cauca Department',
        type: 'Department',
        cities: [
          { name: 'Cali (Granada / Peñón)', lat: 3.4516, lng: -76.5320, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '760001' },
        ],
      },
      {
        name: 'Bolívar Department',
        type: 'Department',
        cities: [
          { name: 'Cartagena (Bocagrande / Walled City)', lat: 10.4000, lng: -75.5500, timezone: 'America/Bogota', utcOffset: 'UTC-5', postalFormat: '130001' },
        ],
      },
    ],
  },
  {
    name: 'Ecuador',
    code: 'EC',
    code3: 'ECU',
    capital: 'Quito',
    currency: 'USD (US Dollar - $)',
    dialCode: '+593',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Pichincha Province',
        type: 'Province',
        cities: [
          { name: 'Quito (La Carolina / Financial)', lat: -0.1807, lng: -78.4842, timezone: 'America/Guayaquil', utcOffset: 'UTC-5', postalFormat: '170135' },
          { name: 'Quito (Centro Histórico)', lat: -0.2200, lng: -78.5120, timezone: 'America/Guayaquil', utcOffset: 'UTC-5', postalFormat: '170130' },
          { name: 'Cumbayá', lat: -0.2000, lng: -78.4300, timezone: 'America/Guayaquil', utcOffset: 'UTC-5', postalFormat: '170157' },
        ],
      },
      {
        name: 'Guayas Province',
        type: 'Province',
        cities: [
          { name: 'Guayaquil (Puerto Santa Ana / Samborondón)', lat: -2.1800, lng: -79.8700, timezone: 'America/Guayaquil', utcOffset: 'UTC-5', postalFormat: '090150' },
        ],
      },
      {
        name: 'Azuay Province',
        type: 'Province',
        cities: [
          { name: 'Cuenca (El Sagrario)', lat: -2.9001, lng: -79.0059, timezone: 'America/Guayaquil', utcOffset: 'UTC-5', postalFormat: '010101' },
        ],
      },
    ],
  },
  {
    name: 'Guyana',
    code: 'GY',
    code3: 'GUY',
    capital: 'Georgetown',
    currency: 'GYD (Guyanese Dollar - $)',
    dialCode: '+592',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Demerara-Mahaica (Region 4)',
        type: 'Region',
        cities: [
          { name: 'Georgetown (Downtown / Kingston)', lat: 6.8013, lng: -58.1551, timezone: 'America/Guyana', utcOffset: 'UTC-4', postalFormat: '00000' },
          { name: 'Georgetown (Kitty / Bel Air)', lat: 6.8150, lng: -58.1400, timezone: 'America/Guyana', utcOffset: 'UTC-4', postalFormat: '00000' },
        ],
      },
    ],
  },
  {
    name: 'Paraguay',
    code: 'PY',
    code3: 'PRY',
    capital: 'Asuncion',
    currency: 'PYG (Paraguayan Guaraní - ₲)',
    dialCode: '+595',
    divisionType: 'Capital District / Department',
    divisions: [
      {
        name: 'Asunción Capital District',
        type: 'Capital District',
        cities: [
          { name: 'Asunción (Villa Morra / Aviadores)', lat: -25.2850, lng: -57.5750, timezone: 'America/Asuncion', utcOffset: 'UTC-4', postalFormat: '001505' },
          { name: 'Asunción (Centro Histórico)', lat: -25.2800, lng: -57.6350, timezone: 'America/Asuncion', utcOffset: 'UTC-4', postalFormat: '001001' },
        ],
      },
      {
        name: 'Alto Paraná Department',
        type: 'Department',
        cities: [
          { name: 'Ciudad del Este', lat: -25.5097, lng: -54.6111, timezone: 'America/Asuncion', utcOffset: 'UTC-4', postalFormat: '070001' },
        ],
      },
    ],
  },
  {
    name: 'Peru',
    code: 'PE',
    code3: 'PER',
    capital: 'Lima',
    currency: 'PEN (Peruvian Sol - S/)',
    dialCode: '+51',
    divisionType: 'Metropolitan Province / Department',
    divisions: [
      {
        name: 'Lima Metropolitan Province',
        type: 'Metropolitan Province',
        cities: [
          { name: 'San Isidro (Financial District)', lat: -12.0967, lng: -77.0353, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '15046' },
          { name: 'Miraflores (Malecón / Larcomar)', lat: -12.1217, lng: -77.0297, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '15074' },
          { name: 'Barranco', lat: -12.1486, lng: -77.0211, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '15063' },
          { name: 'Santiago de Surco', lat: -12.1400, lng: -76.9900, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '15039' },
        ],
      },
      {
        name: 'Cusco Department',
        type: 'Department',
        cities: [
          { name: 'Cusco (Historic Center)', lat: -13.5319, lng: -71.9675, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '08002' },
        ],
      },
      {
        name: 'Arequipa Department',
        type: 'Department',
        cities: [
          { name: 'Arequipa (Cayma / Centro)', lat: -16.4090, lng: -71.5375, timezone: 'America/Lima', utcOffset: 'UTC-5', postalFormat: '04001' },
        ],
      },
    ],
  },
  {
    name: 'Suriname',
    code: 'SR',
    code3: 'SUR',
    capital: 'Paramaribo',
    currency: 'SRD (Surinamese Dollar - $)',
    dialCode: '+597',
    divisionType: 'District',
    divisions: [
      {
        name: 'Paramaribo District',
        type: 'District',
        cities: [
          { name: 'Paramaribo (Waterkant / Downtown)', lat: 5.8520, lng: -55.2038, timezone: 'America/Paramaribo', utcOffset: 'UTC-3', postalFormat: '00000' },
          { name: 'Rainville', lat: 5.8650, lng: -55.1500, timezone: 'America/Paramaribo', utcOffset: 'UTC-3', postalFormat: '00000' },
        ],
      },
    ],
  },
  {
    name: 'Uruguay',
    code: 'UY',
    code3: 'URY',
    capital: 'Montevideo',
    currency: 'UYU (Uruguayan Peso - $U)',
    dialCode: '+598',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Montevideo Department',
        type: 'Department',
        cities: [
          { name: 'Pocitos (Rambla)', lat: -34.9180, lng: -56.1480, timezone: 'America/Montevideo', utcOffset: 'UTC-3', postalFormat: '11300' },
          { name: 'Punta Carretas (World Trade Center)', lat: -34.9250, lng: -56.1580, timezone: 'America/Montevideo', utcOffset: 'UTC-3', postalFormat: '11300' },
          { name: 'Ciudad Vieja', lat: -34.9064, lng: -56.2056, timezone: 'America/Montevideo', utcOffset: 'UTC-3', postalFormat: '11000' },
          { name: 'Carrasco', lat: -34.8870, lng: -56.0580, timezone: 'America/Montevideo', utcOffset: 'UTC-3', postalFormat: '11500' },
        ],
      },
      {
        name: 'Maldonado Department',
        type: 'Department',
        cities: [
          { name: 'Punta del Este', lat: -34.9633, lng: -54.9458, timezone: 'America/Montevideo', utcOffset: 'UTC-3', postalFormat: '20100' },
        ],
      },
    ],
  },
  {
    name: 'Venezuela',
    code: 'VE',
    code3: 'VEN',
    capital: 'Caracas',
    currency: 'VES (Venezuelan Bolívar - Bs.D)',
    dialCode: '+58',
    divisionType: 'Capital District / State',
    divisions: [
      {
        name: 'Capital District / Miranda (Caracas)',
        type: 'Capital District',
        cities: [
          { name: 'Chacao (El Rosal / Financial Hub)', lat: 10.4900, lng: -66.8600, timezone: 'America/Caracas', utcOffset: 'UTC-4', postalFormat: '1060' },
          { name: 'Las Mercedes (Baruta)', lat: 10.4800, lng: -66.8650, timezone: 'America/Caracas', utcOffset: 'UTC-4', postalFormat: '1080' },
          { name: 'Altamira', lat: 10.4980, lng: -66.8480, timezone: 'America/Caracas', utcOffset: 'UTC-4', postalFormat: '1060' },
        ],
      },
      {
        name: 'Zulia State',
        type: 'State',
        cities: [
          { name: 'Maracaibo', lat: 10.6427, lng: -71.6125, timezone: 'America/Caracas', utcOffset: 'UTC-4', postalFormat: '4001' },
        ],
      },
      {
        name: 'Carabobo State',
        type: 'State',
        cities: [
          { name: 'Valencia', lat: 10.1620, lng: -68.0077, timezone: 'America/Caracas', utcOffset: 'UTC-4', postalFormat: '2001' },
        ],
      },
    ],
  },
];
