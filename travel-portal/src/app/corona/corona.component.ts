import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../service/corona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  
  constructor(private _service: CoronaService, private _router : Router){ }
  changeDrop = false;
  flag = 0;
  selectedCountry = '';
  iso3Code = '';
  displayPie = false;
  displayLine = false;

  // pie chart
  pieChartOptions = {
    responsive: true
  }
  pieChartLabels =  ['Confirmed', 'Deaths', 'Recovered'];
  pieChartColor:any = [
    {
        backgroundColor: ['blue',
        'red',
        'green'
        ]
    }
  ]
  pieChartData:any = [
    { 
        data: []
    }
  ];


  // line chart
  chartOptions = {
    responsive: true
  };
  chartData:any = [
  ];
  chartLabels = [];

  countryCode: Array<any> = [
    {
      "country_name": "Afghanistan",
      "alpha_2": "AF",
      "alpha_3": "AFG",
      "numeric": "004"
    },
    {
      "country_name": "Albania",
      "alpha_2": "AL",
      "alpha_3": "ALB",
      "numeric": "008"
    },
    {
      "country_name": "Algeria",
      "alpha_2": "DZ",
      "alpha_3": "DZA",
      "numeric": "012"
    },
    {
      "country_name": "American Samoa",
      "alpha_2": "AS",
      "alpha_3": "ASM",
      "numeric": "016"
    },
    {
      "country_name": "Andorra",
      "alpha_2": "AD",
      "alpha_3": "AND",
      "numeric": "020"
    },
    {
      "country_name": "Angola",
      "alpha_2": "AO",
      "alpha_3": "AGO",
      "numeric": "024"
    },
    {
      "country_name": "Anguilla",
      "alpha_2": "AI",
      "alpha_3": "AIA",
      "numeric": 660
    },
    {
      "country_name": "Antarctica",
      "alpha_2": "AQ",
      "alpha_3": "ATA",
      "numeric": "010"
    },
    {
      "country_name": "Antigua and Barbuda",
      "alpha_2": "AG",
      "alpha_3": "ATG",
      "numeric": "028"
    },
    {
      "country_name": "Argentina",
      "alpha_2": "AR",
      "alpha_3": "ARG",
      "numeric": "032"
    },
    {
      "country_name": "Armenia",
      "alpha_2": "AM",
      "alpha_3": "ARM",
      "numeric": "051"
    },
    {
      "country_name": "Aruba",
      "alpha_2": "AW",
      "alpha_3": "ABW",
      "numeric": 533
    },
    {
      "country_name": "Australia",
      "alpha_2": "AU",
      "alpha_3": "AUS",
      "numeric": "036"
    },
    {
      "country_name": "Austria",
      "alpha_2": "AT",
      "alpha_3": "AUT",
      "numeric": "040"
    },
    {
      "country_name": "Azerbaijan",
      "alpha_2": "AZ",
      "alpha_3": "AZE",
      "numeric": "031"
    },
    {
      "country_name": "Bahamas",
      "alpha_2": "BS",
      "alpha_3": "BHS",
      "numeric": "044"
    },
    {
      "country_name": "Bahrain",
      "alpha_2": "BH",
      "alpha_3": "BHR",
      "numeric": "048"
    },
    {
      "country_name": "Bangladesh",
      "alpha_2": "BD",
      "alpha_3": "BGD",
      "numeric": "050"
    },
    {
      "country_name": "Barbados",
      "alpha_2": "BB",
      "alpha_3": "BRB",
      "numeric": "052"
    },
    {
      "country_name": "Belarus",
      "alpha_2": "BY",
      "alpha_3": "BLR",
      "numeric": 112
    },
    {
      "country_name": "Belgium",
      "alpha_2": "BE",
      "alpha_3": "BEL",
      "numeric": "056"
    },
    {
      "country_name": "Belize",
      "alpha_2": "BZ",
      "alpha_3": "BLZ",
      "numeric": "084"
    },
    {
      "country_name": "Benin",
      "alpha_2": "BJ",
      "alpha_3": "BEN",
      "numeric": 204
    },
    {
      "country_name": "Bermuda",
      "alpha_2": "BM",
      "alpha_3": "BMU",
      "numeric": "060"
    },
    {
      "country_name": "Bhutan",
      "alpha_2": "BT",
      "alpha_3": "BTN",
      "numeric": "064"
    },
    {
      "country_name": "Bolivia (Plurinational State of)",
      "alpha_2": "BO",
      "alpha_3": "BOL",
      "numeric": "068"
    },
    {
      "country_name": "Bonaire, Sint Eustatius and Saba",
      "alpha_2": "BQ",
      "alpha_3": "BES",
      "numeric": 535
    },
    {
      "country_name": "Bosnia and Herzegovina",
      "alpha_2": "BA",
      "alpha_3": "BIH",
      "numeric": "070"
    },
    {
      "country_name": "Botswana",
      "alpha_2": "BW",
      "alpha_3": "BWA",
      "numeric": "072"
    },
    {
      "country_name": "Bouvet Island",
      "alpha_2": "BV",
      "alpha_3": "BVT",
      "numeric": "074"
    },
    {
      "country_name": "Brazil",
      "alpha_2": "BR",
      "alpha_3": "BRA",
      "numeric": "076"
    },
    {
      "country_name": "British Indian Ocean Territory",
      "alpha_2": "IO",
      "alpha_3": "IOT",
      "numeric": "086"
    },
    {
      "country_name": "Brunei Darussalam",
      "alpha_2": "BN",
      "alpha_3": "BRN",
      "numeric": "096"
    },
    {
      "country_name": "Bulgaria",
      "alpha_2": "BG",
      "alpha_3": "BGR",
      "numeric": 100
    },
    {
      "country_name": "Burkina Faso",
      "alpha_2": "BF",
      "alpha_3": "BFA",
      "numeric": 854
    },
    {
      "country_name": "Burundi",
      "alpha_2": "BI",
      "alpha_3": "BDI",
      "numeric": 108
    },
    {
      "country_name": "Cabo Verde",
      "alpha_2": "CV",
      "alpha_3": "CPV",
      "numeric": 132
    },
    {
      "country_name": "Cambodia",
      "alpha_2": "KH",
      "alpha_3": "KHM",
      "numeric": 116
    },
    {
      "country_name": "Cameroon",
      "alpha_2": "CM",
      "alpha_3": "CMR",
      "numeric": 120
    },
    {
      "country_name": "Canada",
      "alpha_2": "CA",
      "alpha_3": "CAN",
      "numeric": 124
    },
    {
      "country_name": "Cayman Islands",
      "alpha_2": "KY",
      "alpha_3": "CYM",
      "numeric": 136
    },
    {
      "country_name": "Central African Republic",
      "alpha_2": "CF",
      "alpha_3": "CAF",
      "numeric": 140
    },
    {
      "country_name": "Chad",
      "alpha_2": "TD",
      "alpha_3": "TCD",
      "numeric": 148
    },
    {
      "country_name": "Chile",
      "alpha_2": "CL",
      "alpha_3": "CHL",
      "numeric": 152
    },
    {
      "country_name": "China",
      "alpha_2": "CN",
      "alpha_3": "CHN",
      "numeric": 156
    },
    {
      "country_name": "Christmas Island",
      "alpha_2": "CX",
      "alpha_3": "CXR",
      "numeric": 162
    },
    {
      "country_name": "Cocos (Keeling) Islands",
      "alpha_2": "CC",
      "alpha_3": "CCK",
      "numeric": 166
    },
    {
      "country_name": "Colombia",
      "alpha_2": "CO",
      "alpha_3": "COL",
      "numeric": 170
    },
    {
      "country_name": "Comoros",
      "alpha_2": "KM",
      "alpha_3": "COM",
      "numeric": 174
    },
    {
      "country_name": "Congo (the Democratic Republic of the)",
      "alpha_2": "CD",
      "alpha_3": "COD",
      "numeric": 180
    },
    {
      "country_name": "Congo",
      "alpha_2": "CG",
      "alpha_3": "COG",
      "numeric": 178
    },
    {
      "country_name": "Cook Islands",
      "alpha_2": "CK",
      "alpha_3": "COK",
      "numeric": 184
    },
    {
      "country_name": "Costa Rica",
      "alpha_2": "CR",
      "alpha_3": "CRI",
      "numeric": 188
    },
    {
      "country_name": "Croatia",
      "alpha_2": "HR",
      "alpha_3": "HRV",
      "numeric": 191
    },
    {
      "country_name": "Cuba",
      "alpha_2": "CU",
      "alpha_3": "CUB",
      "numeric": 192
    },
    {
      "country_name": "Cura‡ao",
      "alpha_2": "CW",
      "alpha_3": "CUW",
      "numeric": 531
    },
    {
      "country_name": "Cyprus",
      "alpha_2": "CY",
      "alpha_3": "CYP",
      "numeric": 196
    },
    {
      "country_name": "Czechia",
      "alpha_2": "CZ",
      "alpha_3": "CZE",
      "numeric": 203
    },
    {
      "country_name": "C“te d'Ivoire",
      "alpha_2": "CI",
      "alpha_3": "CIV",
      "numeric": 384
    },
    {
      "country_name": "Denmark",
      "alpha_2": "DK",
      "alpha_3": "DNK",
      "numeric": 208
    },
    {
      "country_name": "Djibouti",
      "alpha_2": "DJ",
      "alpha_3": "DJI",
      "numeric": 262
    },
    {
      "country_name": "Dominica",
      "alpha_2": "DM",
      "alpha_3": "DMA",
      "numeric": 212
    },
    {
      "country_name": "Dominican Republic",
      "alpha_2": "DO",
      "alpha_3": "DOM",
      "numeric": 214
    },
    {
      "country_name": "Ecuador",
      "alpha_2": "EC",
      "alpha_3": "ECU",
      "numeric": 218
    },
    {
      "country_name": "Egypt",
      "alpha_2": "EG",
      "alpha_3": "EGY",
      "numeric": 818
    },
    {
      "country_name": "El Salvador",
      "alpha_2": "SV",
      "alpha_3": "SLV",
      "numeric": 222
    },
    {
      "country_name": "Equatorial Guinea",
      "alpha_2": "GQ",
      "alpha_3": "GNQ",
      "numeric": 226
    },
    {
      "country_name": "Eritrea",
      "alpha_2": "ER",
      "alpha_3": "ERI",
      "numeric": 232
    },
    {
      "country_name": "Estonia",
      "alpha_2": "EE",
      "alpha_3": "EST",
      "numeric": 233
    },
    {
      "country_name": "Eswatini",
      "alpha_2": "SZ",
      "alpha_3": "SWZ",
      "numeric": 748
    },
    {
      "country_name": "Ethiopia",
      "alpha_2": "ET",
      "alpha_3": "ETH",
      "numeric": 231
    },
    {
      "country_name": "Falkland Islands  [Malvinas]",
      "alpha_2": "FK",
      "alpha_3": "FLK",
      "numeric": 238
    },
    {
      "country_name": "Faroe Islands",
      "alpha_2": "FO",
      "alpha_3": "FRO",
      "numeric": 234
    },
    {
      "country_name": "Fiji",
      "alpha_2": "FJ",
      "alpha_3": "FJI",
      "numeric": 242
    },
    {
      "country_name": "Finland",
      "alpha_2": "FI",
      "alpha_3": "FIN",
      "numeric": 246
    },
    {
      "country_name": "France",
      "alpha_2": "FR",
      "alpha_3": "FRA",
      "numeric": 250
    },
    {
      "country_name": "French Guiana",
      "alpha_2": "GF",
      "alpha_3": "GUF",
      "numeric": 254
    },
    {
      "country_name": "French Polynesia",
      "alpha_2": "PF",
      "alpha_3": "PYF",
      "numeric": 258
    },
    {
      "country_name": "French Southern Territories",
      "alpha_2": "TF",
      "alpha_3": "ATF",
      "numeric": 260
    },
    {
      "country_name": "Gabon",
      "alpha_2": "GA",
      "alpha_3": "GAB",
      "numeric": 266
    },
    {
      "country_name": "Gambia",
      "alpha_2": "GM",
      "alpha_3": "GMB",
      "numeric": 270
    },
    {
      "country_name": "Georgia",
      "alpha_2": "GE",
      "alpha_3": "GEO",
      "numeric": 268
    },
    {
      "country_name": "Germany",
      "alpha_2": "DE",
      "alpha_3": "DEU",
      "numeric": 276
    },
    {
      "country_name": "Ghana",
      "alpha_2": "GH",
      "alpha_3": "GHA",
      "numeric": 288
    },
    {
      "country_name": "Gibraltar",
      "alpha_2": "GI",
      "alpha_3": "GIB",
      "numeric": 292
    },
    {
      "country_name": "Greece",
      "alpha_2": "GR",
      "alpha_3": "GRC",
      "numeric": 300
    },
    {
      "country_name": "Greenland",
      "alpha_2": "GL",
      "alpha_3": "GRL",
      "numeric": 304
    },
    {
      "country_name": "Grenada",
      "alpha_2": "GD",
      "alpha_3": "GRD",
      "numeric": 308
    },
    {
      "country_name": "Guadeloupe",
      "alpha_2": "GP",
      "alpha_3": "GLP",
      "numeric": 312
    },
    {
      "country_name": "Guam",
      "alpha_2": "GU",
      "alpha_3": "GUM",
      "numeric": 316
    },
    {
      "country_name": "Guatemala",
      "alpha_2": "GT",
      "alpha_3": "GTM",
      "numeric": 320
    },
    {
      "country_name": "Guernsey",
      "alpha_2": "GG",
      "alpha_3": "GGY",
      "numeric": 831
    },
    {
      "country_name": "Guinea",
      "alpha_2": "GN",
      "alpha_3": "GIN",
      "numeric": 324
    },
    {
      "country_name": "Guinea-Bissau",
      "alpha_2": "GW",
      "alpha_3": "GNB",
      "numeric": 624
    },
    {
      "country_name": "Guyana",
      "alpha_2": "GY",
      "alpha_3": "GUY",
      "numeric": 328
    },
    {
      "country_name": "Haiti",
      "alpha_2": "HT",
      "alpha_3": "HTI",
      "numeric": 332
    },
    {
      "country_name": "Heard Island and McDonald Islands",
      "alpha_2": "HM",
      "alpha_3": "HMD",
      "numeric": 334
    },
    {
      "country_name": "Holy See",
      "alpha_2": "VA",
      "alpha_3": "VAT",
      "numeric": 336
    },
    {
      "country_name": "Honduras",
      "alpha_2": "HN",
      "alpha_3": "HND",
      "numeric": 340
    },
    {
      "country_name": "Hong Kong",
      "alpha_2": "HK",
      "alpha_3": "HKG",
      "numeric": 344
    },
    {
      "country_name": "Hungary",
      "alpha_2": "HU",
      "alpha_3": "HUN",
      "numeric": 348
    },
    {
      "country_name": "Iceland",
      "alpha_2": "IS",
      "alpha_3": "ISL",
      "numeric": 352
    },
    {
      "country_name": "India",
      "alpha_2": "IN",
      "alpha_3": "IND",
      "numeric": 356
    },
    {
      "country_name": "Indonesia",
      "alpha_2": "ID",
      "alpha_3": "IDN",
      "numeric": 360
    },
    {
      "country_name": "Iran (Islamic Republic of)",
      "alpha_2": "IR",
      "alpha_3": "IRN",
      "numeric": 364
    },
    {
      "country_name": "Iraq",
      "alpha_2": "IQ",
      "alpha_3": "IRQ",
      "numeric": 368
    },
    {
      "country_name": "Ireland",
      "alpha_2": "IE",
      "alpha_3": "IRL",
      "numeric": 372
    },
    {
      "country_name": "Isle of Man",
      "alpha_2": "IM",
      "alpha_3": "IMN",
      "numeric": 833
    },
    {
      "country_name": "Israel",
      "alpha_2": "IL",
      "alpha_3": "ISR",
      "numeric": 376
    },
    {
      "country_name": "Italy",
      "alpha_2": "IT",
      "alpha_3": "ITA",
      "numeric": 380
    },
    {
      "country_name": "Jamaica",
      "alpha_2": "JM",
      "alpha_3": "JAM",
      "numeric": 388
    },
    {
      "country_name": "Japan",
      "alpha_2": "JP",
      "alpha_3": "JPN",
      "numeric": 392
    },
    {
      "country_name": "Jersey",
      "alpha_2": "JE",
      "alpha_3": "JEY",
      "numeric": 832
    },
    {
      "country_name": "Jordan",
      "alpha_2": "JO",
      "alpha_3": "JOR",
      "numeric": 400
    },
    {
      "country_name": "Kazakhstan",
      "alpha_2": "KZ",
      "alpha_3": "KAZ",
      "numeric": 398
    },
    {
      "country_name": "Kenya",
      "alpha_2": "KE",
      "alpha_3": "KEN",
      "numeric": 404
    },
    {
      "country_name": "Kiribati",
      "alpha_2": "KI",
      "alpha_3": "KIR",
      "numeric": 296
    },
    {
      "country_name": "Korea (the Democratic People's Republic of)",
      "alpha_2": "KP",
      "alpha_3": "PRK",
      "numeric": 408
    },
    {
      "country_name": "Korea (the Republic of)",
      "alpha_2": "KR",
      "alpha_3": "KOR",
      "numeric": 410
    },
    {
      "country_name": "Kuwait",
      "alpha_2": "KW",
      "alpha_3": "KWT",
      "numeric": 414
    },
    {
      "country_name": "Kyrgyzstan",
      "alpha_2": "KG",
      "alpha_3": "KGZ",
      "numeric": 417
    },
    {
      "country_name": "Lao People's Democratic Republic",
      "alpha_2": "LA",
      "alpha_3": "LAO",
      "numeric": 418
    },
    {
      "country_name": "Latvia",
      "alpha_2": "LV",
      "alpha_3": "LVA",
      "numeric": 428
    },
    {
      "country_name": "Lebanon",
      "alpha_2": "LB",
      "alpha_3": "LBN",
      "numeric": 422
    },
    {
      "country_name": "Lesotho",
      "alpha_2": "LS",
      "alpha_3": "LSO",
      "numeric": 426
    },
    {
      "country_name": "Liberia",
      "alpha_2": "LR",
      "alpha_3": "LBR",
      "numeric": 430
    },
    {
      "country_name": "Libya",
      "alpha_2": "LY",
      "alpha_3": "LBY",
      "numeric": 434
    },
    {
      "country_name": "Liechtenstein",
      "alpha_2": "LI",
      "alpha_3": "LIE",
      "numeric": 438
    },
    {
      "country_name": "Lithuania",
      "alpha_2": "LT",
      "alpha_3": "LTU",
      "numeric": 440
    },
    {
      "country_name": "Luxembourg",
      "alpha_2": "LU",
      "alpha_3": "LUX",
      "numeric": 442
    },
    {
      "country_name": "Macao",
      "alpha_2": "MO",
      "alpha_3": "MAC",
      "numeric": 446
    },
    {
      "country_name": "Madagascar",
      "alpha_2": "MG",
      "alpha_3": "MDG",
      "numeric": 450
    },
    {
      "country_name": "Malawi",
      "alpha_2": "MW",
      "alpha_3": "MWI",
      "numeric": 454
    },
    {
      "country_name": "Malaysia",
      "alpha_2": "MY",
      "alpha_3": "MYS",
      "numeric": 458
    },
    {
      "country_name": "Maldives",
      "alpha_2": "MV",
      "alpha_3": "MDV",
      "numeric": 462
    },
    {
      "country_name": "Mali",
      "alpha_2": "ML",
      "alpha_3": "MLI",
      "numeric": 466
    },
    {
      "country_name": "Malta",
      "alpha_2": "MT",
      "alpha_3": "MLT",
      "numeric": 470
    },
    {
      "country_name": "Marshall Islands",
      "alpha_2": "MH",
      "alpha_3": "MHL",
      "numeric": 584
    },
    {
      "country_name": "Martinique",
      "alpha_2": "MQ",
      "alpha_3": "MTQ",
      "numeric": 474
    },
    {
      "country_name": "Mauritania",
      "alpha_2": "MR",
      "alpha_3": "MRT",
      "numeric": 478
    },
    {
      "country_name": "Mauritius",
      "alpha_2": "MU",
      "alpha_3": "MUS",
      "numeric": 480
    },
    {
      "country_name": "Mayotte",
      "alpha_2": "YT",
      "alpha_3": "MYT",
      "numeric": 175
    },
    {
      "country_name": "Mexico",
      "alpha_2": "MX",
      "alpha_3": "MEX",
      "numeric": 484
    },
    {
      "country_name": "Micronesia (Federated States of)",
      "alpha_2": "FM",
      "alpha_3": "FSM",
      "numeric": 583
    },
    {
      "country_name": "Moldova (the Republic of)",
      "alpha_2": "MD",
      "alpha_3": "MDA",
      "numeric": 498
    },
    {
      "country_name": "Monaco",
      "alpha_2": "MC",
      "alpha_3": "MCO",
      "numeric": 492
    },
    {
      "country_name": "Mongolia",
      "alpha_2": "MN",
      "alpha_3": "MNG",
      "numeric": 496
    },
    {
      "country_name": "Montenegro",
      "alpha_2": "ME",
      "alpha_3": "MNE",
      "numeric": 499
    },
    {
      "country_name": "Montserrat",
      "alpha_2": "MS",
      "alpha_3": "MSR",
      "numeric": 500
    },
    {
      "country_name": "Morocco",
      "alpha_2": "MA",
      "alpha_3": "MAR",
      "numeric": 504
    },
    {
      "country_name": "Mozambique",
      "alpha_2": "MZ",
      "alpha_3": "MOZ",
      "numeric": 508
    },
    {
      "country_name": "Myanmar",
      "alpha_2": "MM",
      "alpha_3": "MMR",
      "numeric": 104
    },
    {
      "country_name": "Namibia",
      "alpha_2": "NA",
      "alpha_3": "NAM",
      "numeric": 516
    },
    {
      "country_name": "Nauru",
      "alpha_2": "NR",
      "alpha_3": "NRU",
      "numeric": 520
    },
    {
      "country_name": "Nepal",
      "alpha_2": "NP",
      "alpha_3": "NPL",
      "numeric": 524
    },
    {
      "country_name": "Netherlands",
      "alpha_2": "NL",
      "alpha_3": "NLD",
      "numeric": 528
    },
    {
      "country_name": "New Caledonia",
      "alpha_2": "NC",
      "alpha_3": "NCL",
      "numeric": 540
    },
    {
      "country_name": "New Zealand",
      "alpha_2": "NZ",
      "alpha_3": "NZL",
      "numeric": 554
    },
    {
      "country_name": "Nicaragua",
      "alpha_2": "NI",
      "alpha_3": "NIC",
      "numeric": 558
    },
    {
      "country_name": "Niger",
      "alpha_2": "NE",
      "alpha_3": "NER",
      "numeric": 562
    },
    {
      "country_name": "Nigeria",
      "alpha_2": "NG",
      "alpha_3": "NGA",
      "numeric": 566
    },
    {
      "country_name": "Niue",
      "alpha_2": "NU",
      "alpha_3": "NIU",
      "numeric": 570
    },
    {
      "country_name": "Norfolk Island",
      "alpha_2": "NF",
      "alpha_3": "NFK",
      "numeric": 574
    },
    {
      "country_name": "Northern Mariana Islands",
      "alpha_2": "MP",
      "alpha_3": "MNP",
      "numeric": 580
    },
    {
      "country_name": "Norway",
      "alpha_2": "NO",
      "alpha_3": "NOR",
      "numeric": 578
    },
    {
      "country_name": "Oman",
      "alpha_2": "OM",
      "alpha_3": "OMN",
      "numeric": 512
    },
    {
      "country_name": "Pakistan",
      "alpha_2": "PK",
      "alpha_3": "PAK",
      "numeric": 586
    },
    {
      "country_name": "Palau",
      "alpha_2": "PW",
      "alpha_3": "PLW",
      "numeric": 585
    },
    {
      "country_name": "Palestine, State of",
      "alpha_2": "PS",
      "alpha_3": "PSE",
      "numeric": 275
    },
    {
      "country_name": "Panama",
      "alpha_2": "PA",
      "alpha_3": "PAN",
      "numeric": 591
    },
    {
      "country_name": "Papua New Guinea",
      "alpha_2": "PG",
      "alpha_3": "PNG",
      "numeric": 598
    },
    {
      "country_name": "Paraguay",
      "alpha_2": "PY",
      "alpha_3": "PRY",
      "numeric": 600
    },
    {
      "country_name": "Peru",
      "alpha_2": "PE",
      "alpha_3": "PER",
      "numeric": 604
    },
    {
      "country_name": "Philippines",
      "alpha_2": "PH",
      "alpha_3": "PHL",
      "numeric": 608
    },
    {
      "country_name": "Pitcairn",
      "alpha_2": "PN",
      "alpha_3": "PCN",
      "numeric": 612
    },
    {
      "country_name": "Poland",
      "alpha_2": "PL",
      "alpha_3": "POL",
      "numeric": 616
    },
    {
      "country_name": "Portugal",
      "alpha_2": "PT",
      "alpha_3": "PRT",
      "numeric": 620
    },
    {
      "country_name": "Puerto Rico",
      "alpha_2": "PR",
      "alpha_3": "PRI",
      "numeric": 630
    },
    {
      "country_name": "Qatar",
      "alpha_2": "QA",
      "alpha_3": "QAT",
      "numeric": 634
    },
    {
      "country_name": "Republic of North Macedonia",
      "alpha_2": "MK",
      "alpha_3": "MKD",
      "numeric": 807
    },
    {
      "country_name": "Romania",
      "alpha_2": "RO",
      "alpha_3": "ROU",
      "numeric": 642
    },
    {
      "country_name": "Russian Federation",
      "alpha_2": "RU",
      "alpha_3": "RUS",
      "numeric": 643
    },
    {
      "country_name": "Rwanda",
      "alpha_2": "RW",
      "alpha_3": "RWA",
      "numeric": 646
    },
    {
      "country_name": "R‚union",
      "alpha_2": "RE",
      "alpha_3": "REU",
      "numeric": 638
    },
    {
      "country_name": "Saint Barth‚lemy",
      "alpha_2": "BL",
      "alpha_3": "BLM",
      "numeric": 652
    },
    {
      "country_name": "Saint Helena, Ascension and Tristan da Cunha",
      "alpha_2": "SH",
      "alpha_3": "SHN",
      "numeric": 654
    },
    {
      "country_name": "Saint Kitts and Nevis",
      "alpha_2": "KN",
      "alpha_3": "KNA",
      "numeric": 659
    },
    {
      "country_name": "Saint Lucia",
      "alpha_2": "LC",
      "alpha_3": "LCA",
      "numeric": 662
    },
    {
      "country_name": "Saint Martin (French part)",
      "alpha_2": "MF",
      "alpha_3": "MAF",
      "numeric": 663
    },
    {
      "country_name": "Saint Pierre and Miquelon",
      "alpha_2": "PM",
      "alpha_3": "SPM",
      "numeric": 666
    },
    {
      "country_name": "Saint Vincent and the Grenadines",
      "alpha_2": "VC",
      "alpha_3": "VCT",
      "numeric": 670
    },
    {
      "country_name": "Samoa",
      "alpha_2": "WS",
      "alpha_3": "WSM",
      "numeric": 882
    },
    {
      "country_name": "San Marino",
      "alpha_2": "SM",
      "alpha_3": "SMR",
      "numeric": 674
    },
    {
      "country_name": "Sao Tome and Principe",
      "alpha_2": "ST",
      "alpha_3": "STP",
      "numeric": 678
    },
    {
      "country_name": "Saudi Arabia",
      "alpha_2": "SA",
      "alpha_3": "SAU",
      "numeric": 682
    },
    {
      "country_name": "Senegal",
      "alpha_2": "SN",
      "alpha_3": "SEN",
      "numeric": 686
    },
    {
      "country_name": "Serbia",
      "alpha_2": "RS",
      "alpha_3": "SRB",
      "numeric": 688
    },
    {
      "country_name": "Seychelles",
      "alpha_2": "SC",
      "alpha_3": "SYC",
      "numeric": 690
    },
    {
      "country_name": "Sierra Leone",
      "alpha_2": "SL",
      "alpha_3": "SLE",
      "numeric": 694
    },
    {
      "country_name": "Singapore",
      "alpha_2": "SG",
      "alpha_3": "SGP",
      "numeric": 702
    },
    {
      "country_name": "Sint Maarten (Dutch part)",
      "alpha_2": "SX",
      "alpha_3": "SXM",
      "numeric": 534
    },
    {
      "country_name": "Slovakia",
      "alpha_2": "SK",
      "alpha_3": "SVK",
      "numeric": 703
    },
    {
      "country_name": "Slovenia",
      "alpha_2": "SI",
      "alpha_3": "SVN",
      "numeric": 705
    },
    {
      "country_name": "Solomon Islands",
      "alpha_2": "SB",
      "alpha_3": "SLB",
      "numeric": "090"
    },
    {
      "country_name": "Somalia",
      "alpha_2": "SO",
      "alpha_3": "SOM",
      "numeric": 706
    },
    {
      "country_name": "South Africa",
      "alpha_2": "ZA",
      "alpha_3": "ZAF",
      "numeric": 710
    },
    {
      "country_name": "South Georgia and the South Sandwich Islands",
      "alpha_2": "GS",
      "alpha_3": "SGS",
      "numeric": 239
    },
    {
      "country_name": "South Sudan",
      "alpha_2": "SS",
      "alpha_3": "SSD",
      "numeric": 728
    },
    {
      "country_name": "Spain",
      "alpha_2": "ES",
      "alpha_3": "ESP",
      "numeric": 724
    },
    {
      "country_name": "Sri Lanka",
      "alpha_2": "LK",
      "alpha_3": "LKA",
      "numeric": 144
    },
    {
      "country_name": "Sudan",
      "alpha_2": "SD",
      "alpha_3": "SDN",
      "numeric": 729
    },
    {
      "country_name": "Suriname",
      "alpha_2": "SR",
      "alpha_3": "SUR",
      "numeric": 740
    },
    {
      "country_name": "Svalbard and Jan Mayen",
      "alpha_2": "SJ",
      "alpha_3": "SJM",
      "numeric": 744
    },
    {
      "country_name": "Sweden",
      "alpha_2": "SE",
      "alpha_3": "SWE",
      "numeric": 752
    },
    {
      "country_name": "Switzerland",
      "alpha_2": "CH",
      "alpha_3": "CHE",
      "numeric": 756
    },
    {
      "country_name": "Syrian Arab Republic",
      "alpha_2": "SY",
      "alpha_3": "SYR",
      "numeric": 760
    },
    {
      "country_name": "Taiwan (Province of China)",
      "alpha_2": "TW",
      "alpha_3": "TWN",
      "numeric": 158
    },
    {
      "country_name": "Tajikistan",
      "alpha_2": "TJ",
      "alpha_3": "TJK",
      "numeric": 762
    },
    {
      "country_name": "Tanzania, United Republic of",
      "alpha_2": "TZ",
      "alpha_3": "TZA",
      "numeric": 834
    },
    {
      "country_name": "Thailand",
      "alpha_2": "TH",
      "alpha_3": "THA",
      "numeric": 764
    },
    {
      "country_name": "Timor-Leste",
      "alpha_2": "TL",
      "alpha_3": "TLS",
      "numeric": 626
    },
    {
      "country_name": "Togo",
      "alpha_2": "TG",
      "alpha_3": "TGO",
      "numeric": 768
    },
    {
      "country_name": "Tokelau",
      "alpha_2": "TK",
      "alpha_3": "TKL",
      "numeric": 772
    },
    {
      "country_name": "Tonga",
      "alpha_2": "TO",
      "alpha_3": "TON",
      "numeric": 776
    },
    {
      "country_name": "Trinidad and Tobago",
      "alpha_2": "TT",
      "alpha_3": "TTO",
      "numeric": 780
    },
    {
      "country_name": "Tunisia",
      "alpha_2": "TN",
      "alpha_3": "TUN",
      "numeric": 788
    },
    {
      "country_name": "Turkey",
      "alpha_2": "TR",
      "alpha_3": "TUR",
      "numeric": 792
    },
    {
      "country_name": "Turkmenistan",
      "alpha_2": "TM",
      "alpha_3": "TKM",
      "numeric": 795
    },
    {
      "country_name": "Turks and Caicos Islands",
      "alpha_2": "TC",
      "alpha_3": "TCA",
      "numeric": 796
    },
    {
      "country_name": "Tuvalu",
      "alpha_2": "TV",
      "alpha_3": "TUV",
      "numeric": 798
    },
    {
      "country_name": "Uganda",
      "alpha_2": "UG",
      "alpha_3": "UGA",
      "numeric": 800
    },
    {
      "country_name": "Ukraine",
      "alpha_2": "UA",
      "alpha_3": "UKR",
      "numeric": 804
    },
    {
      "country_name": "United Arab Emirates",
      "alpha_2": "AE",
      "alpha_3": "ARE",
      "numeric": 784
    },
    {
      "country_name": "United Kingdom",
      "alpha_2": "GB",
      "alpha_3": "GBR",
      "numeric": 826
    },
    {
      "country_name": "United States Minor Outlying Islands",
      "alpha_2": "UM",
      "alpha_3": "UMI",
      "numeric": 581
    },
    {
      "country_name": "United States of America",
      "alpha_2": "US",
      "alpha_3": "USA",
      "numeric": 840
    },
    {
      "country_name": "Uruguay",
      "alpha_2": "UY",
      "alpha_3": "URY",
      "numeric": 858
    },
    {
      "country_name": "Uzbekistan",
      "alpha_2": "UZ",
      "alpha_3": "UZB",
      "numeric": 860
    },
    {
      "country_name": "Vanuatu",
      "alpha_2": "VU",
      "alpha_3": "VUT",
      "numeric": 548
    },
    {
      "country_name": "Venezuela (Bolivarian Republic of)",
      "alpha_2": "VE",
      "alpha_3": "VEN",
      "numeric": 862
    },
    {
      "country_name": "Viet Nam",
      "alpha_2": "VN",
      "alpha_3": "VNM",
      "numeric": 704
    },
    {
      "country_name": "Virgin Islands (British)",
      "alpha_2": "VG",
      "alpha_3": "VGB",
      "numeric": "092"
    },
    {
      "country_name": "Virgin Islands (U.S.)",
      "alpha_2": "VI",
      "alpha_3": "VIR",
      "numeric": 850
    },
    {
      "country_name": "Wallis and Futuna",
      "alpha_2": "WF",
      "alpha_3": "WLF",
      "numeric": 876
    },
    {
      "country_name": "Western Sahara",
      "alpha_2": "EH",
      "alpha_3": "ESH",
      "numeric": 732
    },
    {
      "country_name": "Yemen",
      "alpha_2": "YE",
      "alpha_3": "YEM",
      "numeric": 887
    },
    {
      "country_name": "Zambia",
      "alpha_2": "ZM",
      "alpha_3": "ZMB",
      "numeric": 894
    },
    {
      "country_name": "Zimbabwe",
      "alpha_2": "ZW",
      "alpha_3": "ZWE",
      "numeric": 716
    },
    {
      "country_name": "Aland Islands",
      "alpha_2": "AX",
      "alpha_3": "ALA",
      "numeric": 248
    }
  ];

  ngOnInit(): void {
    
  }

  changeCountry(country: string){
    this.changeDrop = true;
    this.selectedCountry = country;
  }

  displayData(show: boolean){
    this.displayPie = show;
    this.displayLine = show;
  }
  

  checkCorona(){
    for (var i = 0; i < this.countryCode.length; i++){
      if (this.countryCode[i]["country_name"] == this.selectedCountry){
         this.iso3Code = this.countryCode[i]["alpha_3"];
      }
    }
      this._service.getCoronaFromRemote(this.iso3Code).subscribe(
        data => {
          let coronaData = [];
          let requiredKeys = [];
          console.log(data);
          if(data.length == 0){
            this.displayData(false);
            this.flag = 1;
          }else{
            let total_recovered = [];
            let total_deaths = [];
            let total_confirmed = [];
            this.flag = 0;
            let keys = Object.keys(data[0]["timeseries"]);
            requiredKeys = keys.slice(-30);
            requiredKeys.forEach(key => {
            coronaData.push(data[0]["timeseries"][key])
            });
            this.pieChartData[0]["data"] = Object.values(coronaData[coronaData.length-1]);
            for(let i=0; i<coronaData.length; i++){
              total_confirmed.push(coronaData[i]["confirmed"]);
              total_deaths.push(coronaData[i]["deaths"]);
              total_recovered.push(coronaData[i]["recovered"]);
              
            }this.chartData = [];
            this.chartData.push({"data": total_deaths, "label": 'Deaths'});
            this.chartData.push({"data": total_recovered, "label": 'Recoverd'});         
            this.chartData.push({"data": total_confirmed, "label": 'Confirmed'});
            console.log(this.chartData);
            this.chartLabels = requiredKeys;
            this.displayData(true);
            
          }

        },
        error => {
          this.displayData(false);
          console.log("exception occured");
          this.flag = 1;
          console.log(error);
        }
      )
    }
}
