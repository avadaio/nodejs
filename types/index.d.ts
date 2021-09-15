// Type definitions for avadaio-node
// Project: avadaio-node
// Definitions by: Thomas Nguyen <anhnt@avada.io>

/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

export = AvadaEmailMarketing;

/*~ Write your module's methods and properties in this class */
declare class AvadaEmailMarketing {
  constructor(config: AvadaEmailMarketing.Config);
  getApiUrl: (endpoint: string) => string;

  makeRequest: (params: AvadaEmailMarketing.MakeRequestParams) => Promise<any>;

  connection: {
    test: () => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  form: {
    list: () => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  contact: {
    create: (
      data: AvadaEmailMarketing.ContactInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;

    update: (
      data: AvadaEmailMarketing.ContactInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;

    bulk: (
      data: AvadaEmailMarketing.ContactInputData[]
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  subscriber: {
    add: (data: AvadaEmailMarketing.ContactInputData) => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  review: {
    submit: (
      data: AvadaEmailMarketing.ReviewSubmitInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  checkout: {
    create: (
      data: AvadaEmailMarketing.CheckoutInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
    update: (
      data: AvadaEmailMarketing.CheckoutInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
    remove: (id: number | string) => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  order: {
    create: (
      data: AvadaEmailMarketing.OrderCreateInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
    update: (
      data: AvadaEmailMarketing.OrderUpdateInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
    complete: (
      data: AvadaEmailMarketing.OrderCreateInputData
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
    bulk: (
      data: AvadaEmailMarketing.OrderCreateInputData[]
    ) => Promise<AvadaEmailMarketing.ApiResponse>;
  };
}

declare namespace AvadaEmailMarketing {
  interface Config {
    appId: string;
    apiKey: string;
    apiUrl?: string;
  }

  interface MakeRequestParams {
    body: object;
    endpoint: string;
    isTest: boolean;
  }

  interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
  }

  interface OrderCustomerDefaultAddress {
    address1?: string;
    city?: string;
    country?: COUNTRY;
    countryCode?: COUNTRY_CODE;
    zip?: string;
  }

  interface OrderCustomerData {
    id?: any;
    email: string;
    name?: string;
    first_name?: string | null;
    last_name?: string | null;
    phone?: string;
    orders_count?: number;
    total_spent?: number;
    default_address?: OrderCustomerDefaultAddress;
  }

  interface OrderCreateInputData {
    id: number;
    email: string;
    name: string;
    status: string;
    customer: OrderCustomerData;
    created_at: Date | string;
    updated_at: Date | string;
    line_items: CheckoutLineItem[];
    order_status_url: string;
    total_price: string;
    shipping_price?: string;
    gateway?: string;
    subtotal_price: string;
    total_tax: string;
    total_weight: string;
    currency: string;
    presentment_currency: string;
    phone?: string;
    customer_locale?: string;
    shipping_address?: Address;
    billing_address?: Address;
  }

  interface OrderUpdateInputData {
    id: number;
    email: string;
    status: string;
    state: string;
  }

  interface CheckoutBundleItem {
    product_id: number;
    title: string;
    price: string;
    image: string;
    quantity: number;
    sku?: string;
  }

  interface CheckoutLineItem {
    type: string;
    title: string;
    price: string;
    quantity: number;
    sku?: string;
    product_id: string;
    image: string;
    line_price: string;
    frontend_link: string;
    variant_id?: number;
    variant_title?: string;
    variant_price?: string;
    variant_image?: string;
    bundle_items?: CheckoutBundleItem[];
  }

  interface CheckoutCustomerData {
    id?: any;
    email?: string | null;
    name?: string;
    first_name?: string | null;
    last_name?: string | null;
    phone?: string;
  }

  interface Address {
    name?: string;
    first_name: string;
    last_name?: string;
    phone?: string;
    company?: string;
    country_code?: COUNTRY_CODE;
    zip?: string;
    address1?: string;
    address2?: string;
    city?: string;
    province_code?: string;
    province?: string;
    latitude?: string;
    longitude?: string;
  }

  interface CheckoutInputData {
    id: number;
    abandoned_checkout_url: string;
    email?: string;
    created_at: Date | string;
    updated_at: Date | string;
    completed_at?: Date | string;
    phone?: string;
    customer_locale?: string;
    line_items: CheckoutLineItem[];
    subtotal_price: string;
    total_tax: string;
    total_price: string;
    currency: string;
    presentment_currency: string;
    customer?: CheckoutCustomerData;
    shipping_address?: Address;
  }

  interface ReviewSubmitCustomer {
    firstName: string;
    lastName: string;
    reviewCount: number;
  }

  interface ReviewData {
    rating: number;
    author: string;
    title: string;
    content: string;
    productTitle: string;
    productUrl: string;
    productId: string;
    productSku: string;
    productImage: string[];
    orderId: string;
    photoIncluded: YES_NO;
    photoUrl: string;
    videoIncluded: YES_NO;
    thumbnailUrl: string;
    videoUrl: string;
    updateReviewPhotoUrl: string;
  }

  interface ReviewSubmitInputData {
    email: string;
    source?: SHOP_VENDOR;
    customer: ReviewSubmitCustomer;
    review: ReviewData;
  }

  interface ContactInputData {
    description?: string;
    email: string;
    firstName?: string;
    status?: CONTACT_STATUS;
    isSubscriber?: boolean;
    lastName?: string;
    phoneNumber?: string;
    phoneNumberCountry?: COUNTRY_CODE;
    source: SHOP_VENDOR;
    orderCount?: number;
    totalSpent?: number;
    country?: COUNTRY;
    countryCode?: COUNTRY_CODE;
    city?: string;
    address?: string;
    /**
     * @description  Comma seperated values
     */
    tags?: string; // Comma seperated values
  }

  type YES_NO = 'yes' | 'no';

  type CONTACT_STATUS = 'subscribe' | 'unsub' | 'notsub' | 'not-confirmed';

  type COUNTRY_CODE =
    | 'AF'
    | 'AX'
    | 'AL'
    | 'DZ'
    | 'AS'
    | 'AD'
    | 'AO'
    | 'AI'
    | 'AQ'
    | 'AG'
    | 'AR'
    | 'AM'
    | 'AW'
    | 'AU'
    | 'AT'
    | 'AZ'
    | 'BS'
    | 'BH'
    | 'BD'
    | 'BB'
    | 'BY'
    | 'BE'
    | 'BZ'
    | 'BJ'
    | 'BM'
    | 'BT'
    | 'BO'
    | 'BA'
    | 'BW'
    | 'BV'
    | 'BR'
    | 'IO'
    | 'BN'
    | 'BG'
    | 'BF'
    | 'BI'
    | 'KH'
    | 'CM'
    | 'CA'
    | 'CV'
    | 'KY'
    | 'CF'
    | 'TD'
    | 'CL'
    | 'CN'
    | 'CX'
    | 'CC'
    | 'CO'
    | 'KM'
    | 'CG'
    | 'CD'
    | 'CK'
    | 'CR'
    | 'CI'
    | 'HR'
    | 'CU'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'DJ'
    | 'DM'
    | 'DO'
    | 'EC'
    | 'EG'
    | 'SV'
    | 'GQ'
    | 'ER'
    | 'EE'
    | 'ET'
    | 'FK'
    | 'FO'
    | 'FJ'
    | 'FI'
    | 'FR'
    | 'GF'
    | 'PF'
    | 'TF'
    | 'GA'
    | 'GM'
    | 'GE'
    | 'DE'
    | 'GH'
    | 'GI'
    | 'GR'
    | 'GL'
    | 'GD'
    | 'GP'
    | 'GU'
    | 'GT'
    | 'GG'
    | 'GN'
    | 'GW'
    | 'GY'
    | 'HT'
    | 'HM'
    | 'VA'
    | 'HN'
    | 'HK'
    | 'HU'
    | 'IS'
    | 'IN'
    | 'ID'
    | 'IR'
    | 'IQ'
    | 'IE'
    | 'IM'
    | 'IL'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'JE'
    | 'JO'
    | 'KZ'
    | 'KE'
    | 'KI'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KG'
    | 'LA'
    | 'LV'
    | 'LB'
    | 'LS'
    | 'LR'
    | 'LY'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MO'
    | 'MK'
    | 'MG'
    | 'MW'
    | 'MY'
    | 'MV'
    | 'ML'
    | 'MT'
    | 'MH'
    | 'MQ'
    | 'MR'
    | 'MU'
    | 'YT'
    | 'MX'
    | 'FM'
    | 'MD'
    | 'MC'
    | 'MN'
    | 'MS'
    | 'MA'
    | 'MZ'
    | 'MM'
    | 'NA'
    | 'NR'
    | 'NP'
    | 'NL'
    | 'AN'
    | 'NC'
    | 'NZ'
    | 'NI'
    | 'NE'
    | 'NG'
    | 'NU'
    | 'NF'
    | 'MP'
    | 'NO'
    | 'OM'
    | 'PK'
    | 'PW'
    | 'PS'
    | 'PA'
    | 'PG'
    | 'PY'
    | 'PE'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PT'
    | 'PR'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RU'
    | 'RW'
    | 'SH'
    | 'KN'
    | 'LC'
    | 'PM'
    | 'VC'
    | 'WS'
    | 'SM'
    | 'ST'
    | 'SA'
    | 'SN'
    | 'CS'
    | 'SC'
    | 'SL'
    | 'SG'
    | 'SK'
    | 'SI'
    | 'SB'
    | 'SO'
    | 'ZA'
    | 'GS'
    | 'ES'
    | 'LK'
    | 'SD'
    | 'SR'
    | 'SJ'
    | 'SZ'
    | 'SE'
    | 'CH'
    | 'SY'
    | 'TW'
    | 'TJ'
    | 'TZ'
    | 'TH'
    | 'TL'
    | 'TG'
    | 'TK'
    | 'TO'
    | 'TT'
    | 'TN'
    | 'TR'
    | 'TM'
    | 'TC'
    | 'TV'
    | 'UG'
    | 'UA'
    | 'AE'
    | 'GB'
    | 'US'
    | 'UM'
    | 'UY'
    | 'UZ'
    | 'VU'
    | 'VE'
    | 'VN'
    | 'VG'
    | 'VI'
    | 'WF'
    | 'EH'
    | 'YE'
    | 'ZM'
    | 'ZW';
  type COUNTRY =
    | 'Afghanistan'
    | 'Åland Islands'
    | 'Albania'
    | 'Algeria'
    | 'American Samoa'
    | 'AndorrA'
    | 'Angola'
    | 'Anguilla'
    | 'Antarctica'
    | 'Antigua and Barbuda'
    | 'Argentina'
    | 'Armenia'
    | 'Aruba'
    | 'Australia'
    | 'Austria'
    | 'Azerbaijan'
    | 'Bahamas'
    | 'Bahrain'
    | 'Bangladesh'
    | 'Barbados'
    | 'Belarus'
    | 'Belgium'
    | 'Belize'
    | 'Benin'
    | 'Bermuda'
    | 'Bhutan'
    | 'Bolivia'
    | 'Bosnia and Herzegovina'
    | 'Botswana'
    | 'Bouvet Island'
    | 'Brazil'
    | 'British Indian Ocean Territory'
    | 'Brunei Darussalam'
    | 'Bulgaria'
    | 'Burkina Faso'
    | 'Burundi'
    | 'Cambodia'
    | 'Cameroon'
    | 'Canada'
    | 'Cape Verde'
    | 'Cayman Islands'
    | 'Central African Republic'
    | 'Chad'
    | 'Chile'
    | 'China'
    | 'Christmas Island'
    | 'Cocos (Keeling) Islands'
    | 'Colombia'
    | 'Comoros'
    | 'Congo'
    | 'Congo, The Democratic Republic of the'
    | 'Cook Islands'
    | 'Costa Rica'
    | "Cote D'Ivoire"
    | 'Croatia'
    | 'Cuba'
    | 'Cyprus'
    | 'Czech Republic'
    | 'Denmark'
    | 'Djibouti'
    | 'Dominica'
    | 'Dominican Republic'
    | 'Ecuador'
    | 'Egypt'
    | 'El Salvador'
    | 'Equatorial Guinea'
    | 'Eritrea'
    | 'Estonia'
    | 'Ethiopia'
    | 'Falkland Islands (Malvinas)'
    | 'Faroe Islands'
    | 'Fiji'
    | 'Finland'
    | 'France'
    | 'French Guiana'
    | 'French Polynesia'
    | 'French Southern Territories'
    | 'Gabon'
    | 'Gambia'
    | 'Georgia'
    | 'Germany'
    | 'Ghana'
    | 'Gibraltar'
    | 'Greece'
    | 'Greenland'
    | 'Grenada'
    | 'Guadeloupe'
    | 'Guam'
    | 'Guatemala'
    | 'Guernsey'
    | 'Guinea'
    | 'Guinea-Bissau'
    | 'Guyana'
    | 'Haiti'
    | 'Heard Island and Mcdonald Islands'
    | 'Holy See (Vatican City State)'
    | 'Honduras'
    | 'Hong Kong'
    | 'Hungary'
    | 'Iceland'
    | 'India'
    | 'Indonesia'
    | 'Iran, Islamic Republic Of'
    | 'Iraq'
    | 'Ireland'
    | 'Isle of Man'
    | 'Israel'
    | 'Italy'
    | 'Jamaica'
    | 'Japan'
    | 'Jersey'
    | 'Jordan'
    | 'Kazakhstan'
    | 'Kenya'
    | 'Kiribati'
    | "Korea, Democratic People'S Republic of"
    | 'Korea, Republic of'
    | 'Kuwait'
    | 'Kyrgyzstan'
    | "Lao People'S Democratic Republic"
    | 'Latvia'
    | 'Lebanon'
    | 'Lesotho'
    | 'Liberia'
    | 'Libyan Arab Jamahiriya'
    | 'Liechtenstein'
    | 'Lithuania'
    | 'Luxembourg'
    | 'Macao'
    | 'Macedonia, The Former Yugoslav Republic of'
    | 'Madagascar'
    | 'Malawi'
    | 'Malaysia'
    | 'Maldives'
    | 'Mali'
    | 'Malta'
    | 'Marshall Islands'
    | 'Martinique'
    | 'Mauritania'
    | 'Mauritius'
    | 'Mayotte'
    | 'Mexico'
    | 'Micronesia, Federated States of'
    | 'Moldova, Republic of'
    | 'Monaco'
    | 'Mongolia'
    | 'Montserrat'
    | 'Morocco'
    | 'Mozambique'
    | 'Myanmar'
    | 'Namibia'
    | 'Nauru'
    | 'Nepal'
    | 'Netherlands'
    | 'Netherlands Antilles'
    | 'New Caledonia'
    | 'New Zealand'
    | 'Nicaragua'
    | 'Niger'
    | 'Nigeria'
    | 'Niue'
    | 'Norfolk Island'
    | 'Northern Mariana Islands'
    | 'Norway'
    | 'Oman'
    | 'Pakistan'
    | 'Palau'
    | 'Palestinian Territory, Occupied'
    | 'Panama'
    | 'Papua New Guinea'
    | 'Paraguay'
    | 'Peru'
    | 'Philippines'
    | 'Pitcairn'
    | 'Poland'
    | 'Portugal'
    | 'Puerto Rico'
    | 'Qatar'
    | 'Reunion'
    | 'Romania'
    | 'Russian Federation'
    | 'RWANDA'
    | 'Saint Helena'
    | 'Saint Kitts and Nevis'
    | 'Saint Lucia'
    | 'Saint Pierre and Miquelon'
    | 'Saint Vincent and the Grenadines'
    | 'Samoa'
    | 'San Marino'
    | 'Sao Tome and Principe'
    | 'Saudi Arabia'
    | 'Senegal'
    | 'Serbia and Montenegro'
    | 'Seychelles'
    | 'Sierra Leone'
    | 'Singapore'
    | 'Slovakia'
    | 'Slovenia'
    | 'Solomon Islands'
    | 'Somalia'
    | 'South Africa'
    | 'South Georgia and the South Sandwich Islands'
    | 'Spain'
    | 'Sri Lanka'
    | 'Sudan'
    | 'Suriname'
    | 'Svalbard and Jan Mayen'
    | 'Swaziland'
    | 'Sweden'
    | 'Switzerland'
    | 'Syrian Arab Republic'
    | 'Taiwan, Province of China'
    | 'Tajikistan'
    | 'Tanzania, United Republic of'
    | 'Thailand'
    | 'Timor-Leste'
    | 'Togo'
    | 'Tokelau'
    | 'Tonga'
    | 'Trinidad and Tobago'
    | 'Tunisia'
    | 'Turkey'
    | 'Turkmenistan'
    | 'Turks and Caicos Islands'
    | 'Tuvalu'
    | 'Uganda'
    | 'Ukraine'
    | 'United Arab Emirates'
    | 'United Kingdom'
    | 'United States'
    | 'United States Minor Outlying Islands'
    | 'Uruguay'
    | 'Uzbekistan'
    | 'Vanuatu'
    | 'Venezuela'
    | 'Viet Nam'
    | 'Virgin Islands, British'
    | 'Virgin Islands, U.S.'
    | 'Wallis and Futuna'
    | 'Western Sahara'
    | 'Yemen'
    | 'Zambia'
    | 'Zimbabwe';

  type SHOP_VENDOR = 'shopify' | 'magento';
}
