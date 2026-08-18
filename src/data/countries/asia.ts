import { CountryData } from './types';

/**
 * Complete Asian Dataset — 48 Countries
 */
export const ASIA_COUNTRIES: CountryData[] = [
  {
    name: 'Afghanistan',
    code: 'AF',
    code3: 'AFG',
    capital: 'Kabul',
    currency: 'AFN (Afghan Afghani - ؋)',
    dialCode: '+93',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Kabul Province',
        type: 'Province',
        cities: [
          { name: 'Kabul', lat: 34.5553, lng: 69.2075, timezone: 'Asia/Kabul', utcOffset: 'UTC+4:30', postalFormat: '1001' },
          { name: 'Paghman', lat: 34.5800, lng: 68.9500, timezone: 'Asia/Kabul', utcOffset: 'UTC+4:30', postalFormat: '1002' },
        ],
      },
      {
        name: 'Herat Province',
        type: 'Province',
        cities: [
          { name: 'Herat', lat: 34.3529, lng: 62.2040, timezone: 'Asia/Kabul', utcOffset: 'UTC+4:30', postalFormat: '3001' },
        ],
      },
    ],
  },
  {
    name: 'Armenia',
    code: 'AM',
    code3: 'ARM',
    capital: 'Yerevan',
    currency: 'AMD (Armenian Dram - ֏)',
    dialCode: '+374',
    divisionType: 'Province (Marz)',
    divisions: [
      {
        name: 'Yerevan Special Administrative City',
        type: 'Special Administrative City',
        cities: [
          { name: 'Yerevan', lat: 40.1792, lng: 44.4991, timezone: 'Asia/Yerevan', utcOffset: 'UTC+4', postalFormat: '0010' },
          { name: 'Kentron', lat: 40.1830, lng: 44.5150, timezone: 'Asia/Yerevan', utcOffset: 'UTC+4', postalFormat: '0015' },
          { name: 'Arabkir', lat: 40.2100, lng: 44.5000, timezone: 'Asia/Yerevan', utcOffset: 'UTC+4', postalFormat: '0033' },
        ],
      },
      {
        name: 'Shirak Province',
        type: 'Province',
        cities: [
          { name: 'Gyumri', lat: 40.7929, lng: 43.8465, timezone: 'Asia/Yerevan', utcOffset: 'UTC+4', postalFormat: '3101' },
        ],
      },
    ],
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    code3: 'AZE',
    capital: 'Baku',
    currency: 'AZN (Azerbaijani Manat - ₼)',
    dialCode: '+994',
    divisionType: 'Economic Region / District',
    divisions: [
      {
        name: 'Baku Economic Region',
        type: 'Economic Region',
        cities: [
          { name: 'Baku', lat: 40.4093, lng: 49.8671, timezone: 'Asia/Baku', utcOffset: 'UTC+4', postalFormat: 'AZ1000' },
          { name: 'Sabail', lat: 40.3600, lng: 49.8300, timezone: 'Asia/Baku', utcOffset: 'UTC+4', postalFormat: 'AZ1005' },
          { name: 'Sumqayit', lat: 40.5897, lng: 49.6686, timezone: 'Asia/Baku', utcOffset: 'UTC+4', postalFormat: 'AZ5000' },
        ],
      },
      {
        name: 'Ganja-Dashkasan',
        type: 'Economic Region',
        cities: [
          { name: 'Ganja', lat: 40.6828, lng: 46.3606, timezone: 'Asia/Baku', utcOffset: 'UTC+4', postalFormat: 'AZ2000' },
        ],
      },
    ],
  },
  {
    name: 'Bahrain',
    code: 'BH',
    code3: 'BHR',
    capital: 'Manama',
    currency: 'BHD (Bahraini Dinar - .د.ب)',
    dialCode: '+973',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Capital Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Manama', lat: 26.2285, lng: 50.5860, timezone: 'Asia/Bahrain', utcOffset: 'UTC+3', postalFormat: '0316' },
          { name: 'Seef', lat: 26.2400, lng: 50.5350, timezone: 'Asia/Bahrain', utcOffset: 'UTC+3', postalFormat: '0428' },
          { name: 'Juffair', lat: 26.2167, lng: 50.6000, timezone: 'Asia/Bahrain', utcOffset: 'UTC+3', postalFormat: '0324' },
        ],
      },
      {
        name: 'Muharraq Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Muharraq', lat: 26.2572, lng: 50.6119, timezone: 'Asia/Bahrain', utcOffset: 'UTC+3', postalFormat: '0202' },
          { name: 'Amwaj Islands', lat: 26.2833, lng: 50.6667, timezone: 'Asia/Bahrain', utcOffset: 'UTC+3', postalFormat: '0257' },
        ],
      },
    ],
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    code3: 'BGD',
    capital: 'Dhaka',
    currency: 'BDT (Bangladeshi Taka - ৳)',
    dialCode: '+880',
    divisionType: 'Division',
    divisions: [
      {
        name: 'Dhaka Division',
        type: 'Division',
        cities: [
          { name: 'Dhaka', lat: 23.8103, lng: 90.4125, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '1000' },
          { name: 'Gulshan', lat: 23.7925, lng: 90.4078, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '1212' },
          { name: 'Uttara', lat: 23.8759, lng: 90.3795, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '1230' },
          { name: 'Dhanmondi', lat: 23.7465, lng: 90.3760, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '1205' },
        ],
      },
      {
        name: 'Chittagong Division',
        type: 'Division',
        cities: [
          { name: 'Chittagong (Chattogram)', lat: 22.3569, lng: 91.7832, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '4000' },
          { name: "Cox's Bazar", lat: 21.4272, lng: 92.0058, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '4700' },
        ],
      },
      {
        name: 'Sylhet Division',
        type: 'Division',
        cities: [
          { name: 'Sylhet', lat: 24.8949, lng: 91.8687, timezone: 'Asia/Dhaka', utcOffset: 'UTC+6', postalFormat: '3100' },
        ],
      },
    ],
  },
  {
    name: 'Bhutan',
    code: 'BT',
    code3: 'BTN',
    capital: 'Thimphu',
    currency: 'BTN (Bhutanese Ngultrum - Nu.)',
    dialCode: '+975',
    divisionType: 'District (Dzongkhag)',
    divisions: [
      {
        name: 'Thimphu District',
        type: 'District',
        cities: [
          { name: 'Thimphu', lat: 27.4728, lng: 89.6393, timezone: 'Asia/Thimphu', utcOffset: 'UTC+6', postalFormat: '11001' },
          { name: 'Babesa', lat: 27.4300, lng: 89.6500, timezone: 'Asia/Thimphu', utcOffset: 'UTC+6', postalFormat: '11002' },
        ],
      },
      {
        name: 'Paro District',
        type: 'District',
        cities: [
          { name: 'Paro', lat: 27.4283, lng: 89.4164, timezone: 'Asia/Thimphu', utcOffset: 'UTC+6', postalFormat: '12001' },
        ],
      },
    ],
  },
  {
    name: 'Brunei',
    code: 'BN',
    code3: 'BRN',
    capital: 'Bandar Seri Begawan',
    currency: 'BND (Brunei Dollar - B$)',
    dialCode: '+673',
    divisionType: 'District (Daerah)',
    divisions: [
      {
        name: 'Brunei-Muara District',
        type: 'District',
        cities: [
          { name: 'Bandar Seri Begawan', lat: 4.9031, lng: 114.9398, timezone: 'Asia/Brunei', utcOffset: 'UTC+8', postalFormat: 'BS8811' },
          { name: 'Gadong', lat: 4.9000, lng: 114.9167, timezone: 'Asia/Brunei', utcOffset: 'UTC+8', postalFormat: 'BE1118' },
          { name: 'Jerudong', lat: 4.9500, lng: 114.8333, timezone: 'Asia/Brunei', utcOffset: 'UTC+8', postalFormat: 'BG3122' },
        ],
      },
      {
        name: 'Belait District',
        type: 'District',
        cities: [
          { name: 'Kuala Belait', lat: 4.5836, lng: 114.2312, timezone: 'Asia/Brunei', utcOffset: 'UTC+8', postalFormat: 'KA1131' },
        ],
      },
    ],
  },
  {
    name: 'Cambodia',
    code: 'KH',
    code3: 'KHM',
    capital: 'Phnom Penh',
    currency: 'KHR (Cambodian Riel - ៛)',
    dialCode: '+855',
    divisionType: 'Province / Autonomous Municipality',
    divisions: [
      {
        name: 'Phnom Penh Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Phnom Penh', lat: 11.5564, lng: 104.9282, timezone: 'Asia/Phnom_Penh', utcOffset: 'UTC+7', postalFormat: '12000' },
          { name: 'Chamkar Mon', lat: 11.5400, lng: 104.9200, timezone: 'Asia/Phnom_Penh', utcOffset: 'UTC+7', postalFormat: '12300' },
          { name: 'Daun Penh', lat: 11.5700, lng: 104.9250, timezone: 'Asia/Phnom_Penh', utcOffset: 'UTC+7', postalFormat: '12200' },
        ],
      },
      {
        name: 'Siem Reap Province',
        type: 'Province',
        cities: [
          { name: 'Siem Reap', lat: 13.3671, lng: 103.8448, timezone: 'Asia/Phnom_Penh', utcOffset: 'UTC+7', postalFormat: '17000' },
        ],
      },
    ],
  },
  {
    name: 'China',
    code: 'CN',
    code3: 'CHN',
    capital: 'Beijing',
    currency: 'CNY (Chinese Yuan - ¥)',
    dialCode: '+86',
    divisionType: 'Province / Direct Municipality',
    divisions: [
      {
        name: 'Beijing Municipality',
        type: 'Direct Municipality',
        cities: [
          { name: 'Beijing (Chaoyang)', lat: 39.9042, lng: 116.4074, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '100020' },
          { name: 'Haidian', lat: 39.9593, lng: 116.2985, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '100080' },
          { name: 'Dongcheng', lat: 39.9285, lng: 116.4164, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '100010' },
        ],
      },
      {
        name: 'Shanghai Municipality',
        type: 'Direct Municipality',
        cities: [
          { name: 'Shanghai (Pudong)', lat: 31.2304, lng: 121.4737, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '200120' },
          { name: 'Huangpu', lat: 31.2317, lng: 121.4844, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '200001' },
          { name: 'Jing\'an', lat: 31.2288, lng: 121.4481, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '200040' },
        ],
      },
      {
        name: 'Guangdong Province',
        type: 'Province',
        cities: [
          { name: 'Guangzhou', lat: 23.1291, lng: 113.2644, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '510000' },
          { name: 'Shenzhen', lat: 22.5431, lng: 114.0579, timezone: 'Asia/Shanghai', utcOffset: 'UTC+8', postalFormat: '518000' },
        ],
      },
    ],
  },
  {
    name: 'Cyprus',
    code: 'CY',
    code3: 'CYP',
    capital: 'Nicosia',
    currency: 'EUR (Euro - €)',
    dialCode: '+357',
    divisionType: 'District',
    divisions: [
      {
        name: 'Nicosia District',
        type: 'District',
        cities: [
          { name: 'Nicosia', lat: 35.1856, lng: 33.3823, timezone: 'Asia/Nicosia', utcOffset: 'UTC+2', postalFormat: '1010' },
          { name: 'Strovolos', lat: 35.1489, lng: 33.3486, timezone: 'Asia/Nicosia', utcOffset: 'UTC+2', postalFormat: '2000' },
        ],
      },
      {
        name: 'Limassol District',
        type: 'District',
        cities: [
          { name: 'Limassol', lat: 34.6786, lng: 33.0413, timezone: 'Asia/Nicosia', utcOffset: 'UTC+2', postalFormat: '3010' },
        ],
      },
    ],
  },
  {
    name: 'Georgia',
    code: 'GE',
    code3: 'GEO',
    capital: 'Tbilisi',
    currency: 'GEL (Georgian Lari - ₾)',
    dialCode: '+995',
    divisionType: 'Region / Capital City',
    divisions: [
      {
        name: 'Tbilisi Capital City',
        type: 'Capital City',
        cities: [
          { name: 'Tbilisi', lat: 41.7151, lng: 44.8271, timezone: 'Asia/Tbilisi', utcOffset: 'UTC+4', postalFormat: '0105' },
          { name: 'Vake', lat: 41.7100, lng: 44.7600, timezone: 'Asia/Tbilisi', utcOffset: 'UTC+4', postalFormat: '0179' },
          { name: 'Saburtalo', lat: 41.7300, lng: 44.7700, timezone: 'Asia/Tbilisi', utcOffset: 'UTC+4', postalFormat: '0160' },
        ],
      },
      {
        name: 'Adjara Autonomous Republic',
        type: 'Autonomous Republic',
        cities: [
          { name: 'Batumi', lat: 41.6416, lng: 41.6359, timezone: 'Asia/Tbilisi', utcOffset: 'UTC+4', postalFormat: '6000' },
        ],
      },
    ],
  },
  {
    name: 'India',
    code: 'IN',
    code3: 'IND',
    capital: 'New Delhi',
    currency: 'INR (Indian Rupee - ₹)',
    dialCode: '+91',
    divisionType: 'State / Union Territory',
    divisions: [
      {
        name: 'Maharashtra',
        type: 'State',
        cities: [
          { name: 'Mumbai', lat: 19.0760, lng: 72.8777, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '400001' },
          { name: 'Pune', lat: 18.5204, lng: 73.8567, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '411001' },
          { name: 'Nagpur', lat: 21.1458, lng: 79.0882, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '440001' },
          { name: 'Navi Mumbai', lat: 19.0330, lng: 73.0297, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '400703' },
        ],
      },
      {
        name: 'Delhi NCR',
        type: 'Union Territory',
        cities: [
          { name: 'New Delhi', lat: 28.6139, lng: 77.2090, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '110001' },
          { name: 'Connaught Place', lat: 28.6315, lng: 77.2167, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '110001' },
          { name: 'Dwarka', lat: 28.5921, lng: 77.0460, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '110075' },
        ],
      },
      {
        name: 'Karnataka',
        type: 'State',
        cities: [
          { name: 'Bengaluru (Bangalore)', lat: 12.9716, lng: 77.5946, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '560001' },
          { name: 'Whitefield', lat: 12.9698, lng: 77.7499, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '560066' },
          { name: 'Koramangala', lat: 12.9352, lng: 77.6245, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '560034' },
        ],
      },
      {
        name: 'Telangana',
        type: 'State',
        cities: [
          { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '500001' },
          { name: 'HITEC City', lat: 17.4435, lng: 78.3772, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '500081' },
        ],
      },
      {
        name: 'Tamil Nadu',
        type: 'State',
        cities: [
          { name: 'Chennai', lat: 13.0827, lng: 80.2707, timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', postalFormat: '600001' },
        ],
      },
    ],
  },
  {
    name: 'Indonesia',
    code: 'ID',
    code3: 'IDN',
    capital: 'Jakarta / Nusantara',
    currency: 'IDR (Indonesian Rupiah - Rp)',
    dialCode: '+62',
    divisionType: 'Province / Special Region',
    divisions: [
      {
        name: 'DKI Jakarta Special Capital Region',
        type: 'Special Capital Region',
        cities: [
          { name: 'Central Jakarta', lat: -6.1818, lng: 106.8227, timezone: 'Asia/Jakarta', utcOffset: 'UTC+7', postalFormat: '10110' },
          { name: 'South Jakarta', lat: -6.2615, lng: 106.8106, timezone: 'Asia/Jakarta', utcOffset: 'UTC+7', postalFormat: '12110' },
          { name: 'West Jakarta', lat: -6.1683, lng: 106.7589, timezone: 'Asia/Jakarta', utcOffset: 'UTC+7', postalFormat: '11110' },
        ],
      },
      {
        name: 'Bali Province',
        type: 'Province',
        cities: [
          { name: 'Denpasar', lat: -8.6705, lng: 115.2126, timezone: 'Asia/Makassar', utcOffset: 'UTC+8', postalFormat: '80111' },
          { name: 'Kuta', lat: -8.7185, lng: 115.1686, timezone: 'Asia/Makassar', utcOffset: 'UTC+8', postalFormat: '80361' },
          { name: 'Ubud', lat: -8.5069, lng: 115.2625, timezone: 'Asia/Makassar', utcOffset: 'UTC+8', postalFormat: '80571' },
        ],
      },
      {
        name: 'West Java Province',
        type: 'Province',
        cities: [
          { name: 'Bandung', lat: -6.9175, lng: 107.6191, timezone: 'Asia/Jakarta', utcOffset: 'UTC+7', postalFormat: '40111' },
          { name: 'Bekasi', lat: -6.2383, lng: 106.9756, timezone: 'Asia/Jakarta', utcOffset: 'UTC+7', postalFormat: '17111' },
        ],
      },
    ],
  },
  {
    name: 'Iran',
    code: 'IR',
    code3: 'IRN',
    capital: 'Tehran',
    currency: 'IRR (Iranian Rial - ﷼)',
    dialCode: '+98',
    divisionType: 'Province (Ostan)',
    divisions: [
      {
        name: 'Tehran Province',
        type: 'Province',
        cities: [
          { name: 'Tehran', lat: 35.6892, lng: 51.3890, timezone: 'Asia/Tehran', utcOffset: 'UTC+3:30', postalFormat: '11369' },
          { name: 'Shemiran', lat: 35.8000, lng: 51.4300, timezone: 'Asia/Tehran', utcOffset: 'UTC+3:30', postalFormat: '19000' },
          { name: 'Rey', lat: 35.5900, lng: 51.4400, timezone: 'Asia/Tehran', utcOffset: 'UTC+3:30', postalFormat: '18700' },
        ],
      },
      {
        name: 'Isfahan Province',
        type: 'Province',
        cities: [
          { name: 'Isfahan', lat: 32.6546, lng: 51.6680, timezone: 'Asia/Tehran', utcOffset: 'UTC+3:30', postalFormat: '81465' },
        ],
      },
      {
        name: 'Fars Province',
        type: 'Province',
        cities: [
          { name: 'Shiraz', lat: 29.5918, lng: 52.5837, timezone: 'Asia/Tehran', utcOffset: 'UTC+3:30', postalFormat: '71365' },
        ],
      },
    ],
  },
  {
    name: 'Iraq',
    code: 'IQ',
    code3: 'IRQ',
    capital: 'Baghdad',
    currency: 'IQD (Iraqi Dinar - ع.د)',
    dialCode: '+964',
    divisionType: 'Governorate (Muhafazah)',
    divisions: [
      {
        name: 'Baghdad Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Baghdad', lat: 33.3152, lng: 44.3661, timezone: 'Asia/Baghdad', utcOffset: 'UTC+3', postalFormat: '10001' },
          { name: 'Karrada', lat: 33.3000, lng: 44.4200, timezone: 'Asia/Baghdad', utcOffset: 'UTC+3', postalFormat: '10011' },
          { name: 'Mansour', lat: 33.3200, lng: 44.3500, timezone: 'Asia/Baghdad', utcOffset: 'UTC+3', postalFormat: '10022' },
        ],
      },
      {
        name: 'Basra Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Basra', lat: 30.5081, lng: 47.7835, timezone: 'Asia/Baghdad', utcOffset: 'UTC+3', postalFormat: '61001' },
        ],
      },
      {
        name: 'Erbil Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Erbil (Hawler)', lat: 36.1911, lng: 44.0092, timezone: 'Asia/Baghdad', utcOffset: 'UTC+3', postalFormat: '44001' },
        ],
      },
    ],
  },
  {
    name: 'Israel',
    code: 'IL',
    code3: 'ISR',
    capital: 'Jerusalem',
    currency: 'ILS (Israeli New Shekel - ₪)',
    dialCode: '+972',
    divisionType: 'District (Mehoz)',
    divisions: [
      {
        name: 'Tel Aviv District',
        type: 'District',
        cities: [
          { name: 'Tel Aviv-Yafo', lat: 32.0853, lng: 34.7818, timezone: 'Asia/Jerusalem', utcOffset: 'UTC+2', postalFormat: '6100000' },
          { name: 'Ramat Gan', lat: 32.0684, lng: 34.8248, timezone: 'Asia/Jerusalem', utcOffset: 'UTC+2', postalFormat: '5200000' },
          { name: 'Herzliya', lat: 32.1663, lng: 34.8432, timezone: 'Asia/Jerusalem', utcOffset: 'UTC+2', postalFormat: '4610000' },
        ],
      },
      {
        name: 'Jerusalem District',
        type: 'District',
        cities: [
          { name: 'Jerusalem', lat: 31.7683, lng: 35.2137, timezone: 'Asia/Jerusalem', utcOffset: 'UTC+2', postalFormat: '9100000' },
        ],
      },
      {
        name: 'Haifa District',
        type: 'District',
        cities: [
          { name: 'Haifa', lat: 32.7940, lng: 34.9896, timezone: 'Asia/Jerusalem', utcOffset: 'UTC+2', postalFormat: '3100000' },
        ],
      },
    ],
  },
  {
    name: 'Japan',
    code: 'JP',
    code3: 'JPN',
    capital: 'Tokyo',
    currency: 'JPY (Japanese Yen - ¥)',
    dialCode: '+81',
    divisionType: 'Prefecture',
    divisions: [
      {
        name: 'Tokyo Metropolis',
        type: 'Prefecture',
        cities: [
          { name: 'Shinjuku', lat: 35.6938, lng: 139.7034, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '160-0022' },
          { name: 'Shibuya', lat: 35.6580, lng: 139.7016, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '150-0002' },
          { name: 'Chiyoda (Marunouchi)', lat: 35.6812, lng: 139.7671, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '100-0005' },
          { name: 'Minato (Roppongi)', lat: 35.6628, lng: 139.7314, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '106-0032' },
        ],
      },
      {
        name: 'Osaka Prefecture',
        type: 'Prefecture',
        cities: [
          { name: 'Osaka (Kita-ku)', lat: 34.7025, lng: 135.4959, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '530-0001' },
          { name: 'Namba (Chuo-ku)', lat: 34.6667, lng: 135.5000, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '542-0076' },
        ],
      },
      {
        name: 'Kanagawa Prefecture',
        type: 'Prefecture',
        cities: [
          { name: 'Yokohama', lat: 35.4437, lng: 139.6380, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '220-0011' },
          { name: 'Kawasaki', lat: 35.5308, lng: 139.7029, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '210-0007' },
        ],
      },
      {
        name: 'Kyoto Prefecture',
        type: 'Prefecture',
        cities: [
          { name: 'Kyoto', lat: 35.0116, lng: 135.7681, timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', postalFormat: '604-8571' },
        ],
      },
    ],
  },
  {
    name: 'Jordan',
    code: 'JO',
    code3: 'JOR',
    capital: 'Amman',
    currency: 'JOD (Jordanian Dinar - د.ا)',
    dialCode: '+962',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Amman Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Amman', lat: 31.9454, lng: 35.9284, timezone: 'Asia/Amman', utcOffset: 'UTC+3', postalFormat: '11118' },
          { name: 'Abdoun', lat: 31.9500, lng: 35.8800, timezone: 'Asia/Amman', utcOffset: 'UTC+3', postalFormat: '11183' },
          { name: 'Shmeisani', lat: 31.9700, lng: 35.9000, timezone: 'Asia/Amman', utcOffset: 'UTC+3', postalFormat: '11194' },
        ],
      },
      {
        name: 'Aqaba Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Aqaba', lat: 29.5321, lng: 35.0063, timezone: 'Asia/Amman', utcOffset: 'UTC+3', postalFormat: '77110' },
        ],
      },
    ],
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    code3: 'KAZ',
    capital: 'Astana',
    currency: 'KZT (Kazakhstani Tenge - ₸)',
    dialCode: '+7',
    divisionType: 'Region / City of Republican Significance',
    divisions: [
      {
        name: 'Astana Special Capital City',
        type: 'Special Capital City',
        cities: [
          { name: 'Astana', lat: 51.1694, lng: 71.4491, timezone: 'Asia/Almaty', utcOffset: 'UTC+5', postalFormat: '010000' },
          { name: 'Yesil District', lat: 51.1300, lng: 71.4200, timezone: 'Asia/Almaty', utcOffset: 'UTC+5', postalFormat: '010016' },
        ],
      },
      {
        name: 'Almaty Special City',
        type: 'Special City',
        cities: [
          { name: 'Almaty', lat: 43.2220, lng: 76.8512, timezone: 'Asia/Almaty', utcOffset: 'UTC+5', postalFormat: '050000' },
          { name: 'Medeu District', lat: 43.2300, lng: 76.9500, timezone: 'Asia/Almaty', utcOffset: 'UTC+5', postalFormat: '050010' },
        ],
      },
      {
        name: 'Shymkent Special City',
        type: 'Special City',
        cities: [
          { name: 'Shymkent', lat: 42.3417, lng: 69.5901, timezone: 'Asia/Almaty', utcOffset: 'UTC+5', postalFormat: '160000' },
        ],
      },
    ],
  },
  {
    name: 'Kuwait',
    code: 'KW',
    code3: 'KWT',
    capital: 'Kuwait City',
    currency: 'KWD (Kuwaiti Dinar - د.ك)',
    dialCode: '+965',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Capital (Asimah) Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Kuwait City', lat: 29.3759, lng: 47.9774, timezone: 'Asia/Kuwait', utcOffset: 'UTC+3', postalFormat: '13001' },
          { name: 'Sharq', lat: 29.3850, lng: 47.9900, timezone: 'Asia/Kuwait', utcOffset: 'UTC+3', postalFormat: '15300' },
          { name: 'Mirqab', lat: 29.3700, lng: 47.9800, timezone: 'Asia/Kuwait', utcOffset: 'UTC+3', postalFormat: '15000' },
        ],
      },
      {
        name: 'Hawalli Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Hawalli', lat: 29.3328, lng: 48.0281, timezone: 'Asia/Kuwait', utcOffset: 'UTC+3', postalFormat: '32001' },
          { name: 'Salmiya', lat: 29.3344, lng: 48.0758, timezone: 'Asia/Kuwait', utcOffset: 'UTC+3', postalFormat: '22001' },
        ],
      },
    ],
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    code3: 'KGZ',
    capital: 'Bishkek',
    currency: 'KGS (Kyrgyzstani Som - сом)',
    dialCode: '+996',
    divisionType: 'Region / Independent City',
    divisions: [
      {
        name: 'Bishkek Independent City',
        type: 'Independent City',
        cities: [
          { name: 'Bishkek', lat: 42.8746, lng: 74.5698, timezone: 'Asia/Bishkek', utcOffset: 'UTC+6', postalFormat: '720000' },
          { name: 'Pervomaysky', lat: 42.8800, lng: 74.5900, timezone: 'Asia/Bishkek', utcOffset: 'UTC+6', postalFormat: '720001' },
        ],
      },
      {
        name: 'Osh Region / City',
        type: 'Region',
        cities: [
          { name: 'Osh', lat: 40.5140, lng: 72.8161, timezone: 'Asia/Bishkek', utcOffset: 'UTC+6', postalFormat: '723500' },
        ],
      },
    ],
  },
  {
    name: 'Laos',
    code: 'LA',
    code3: 'LAO',
    capital: 'Vientiane',
    currency: 'LAK (Lao Kip - ₭)',
    dialCode: '+856',
    divisionType: 'Prefecture / Province',
    divisions: [
      {
        name: 'Vientiane Prefecture',
        type: 'Prefecture',
        cities: [
          { name: 'Vientiane', lat: 17.9757, lng: 102.6331, timezone: 'Asia/Vientiane', utcOffset: 'UTC+7', postalFormat: '01000' },
          { name: 'Chanthabouly', lat: 17.9800, lng: 102.6200, timezone: 'Asia/Vientiane', utcOffset: 'UTC+7', postalFormat: '01010' },
        ],
      },
      {
        name: 'Luang Prabang Province',
        type: 'Province',
        cities: [
          { name: 'Luang Prabang', lat: 19.8893, lng: 102.1347, timezone: 'Asia/Vientiane', utcOffset: 'UTC+7', postalFormat: '06000' },
        ],
      },
    ],
  },
  {
    name: 'Lebanon',
    code: 'LB',
    code3: 'LBN',
    capital: 'Beirut',
    currency: 'LBP (Lebanese Pound - ل.ل)',
    dialCode: '+961',
    divisionType: 'Governorate (Mohafazah)',
    divisions: [
      {
        name: 'Beirut Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Beirut', lat: 33.8938, lng: 35.5018, timezone: 'Asia/Beirut', utcOffset: 'UTC+2', postalFormat: '1107' },
          { name: 'Hamra', lat: 33.8967, lng: 35.4833, timezone: 'Asia/Beirut', utcOffset: 'UTC+2', postalFormat: '2034' },
          { name: 'Achrafieh', lat: 33.8867, lng: 35.5200, timezone: 'Asia/Beirut', utcOffset: 'UTC+2', postalFormat: '2060' },
        ],
      },
      {
        name: 'Mount Lebanon',
        type: 'Governorate',
        cities: [
          { name: 'Jounieh', lat: 33.9808, lng: 35.6178, timezone: 'Asia/Beirut', utcOffset: 'UTC+2', postalFormat: '1200' },
          { name: 'Byblos (Jbeil)', lat: 34.1230, lng: 35.6519, timezone: 'Asia/Beirut', utcOffset: 'UTC+2', postalFormat: '1401' },
        ],
      },
    ],
  },
  {
    name: 'Malaysia',
    code: 'MY',
    code3: 'MYS',
    capital: 'Kuala Lumpur',
    currency: 'MYR (Malaysian Ringgit - RM)',
    dialCode: '+60',
    divisionType: 'State / Federal Territory',
    divisions: [
      {
        name: 'Federal Territory of Kuala Lumpur',
        type: 'Federal Territory',
        cities: [
          { name: 'Kuala Lumpur (KLCC)', lat: 3.1578, lng: 101.7118, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '50088' },
          { name: 'Bukit Bintang', lat: 3.1466, lng: 101.7114, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '55100' },
          { name: 'Bangsar', lat: 3.1292, lng: 101.6784, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '59000' },
          { name: 'Mont Kiara', lat: 3.1678, lng: 101.6528, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '50480' },
        ],
      },
      {
        name: 'Selangor',
        type: 'State',
        cities: [
          { name: 'Petaling Jaya', lat: 3.1073, lng: 101.6067, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '46000' },
          { name: 'Shah Alam', lat: 3.0738, lng: 101.5183, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '40000' },
          { name: 'Cyberjaya', lat: 2.9213, lng: 101.6559, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '63000' },
        ],
      },
      {
        name: 'Penang',
        type: 'State',
        cities: [
          { name: 'George Town', lat: 5.4141, lng: 100.3288, timezone: 'Asia/Kuala_Lumpur', utcOffset: 'UTC+8', postalFormat: '10200' },
        ],
      },
    ],
  },
  {
    name: 'Maldives',
    code: 'MV',
    code3: 'MDV',
    capital: 'Malé',
    currency: 'MVR (Maldivian Rufiyaa - Rf)',
    dialCode: '+960',
    divisionType: 'Administrative Atoll / City',
    divisions: [
      {
        name: 'Malé City',
        type: 'City',
        cities: [
          { name: 'Malé', lat: 4.1755, lng: 73.5093, timezone: 'Indian/Maldives', utcOffset: 'UTC+5', postalFormat: '20002' },
          { name: 'Hulhumalé', lat: 4.2133, lng: 73.5414, timezone: 'Indian/Maldives', utcOffset: 'UTC+5', postalFormat: '23000' },
          { name: 'Vilimalé', lat: 4.1733, lng: 73.4867, timezone: 'Indian/Maldives', utcOffset: 'UTC+5', postalFormat: '20300' },
        ],
      },
      {
        name: 'Addu City',
        type: 'City',
        cities: [
          { name: 'Hithadhoo', lat: -0.6000, lng: 73.0833, timezone: 'Indian/Maldives', utcOffset: 'UTC+5', postalFormat: '19020' },
        ],
      },
    ],
  },
  {
    name: 'Mongolia',
    code: 'MN',
    code3: 'MNG',
    capital: 'Ulaanbaatar',
    currency: 'MNT (Mongolian Tögrög - ₮)',
    dialCode: '+976',
    divisionType: 'Province (Aimag) / Capital Municipality',
    divisions: [
      {
        name: 'Ulaanbaatar Capital Municipality',
        type: 'Capital Municipality',
        cities: [
          { name: 'Ulaanbaatar', lat: 47.8864, lng: 106.9057, timezone: 'Asia/Ulaanbaatar', utcOffset: 'UTC+8', postalFormat: '14200' },
          { name: 'Sükhbaatar District', lat: 47.9200, lng: 106.9200, timezone: 'Asia/Ulaanbaatar', utcOffset: 'UTC+8', postalFormat: '14201' },
          { name: 'Bayanzürkh District', lat: 47.9100, lng: 106.9600, timezone: 'Asia/Ulaanbaatar', utcOffset: 'UTC+8', postalFormat: '13300' },
        ],
      },
      {
        name: 'Darkhan-Uul Province',
        type: 'Province',
        cities: [
          { name: 'Darkhan', lat: 49.4867, lng: 105.9228, timezone: 'Asia/Ulaanbaatar', utcOffset: 'UTC+8', postalFormat: '45000' },
        ],
      },
    ],
  },
  {
    name: 'Myanmar',
    code: 'MM',
    code3: 'MMR',
    capital: 'Naypyidaw',
    currency: 'MMK (Myanmar Kyat - K)',
    dialCode: '+95',
    divisionType: 'Region / State',
    divisions: [
      {
        name: 'Yangon Region',
        type: 'Region',
        cities: [
          { name: 'Yangon', lat: 16.8661, lng: 96.1951, timezone: 'Asia/Yangon', utcOffset: 'UTC+6:30', postalFormat: '11181' },
          { name: 'Bahan', lat: 16.8150, lng: 96.1550, timezone: 'Asia/Yangon', utcOffset: 'UTC+6:30', postalFormat: '11201' },
        ],
      },
      {
        name: 'Naypyidaw Union Territory',
        type: 'Union Territory',
        cities: [
          { name: 'Naypyidaw', lat: 19.7633, lng: 96.0785, timezone: 'Asia/Yangon', utcOffset: 'UTC+6:30', postalFormat: '15011' },
        ],
      },
      {
        name: 'Mandalay Region',
        type: 'Region',
        cities: [
          { name: 'Mandalay', lat: 21.9588, lng: 96.0891, timezone: 'Asia/Yangon', utcOffset: 'UTC+6:30', postalFormat: '05021' },
        ],
      },
    ],
  },
  {
    name: 'Nepal',
    code: 'NP',
    code3: 'NPL',
    capital: 'Kathmandu',
    currency: 'NPR (Nepalese Rupee - ₨)',
    dialCode: '+977',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Bagmati Province',
        type: 'Province',
        cities: [
          { name: 'Kathmandu', lat: 27.7172, lng: 85.3240, timezone: 'Asia/Kathmandu', utcOffset: 'UTC+5:45', postalFormat: '44600' },
          { name: 'Lalitpur (Patan)', lat: 27.6644, lng: 85.3188, timezone: 'Asia/Kathmandu', utcOffset: 'UTC+5:45', postalFormat: '44700' },
          { name: 'Bhaktapur', lat: 27.6710, lng: 85.4298, timezone: 'Asia/Kathmandu', utcOffset: 'UTC+5:45', postalFormat: '44800' },
        ],
      },
      {
        name: 'Gandaki Province',
        type: 'Province',
        cities: [
          { name: 'Pokhara', lat: 28.2096, lng: 83.9856, timezone: 'Asia/Kathmandu', utcOffset: 'UTC+5:45', postalFormat: '33700' },
        ],
      },
    ],
  },
  {
    name: 'North Korea',
    code: 'KP',
    code3: 'PRK',
    capital: 'Pyongyang',
    currency: 'KPW (North Korean Won - ₩)',
    dialCode: '+850',
    divisionType: 'Directly Administered Municipality / Province',
    divisions: [
      {
        name: 'Pyongyang Directly Administered City',
        type: 'Municipality',
        cities: [
          { name: 'Pyongyang', lat: 39.0392, lng: 125.7625, timezone: 'Asia/Pyongyang', utcOffset: 'UTC+9', postalFormat: '00000' },
          { name: 'Chung-guyok', lat: 39.0180, lng: 125.7500, timezone: 'Asia/Pyongyang', utcOffset: 'UTC+9', postalFormat: '00001' },
        ],
      },
      {
        name: 'South Hamgyong Province',
        type: 'Province',
        cities: [
          { name: 'Hamhung', lat: 39.9167, lng: 127.5333, timezone: 'Asia/Pyongyang', utcOffset: 'UTC+9', postalFormat: '00002' },
        ],
      },
    ],
  },
  {
    name: 'Oman',
    code: 'OM',
    code3: 'OMN',
    capital: 'Muscat',
    currency: 'OMR (Omani Rial - ر.ع.)',
    dialCode: '+968',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Muscat Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Muscat', lat: 23.5880, lng: 58.3829, timezone: 'Asia/Muscat', utcOffset: 'UTC+4', postalFormat: '100' },
          { name: 'Muttrah', lat: 23.6186, lng: 58.5622, timezone: 'Asia/Muscat', utcOffset: 'UTC+4', postalFormat: '114' },
          { name: 'Seeb', lat: 23.6703, lng: 58.1891, timezone: 'Asia/Muscat', utcOffset: 'UTC+4', postalFormat: '121' },
          { name: 'Bawshar', lat: 23.5500, lng: 58.4000, timezone: 'Asia/Muscat', utcOffset: 'UTC+4', postalFormat: '133' },
        ],
      },
      {
        name: 'Dhofar Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Salalah', lat: 17.0151, lng: 54.0924, timezone: 'Asia/Muscat', utcOffset: 'UTC+4', postalFormat: '211' },
        ],
      },
    ],
  },
  {
    name: 'Pakistan',
    code: 'PK',
    code3: 'PAK',
    capital: 'Islamabad',
    currency: 'PKR (Pakistani Rupee - ₨)',
    dialCode: '+92',
    divisionType: 'Province / Federal Territory',
    divisions: [
      {
        name: 'Islamabad Capital Territory',
        type: 'Federal Territory',
        cities: [
          { name: 'Islamabad', lat: 33.6844, lng: 73.0479, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '44000' },
          { name: 'Sector F-6', lat: 33.7300, lng: 73.0700, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '44210' },
          { name: 'Sector F-7', lat: 33.7200, lng: 73.0500, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '44220' },
        ],
      },
      {
        name: 'Sindh',
        type: 'Province',
        cities: [
          { name: 'Karachi', lat: 24.8607, lng: 67.0011, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '74200' },
          { name: 'Clifton', lat: 24.8138, lng: 67.0300, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '75600' },
          { name: 'DHA Karachi', lat: 24.8050, lng: 67.0700, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '75500' },
        ],
      },
      {
        name: 'Punjab',
        type: 'Province',
        cities: [
          { name: 'Lahore', lat: 31.5204, lng: 74.3587, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '54000' },
          { name: 'Rawalpindi', lat: 33.5984, lng: 73.0441, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '46000' },
          { name: 'Faisalabad', lat: 31.4504, lng: 73.1350, timezone: 'Asia/Karachi', utcOffset: 'UTC+5', postalFormat: '38000' },
        ],
      },
    ],
  },
  {
    name: 'Palestine',
    code: 'PS',
    code3: 'PSE',
    capital: 'Ramallah (de facto) / East Jerusalem',
    currency: 'ILS / JOD',
    dialCode: '+970',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Ramallah and al-Bireh Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Ramallah', lat: 31.9038, lng: 35.2034, timezone: 'Asia/Gaza', utcOffset: 'UTC+2', postalFormat: 'P600' },
          { name: 'Al-Bireh', lat: 31.9069, lng: 35.2167, timezone: 'Asia/Gaza', utcOffset: 'UTC+2', postalFormat: 'P602' },
        ],
      },
      {
        name: 'Bethlehem Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Bethlehem', lat: 31.7054, lng: 35.2024, timezone: 'Asia/Gaza', utcOffset: 'UTC+2', postalFormat: 'P500' },
        ],
      },
    ],
  },
  {
    name: 'Philippines',
    code: 'PH',
    code3: 'PHL',
    capital: 'Manila',
    currency: 'PHP (Philippine Peso - ₱)',
    dialCode: '+63',
    divisionType: 'Region / Province',
    divisions: [
      {
        name: 'National Capital Region (Metro Manila)',
        type: 'Region',
        cities: [
          { name: 'Manila', lat: 14.5995, lng: 120.9842, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '1000' },
          { name: 'Makati (BGC / CBD)', lat: 14.5547, lng: 121.0244, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '1200' },
          { name: 'Quezon City', lat: 14.6760, lng: 121.0437, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '1100' },
          { name: 'Taguig (Bonifacio Global City)', lat: 14.5176, lng: 121.0509, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '1634' },
          { name: 'Pasig (Ortigas)', lat: 14.5764, lng: 121.0851, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '1600' },
        ],
      },
      {
        name: 'Central Visayas (Cebu)',
        type: 'Region',
        cities: [
          { name: 'Cebu City', lat: 10.3157, lng: 123.8854, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '6000' },
          { name: 'Lapu-Lapu City', lat: 10.3117, lng: 123.9494, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '6015' },
        ],
      },
      {
        name: 'Davao Region',
        type: 'Region',
        cities: [
          { name: 'Davao City', lat: 7.1907, lng: 125.4504, timezone: 'Asia/Manila', utcOffset: 'UTC+8', postalFormat: '8000' },
        ],
      },
    ],
  },
  {
    name: 'Qatar',
    code: 'QA',
    code3: 'QAT',
    capital: 'Doha',
    currency: 'QAR (Qatari Riyal - ر.ق)',
    dialCode: '+974',
    divisionType: 'Municipality (Baladiyah)',
    divisions: [
      {
        name: 'Ad-Dawhah (Doha Municipality)',
        type: 'Municipality',
        cities: [
          { name: 'Doha', lat: 25.2854, lng: 51.5310, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00000' },
          { name: 'West Bay', lat: 25.3200, lng: 51.5300, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00001' },
          { name: 'The Pearl-Qatar', lat: 25.3688, lng: 51.5511, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00002' },
          { name: 'Lusail', lat: 25.4190, lng: 51.5034, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00003' },
        ],
      },
      {
        name: 'Al Rayyan Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Al Rayyan', lat: 25.2919, lng: 51.4244, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00004' },
          { name: 'Education City', lat: 25.3140, lng: 51.4390, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00005' },
        ],
      },
      {
        name: 'Al Wakrah Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Al Wakrah', lat: 25.1768, lng: 51.6048, timezone: 'Asia/Qatar', utcOffset: 'UTC+3', postalFormat: '00006' },
        ],
      },
    ],
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    code3: 'SAU',
    capital: 'Riyadh',
    currency: 'SAR (Saudi Riyal - ر.س)',
    dialCode: '+966',
    divisionType: 'Province (Emirate)',
    divisions: [
      {
        name: 'Riyadh Province',
        type: 'Province',
        cities: [
          { name: 'Riyadh', lat: 24.7136, lng: 46.6753, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '11564' },
          { name: 'Al Olaya', lat: 24.7000, lng: 46.6800, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '12211' },
          { name: 'Al Malqa', lat: 24.8100, lng: 46.6000, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '13521' },
          { name: 'King Abdullah Financial District (KAFD)', lat: 24.7640, lng: 46.6430, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '13519' },
        ],
      },
      {
        name: 'Makkah Province',
        type: 'Province',
        cities: [
          { name: 'Jeddah', lat: 21.4858, lng: 39.1925, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '21577' },
          { name: 'Mecca (Makkah)', lat: 21.3891, lng: 39.8579, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '24231' },
        ],
      },
      {
        name: 'Eastern Province',
        type: 'Province',
        cities: [
          { name: 'Dammam', lat: 26.4207, lng: 50.0888, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '31411' },
          { name: 'Khobar', lat: 26.2172, lng: 50.1971, timezone: 'Asia/Riyadh', utcOffset: 'UTC+3', postalFormat: '31952' },
        ],
      },
    ],
  },
  {
    name: 'Singapore',
    code: 'SG',
    code3: 'SGP',
    capital: 'Singapore',
    currency: 'SGD (Singapore Dollar - S$)',
    dialCode: '+65',
    divisionType: 'Community Development Council (District)',
    divisions: [
      {
        name: 'Central Singapore District',
        type: 'District',
        cities: [
          { name: 'Marina Bay / Downtown Core', lat: 1.2838, lng: 103.8591, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '018981' },
          { name: 'Orchard Road', lat: 1.3048, lng: 103.8318, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '238865' },
          { name: 'Tanjong Pagar', lat: 1.2764, lng: 103.8431, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '088837' },
          { name: 'Bugis / Rochor', lat: 1.3008, lng: 103.8558, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '188067' },
        ],
      },
      {
        name: 'South West District',
        type: 'District',
        cities: [
          { name: 'Jurong East', lat: 1.3329, lng: 103.7436, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '609606' },
          { name: 'One-North / Buona Vista', lat: 1.2990, lng: 103.7872, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '138644' },
        ],
      },
      {
        name: 'North East District',
        type: 'District',
        cities: [
          { name: 'Ang Mo Kio', lat: 1.3691, lng: 103.8454, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '569814' },
          { name: 'Punggol', lat: 1.4052, lng: 103.9023, timezone: 'Asia/Singapore', utcOffset: 'UTC+8', postalFormat: '828815' },
        ],
      },
    ],
  },
  {
    name: 'South Korea',
    code: 'KR',
    code3: 'KOR',
    capital: 'Seoul',
    currency: 'KRW (South Korean Won - ₩)',
    dialCode: '+82',
    divisionType: 'Special City / Province',
    divisions: [
      {
        name: 'Seoul Special City',
        type: 'Special City',
        cities: [
          { name: 'Gangnam-gu', lat: 37.5172, lng: 127.0473, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '06000' },
          { name: 'Jung-gu (Myeongdong / City Hall)', lat: 37.5642, lng: 126.9975, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '04500' },
          { name: 'Mapo-gu (Hongdae)', lat: 37.5663, lng: 126.9016, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '03900' },
          { name: 'Seocho-gu', lat: 37.4837, lng: 127.0324, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '06500' },
          { name: 'Songpa-gu (Jamsil)', lat: 37.5145, lng: 127.1058, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '05500' },
        ],
      },
      {
        name: 'Gyeonggi-do',
        type: 'Province',
        cities: [
          { name: 'Seongnam (Pangyo Techno Valley)', lat: 37.4200, lng: 127.1267, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '13494' },
          { name: 'Suwon', lat: 37.2636, lng: 127.0286, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '16490' },
        ],
      },
      {
        name: 'Busan Metropolitan City',
        type: 'Metropolitan City',
        cities: [
          { name: 'Haeundae-gu', lat: 35.1631, lng: 129.1636, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '48099' },
          { name: 'Busanjin-gu (Seomyeon)', lat: 35.1633, lng: 129.0533, timezone: 'Asia/Seoul', utcOffset: 'UTC+9', postalFormat: '47190' },
        ],
      },
    ],
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    code3: 'LKA',
    capital: 'Sri Jayawardenepura Kotte',
    currency: 'LKR (Sri Lankan Rupee - Rs)',
    dialCode: '+94',
    divisionType: 'Province',
    divisions: [
      {
        name: 'Western Province',
        type: 'Province',
        cities: [
          { name: 'Colombo', lat: 6.9271, lng: 79.8612, timezone: 'Asia/Colombo', utcOffset: 'UTC+5:30', postalFormat: '00100' },
          { name: 'Colombo 03 (Kollupitiya)', lat: 6.9044, lng: 79.8528, timezone: 'Asia/Colombo', utcOffset: 'UTC+5:30', postalFormat: '00300' },
          { name: 'Sri Jayawardenepura Kotte', lat: 6.8944, lng: 79.9025, timezone: 'Asia/Colombo', utcOffset: 'UTC+5:30', postalFormat: '10100' },
        ],
      },
      {
        name: 'Central Province',
        type: 'Province',
        cities: [
          { name: 'Kandy', lat: 7.2906, lng: 80.6337, timezone: 'Asia/Colombo', utcOffset: 'UTC+5:30', postalFormat: '20000' },
        ],
      },
    ],
  },
  {
    name: 'Syria',
    code: 'SY',
    code3: 'SYR',
    capital: 'Damascus',
    currency: 'SYP (Syrian Pound - ل.س)',
    dialCode: '+963',
    divisionType: 'Governorate',
    divisions: [
      {
        name: 'Damascus Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Damascus', lat: 33.5138, lng: 36.2765, timezone: 'Asia/Damascus', utcOffset: 'UTC+3', postalFormat: '00000' },
          { name: 'Mazza', lat: 33.5000, lng: 36.2500, timezone: 'Asia/Damascus', utcOffset: 'UTC+3', postalFormat: '00001' },
        ],
      },
      {
        name: 'Aleppo Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Aleppo', lat: 36.2021, lng: 37.1343, timezone: 'Asia/Damascus', utcOffset: 'UTC+3', postalFormat: '00002' },
        ],
      },
    ],
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    code3: 'TJK',
    capital: 'Dushanbe',
    currency: 'TJS (Tajikistani Somoni - SM)',
    dialCode: '+992',
    divisionType: 'Province / City of Republican Subordination',
    divisions: [
      {
        name: 'Dushanbe Capital City',
        type: 'Capital City',
        cities: [
          { name: 'Dushanbe', lat: 38.5598, lng: 68.7870, timezone: 'Asia/Dushanbe', utcOffset: 'UTC+5', postalFormat: '734000' },
          { name: 'Ismoili Somoni', lat: 38.5800, lng: 68.7900, timezone: 'Asia/Dushanbe', utcOffset: 'UTC+5', postalFormat: '734001' },
        ],
      },
      {
        name: 'Sughd Region',
        type: 'Region',
        cities: [
          { name: 'Khujand', lat: 40.2833, lng: 69.6333, timezone: 'Asia/Dushanbe', utcOffset: 'UTC+5', postalFormat: '735700' },
        ],
      },
    ],
  },
  {
    name: 'Thailand',
    code: 'TH',
    code3: 'THA',
    capital: 'Bangkok',
    currency: 'THB (Thai Baht - ฿)',
    dialCode: '+66',
    divisionType: 'Province / Special Administrative Area',
    divisions: [
      {
        name: 'Bangkok Metropolis (Krung Thep)',
        type: 'Special Administrative Area',
        cities: [
          { name: 'Bangkok (Watthana / Sukhumvit)', lat: 13.7380, lng: 100.5840, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '10110' },
          { name: 'Bang Rak (Silom / Sathorn)', lat: 13.7250, lng: 100.5280, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '10500' },
          { name: 'Pathum Wan (Siam)', lat: 13.7440, lng: 100.5330, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '10330' },
          { name: 'Chatuchak', lat: 13.8286, lng: 100.5598, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '10900' },
        ],
      },
      {
        name: 'Phuket Province',
        type: 'Province',
        cities: [
          { name: 'Phuket City', lat: 7.8804, lng: 98.3923, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '83000' },
          { name: 'Patong', lat: 7.8970, lng: 98.2980, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '83150' },
        ],
      },
      {
        name: 'Chiang Mai Province',
        type: 'Province',
        cities: [
          { name: 'Chiang Mai', lat: 18.7883, lng: 98.9853, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '50000' },
          { name: 'Nimmanhaemin', lat: 18.7960, lng: 98.9690, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '50200' },
        ],
      },
      {
        name: 'Chonburi Province',
        type: 'Province',
        cities: [
          { name: 'Pattaya', lat: 12.9276, lng: 100.8771, timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', postalFormat: '20150' },
        ],
      },
    ],
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
    code3: 'TLS',
    capital: 'Dili',
    currency: 'USD (US Dollar - $)',
    dialCode: '+670',
    divisionType: 'Municipality',
    divisions: [
      {
        name: 'Dili Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Dili', lat: -8.5569, lng: 125.5789, timezone: 'Asia/Dili', utcOffset: 'UTC+9', postalFormat: '0000' },
          { name: 'Vera Cruz', lat: -8.5600, lng: 125.5700, timezone: 'Asia/Dili', utcOffset: 'UTC+9', postalFormat: '0001' },
        ],
      },
      {
        name: 'Baucau Municipality',
        type: 'Municipality',
        cities: [
          { name: 'Baucau', lat: -8.4667, lng: 126.4500, timezone: 'Asia/Dili', utcOffset: 'UTC+9', postalFormat: '0002' },
        ],
      },
    ],
  },
  {
    name: 'Türkiye',
    code: 'TR',
    code3: 'TUR',
    capital: 'Ankara',
    currency: 'TRY (Turkish Lira - ₺)',
    dialCode: '+90',
    divisionType: 'Province (İl)',
    divisions: [
      {
        name: 'Istanbul Province',
        type: 'Province',
        cities: [
          { name: 'Istanbul (Beşiktaş)', lat: 41.0428, lng: 29.0077, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '34353' },
          { name: 'Kadıköy', lat: 40.9901, lng: 29.0286, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '34710' },
          { name: 'Şişli (Levent / Maslak)', lat: 41.0600, lng: 28.9870, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '34360' },
          { name: 'Beyoğlu (Taksim)', lat: 41.0370, lng: 28.9770, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '34430' },
        ],
      },
      {
        name: 'Ankara Province',
        type: 'Province',
        cities: [
          { name: 'Ankara (Çankaya)', lat: 39.9208, lng: 32.8541, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '06420' },
          { name: 'Kızılay', lat: 39.9200, lng: 32.8540, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '06430' },
        ],
      },
      {
        name: 'Izmir Province',
        type: 'Province',
        cities: [
          { name: 'Izmir (Konak)', lat: 38.4192, lng: 27.1287, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '35220' },
          { name: 'Alsancak', lat: 38.4380, lng: 27.1420, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '35220' },
        ],
      },
      {
        name: 'Antalya Province',
        type: 'Province',
        cities: [
          { name: 'Antalya (Muratpaşa)', lat: 36.8969, lng: 30.7133, timezone: 'Europe/Istanbul', utcOffset: 'UTC+3', postalFormat: '07100' },
        ],
      },
    ],
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    code3: 'TKM',
    capital: 'Ashgabat',
    currency: 'TMT (Turkmenistani Manat - m)',
    dialCode: '+993',
    divisionType: 'Province (Welayat) / Capital City',
    divisions: [
      {
        name: 'Ashgabat Capital City',
        type: 'Capital City',
        cities: [
          { name: 'Ashgabat', lat: 37.9601, lng: 58.3261, timezone: 'Asia/Ashgabat', utcOffset: 'UTC+5', postalFormat: '744000' },
          { name: 'Berkararlyk', lat: 37.9500, lng: 58.3500, timezone: 'Asia/Ashgabat', utcOffset: 'UTC+5', postalFormat: '744001' },
        ],
      },
      {
        name: 'Balkan Region',
        type: 'Region',
        cities: [
          { name: 'Türkmenbaşy', lat: 40.0222, lng: 52.9556, timezone: 'Asia/Ashgabat', utcOffset: 'UTC+5', postalFormat: '745000' },
        ],
      },
    ],
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    code3: 'ARE',
    capital: 'Abu Dhabi',
    currency: 'AED (UAE Dirham - د.إ)',
    dialCode: '+971',
    divisionType: 'Emirate',
    divisions: [
      {
        name: 'Emirate of Dubai',
        type: 'Emirate',
        cities: [
          { name: 'Downtown Dubai (Burj Khalifa)', lat: 25.1972, lng: 55.2744, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00000' },
          { name: 'Dubai Marina', lat: 25.0805, lng: 55.1403, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00001' },
          { name: 'DIFC (Financial Centre)', lat: 25.2104, lng: 55.2798, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00002' },
          { name: 'Palm Jumeirah', lat: 25.1124, lng: 55.1390, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00003' },
          { name: 'Business Bay', lat: 25.1857, lng: 55.2633, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00004' },
          { name: 'Jumeirah Beach Residence (JBR)', lat: 25.0768, lng: 55.1328, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00005' },
        ],
      },
      {
        name: 'Emirate of Abu Dhabi',
        type: 'Emirate',
        cities: [
          { name: 'Abu Dhabi (Corniche)', lat: 24.4539, lng: 54.3773, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00006' },
          { name: 'Al Maryah Island', lat: 24.5028, lng: 54.3908, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00007' },
          { name: 'Yas Island', lat: 24.4984, lng: 54.6044, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00008' },
          { name: 'Al Ain', lat: 24.2075, lng: 55.7447, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00009' },
        ],
      },
      {
        name: 'Emirate of Sharjah',
        type: 'Emirate',
        cities: [
          { name: 'Sharjah City', lat: 25.3463, lng: 55.4209, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00010' },
          { name: 'Al Majaz', lat: 25.3283, lng: 55.3853, timezone: 'Asia/Dubai', utcOffset: 'UTC+4', postalFormat: '00011' },
        ],
      },
    ],
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    code3: 'UZB',
    capital: 'Tashkent',
    currency: 'UZS (Uzbekistani Som - soʻm)',
    dialCode: '+998',
    divisionType: 'Region (Viloyat) / Capital City',
    divisions: [
      {
        name: 'Tashkent Capital City',
        type: 'Capital City',
        cities: [
          { name: 'Tashkent', lat: 41.2995, lng: 69.2401, timezone: 'Asia/Tashkent', utcOffset: 'UTC+5', postalFormat: '100000' },
          { name: 'Mirzo Ulugbek District', lat: 41.3300, lng: 69.3200, timezone: 'Asia/Tashkent', utcOffset: 'UTC+5', postalFormat: '100077' },
          { name: 'Yunusabad District', lat: 41.3600, lng: 69.2800, timezone: 'Asia/Tashkent', utcOffset: 'UTC+5', postalFormat: '100180' },
        ],
      },
      {
        name: 'Samarkand Region',
        type: 'Region',
        cities: [
          { name: 'Samarkand', lat: 39.6270, lng: 66.9750, timezone: 'Asia/Tashkent', utcOffset: 'UTC+5', postalFormat: '140100' },
        ],
      },
      {
        name: 'Bukhara Region',
        type: 'Region',
        cities: [
          { name: 'Bukhara', lat: 39.7747, lng: 64.4286, timezone: 'Asia/Tashkent', utcOffset: 'UTC+5', postalFormat: '200100' },
        ],
      },
    ],
  },
  {
    name: 'Vietnam',
    code: 'VN',
    code3: 'VNM',
    capital: 'Hanoi',
    currency: 'VND (Vietnamese Dong - ₫)',
    dialCode: '+84',
    divisionType: 'Province / Centrally Governed City',
    divisions: [
      {
        name: 'Hanoi Centrally Governed City',
        type: 'Centrally Governed City',
        cities: [
          { name: 'Hanoi (Hoan Kiem)', lat: 21.0285, lng: 105.8542, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '100000' },
          { name: 'Ba Dinh', lat: 21.0333, lng: 105.8167, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '118000' },
          { name: 'Tay Ho (West Lake)', lat: 21.0667, lng: 105.8167, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '124000' },
          { name: 'Cau Giay', lat: 21.0360, lng: 105.7900, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '122000' },
        ],
      },
      {
        name: 'Ho Chi Minh City (Saigon)',
        type: 'Centrally Governed City',
        cities: [
          { name: 'District 1 (Downtown)', lat: 10.7769, lng: 106.7009, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '700000' },
          { name: 'District 2 (Thao Dien / Thu Duc)', lat: 10.8010, lng: 106.7380, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '711000' },
          { name: 'District 7 (Phu My Hung)', lat: 10.7320, lng: 106.7150, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '729000' },
        ],
      },
      {
        name: 'Da Nang Centrally Governed City',
        type: 'Centrally Governed City',
        cities: [
          { name: 'Da Nang (Hai Chau)', lat: 16.0544, lng: 108.2022, timezone: 'Asia/Ho_Chi_Minh', utcOffset: 'UTC+7', postalFormat: '550000' },
        ],
      },
    ],
  },
  {
    name: 'Yemen',
    code: 'YE',
    code3: 'YEM',
    capital: "Sana'a",
    currency: 'YER (Yemeni Rial - ر.ي)',
    dialCode: '+967',
    divisionType: 'Governorate (Muhafazah)',
    divisions: [
      {
        name: "Amanat Al Asimah (Sana'a City)",
        type: 'Governorate',
        cities: [
          { name: "Sana'a", lat: 15.3694, lng: 44.1910, timezone: 'Asia/Aden', utcOffset: 'UTC+3', postalFormat: '00000' },
          { name: 'Al Wahdah', lat: 15.3500, lng: 44.1800, timezone: 'Asia/Aden', utcOffset: 'UTC+3', postalFormat: '00001' },
        ],
      },
      {
        name: 'Aden Governorate',
        type: 'Governorate',
        cities: [
          { name: 'Aden (Crater)', lat: 12.7797, lng: 45.0367, timezone: 'Asia/Aden', utcOffset: 'UTC+3', postalFormat: '00002' },
          { name: 'Mualla', lat: 12.7900, lng: 45.0100, timezone: 'Asia/Aden', utcOffset: 'UTC+3', postalFormat: '00003' },
        ],
      },
    ],
  },
];
