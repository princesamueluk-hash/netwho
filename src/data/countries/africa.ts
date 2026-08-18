import { CountryData } from './types';

/**
 * Complete African Dataset — 54 Countries
 */
export const AFRICA_COUNTRIES: CountryData[] = [
  {
    name: 'Algeria',
    code: 'DZ',
    code3: 'DZA',
    capital: 'Algiers',
    currency: 'DZD (Algerian Dinar - د.ج)',
    dialCode: '+213',
    divisionType: 'Province (Wilaya)',
    divisions: [
      {
        name: 'Algiers Province',
        type: 'Province',
        cities: [
          { name: 'Algiers', lat: 36.7538, lng: 3.0588, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '16000' },
          { name: 'Bab El Oued', lat: 36.7900, lng: 3.0520, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '16009' },
          { name: 'El Harrach', lat: 36.7200, lng: 3.1300, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '16200' },
        ],
      },
      {
        name: 'Oran Province',
        type: 'Province',
        cities: [
          { name: 'Oran', lat: 35.6987, lng: -0.6349, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '31000' },
          { name: 'Es Sénia', lat: 35.6500, lng: -0.6200, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '31100' },
        ],
      },
      {
        name: 'Constantine Province',
        type: 'Province',
        cities: [
          { name: 'Constantine', lat: 36.3650, lng: 6.6147, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '25000' },
          { name: 'El Khroub', lat: 36.2600, lng: 6.6900, timezone: 'Africa/Algiers', utcOffset: 'UTC+1', postalFormat: '25100' },
        ],
      },
    ],
  },
  {
    name: 'Angola',
    code: 'AO',
    code3: 'AGO',
    capital: 'Luanda',
    currency: 'AOA (Angolan Kwanza - Kz)',
    dialCode: '+244',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Luanda Province',
        type: 'Province',
        cities: [
          { name: 'Luanda', lat: -8.8390, lng: 13.2894, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'Belas', lat: -8.9900, lng: 13.1500, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '1020' },
          { name: 'Viana', lat: -8.9030, lng: 13.3700, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '1030' },
        ],
      },
      {
        name: 'Benguela Province',
        type: 'Province',
        cities: [
          { name: 'Benguela', lat: -12.5763, lng: 13.4055, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '2000' },
          { name: 'Lobito', lat: -12.3600, lng: 13.5400, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '2010' },
        ],
      },
      {
        name: 'Huíla Province',
        type: 'Province',
        cities: [
          { name: 'Lubango', lat: -14.9172, lng: 13.4925, timezone: 'Africa/Luanda', utcOffset: 'UTC+1', postalFormat: '3000' },
        ],
      },
    ],
  },
  {
    name: 'Benin',
    code: 'BJ',
    code3: 'BEN',
    capital: 'Porto-Novo',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+229',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Littoral Department',
        type: 'Department',
        cities: [
          { name: 'Cotonou', lat: 6.3654, lng: 2.4183, timezone: 'Africa/Porto-Novo', utcOffset: 'UTC+1', postalFormat: '01BP' },
          { name: 'Akpakpa', lat: 6.3800, lng: 2.4500, timezone: 'Africa/Porto-Novo', utcOffset: 'UTC+1', postalFormat: '01BP2' },
        ],
      },
      {
        name: 'Ouémé Department',
        type: 'Department',
        cities: [
          { name: 'Porto-Novo', lat: 6.4969, lng: 2.6289, timezone: 'Africa/Porto-Novo', utcOffset: 'UTC+1', postalFormat: '02BP' },
        ],
      },
      {
        name: 'Atlantique Department',
        type: 'Department',
        cities: [
          { name: 'Abomey-Calavi', lat: 6.4485, lng: 2.3556, timezone: 'Africa/Porto-Novo', utcOffset: 'UTC+1', postalFormat: '03BP' },
          { name: 'Ouidah', lat: 6.3630, lng: 2.0850, timezone: 'Africa/Porto-Novo', utcOffset: 'UTC+1', postalFormat: '03BP2' },
        ],
      },
    ],
  },
  {
    name: 'Botswana',
    code: 'BW',
    code3: 'BWA',
    capital: 'Gaborone',
    currency: 'BWP (Botswana Pula - P)',
    dialCode: '+267',
    divisionType: 'District',
    divisions: [
      {
        name: 'South-East District',
        type: 'District',
        cities: [
          { name: 'Gaborone', lat: -24.6282, lng: 25.9231, timezone: 'Africa/Gaborone', utcOffset: 'UTC+2', postalFormat: '0000' },
          { name: 'Ramotswa', lat: -24.8700, lng: 25.8600, timezone: 'Africa/Gaborone', utcOffset: 'UTC+2', postalFormat: '0001' },
        ],
      },
      {
        name: 'North-East District',
        type: 'District',
        cities: [
          { name: 'Francistown', lat: -21.1700, lng: 27.5100, timezone: 'Africa/Gaborone', utcOffset: 'UTC+2', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    code3: 'BFA',
    capital: 'Ouagadougou',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+226',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Centre Region',
        type: 'Region',
        cities: [
          { name: 'Ouagadougou', lat: 12.3714, lng: -1.5197, timezone: 'Africa/Ouagadougou', utcOffset: 'UTC+0', postalFormat: '01BP' },
        ],
      },
      {
        name: 'Hauts-Bassins Region',
        type: 'Region',
        cities: [
          { name: 'Bobo-Dioulasso', lat: 11.1772, lng: -4.2979, timezone: 'Africa/Ouagadougou', utcOffset: 'UTC+0', postalFormat: '02BP' },
        ],
      },
    ],
  },
  {
    name: 'Burundi',
    code: 'BI',
    code3: 'BDI',
    capital: 'Gitega',
    currency: 'BIF (Burundian Franc - FBu)',
    dialCode: '+257',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Gitega Province',
        type: 'Province',
        cities: [
          { name: 'Gitega', lat: -3.4278, lng: 29.9246, timezone: 'Africa/Bujumbura', utcOffset: 'UTC+2', postalFormat: '4000' },
        ],
      },
      {
        name: 'Bujumbura Mairie',
        type: 'Province',
        cities: [
          { name: 'Bujumbura', lat: -3.3822, lng: 29.3644, timezone: 'Africa/Bujumbura', utcOffset: 'UTC+2', postalFormat: '1000' },
        ],
      },
    ],
  },
  {
    name: 'Cabo Verde',
    code: 'CV',
    code3: 'CPV',
    capital: 'Praia',
    currency: 'CVE (Cape Verdean Escudo - $)',
    dialCode: '+238',
    divisionType: 'Municipality',
    divisions: [
      {
        name: 'Praia Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Praia', lat: 14.9330, lng: -23.5133, timezone: 'Atlantic/Cape_Verde', utcOffset: 'UTC-1', postalFormat: '7600' },
        ],
      },
      {
        name: 'São Vicente Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Mindelo', lat: 16.8850, lng: -24.9870, timezone: 'Atlantic/Cape_Verde', utcOffset: 'UTC-1', postalFormat: '2110' },
        ],
      },
    ],
  },
  {
    name: 'Cameroon',
    code: 'CM',
    code3: 'CMR',
    capital: 'Yaoundé',
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+237',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Centre Region',
        type: 'Region',
        cities: [
          { name: 'Yaoundé', lat: 3.8480, lng: 11.5021, timezone: 'Africa/Douala', utcOffset: 'UTC+1', postalFormat: '00000' },
        ],
      },
      {
        name: 'Littoral Region',
        type: 'Region',
        cities: [
          { name: 'Douala', lat: 4.0511, lng: 9.7679, timezone: 'Africa/Douala', utcOffset: 'UTC+1', postalFormat: '00001' },
          { name: 'Edéa', lat: 3.8000, lng: 10.1300, timezone: 'Africa/Douala', utcOffset: 'UTC+1', postalFormat: '00002' },
        ],
      },
      {
        name: 'South-West Region',
        type: 'Region',
        cities: [
          { name: 'Buea', lat: 4.1500, lng: 9.2400, timezone: 'Africa/Douala', utcOffset: 'UTC+1', postalFormat: '00003' },
          { name: 'Limbe', lat: 4.0200, lng: 9.2100, timezone: 'Africa/Douala', utcOffset: 'UTC+1', postalFormat: '00004' },
        ],
      },
    ],
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    code3: 'CAF',
    capital: 'Bangui',
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+236',
    divisionType: 'Prefecture',
    divisions: [
      {
        name: 'Bangui Commune',
        type: 'Prefecture',
        cities: [
          { name: 'Bangui', lat: 4.3947, lng: 18.5582, timezone: 'Africa/Bangui', utcOffset: 'UTC+1', postalFormat: '0000' },
          { name: 'Bimbo', lat: 4.2500, lng: 18.5200, timezone: 'Africa/Bangui', utcOffset: 'UTC+1', postalFormat: '0001' },
        ],
      },
      {
        name: 'Mambéré-Kadéï',
        type: 'Prefecture',
        cities: [
          { name: 'Berbérati', lat: 4.2600, lng: 15.7900, timezone: 'Africa/Bangui', utcOffset: 'UTC+1', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Chad',
    code: 'TD',
    code3: 'TCD',
    capital: "N'Djamena",
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+235',
    divisionType: 'Province',
    divisions: [
      {
        name: "N'Djamena Region",
        type: 'Province',
        cities: [
          { name: "N'Djamena", lat: 12.1348, lng: 15.0557, timezone: 'Africa/Ndjamena', utcOffset: 'UTC+1', postalFormat: '0000' },
        ],
      },
      {
        name: 'Moyen-Chari Province',
        type: 'Province',
        cities: [
          { name: 'Sarh', lat: 9.1400, lng: 18.3900, timezone: 'Africa/Ndjamena', utcOffset: 'UTC+1', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Comoros',
    code: 'KM',
    code3: 'COM',
    capital: 'Moroni',
    currency: 'KMF (Comorian Franc - CF)',
    dialCode: '+269',
    divisionType: 'Autonomous Island',
    divisions: [
      {
        name: 'Grande Comore (Ngazidja)',
        type: 'Autonomous Island',
        cities: [
          { name: 'Moroni', lat: -11.7172, lng: 43.2473, timezone: 'Indian/Comoro', utcOffset: 'UTC+3', postalFormat: '0000' },
          { name: 'Iconi', lat: -11.7600, lng: 43.2500, timezone: 'Indian/Comoro', utcOffset: 'UTC+3', postalFormat: '0001' },
        ],
      },
      {
        name: 'Anjouan (Nzwani)',
        type: 'Autonomous Island',
        cities: [
          { name: 'Mutsamudu', lat: -12.1600, lng: 44.4000, timezone: 'Indian/Comoro', utcOffset: 'UTC+3', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Democratic Republic of the Congo',
    code: 'CD',
    code3: 'COD',
    capital: 'Kinshasa',
    currency: 'CDF (Congolese Franc - FC)',
    dialCode: '+243',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Kinshasa Province',
        type: 'Province',
        cities: [
          { name: 'Kinshasa', lat: -4.4419, lng: 15.2663, timezone: 'Africa/Kinshasa', utcOffset: 'UTC+1', postalFormat: '00000' },
          { name: 'Gombe', lat: -4.3000, lng: 15.3000, timezone: 'Africa/Kinshasa', utcOffset: 'UTC+1', postalFormat: '00001' },
          { name: 'Limete', lat: -4.3600, lng: 15.3400, timezone: 'Africa/Kinshasa', utcOffset: 'UTC+1', postalFormat: '00002' },
        ],
      },
      {
        name: 'Haut-Katanga Province',
        type: 'Province',
        cities: [
          { name: 'Lubumbashi', lat: -11.6876, lng: 27.5026, timezone: 'Africa/Lubumbashi', utcOffset: 'UTC+2', postalFormat: '00003' },
          { name: 'Likasi', lat: -10.9800, lng: 26.7300, timezone: 'Africa/Lubumbashi', utcOffset: 'UTC+2', postalFormat: '00004' },
        ],
      },
      {
        name: 'North Kivu Province',
        type: 'Province',
        cities: [
          { name: 'Goma', lat: -1.6585, lng: 29.2205, timezone: 'Africa/Lubumbashi', utcOffset: 'UTC+2', postalFormat: '00005' },
        ],
      },
    ],
  },
  {
    name: 'Republic of the Congo',
    code: 'CG',
    code3: 'COG',
    capital: 'Brazzaville',
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+242',
    divisionType: 'Department',
    divisions: [
      {
        name: 'Brazzaville Department',
        type: 'Department',
        cities: [
          { name: 'Brazzaville', lat: -4.2634, lng: 15.2429, timezone: 'Africa/Brazzaville', utcOffset: 'UTC+1', postalFormat: '0000' },
        ],
      },
      {
        name: 'Pointe-Noire Department',
        type: 'Department',
        cities: [
          { name: 'Pointe-Noire', lat: -4.7975, lng: 11.8504, timezone: 'Africa/Brazzaville', utcOffset: 'UTC+1', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: "Côte d'Ivoire",
    code: 'CI',
    code3: 'CIV',
    capital: 'Yamoussoukro',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+225',
    divisionType: 'Autonomous District / Region',
    divisions: [
      {
        name: 'Abidjan Autonomous District',
        type: 'Autonomous District',
        cities: [
          { name: 'Abidjan', lat: 5.3600, lng: -4.0083, timezone: 'Africa/Abidjan', utcOffset: 'UTC+0', postalFormat: '01BP' },
          { name: 'Cocody', lat: 5.3500, lng: -3.9800, timezone: 'Africa/Abidjan', utcOffset: 'UTC+0', postalFormat: '08BP' },
          { name: 'Plateau', lat: 5.3200, lng: -4.0100, timezone: 'Africa/Abidjan', utcOffset: 'UTC+0', postalFormat: '01BP1' },
        ],
      },
      {
        name: 'Yamoussoukro Autonomous District',
        type: 'Autonomous District',
        cities: [
          { name: 'Yamoussoukro', lat: 6.8276, lng: -5.2893, timezone: 'Africa/Abidjan', utcOffset: 'UTC+0', postalFormat: '02BP' },
        ],
      },
      {
        name: 'Gbêkê Region',
        type: 'Region',
        cities: [
          { name: 'Bouaké', lat: 7.6900, lng: -5.0300, timezone: 'Africa/Abidjan', utcOffset: 'UTC+0', postalFormat: '03BP' },
        ],
      },
    ],
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    code3: 'DJI',
    capital: 'Djibouti City',
    currency: 'DJF (Djiboutian Franc - Fdj)',
    dialCode: '+253',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Djibouti Region',
        type: 'Region',
        cities: [
          { name: 'Djibouti City', lat: 11.5721, lng: 43.1456, timezone: 'Africa/Djibouti', utcOffset: 'UTC+3', postalFormat: '0000' },
        ],
      },
      {
        name: 'Ali Sabieh Region',
        type: 'Region',
        cities: [
          { name: 'Ali Sabieh', lat: 11.1500, lng: 42.7100, timezone: 'Africa/Djibouti', utcOffset: 'UTC+3', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Egypt',
    code: 'EG',
    code3: 'EGY',
    capital: 'Cairo',
    currency: 'EGP (Egyptian Pound - E£)',
    dialCode: '+20',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Cairo Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Cairo', lat: 30.0444, lng: 31.2357, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '11511' },
          { name: 'New Cairo', lat: 30.0300, lng: 31.4700, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '11835' },
          { name: 'Heliopolis', lat: 30.0880, lng: 31.3250, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '11341' },
        ],
      },
      {
        name: 'Giza Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Giza', lat: 30.0131, lng: 31.2089, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '12511' },
          { name: '6th of October City', lat: 29.9800, lng: 30.9500, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '12566' },
        ],
      },
      {
        name: 'Alexandria Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Alexandria', lat: 31.2001, lng: 29.9187, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '21500' },
          { name: 'Borg El Arab', lat: 30.9100, lng: 29.5400, timezone: 'Africa/Cairo', utcOffset: 'UTC+2', postalFormat: '21934' },
        ],
      },
    ],
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    code3: 'GNQ',
    capital: 'Malabo',
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+240',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Bioko Norte Province',
        type: 'Province',
        cities: [
          { name: 'Malabo', lat: 3.7504, lng: 8.7371, timezone: 'Africa/Malabo', utcOffset: 'UTC+1', postalFormat: '0000' },
        ],
      },
      {
        name: 'Litoral Province',
        type: 'Province',
        cities: [
          { name: 'Bata', lat: 1.8639, lng: 9.7658, timezone: 'Africa/Malabo', utcOffset: 'UTC+1', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Eritrea',
    code: 'ER',
    code3: 'ERI',
    capital: 'Asmara',
    currency: 'ERN (Eritrean Nakfa - Nfk)',
    dialCode: '+291',
    divisionType: 'Region (Zoba)',
    divisions: [
      {
        name: 'Maekel (Central) Region',
        type: 'Region',
        cities: [
          { name: 'Asmara', lat: 15.3229, lng: 38.9251, timezone: 'Africa/Asmara', utcOffset: 'UTC+3', postalFormat: '0000' },
        ],
      },
      {
        name: 'Northern Red Sea Region',
        type: 'Region',
        cities: [
          { name: 'Massawa', lat: 15.6097, lng: 39.4500, timezone: 'Africa/Asmara', utcOffset: 'UTC+3', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Eswatini',
    code: 'SZ',
    code3: 'SWZ',
    capital: 'Mbabane',
    currency: 'SZL (Swazi Lilangeni - E)',
    dialCode: '+268',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Hhohho Region',
        type: 'Region',
        cities: [
          { name: 'Mbabane', lat: -26.3055, lng: 31.1367, timezone: 'Africa/Mbabane', utcOffset: 'UTC+2', postalFormat: 'H100' },
          { name: 'Lobamba', lat: -26.4667, lng: 31.2000, timezone: 'Africa/Mbabane', utcOffset: 'UTC+2', postalFormat: 'H102' },
        ],
      },
      {
        name: 'Manzini Region',
        type: 'Region',
        cities: [
          { name: 'Manzini', lat: -26.4988, lng: 31.3713, timezone: 'Africa/Mbabane', utcOffset: 'UTC+2', postalFormat: 'M200' },
        ],
      },
    ],
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    code3: 'ETH',
    capital: 'Addis Ababa',
    currency: 'ETB (Ethiopian Birr - Br)',
    dialCode: '+251',
    divisionType: 'Regional State / Chartered City',
    divisions: [
      {
        name: 'Addis Ababa Chartered City',
        type: 'Chartered City',
        cities: [
          { name: 'Addis Ababa', lat: 9.0320, lng: 38.7469, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '1000' },
          { name: 'Bole', lat: 8.9900, lng: 38.7900, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '1001' },
          { name: 'Yeka', lat: 9.0400, lng: 38.8000, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '1002' },
        ],
      },
      {
        name: 'Oromia Region',
        type: 'Regional State',
        cities: [
          { name: 'Adama (Nazret)', lat: 8.5400, lng: 39.2700, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '2000' },
          { name: 'Jimma', lat: 7.6700, lng: 36.8300, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '2001' },
        ],
      },
      {
        name: 'Amhara Region',
        type: 'Regional State',
        cities: [
          { name: 'Bahir Dar', lat: 11.5900, lng: 37.3900, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '3000' },
          { name: 'Gondar', lat: 12.6000, lng: 37.4700, timezone: 'Africa/Addis_Ababa', utcOffset: 'UTC+3', postalFormat: '3001' },
        ],
      },
    ],
  },
  {
    name: 'Gabon',
    code: 'GA',
    code3: 'GAB',
    capital: 'Libreville',
    currency: 'XAF (Central African CFA franc - FCFA)',
    dialCode: '+241',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Estuaire Province',
        type: 'Province',
        cities: [
          { name: 'Libreville', lat: 0.4162, lng: 9.4673, timezone: 'Africa/Libreville', utcOffset: 'UTC+1', postalFormat: '0000' },
          { name: 'Akanda', lat: 0.5000, lng: 9.5000, timezone: 'Africa/Libreville', utcOffset: 'UTC+1', postalFormat: '0001' },
        ],
      },
      {
        name: 'Ogooué-Maritime Province',
        type: 'Province',
        cities: [
          { name: 'Port-Gentil', lat: -0.7193, lng: 8.7815, timezone: 'Africa/Libreville', utcOffset: 'UTC+1', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'The Gambia',
    code: 'GM',
    code3: 'GMB',
    capital: 'Banjul',
    currency: 'GMD (Gambian Dalasi - D)',
    dialCode: '+220',
    divisionType: 'Division / Region',
    divisions: [
      {
        name: 'Greater Banjul Area',
        type: 'Division',
        cities: [
          { name: 'Banjul', lat: 13.4549, lng: -16.5790, timezone: 'Africa/Banjul', utcOffset: 'UTC+0', postalFormat: '0000' },
          { name: 'Serekunda', lat: 13.4383, lng: -16.6781, timezone: 'Africa/Banjul', utcOffset: 'UTC+0', postalFormat: '0001' },
          { name: 'Brikama', lat: 13.2700, lng: -16.6500, timezone: 'Africa/Banjul', utcOffset: 'UTC+0', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Ghana',
    code: 'GH',
    code3: 'GHA',
    capital: 'Accra',
    currency: 'GHS (Ghanaian Cedi - GH₵)',
    dialCode: '+233',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Greater Accra Region',
        type: 'Region',
        cities: [
          { name: 'Accra', lat: 5.6037, lng: -0.1870, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'GA-001' },
          { name: 'Tema', lat: 5.6698, lng: -0.0166, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'GT-001' },
          { name: 'Madina', lat: 5.6685, lng: -0.1656, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'GA-102' },
          { name: 'Osu', lat: 5.5560, lng: -0.1820, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'GA-030' },
        ],
      },
      {
        name: 'Ashanti Region',
        type: 'Region',
        cities: [
          { name: 'Kumasi', lat: 6.6885, lng: -1.6244, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'AK-001' },
          { name: 'Obuasi', lat: 6.2022, lng: -1.6853, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'AO-001' },
        ],
      },
      {
        name: 'Western Region',
        type: 'Region',
        cities: [
          { name: 'Sekondi-Takoradi', lat: 4.9346, lng: -1.7706, timezone: 'Africa/Accra', utcOffset: 'UTC+0', postalFormat: 'WS-001' },
        ],
      },
    ],
  },
  {
    name: 'Guinea',
    code: 'GN',
    code3: 'GIN',
    capital: 'Conakry',
    currency: 'GNF (Guinean Franc - FG)',
    dialCode: '+224',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Conakry Special Zone',
        type: 'Region',
        cities: [
          { name: 'Conakry', lat: 9.6412, lng: -13.5784, timezone: 'Africa/Conakry', utcOffset: 'UTC+0', postalFormat: '001' },
          { name: 'Kaloum', lat: 9.5100, lng: -13.7100, timezone: 'Africa/Conakry', utcOffset: 'UTC+0', postalFormat: '002' },
          { name: 'Dixinn', lat: 9.5400, lng: -13.6700, timezone: 'Africa/Conakry', utcOffset: 'UTC+0', postalFormat: '003' },
        ],
      },
      {
        name: 'Kindia Region',
        type: 'Region',
        cities: [
          { name: 'Kindia', lat: 10.0500, lng: -12.8600, timezone: 'Africa/Conakry', utcOffset: 'UTC+0', postalFormat: '004' },
        ],
      },
    ],
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    code3: 'GNB',
    capital: 'Bissau',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+245',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Bissau Autonomous Sector',
        type: 'Region',
        cities: [
          { name: 'Bissau', lat: 11.8632, lng: -15.5977, timezone: 'Africa/Bissau', utcOffset: 'UTC+0', postalFormat: '1000' },
        ],
      },
      {
        name: 'Bafatá Region',
        type: 'Region',
        cities: [
          { name: 'Bafatá', lat: 12.1700, lng: -14.6500, timezone: 'Africa/Bissau', utcOffset: 'UTC+0', postalFormat: '2000' },
        ],
      },
    ],
  },
  {
    name: 'Kenya',
    code: 'KE',
    code3: 'KEN',
    capital: 'Nairobi',
    currency: 'KES (Kenyan Shilling - KSh)',
    dialCode: '+254',
    divisionType: 'County',
    divisions: [
      {
        name: 'Nairobi County',
        type: 'County',
        cities: [
          { name: 'Nairobi', lat: -1.2921, lng: 36.8219, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '00100' },
          { name: 'Westlands', lat: -1.2650, lng: 36.8050, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '00800' },
          { name: 'Kilimani', lat: -1.2900, lng: 36.7850, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '00102' },
        ],
      },
      {
        name: 'Mombasa County',
        type: 'County',
        cities: [
          { name: 'Mombasa', lat: -4.0435, lng: 39.6682, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '80100' },
          { name: 'Nyali', lat: -4.0300, lng: 39.7000, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '80118' },
        ],
      },
      {
        name: 'Kisumu County',
        type: 'County',
        cities: [
          { name: 'Kisumu', lat: -0.0917, lng: 34.7680, timezone: 'Africa/Nairobi', utcOffset: 'UTC+3', postalFormat: '40100' },
        ],
      },
    ],
  },
  {
    name: 'Lesotho',
    code: 'LS',
    code3: 'LSO',
    capital: 'Maseru',
    currency: 'LSL (Lesotho Loti - L)',
    dialCode: '+266',
    divisionType: 'District',
    divisions: [
      {
        name: 'Maseru District',
        type: 'District',
        cities: [
          { name: 'Maseru', lat: -29.3151, lng: 27.4869, timezone: 'Africa/Maseru', utcOffset: 'UTC+2', postalFormat: '100' },
        ],
      },
      {
        name: 'Leribe District',
        type: 'District',
        cities: [
          { name: 'Hlotse', lat: -28.8700, lng: 28.0500, timezone: 'Africa/Maseru', utcOffset: 'UTC+2', postalFormat: '300' },
        ],
      },
    ],
  },
  {
    name: 'Liberia',
    code: 'LR',
    code3: 'LBR',
    capital: 'Monrovia',
    currency: 'LRD (Liberian Dollar - $)',
    dialCode: '+231',
    divisionType: 'County',
    divisions: [
      {
        name: 'Montserrado County',
        type: 'County',
        cities: [
          { name: 'Monrovia', lat: 6.3005, lng: -10.7969, timezone: 'Africa/Monrovia', utcOffset: 'UTC+0', postalFormat: '1000' },
          { name: 'Paynesville', lat: 6.2800, lng: -10.7100, timezone: 'Africa/Monrovia', utcOffset: 'UTC+0', postalFormat: '1001' },
        ],
      },
      {
        name: 'Grand Bassa County',
        type: 'County',
        cities: [
          { name: 'Buchanan', lat: 5.8800, lng: -10.0500, timezone: 'Africa/Monrovia', utcOffset: 'UTC+0', postalFormat: '2000' },
        ],
      },
    ],
  },
  {
    name: 'Libya',
    code: 'LY',
    code3: 'LBY',
    capital: 'Tripoli',
    currency: 'LYD (Libyan Dinar - ل.د)',
    dialCode: '+218',
    divisionType: 'District (Shabiyah)',
    divisions: [
      {
        name: 'Tripoli District',
        type: 'District',
        cities: [
          { name: 'Tripoli', lat: 32.8872, lng: 13.1913, timezone: 'Africa/Tripoli', utcOffset: 'UTC+2', postalFormat: '00000' },
        ],
      },
      {
        name: 'Benghazi District',
        type: 'District',
        cities: [
          { name: 'Benghazi', lat: 32.1167, lng: 20.0667, timezone: 'Africa/Tripoli', utcOffset: 'UTC+2', postalFormat: '00001' },
        ],
      },
      {
        name: 'Misrata District',
        type: 'District',
        cities: [
          { name: 'Misrata', lat: 32.3754, lng: 15.0925, timezone: 'Africa/Tripoli', utcOffset: 'UTC+2', postalFormat: '00002' },
        ],
      },
    ],
  },
  {
    name: 'Madagascar',
    code: 'MG',
    code3: 'MDG',
    capital: 'Antananarivo',
    currency: 'MGA (Malagasy Ariary - Ar)',
    dialCode: '+261',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Analamanga Region',
        type: 'Region',
        cities: [
          { name: 'Antananarivo', lat: -18.8792, lng: 47.5079, timezone: 'Indian/Antananarivo', utcOffset: 'UTC+3', postalFormat: '101' },
          { name: 'Ivato', lat: -18.7900, lng: 47.4700, timezone: 'Indian/Antananarivo', utcOffset: 'UTC+3', postalFormat: '105' },
        ],
      },
      {
        name: 'Atsinanana Region',
        type: 'Region',
        cities: [
          { name: 'Toamasina (Tamatave)', lat: -18.1500, lng: 49.4100, timezone: 'Indian/Antananarivo', utcOffset: 'UTC+3', postalFormat: '501' },
        ],
      },
    ],
  },
  {
    name: 'Malawi',
    code: 'MW',
    code3: 'MWI',
    capital: 'Lilongwe',
    currency: 'MWK (Malawian Kwacha - MK)',
    dialCode: '+265',
    divisionType: 'Region / District',
    divisions: [
      {
        name: 'Central Region (Lilongwe District)',
        type: 'District',
        cities: [
          { name: 'Lilongwe', lat: -13.9626, lng: 33.7741, timezone: 'Africa/Blantyre', utcOffset: 'UTC+2', postalFormat: '0000' },
        ],
      },
      {
        name: 'Southern Region (Blantyre District)',
        type: 'District',
        cities: [
          { name: 'Blantyre', lat: -15.7861, lng: 35.0058, timezone: 'Africa/Blantyre', utcOffset: 'UTC+2', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Mali',
    code: 'ML',
    code3: 'MLI',
    capital: 'Bamako',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+223',
    divisionType: 'Region / Capital District',
    divisions: [
      {
        name: 'Bamako Capital District',
        type: 'Capital District',
        cities: [
          { name: 'Bamako', lat: 12.6392, lng: -8.0029, timezone: 'Africa/Bamako', utcOffset: 'UTC+0', postalFormat: '0000' },
        ],
      },
      {
        name: 'Sikasso Region',
        type: 'Region',
        cities: [
          { name: 'Sikasso', lat: 11.3176, lng: -5.6664, timezone: 'Africa/Bamako', utcOffset: 'UTC+0', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Mauritania',
    code: 'MR',
    code3: 'MRT',
    capital: 'Nouakchott',
    currency: 'MRU (Mauritanian Ouguiya - UM)',
    dialCode: '+222',
    divisionType: 'Region (Wilaya)',
    divisions: [
      {
        name: 'Nouakchott-Ouest',
        type: 'Region',
        cities: [
          { name: 'Nouakchott', lat: 18.0735, lng: -15.9582, timezone: 'Africa/Nouakchott', utcOffset: 'UTC+0', postalFormat: '0000' },
          { name: 'Tevragh-Zeina', lat: 18.1000, lng: -15.9800, timezone: 'Africa/Nouakchott', utcOffset: 'UTC+0', postalFormat: '0001' },
        ],
      },
      {
        name: 'Dakhlet Nouadhibou',
        type: 'Region',
        cities: [
          { name: 'Nouadhibou', lat: 20.9442, lng: -17.0365, timezone: 'Africa/Nouakchott', utcOffset: 'UTC+0', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Mauritius',
    code: 'MU',
    code3: 'MUS',
    capital: 'Port Louis',
    currency: 'MUR (Mauritian Rupee - ₨)',
    dialCode: '+230',
    divisionType: 'District',
    divisions: [
      {
        name: 'Port Louis District',
        type: 'District',
        cities: [
          { name: 'Port Louis', lat: -20.1609, lng: 57.5012, timezone: 'Indian/Mauritius', utcOffset: 'UTC+4', postalFormat: '11302' },
        ],
      },
      {
        name: 'Plaines Wilhems District',
        type: 'District',
        cities: [
          { name: 'Beau Bassin-Rose Hill', lat: -20.2300, lng: 57.4700, timezone: 'Indian/Mauritius', utcOffset: 'UTC+4', postalFormat: '71366' },
          { name: 'Curepipe', lat: -20.3167, lng: 57.5167, timezone: 'Indian/Mauritius', utcOffset: 'UTC+4', postalFormat: '74411' },
        ],
      },
    ],
  },
  {
    name: 'Morocco',
    code: 'MA',
    code3: 'MAR',
    capital: 'Rabat',
    currency: 'MAD (Moroccan Dirham - د.م.)',
    dialCode: '+212',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Casablanca-Settat',
        type: 'Region',
        cities: [
          { name: 'Casablanca', lat: 33.5731, lng: -7.5898, timezone: 'Africa/Casablanca', utcOffset: 'UTC+1', postalFormat: '20000' },
          { name: 'Mohammedia', lat: 33.6833, lng: -7.3833, timezone: 'Africa/Casablanca', utcOffset: 'UTC+1', postalFormat: '28810' },
        ],
      },
      {
        name: 'Rabat-Salé-Kénitra',
        type: 'Region',
        cities: [
          { name: 'Rabat', lat: 34.0209, lng: -6.8416, timezone: 'Africa/Casablanca', utcOffset: 'UTC+1', postalFormat: '10000' },
          { name: 'Salé', lat: 34.0333, lng: -6.8167, timezone: 'Africa/Casablanca', utcOffset: 'UTC+1', postalFormat: '11000' },
        ],
      },
      {
        name: 'Marrakech-Safi',
        type: 'Region',
        cities: [
          { name: 'Marrakech', lat: 31.6295, lng: -7.9811, timezone: 'Africa/Casablanca', utcOffset: 'UTC+1', postalFormat: '40000' },
        ],
      },
    ],
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    code3: 'MOZ',
    capital: 'Maputo',
    currency: 'MZN (Mozambican Metical - MT)',
    dialCode: '+258',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Maputo City (Province)',
        type: 'Province',
        cities: [
          { name: 'Maputo', lat: -25.9692, lng: 32.5732, timezone: 'Africa/Maputo', utcOffset: 'UTC+2', postalFormat: '1100' },
          { name: 'Matola', lat: -25.9622, lng: 32.4589, timezone: 'Africa/Maputo', utcOffset: 'UTC+2', postalFormat: '1114' },
        ],
      },
      {
        name: 'Sofala Province',
        type: 'Province',
        cities: [
          { name: 'Beira', lat: -19.8436, lng: 34.8389, timezone: 'Africa/Maputo', utcOffset: 'UTC+2', postalFormat: '2100' },
        ],
      },
    ],
  },
  {
    name: 'Namibia',
    code: 'NA',
    code3: 'NAM',
    capital: 'Windhoek',
    currency: 'NAD (Namibian Dollar - N$)',
    dialCode: '+264',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Khomas Region',
        type: 'Region',
        cities: [
          { name: 'Windhoek', lat: -22.5609, lng: 17.0658, timezone: 'Africa/Windhoek', utcOffset: 'UTC+2', postalFormat: '9000' },
        ],
      },
      {
        name: 'Erongo Region',
        type: 'Region',
        cities: [
          { name: 'Swakopmund', lat: -22.6833, lng: 14.5333, timezone: 'Africa/Windhoek', utcOffset: 'UTC+2', postalFormat: '9001' },
          { name: 'Walvis Bay', lat: -22.9575, lng: 14.5053, timezone: 'Africa/Windhoek', utcOffset: 'UTC+2', postalFormat: '9002' },
        ],
      },
    ],
  },
  {
    name: 'Niger',
    code: 'NE',
    code3: 'NER',
    capital: 'Niamey',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+227',
    divisionType: 'Region / Capital District',
    divisions: [
      {
        name: 'Niamey Capital District',
        type: 'Capital District',
        cities: [
          { name: 'Niamey', lat: 13.5116, lng: 2.1254, timezone: 'Africa/Niamey', utcOffset: 'UTC+1', postalFormat: '8000' },
        ],
      },
      {
        name: 'Zinder Region',
        type: 'Region',
        cities: [
          { name: 'Zinder', lat: 13.8072, lng: 8.9883, timezone: 'Africa/Niamey', utcOffset: 'UTC+1', postalFormat: '8001' },
        ],
      },
    ],
  },
  {
    name: 'Nigeria',
    code: 'NG',
    code3: 'NGA',
    capital: 'Abuja',
    currency: 'NGN (Nigerian Naira - ₦)',
    dialCode: '+234',
    divisionType: 'State',
    divisions: [
      {
        name: 'Lagos State',
        type: 'State',
        cities: [
          { name: 'Ikeja', lat: 6.5874, lng: 3.3386, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '100001' },
          { name: 'Lagos Island', lat: 6.4549, lng: 3.4246, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '101001' },
          { name: 'Victoria Island', lat: 6.4281, lng: 3.4219, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '101241' },
          { name: 'Lekki', lat: 6.4698, lng: 3.5852, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '105102' },
          { name: 'Surulere', lat: 6.5000, lng: 3.3500, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '101283' },
          { name: 'Badagry', lat: 6.4167, lng: 2.8833, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '103101' },
          { name: 'Epe', lat: 6.5833, lng: 3.9833, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '106101' },
        ],
      },
      {
        name: 'Federal Capital Territory',
        type: 'Federal Territory',
        cities: [
          { name: 'Abuja', lat: 9.0765, lng: 7.3986, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '900001' },
          { name: 'Garki', lat: 9.0333, lng: 7.4833, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '900241' },
          { name: 'Maitama', lat: 9.0833, lng: 7.5000, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '900271' },
          { name: 'Wuse', lat: 9.0667, lng: 7.4667, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '900281' },
        ],
      },
      {
        name: 'Rivers State',
        type: 'State',
        cities: [
          { name: 'Port Harcourt', lat: 4.8156, lng: 7.0498, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '500001' },
          { name: 'Obio-Akpor', lat: 4.8500, lng: 6.9833, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '500102' },
          { name: 'Bonny', lat: 4.4500, lng: 7.1667, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '503101' },
        ],
      },
      {
        name: 'Oyo State',
        type: 'State',
        cities: [
          { name: 'Ibadan', lat: 7.3775, lng: 3.9470, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '200001' },
          { name: 'Ogbomoso', lat: 8.1333, lng: 4.2500, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '210001' },
        ],
      },
      {
        name: 'Kano State',
        type: 'State',
        cities: [
          { name: 'Kano City', lat: 12.0022, lng: 8.5920, timezone: 'Africa/Lagos', utcOffset: 'UTC+1', postalFormat: '700001' },
        ],
      },
    ],
  },
  {
    name: 'Rwanda',
    code: 'RW',
    code3: 'RWA',
    capital: 'Kigali',
    currency: 'RWF (Rwandan Franc - FRw)',
    dialCode: '+250',
    divisionType: 'Province / City',
    divisions: [
      {
        name: 'Kigali City',
        type: 'City Province',
        cities: [
          { name: 'Kigali', lat: -1.9441, lng: 30.0619, timezone: 'Africa/Kigali', utcOffset: 'UTC+2', postalFormat: '0000' },
          { name: 'Nyarugenge', lat: -1.9500, lng: 30.0500, timezone: 'Africa/Kigali', utcOffset: 'UTC+2', postalFormat: '0001' },
          { name: 'Gasabo', lat: -1.9200, lng: 30.1000, timezone: 'Africa/Kigali', utcOffset: 'UTC+2', postalFormat: '0002' },
        ],
      },
      {
        name: 'Northern Province',
        type: 'Province',
        cities: [
          { name: 'Musanze (Ruhengeri)', lat: -1.5000, lng: 29.6333, timezone: 'Africa/Kigali', utcOffset: 'UTC+2', postalFormat: '0003' },
        ],
      },
    ],
  },
  {
    name: 'São Tomé and Príncipe',
    code: 'ST',
    code3: 'STP',
    capital: 'São Tomé',
    currency: 'STN (São Tomé and Príncipe Dobra - Db)',
    dialCode: '+239',
    divisionType: 'District / Autonomous Region',
    divisions: [
      {
        name: 'Água Grande District',
        type: 'District',
        cities: [
          { name: 'São Tomé', lat: 0.3365, lng: 6.7273, timezone: 'Africa/Sao_Tome', utcOffset: 'UTC+0', postalFormat: '0000' },
        ],
      },
      {
        name: 'Príncipe Autonomous Region',
        type: 'Autonomous Region',
        cities: [
          { name: 'Santo António', lat: 1.6400, lng: 7.4200, timezone: 'Africa/Sao_Tome', utcOffset: 'UTC+0', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Senegal',
    code: 'SN',
    code3: 'SEN',
    capital: 'Dakar',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+221',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Dakar Region',
        type: 'Region',
        cities: [
          { name: 'Dakar', lat: 14.7167, lng: -17.4677, timezone: 'Africa/Dakar', utcOffset: 'UTC+0', postalFormat: '10000' },
          { name: 'Pikine', lat: 14.7500, lng: -17.4000, timezone: 'Africa/Dakar', utcOffset: 'UTC+0', postalFormat: '10500' },
          { name: 'Guédiawaye', lat: 14.7700, lng: -17.3900, timezone: 'Africa/Dakar', utcOffset: 'UTC+0', postalFormat: '10600' },
        ],
      },
      {
        name: 'Thiès Region',
        type: 'Region',
        cities: [
          { name: 'Thiès', lat: 14.7910, lng: -16.9256, timezone: 'Africa/Dakar', utcOffset: 'UTC+0', postalFormat: '21000' },
          { name: 'Mbour', lat: 14.4220, lng: -16.9638, timezone: 'Africa/Dakar', utcOffset: 'UTC+0', postalFormat: '23000' },
        ],
      },
    ],
  },
  {
    name: 'Seychelles',
    code: 'SC',
    code3: 'SYC',
    capital: 'Victoria',
    currency: 'SCR (Seychellois Rupee - ₨)',
    dialCode: '+248',
    divisionType: 'District',
    divisions: [
      {
        name: 'Greater Victoria Region',
        type: 'District',
        cities: [
          { name: 'Victoria', lat: -4.6191, lng: 55.4513, timezone: 'Indian/Mahe', utcOffset: 'UTC+4', postalFormat: '0000' },
          { name: 'Beau Vallon', lat: -4.6167, lng: 55.4333, timezone: 'Indian/Mahe', utcOffset: 'UTC+4', postalFormat: '0001' },
          { name: 'Anse Royale', lat: -4.7400, lng: 55.5100, timezone: 'Indian/Mahe', utcOffset: 'UTC+4', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    code3: 'SLE',
    capital: 'Freetown',
    currency: 'SLE (Sierra Leonean Leone - Le)',
    dialCode: '+232',
    divisionType: 'Province / Area',
    divisions: [
      {
        name: 'Western Area Urban',
        type: 'Province',
        cities: [
          { name: 'Freetown', lat: 8.4844, lng: -13.2344, timezone: 'Africa/Freetown', utcOffset: 'UTC+0', postalFormat: '0000' },
          { name: 'Aberdeen', lat: 8.4900, lng: -13.2900, timezone: 'Africa/Freetown', utcOffset: 'UTC+0', postalFormat: '0001' },
        ],
      },
      {
        name: 'Southern Province',
        type: 'Province',
        cities: [
          { name: 'Bo', lat: 7.9647, lng: -11.7383, timezone: 'Africa/Freetown', utcOffset: 'UTC+0', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Somalia',
    code: 'SO',
    code3: 'SOM',
    capital: 'Mogadishu',
    currency: 'SOS (Somali Shilling - Sh)',
    dialCode: '+252',
    divisionType: 'Region (Gobol)',
    divisions: [
      {
        name: 'Banaadir Region',
        type: 'Region',
        cities: [
          { name: 'Mogadishu', lat: 2.0469, lng: 45.3182, timezone: 'Africa/Mogadishu', utcOffset: 'UTC+3', postalFormat: '00000' },
          { name: 'Hodan', lat: 2.0400, lng: 45.3100, timezone: 'Africa/Mogadishu', utcOffset: 'UTC+3', postalFormat: '00001' },
        ],
      },
      {
        name: 'Woqooyi Galbeed',
        type: 'Region',
        cities: [
          { name: 'Hargeisa', lat: 9.5600, lng: 44.0650, timezone: 'Africa/Mogadishu', utcOffset: 'UTC+3', postalFormat: '00002' },
        ],
      },
    ],
  },
  {
    name: 'South Africa',
    code: 'ZA',
    code3: 'ZAF',
    capital: 'Pretoria (Exec) / Cape Town (Leg)',
    currency: 'ZAR (South African Rand - R)',
    dialCode: '+27',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Gauteng',
        type: 'Province',
        cities: [
          { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '2000' },
          { name: 'Pretoria', lat: -25.7479, lng: 28.2293, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '0002' },
          { name: 'Sandton', lat: -26.1076, lng: 28.0567, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '2196' },
          { name: 'Centurion', lat: -25.8603, lng: 28.1894, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '0157' },
        ],
      },
      {
        name: 'Western Cape',
        type: 'Province',
        cities: [
          { name: 'Cape Town', lat: -33.9249, lng: 18.4241, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '8000' },
          { name: 'Stellenbosch', lat: -33.9321, lng: 18.8602, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '7600' },
        ],
      },
      {
        name: 'KwaZulu-Natal',
        type: 'Province',
        cities: [
          { name: 'Durban', lat: -29.8587, lng: 31.0218, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '4000' },
          { name: 'Umhlanga', lat: -29.7289, lng: 31.0858, timezone: 'Africa/Johannesburg', utcOffset: 'UTC+2', postalFormat: '4319' },
        ],
      },
    ],
  },
  {
    name: 'South Sudan',
    code: 'SS',
    code3: 'SSD',
    capital: 'Juba',
    currency: 'SSP (South Sudanese Pound - £)',
    dialCode: '+211',
    divisionType: 'State',
    divisions: [
      {
        name: 'Central Equatoria',
        type: 'State',
        cities: [
          { name: 'Juba', lat: 4.8594, lng: 31.5713, timezone: 'Africa/Juba', utcOffset: 'UTC+2', postalFormat: '0000' },
        ],
      },
      {
        name: 'Western Bahr el Ghazal',
        type: 'State',
        cities: [
          { name: 'Wau', lat: 7.7000, lng: 27.9900, timezone: 'Africa/Juba', utcOffset: 'UTC+2', postalFormat: '0001' },
        ],
      },
    ],
  },
  {
    name: 'Sudan',
    code: 'SD',
    code3: 'SDN',
    capital: 'Khartoum',
    currency: 'SDG (Sudanese Pound - ج.س.)',
    dialCode: '+249',
    divisionType: 'State (Wilayah)',
    divisions: [
      {
        name: 'Khartoum State',
        type: 'State',
        cities: [
          { name: 'Khartoum', lat: 15.5007, lng: 32.5599, timezone: 'Africa/Khartoum', utcOffset: 'UTC+2', postalFormat: '11111' },
          { name: 'Omdurman', lat: 15.6500, lng: 32.4800, timezone: 'Africa/Khartoum', utcOffset: 'UTC+2', postalFormat: '11112' },
        ],
      },
      {
        name: 'Red Sea State',
        type: 'State',
        cities: [
          { name: 'Port Sudan', lat: 19.6167, lng: 37.2167, timezone: 'Africa/Khartoum', utcOffset: 'UTC+2', postalFormat: '11113' },
        ],
      },
    ],
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    code3: 'TZA',
    capital: 'Dodoma',
    currency: 'TZS (Tanzanian Shilling - TSh)',
    dialCode: '+255',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Dar es Salaam Region',
        type: 'Region',
        cities: [
          { name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, timezone: 'Africa/Dar_es_Salaam', utcOffset: 'UTC+3', postalFormat: '11000' },
          { name: 'Kinondoni', lat: -6.7800, lng: 39.2400, timezone: 'Africa/Dar_es_Salaam', utcOffset: 'UTC+3', postalFormat: '14100' },
          { name: 'Ilala', lat: -6.8200, lng: 39.2600, timezone: 'Africa/Dar_es_Salaam', utcOffset: 'UTC+3', postalFormat: '11100' },
        ],
      },
      {
        name: 'Dodoma Region',
        type: 'Region',
        cities: [
          { name: 'Dodoma', lat: -6.1630, lng: 35.7516, timezone: 'Africa/Dar_es_Salaam', utcOffset: 'UTC+3', postalFormat: '41000' },
        ],
      },
      {
        name: 'Arusha Region',
        type: 'Region',
        cities: [
          { name: 'Arusha', lat: -3.3869, lng: 36.6830, timezone: 'Africa/Dar_es_Salaam', utcOffset: 'UTC+3', postalFormat: '23000' },
        ],
      },
    ],
  },
  {
    name: 'Togo',
    code: 'TG',
    code3: 'TGO',
    capital: 'Lomé',
    currency: 'XOF (West African CFA franc - CFA)',
    dialCode: '+228',
    divisionType: 'Region',
    divisions: [
      {
        name: 'Maritime Region',
        type: 'Region',
        cities: [
          { name: 'Lomé', lat: 6.1375, lng: 1.2123, timezone: 'Africa/Lome', utcOffset: 'UTC+0', postalFormat: '0000' },
          { name: 'Bè', lat: 6.1300, lng: 1.2300, timezone: 'Africa/Lome', utcOffset: 'UTC+0', postalFormat: '0001' },
        ],
      },
      {
        name: 'Kara Region',
        type: 'Region',
        cities: [
          { name: 'Kara', lat: 9.5511, lng: 1.1861, timezone: 'Africa/Lome', utcOffset: 'UTC+0', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Tunisia',
    code: 'TN',
    code3: 'TUN',
    capital: 'Tunis',
    currency: 'TND (Tunisian Dinar - د.ت)',
    dialCode: '+216',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Tunis Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Tunis', lat: 36.8065, lng: 10.1815, timezone: 'Africa/Tunis', utcOffset: 'UTC+1', postalFormat: '1000' },
          { name: 'La Marsa', lat: 36.8781, lng: 10.3247, timezone: 'Africa/Tunis', utcOffset: 'UTC+1', postalFormat: '2070' },
          { name: 'Carthage', lat: 36.8530, lng: 10.3230, timezone: 'Africa/Tunis', utcOffset: 'UTC+1', postalFormat: '2016' },
        ],
      },
      {
        name: 'Sousse Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Sousse', lat: 35.8256, lng: 10.6084, timezone: 'Africa/Tunis', utcOffset: 'UTC+1', postalFormat: '4000' },
        ],
      },
      {
        name: 'Sfax Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Sfax', lat: 34.7406, lng: 10.7603, timezone: 'Africa/Tunis', utcOffset: 'UTC+1', postalFormat: '3000' },
        ],
      },
    ],
  },
  {
    name: 'Uganda',
    code: 'UG',
    code3: 'UGA',
    capital: 'Kampala',
    currency: 'UGX (Ugandan Shilling - USh)',
    dialCode: '+256',
    divisionType: 'District / Region',
    divisions: [
      {
        name: 'Kampala Capital City',
        type: 'District',
        cities: [
          { name: 'Kampala', lat: 0.3476, lng: 32.5825, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00000' },
          { name: 'Nakawa', lat: 0.3300, lng: 32.6200, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00001' },
          { name: 'Makindye', lat: 0.2800, lng: 32.5800, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00002' },
        ],
      },
      {
        name: 'Wakiso District',
        type: 'District',
        cities: [
          { name: 'Entebbe', lat: 0.0512, lng: 32.4637, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00003' },
          { name: 'Kira', lat: 0.3900, lng: 32.6400, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00004' },
        ],
      },
      {
        name: 'Jinja District',
        type: 'District',
        cities: [
          { name: 'Jinja', lat: 0.4244, lng: 33.2042, timezone: 'Africa/Kampala', utcOffset: 'UTC+3', postalFormat: '00005' },
        ],
      },
    ],
  },
  {
    name: 'Zambia',
    code: 'ZM',
    code3: 'ZMB',
    capital: 'Lusaka',
    currency: 'ZMW (Zambian Kwacha - ZK)',
    dialCode: '+260',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Lusaka Province',
        type: 'Province',
        cities: [
          { name: 'Lusaka', lat: -15.3875, lng: 28.3228, timezone: 'Africa/Lusaka', utcOffset: 'UTC+2', postalFormat: '10101' },
          { name: 'Chilanga', lat: -15.5700, lng: 28.2700, timezone: 'Africa/Lusaka', utcOffset: 'UTC+2', postalFormat: '10102' },
        ],
      },
      {
        name: 'Copperbelt Province',
        type: 'Province',
        cities: [
          { name: 'Ndola', lat: -12.9587, lng: 28.6366, timezone: 'Africa/Lusaka', utcOffset: 'UTC+2', postalFormat: '10103' },
          { name: 'Kitwe', lat: -12.8024, lng: 28.2132, timezone: 'Africa/Lusaka', utcOffset: 'UTC+2', postalFormat: '10104' },
        ],
      },
    ],
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    code3: 'ZWE',
    capital: 'Harare',
    currency: 'ZWG (Zimbabwe Gold / USD)',
    dialCode: '+263',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Harare Province',
        type: 'Province',
        cities: [
          { name: 'Harare', lat: -17.8252, lng: 31.0335, timezone: 'Africa/Harare', utcOffset: 'UTC+2', postalFormat: '0000' },
          { name: 'Chitungwiza', lat: -18.0127, lng: 31.0756, timezone: 'Africa/Harare', utcOffset: 'UTC+2', postalFormat: '0001' },
          { name: 'Borrowdale', lat: -17.7500, lng: 31.1000, timezone: 'Africa/Harare', utcOffset: 'UTC+2', postalFormat: '0002' },
        ],
      },
      {
        name: 'Bulawayo Province',
        type: 'Province',
        cities: [
          { name: 'Bulawayo', lat: -20.1500, lng: 28.5833, timezone: 'Africa/Harare', utcOffset: 'UTC+2', postalFormat: '0003' },
        ],
      },
      {
        name: 'Matabeleland North',
        type: 'Province',
        cities: [
          { name: 'Victoria Falls', lat: -17.9333, lng: 25.8333, timezone: 'Africa/Harare', utcOffset: 'UTC+2', postalFormat: '0004' },
        ],
      },
    ],
  },
];
