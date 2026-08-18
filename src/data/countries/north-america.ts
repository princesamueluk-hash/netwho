import { CountryData } from './types';

/**
 * Complete North American Dataset — 23 Countries
 */
export const NORTH_AMERICA_COUNTRIES: CountryData[] = [
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    code3: 'ATG',
    capital: "St. John's",
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-268',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint John Parish',
        type: 'Parish',
        cities: [
          { name: "St. John's", lat: 17.1175, lng: -61.8456, timezone: 'America/Antigua', utcOffset: 'UTC-4', postalFormat: '00000' },
        ],
      },
    ],
  },
  {
    name: 'Bahamas',
    code: 'BS',
    code3: 'BHS',
    capital: 'Nassau',
    currency: 'BSD (Bahamian Dollar - $)',
    dialCode: '+1-242',
    divisionType: 'District / Island',
    divisions: [
      {
        name: 'New Providence Island',
        type: 'Island District',
        cities: [
          { name: 'Nassau (Downtown / Bay St)', lat: 25.0443, lng: -77.3504, timezone: 'America/Nassau', utcOffset: 'UTC-5', postalFormat: 'N-4849' },
          { name: 'Paradise Island', lat: 25.0847, lng: -77.3204, timezone: 'America/Nassau', utcOffset: 'UTC-5', postalFormat: 'N-4777' },
        ],
      },
      {
        name: 'Grand Bahama',
        type: 'Island District',
        cities: [
          { name: 'Freeport', lat: 26.5333, lng: -78.7000, timezone: 'America/Nassau', utcOffset: 'UTC-5', postalFormat: 'F-4000' },
        ],
      },
    ],
  },
  {
    name: 'Barbados',
    code: 'BB',
    code3: 'BRB',
    capital: 'Bridgetown',
    currency: 'BBD (Barbadian Dollar - $)',
    dialCode: '+1-246',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint Michael Parish',
        type: 'Parish',
        cities: [
          { name: 'Bridgetown (Broad St / Careenage)', lat: 13.0975, lng: -59.6167, timezone: 'America/Barbados', utcOffset: 'UTC-4', postalFormat: 'BB11000' },
          { name: 'Warrens Business Hub', lat: 13.1400, lng: -59.6050, timezone: 'America/Barbados', utcOffset: 'UTC-4', postalFormat: 'BB22026' },
        ],
      },
      {
        name: 'Christ Church Parish',
        type: 'Parish',
        cities: [
          { name: 'Oistins', lat: 13.0667, lng: -59.5333, timezone: 'America/Barbados', utcOffset: 'UTC-4', postalFormat: 'BB17068' },
        ],
      },
    ],
  },
  {
    name: 'Belize',
    code: 'BZ',
    code3: 'BLZ',
    capital: 'Belmopan',
    currency: 'BZD (Belize Dollar - $)',
    dialCode: '+501',
    divisionType: 'District',
    divisions: [
      {
        name: 'Cayo District',
        type: 'District',
        cities: [
          { name: 'Belmopan', lat: 17.2510, lng: -88.7590, timezone: 'America/Belize', utcOffset: 'UTC-6', postalFormat: '00000' },
          { name: 'San Ignacio', lat: 17.1588, lng: -89.0700, timezone: 'America/Belize', utcOffset: 'UTC-6', postalFormat: '00000' },
        ],
      },
      {
        name: 'Belize District',
        type: 'District',
        cities: [
          { name: 'Belize City', lat: 17.5046, lng: -88.1962, timezone: 'America/Belize', utcOffset: 'UTC-6', postalFormat: '00000' },
          { name: 'San Pedro (Ambergris Caye)', lat: 17.9214, lng: -87.9611, timezone: 'America/Belize', utcOffset: 'UTC-6', postalFormat: '00000' },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    code3: 'CAN',
    capital: 'Ottawa',
    currency: 'CAD (Canadian Dollar - $)',
    dialCode: '+1',
    divisionType: 'Province / Territory',
    divisions: [
      {
        name: 'Ontario',
        type: 'Province',
        cities: [
          { name: 'Toronto (Downtown / Financial District)', lat: 43.6481, lng: -79.3814, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'M5H 2N2' },
          { name: 'Toronto (Yorkville / Mid-Town)', lat: 43.6702, lng: -79.3868, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'M4W 1A1' },
          { name: 'Ottawa (Centretown)', lat: 45.4215, lng: -75.6972, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'K1P 1J1' },
          { name: 'Mississauga', lat: 43.5890, lng: -79.6441, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'L5B 1H9' },
          { name: 'Waterloo (Tech corridor)', lat: 43.4643, lng: -80.5204, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'N2L 3G1' },
        ],
      },
      {
        name: 'British Columbia',
        type: 'Province',
        cities: [
          { name: 'Vancouver (Downtown / Yaletown)', lat: 49.2766, lng: -123.1209, timezone: 'America/Vancouver', utcOffset: 'UTC-8', postalFormat: 'V6B 2S2' },
          { name: 'Burnaby (Metrotown)', lat: 49.2488, lng: -122.9805, timezone: 'America/Vancouver', utcOffset: 'UTC-8', postalFormat: 'V5H 4M4' },
          { name: 'Victoria', lat: 48.4284, lng: -123.3656, timezone: 'America/Vancouver', utcOffset: 'UTC-8', postalFormat: 'V8W 1J2' },
        ],
      },
      {
        name: 'Quebec (Québec)',
        type: 'Province',
        cities: [
          { name: 'Montreal (Ville-Marie / Downtown)', lat: 45.5017, lng: -73.5673, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'H3B 2Y5' },
          { name: 'Montreal (Plateau-Mont-Royal)', lat: 45.5225, lng: -73.5780, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'H2W 1T8' },
          { name: 'Quebec City', lat: 46.8139, lng: -71.2082, timezone: 'America/Toronto', utcOffset: 'UTC-5', postalFormat: 'G1R 4P5' },
        ],
      },
      {
        name: 'Alberta',
        type: 'Province',
        cities: [
          { name: 'Calgary (Downtown / Beltline)', lat: 51.0447, lng: -114.0719, timezone: 'America/Edmonton', utcOffset: 'UTC-7', postalFormat: 'T2P 1J9' },
          { name: 'Edmonton', lat: 53.5461, lng: -113.4938, timezone: 'America/Edmonton', utcOffset: 'UTC-7', postalFormat: 'T5J 0N3' },
        ],
      },
    ],
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    code3: 'CRI',
    capital: 'San Jose',
    currency: 'CRC (Costa Rican Colón - ₡)',
    dialCode: '+506',
    divisionType: 'Province',
    divisions: [
      {
        name: 'San José Province',
        type: 'Province',
        cities: [
          { name: 'San José (Catedral / Carmen)', lat: 9.9333, lng: -84.0833, timezone: 'America/Costa_Rica', utcOffset: 'UTC-6', postalFormat: '10101' },
          { name: 'Escazú (San Rafael)', lat: 9.9200, lng: -84.1400, timezone: 'America/Costa_Rica', utcOffset: 'UTC-6', postalFormat: '10203' },
          { name: 'Santa Ana', lat: 9.9328, lng: -84.1825, timezone: 'America/Costa_Rica', utcOffset: 'UTC-6', postalFormat: '10901' },
        ],
      },
      {
        name: 'Heredia Province',
        type: 'Province',
        cities: [
          { name: 'Heredia', lat: 9.9981, lng: -84.1167, timezone: 'America/Costa_Rica', utcOffset: 'UTC-6', postalFormat: '40101' },
        ],
      },
    ],
  },
  {
    name: 'Cuba',
    code: 'CU',
    code3: 'CUB',
    capital: 'Havana',
    currency: 'CUP (Cuban Peso - $)',
    dialCode: '+53',
    divisionType: 'Province',
    divisions: [
      {
        name: 'La Habana Province',
        type: 'Province',
        cities: [
          { name: 'Old Havana (Habana Vieja)', lat: 23.1368, lng: -82.3589, timezone: 'America/Havana', utcOffset: 'UTC-5', postalFormat: '10100' },
          { name: 'Vedado (Plaza de la Revolución)', lat: 23.1300, lng: -82.3900, timezone: 'America/Havana', utcOffset: 'UTC-5', postalFormat: '10400' },
          { name: 'Miramar (Playa)', lat: 23.1150, lng: -82.4300, timezone: 'America/Havana', utcOffset: 'UTC-5', postalFormat: '11300' },
        ],
      },
      {
        name: 'Santiago de Cuba Province',
        type: 'Province',
        cities: [
          { name: 'Santiago de Cuba', lat: 20.0208, lng: -75.8267, timezone: 'America/Havana', utcOffset: 'UTC-5', postalFormat: '90100' },
        ],
      },
    ],
  },
  {
    name: 'Dominica',
    code: 'DM',
    code3: 'DMA',
    capital: 'Roseau',
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-767',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint George Parish',
        type: 'Parish',
        cities: [
          { name: 'Roseau', lat: 15.3017, lng: -61.3881, timezone: 'America/Dominica', utcOffset: 'UTC-4', postalFormat: '00109' },
        ],
      },
    ],
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    code3: 'DOM',
    capital: 'Santo Domingo',
    currency: 'DOP (Dominican Peso - RD$)',
    dialCode: '+1-809',
    divisionType: 'National District / Province',
    divisions: [
      {
        name: 'Distrito Nacional (Santo Domingo)',
        type: 'National District',
        cities: [
          { name: 'Piantini (Financial District)', lat: 18.4750, lng: -69.9350, timezone: 'America/Santo_Domingo', utcOffset: 'UTC-4', postalFormat: '10148' },
          { name: 'Bella Vista', lat: 18.4550, lng: -69.9450, timezone: 'America/Santo_Domingo', utcOffset: 'UTC-4', postalFormat: '10112' },
          { name: 'Zona Colonial', lat: 18.4730, lng: -69.8850, timezone: 'America/Santo_Domingo', utcOffset: 'UTC-4', postalFormat: '10210' },
        ],
      },
      {
        name: 'Santiago Province',
        type: 'Province',
        cities: [
          { name: 'Santiago de los Caballeros', lat: 19.4517, lng: -70.6970, timezone: 'America/Santo_Domingo', utcOffset: 'UTC-4', postalFormat: '51000' },
        ],
      },
      {
        name: 'La Altagracia Province',
        type: 'Province',
        cities: [
          { name: 'Punta Cana / Bavaro', lat: 18.5601, lng: -68.3725, timezone: 'America/Santo_Domingo', utcOffset: 'UTC-4', postalFormat: '23000' },
        ],
      },
    ],
  },
  {
    name: 'El Salvador',
    code: 'SV',
    code3: 'SLV',
    capital: 'San Salvador',
    currency: 'USD (US Dollar - $)',
    dialCode: '+503',
    divisionType: 'Department',
    divisions: [
      {
        name: 'San Salvador Department',
        type: 'Department',
        cities: [
          { name: 'San Salvador (San Benito / Escalón)', lat: 13.6929, lng: -89.2182, timezone: 'America/El_Salvador', utcOffset: 'UTC-6', postalFormat: '1101' },
          { name: 'Santa Tecla', lat: 13.6769, lng: -89.2797, timezone: 'America/El_Salvador', utcOffset: 'UTC-6', postalFormat: '1501' },
          { name: 'Antiguo Cuscatlán', lat: 13.6667, lng: -89.2500, timezone: 'America/El_Salvador', utcOffset: 'UTC-6', postalFormat: '1502' },
        ],
      },
    ],
  },
  {
    name: 'Grenada',
    code: 'GD',
    code3: 'GRD',
    capital: "St. George's",
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-473',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint George Parish',
        type: 'Parish',
        cities: [
          { name: "St. George's (Carenage)", lat: 12.0561, lng: -61.7486, timezone: 'America/Grenada', utcOffset: 'UTC-4', postalFormat: '00000' },
          { name: 'Grand Anse', lat: 12.0250, lng: -61.7650, timezone: 'America/Grenada', utcOffset: 'UTC-4', postalFormat: '00000' },
        ],
      },
    ],
  },
  {
    name: 'Guatemala',
    code: 'GT',
    code3: 'GTM',
    capital: 'Guatemala City',
    currency: 'GTQ (Guatemalan Quetzal - Q)',
    dialCode: '+502',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Guatemala Department',
        type: 'Department',
        cities: [
          { name: 'Guatemala City (Zona 10 / Zona Viva)', lat: 14.5950, lng: -90.5100, timezone: 'America/Guatemala', utcOffset: 'UTC-6', postalFormat: '01010' },
          { name: 'Guatemala City (Zona 14 / Las Américas)', lat: 14.5800, lng: -90.5200, timezone: 'America/Guatemala', utcOffset: 'UTC-6', postalFormat: '01014' },
          { name: 'Guatemala City (Zona 4 / Cuatro Grados Norte)', lat: 14.6200, lng: -90.5160, timezone: 'America/Guatemala', utcOffset: 'UTC-6', postalFormat: '01004' },
        ],
      },
      {
        name: 'Sacatepéquez Department',
        type: 'Department',
        cities: [
          { name: 'Antigua Guatemala', lat: 14.5586, lng: -90.7339, timezone: 'America/Guatemala', utcOffset: 'UTC-6', postalFormat: '03001' },
        ],
      },
    ],
  },
  {
    name: 'Haiti',
    code: 'HT',
    code3: 'HTI',
    capital: 'Port-au-Prince',
    currency: 'HTG (Haitian Gourde - G)',
    dialCode: '+509',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Ouest Department',
        type: 'Department',
        cities: [
          { name: 'Port-au-Prince (Downtown)', lat: 18.5944, lng: -72.3074, timezone: 'America/Port-au-Prince', utcOffset: 'UTC-5', postalFormat: 'HT6110' },
          { name: 'Pétion-Ville', lat: 18.5125, lng: -72.2853, timezone: 'America/Port-au-Prince', utcOffset: 'UTC-5', postalFormat: 'HT6140' },
        ],
      },
      {
        name: 'Nord Department',
        type: 'Department',
        cities: [
          { name: 'Cap-Haïtien', lat: 19.7594, lng: -72.2047, timezone: 'America/Port-au-Prince', utcOffset: 'UTC-5', postalFormat: 'HT1110' },
        ],
      },
    ],
  },
  {
    name: 'Honduras',
    code: 'HN',
    code3: 'HND',
    capital: 'Tegucigalpa',
    currency: 'HNL (Honduran Lempira - L)',
    dialCode: '+504',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Francisco Morazán Department',
        type: 'Department',
        cities: [
          { name: 'Tegucigalpa (Colonia Palmira)', lat: 14.1020, lng: -87.1950, timezone: 'America/Tegucigalpa', utcOffset: 'UTC-6', postalFormat: '11101' },
          { name: 'Tegucigalpa (Lomas del Guijarro)', lat: 14.0950, lng: -87.1850, timezone: 'America/Tegucigalpa', utcOffset: 'UTC-6', postalFormat: '11101' },
        ],
      },
      {
        name: 'Cortés Department',
        type: 'Department',
        cities: [
          { name: 'San Pedro Sula', lat: 15.5042, lng: -88.0250, timezone: 'America/Tegucigalpa', utcOffset: 'UTC-6', postalFormat: '21101' },
        ],
      },
    ],
  },
  {
    name: 'Jamaica',
    code: 'JM',
    code3: 'JAM',
    capital: 'Kingston',
    currency: 'JMD (Jamaican Dollar - $)',
    dialCode: '+1-876',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Kingston & St. Andrew Parish',
        type: 'Parish',
        cities: [
          { name: 'Kingston 5 (New Kingston / Financial Hub)', lat: 18.0075, lng: -76.7865, timezone: 'America/Jamaica', utcOffset: 'UTC-5', postalFormat: 'KGN 5' },
          { name: 'Kingston 6 (Liguanea)', lat: 18.0200, lng: -76.7650, timezone: 'America/Jamaica', utcOffset: 'UTC-5', postalFormat: 'KGN 6' },
          { name: 'Kingston 10 (Half-Way Tree)', lat: 18.0130, lng: -76.7990, timezone: 'America/Jamaica', utcOffset: 'UTC-5', postalFormat: 'KGN 10' },
        ],
      },
      {
        name: 'Saint James Parish',
        type: 'Parish',
        cities: [
          { name: 'Montego Bay', lat: 18.4762, lng: -77.8939, timezone: 'America/Jamaica', utcOffset: 'UTC-5', postalFormat: 'MB 1' },
        ],
      },
    ],
  },
  {
    name: 'Mexico',
    code: 'MX',
    code3: 'MEX',
    capital: 'Mexico City',
    currency: 'MXN (Mexican Peso - $)',
    dialCode: '+52',
    divisionType: 'State / Federal Entity',
    divisions: [
      {
        name: 'Mexico City (CDMX)',
        type: 'Federal Entity',
        cities: [
          { name: 'Cuauhtémoc (Paseo de la Reforma / Juárez)', lat: 19.4285, lng: -99.1620, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '06600' },
          { name: 'Miguel Hidalgo (Polanco / Reforma)', lat: 19.4337, lng: -99.1914, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '11560' },
          { name: 'Cuajimalpa (Santa Fe Business District)', lat: 19.3590, lng: -99.2580, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '05348' },
          { name: 'Benito Juárez (Del Valle / Nápoles)', lat: 19.3980, lng: -99.1720, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '03100' },
          { name: 'Coyoacán', lat: 19.3496, lng: -99.1622, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '04000' },
        ],
      },
      {
        name: 'Nuevo León',
        type: 'State',
        cities: [
          { name: 'San Pedro Garza García (Valle Oriente)', lat: 25.6570, lng: -100.3660, timezone: 'America/Monterrey', utcOffset: 'UTC-6', postalFormat: '66269' },
          { name: 'Monterrey (Centro)', lat: 25.6866, lng: -100.3161, timezone: 'America/Monterrey', utcOffset: 'UTC-6', postalFormat: '64000' },
        ],
      },
      {
        name: 'Jalisco',
        type: 'State',
        cities: [
          { name: 'Guadalajara (Americana / Providencia)', lat: 20.6767, lng: -103.3690, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '44160' },
          { name: 'Zapopan (Puerta de Hierro / Andares)', lat: 20.7100, lng: -103.4150, timezone: 'America/Mexico_City', utcOffset: 'UTC-6', postalFormat: '45116' },
        ],
      },
      {
        name: 'Quintana Roo',
        type: 'State',
        cities: [
          { name: 'Cancún (Zona Hotelera / Centro)', lat: 21.1619, lng: -86.8515, timezone: 'America/Cancun', utcOffset: 'UTC-5', postalFormat: '77500' },
          { name: 'Playa del Carmen', lat: 20.6296, lng: -87.0739, timezone: 'America/Cancun', utcOffset: 'UTC-5', postalFormat: '77710' },
        ],
      },
    ],
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    code3: 'NIC',
    capital: 'Managua',
    currency: 'NIO (Nicaraguan Córdoba - C$)',
    dialCode: '+505',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Managua Department',
        type: 'Department',
        cities: [
          { name: 'Managua (Villa Fontana / Los Robles)', lat: 12.1260, lng: -86.2650, timezone: 'America/Managua', utcOffset: 'UTC-6', postalFormat: '14038' },
          { name: 'Managua (Plaza España)', lat: 12.1380, lng: -86.2800, timezone: 'America/Managua', utcOffset: 'UTC-6', postalFormat: '11001' },
        ],
      },
      {
        name: 'Granada Department',
        type: 'Department',
        cities: [
          { name: 'Granada', lat: 11.9299, lng: -85.9560, timezone: 'America/Managua', utcOffset: 'UTC-6', postalFormat: '43000' },
        ],
      },
    ],
  },
  {
    name: 'Panama',
    code: 'PA',
    code3: 'PAN',
    capital: 'Panama City',
    currency: 'PAB / USD (Panamanian Balboa / US Dollar - B/.)',
    dialCode: '+507',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Panamá Province',
        type: 'Province',
        cities: [
          { name: 'Panama City (Bella Vista / Obarrio)', lat: 8.9870, lng: -79.5200, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0823' },
          { name: 'Panama City (Costa del Este Financial Hub)', lat: 9.0120, lng: -79.4670, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0830' },
          { name: 'Panama City (Punta Pacífica)', lat: 8.9750, lng: -79.5100, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0816' },
          { name: 'Casco Viejo (San Felipe)', lat: 8.9530, lng: -79.5350, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0801' },
        ],
      },
      {
        name: 'Chiriquí Province',
        type: 'Province',
        cities: [
          { name: 'David', lat: 8.4273, lng: -82.4314, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0401' },
          { name: 'Boquete', lat: 8.7769, lng: -82.4394, timezone: 'America/Panama', utcOffset: 'UTC-5', postalFormat: '0413' },
        ],
      },
    ],
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    code3: 'KNA',
    capital: 'Basseterre',
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-869',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint George Basseterre Parish',
        type: 'Parish',
        cities: [
          { name: 'Basseterre (The Circus / Port Zante)', lat: 17.2961, lng: -62.7236, timezone: 'America/St_Kitts', utcOffset: 'UTC-4', postalFormat: '00265' },
        ],
      },
    ],
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
    code3: 'LCA',
    capital: 'Castries',
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-758',
    divisionType: 'Quarter',
    divisions: [
      {
        name: 'Castries Quarter',
        type: 'Quarter',
        cities: [
          { name: 'Castries (William Peter Blvd)', lat: 14.0101, lng: -60.9875, timezone: 'America/St_Lucia', utcOffset: 'UTC-4', postalFormat: 'LC04 101' },
        ],
      },
      {
        name: 'Gros Islet Quarter',
        type: 'Quarter',
        cities: [
          { name: 'Rodney Bay Marina', lat: 14.0750, lng: -60.9540, timezone: 'America/St_Lucia', utcOffset: 'UTC-4', postalFormat: 'LC01 101' },
        ],
      },
    ],
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    code3: 'VCT',
    capital: 'Kingstown',
    currency: 'XCD (East Caribbean Dollar - $)',
    dialCode: '+1-784',
    divisionType: 'Parish',
    divisions: [
      {
        name: 'Saint George Parish',
        type: 'Parish',
        cities: [
          { name: 'Kingstown (Bay Street)', lat: 13.1550, lng: -61.2267, timezone: 'America/St_Vincent', utcOffset: 'UTC-4', postalFormat: 'VC0100' },
        ],
      },
    ],
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
    code3: 'TTO',
    capital: 'Port of Spain',
    currency: 'TTD (Trinidad and Tobago Dollar - TT$)',
    dialCode: '+1-868',
    divisionType: 'Region / City Corporation',
    divisions: [
      {
        name: 'Port of Spain City Corporation',
        type: 'City Corporation',
        cities: [
          { name: 'Port of Spain (Downtown / Independence Sq)', lat: 10.6596, lng: -61.5167, timezone: 'America/Port_of_Spain', utcOffset: 'UTC-4', postalFormat: '100101' },
          { name: 'Woodbrook / St. Clair', lat: 10.6650, lng: -61.5250, timezone: 'America/Port_of_Spain', utcOffset: 'UTC-4', postalFormat: '100601' },
        ],
      },
      {
        name: 'San Fernando City Corporation',
        type: 'City Corporation',
        cities: [
          { name: 'San Fernando', lat: 10.2797, lng: -61.4583, timezone: 'America/Port_of_Spain', utcOffset: 'UTC-4', postalFormat: '600101' },
        ],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    code3: 'USA',
    capital: 'Washington, D.C.',
    currency: 'USD (US Dollar - $)',
    dialCode: '+1',
    divisionType: 'State / Federal District',
    divisions: [
      {
        name: 'California',
        type: 'State',
        cities: [
          { name: 'San Francisco (Financial District / SOMA)', lat: 37.7892, lng: -122.4014, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '94105' },
          { name: 'Silicon Valley (Mountain View / Palo Alto)', lat: 37.3861, lng: -122.0839, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '94043' },
          { name: 'Los Angeles (Downtown / Bunker Hill)', lat: 34.0537, lng: -118.2518, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '90071' },
          { name: 'Los Angeles (Silicon Beach / Santa Monica)', lat: 34.0195, lng: -118.4912, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '90401' },
          { name: 'San Diego (Downtown / Gaslamp)', lat: 32.7157, lng: -117.1611, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '92101' },
          { name: 'San Jose (Downtown Tech Hub)', lat: 37.3382, lng: -121.8863, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '95113' },
        ],
      },
      {
        name: 'New York',
        type: 'State',
        cities: [
          { name: 'New York City (Manhattan - Midtown)', lat: 40.7549, lng: -73.9840, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '10018' },
          { name: 'New York City (Financial District / Wall St)', lat: 40.7074, lng: -74.0090, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '10005' },
          { name: 'New York City (Brooklyn - DUMBO / Tech Triangle)', lat: 40.7033, lng: -73.9881, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '11201' },
          { name: 'New York City (Manhattan - Silicon Alley / Flatiron)', lat: 40.7410, lng: -73.9897, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '10010' },
          { name: 'Buffalo', lat: 42.8864, lng: -78.8784, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '14202' },
        ],
      },
      {
        name: 'Texas',
        type: 'State',
        cities: [
          { name: 'Austin (Downtown / Silicon Hills)', lat: 30.2672, lng: -97.7431, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '78701' },
          { name: 'Dallas (Downtown / Uptown)', lat: 32.7767, lng: -96.7970, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '75201' },
          { name: 'Houston (Downtown / Galleria)', lat: 29.7604, lng: -95.3698, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '77002' },
          { name: 'San Antonio', lat: 29.4241, lng: -98.4936, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '78205' },
        ],
      },
      {
        name: 'Washington',
        type: 'State',
        cities: [
          { name: 'Seattle (Downtown / South Lake Union)', lat: 47.6062, lng: -122.3321, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '98101' },
          { name: 'Bellevue (Downtown Tech Center)', lat: 47.6101, lng: -122.2015, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '98004' },
          { name: 'Redmond (Overlake)', lat: 47.6740, lng: -122.1215, timezone: 'America/Los_Angeles', utcOffset: 'UTC-8', postalFormat: '98052' },
        ],
      },
      {
        name: 'Illinois',
        type: 'State',
        cities: [
          { name: 'Chicago (The Loop / Financial District)', lat: 41.8781, lng: -87.6298, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '60603' },
          { name: 'Chicago (Fulton Market / West Loop)', lat: 41.8860, lng: -87.6520, timezone: 'America/Chicago', utcOffset: 'UTC-6', postalFormat: '60607' },
        ],
      },
      {
        name: 'Florida',
        type: 'State',
        cities: [
          { name: 'Miami (Brickell Financial District)', lat: 25.7617, lng: -80.1918, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '33131' },
          { name: 'Miami (Wynwood Tech & Arts)', lat: 25.8042, lng: -80.1989, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '33127' },
          { name: 'Orlando (Downtown / Lake Eola)', lat: 28.5383, lng: -81.3792, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '32801' },
          { name: 'Tampa (Water Street / Downtown)', lat: 27.9506, lng: -82.4572, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '33602' },
        ],
      },
      {
        name: 'Massachusetts',
        type: 'State',
        cities: [
          { name: 'Boston (Financial District / Seaport)', lat: 42.3601, lng: -71.0589, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '02110' },
          { name: 'Cambridge (Kendall Square / MIT Tech Hub)', lat: 42.3625, lng: -71.0872, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '02142' },
        ],
      },
      {
        name: 'District of Columbia',
        type: 'Federal District',
        cities: [
          { name: 'Washington, D.C. (Downtown / K Street)', lat: 38.9072, lng: -77.0369, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '20005' },
          { name: 'Capitol Hill', lat: 38.8899, lng: -77.0090, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '20002' },
          { name: 'Georgetown', lat: 38.9097, lng: -77.0653, timezone: 'America/New_York', utcOffset: 'UTC-5', postalFormat: '20007' },
        ],
      },
    ],
  },
];
