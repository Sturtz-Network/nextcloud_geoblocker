OC.L10N.register(
    "geoblocker",
    {
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "Вход в систему пользователя %s с неверным IP-адресом %s.",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Вход в систему пользователя %s с IP-адресом %s из страны %s, находящейся в списке заблокированных",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Невозможно выполнить проверку входа пользователем %s c IP-адресом %s, служба определения местоположения не работает.",
    "OK.  (Please make sure the databases are up to date. This is currently not checked here.)" : "OK. (Убедитесь, что используются актуальные базы данных, т.к. эта проверка не производится)",
    "ERROR: \"geoiplookup\" seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "Ошибка: программа «geoiplookup» не установлена в системе, в которой выполняется Nextcloud, недоступна для веб-сервера или неверно настроена. Проверьте доступность баз данных адресов IPv4 и IPv6, а также не включено ли блокирование функции PHP  exec() в файле «php.ini».",
    "GeoBlocker" : "Блокировка по положению",
    "Blocks user depending on the estimated country of thier IP address." : "Блокировка входа пользователей на основании определения страны по IP-адресу.",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. (Early Version)" : "Это оболочка к службам определения местоположения по IP-адресу, позволяющая в будущем блокировать, а в настоящее время только уведомлять о попытках входа из заданных стран. (Предварительная версия).",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Это оболочка к службам определения местоположения по IP-адресу, позволяющая в будущем блокировать, а в настоящее время только уведомлять о попытках входа из заданных стран.",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Попытки входа из локальной сети сервера не блокируются (не отслеживаются).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Неверная конфигурация Nextcloud (особенно при выполнении в изолированном контейнере) может привести к ошибочному определению всех подключений как локальных.",
    "If you are accessing from external network, this should be an external IP address: " : "При подключении из внешней сети это адрес является внешним:",
    "is local." : "внутренний.",
    "is external." : "внешний.",
    "Determination of the country from IP address is only as good as the chosen service." : "Сопоставление стран IP-адресам выполняется выбранной службой.",
    "Service" : "Служба",
    "Choose the service you want to use to determine the country from the IP Address:" : "Выберите службу сопоставления страны IP-адресу:",
    "local" : "локальная",
    "default" : "по умолчанию",
    "Status of the chosen service: " : "Состояние выбранной службы:",
    "Country Selection" : "Выбор стран",
    "Choose the selection mode" : "Режим работы:",
    "No country is blocked but the selected ones" : "Блокировать только выбранные страны",
    "All countries are blocked but the selected ones" : "Не блокировать только выбранные страны",
    "Select countries from list" : "Выберите стран из стписка",
    "The following countries were selected in the list above: " : "Выбраны следующие страны:",
    "Reaction" : "Действия",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "При определении попытки входа из стран, выбранных выше, в журнал будут дополнительно записаны следующие данные",
    "( be aware of data protection issues depending on your logging strategy)" : "(помните о защите данных файлах журналов)",
    "with IP Address" : "IP-адрес",
    "with Country Code" : "код страны",
    "with username" : "имя пользователя",
    "In addition, the login attempt can also be blocked" : "Дополнительно блокировать неразрешённые попытки входа",
    "(in a future version)" : "(в будущих версиях)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Включить блокирование попыток входа с IP-адресов указанных стран.",
    "Test" : "Проверить",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Для следующей попытки входа пользователя %s IP-адрес будет определён как:",
    "COUNTRY NOT FOUND" : "СТРАНА НЕ ОПРЕДЕЛЕНА",
    "Andorra" : "Андорра",
    "United Arab Emirates" : "Объединенные Арабские Эмираты",
    "Afghanistan" : "Афганистан",
    "Antigua and Barbuda" : "Антигуа и Барбуда",
    "Anguilla" : "Ангилья",
    "Albania" : "Албания",
    "Armenia" : "Армения",
    "Angola" : "Ангола",
    "Antarctica" : "Антарктика",
    "Argentina" : "Аргентина",
    "American Samoa" : "Американское Самоа",
    "Austria" : "Австрия",
    "Australia" : "Австралия",
    "Aruba" : "Аруба",
    "Åland Islands" : "Аландские острова",
    "Azerbaijan" : "Азербайджан",
    "Bosnia and Herzegovina" : "Босния и Герцеговина",
    "Barbados" : "Барбадос",
    "Bangladesh" : "Бангладеш",
    "Belgium" : "Бельгия",
    "Burkina Faso" : "Буркина-Фасо",
    "Bulgaria" : "Болгария",
    "Bahrain" : "Бахрейн",
    "Burundi" : "Бурунди",
    "Benin" : "Бенин",
    "Saint Barthélemy" : "Сен-Бартелеми",
    "Bermuda" : "Бермудские Острова",
    "Brunei Darussalam" : "Бруней",
    "Bolivia (Plurinational State of)" : "Боливия",
    "Bonaire, Sint Eustatius and Saba" : "Бонэйр, Синт-Эстатиус и Саба",
    "Brazil" : "Бразилия",
    "Bahamas" : "Багамские острова",
    "Bhutan" : "Бутан",
    "Bouvet Island" : "Остров Буве",
    "Botswana" : "Ботсвана",
    "Belarus" : "Беларусь",
    "Belize" : "Белиз",
    "Canada" : "Канада",
    "Cocos (Keeling) Islands" : "Кокосовые (Килинг) острова",
    "Congo, Democratic Republic of the" : "Конго (Демократическая Республика)",
    "Central African Republic" : "Центральная Африканская Республика",
    "Congo" : "Конго",
    "Switzerland" : "Швейцария",
    "Côte d'Ivoire" : "Кот-д’Ивуар",
    "Cook Islands" : "Острова Кука",
    "Chile" : "Чили",
    "Cameroon" : "Камерун",
    "China" : "Китай",
    "Colombia" : "Колумбия",
    "Costa Rica" : "Коста-Рика",
    "Cuba" : "Куба",
    "Cabo Verde" : "Кабо-Верде",
    "Curaçao" : "Кюрасао",
    "Christmas Island" : "Остров Рождества",
    "Cyprus" : "Кипр",
    "Czechia" : "Чехия",
    "Germany" : "Германия",
    "Djibouti" : "Джибути",
    "Denmark" : "Дания",
    "Dominica" : "Доминика",
    "Dominican Republic" : "Доминиканская Республика",
    "Algeria" : "Алжир",
    "Ecuador" : "Эквадор",
    "Estonia" : "Эстония",
    "Egypt" : "Египет",
    "Western Sahara" : "Западная Сахара",
    "Eritrea" : "Эритрея",
    "Spain" : "Испания",
    "Ethiopia" : "Эфиопия",
    "Finland" : "Финляндия",
    "Fiji" : "Фиджи",
    "Falkland Islands (Malvinas)" : "Фолкленские Острова",
    "Micronesia (Federated States of)" : "Федеративные Штаты Микронезии",
    "Faroe Islands" : "Фарерские острова",
    "France" : "Франция",
    "Gabon" : "Габон",
    "United Kingdom of Great Britain and Northern Ireland" : "Соединённое Королевство Великобритании и Северной Ирландии",
    "Grenada" : "Гренада",
    "Georgia" : "Грузия",
    "French Guiana" : "Французская Гайана",
    "Guernsey" : "Гернси",
    "Ghana" : "Гана",
    "Gibraltar" : "Гибралтар",
    "Greenland" : "Гренландия",
    "Gambia" : "Гамбия",
    "Guinea" : "Гвинея",
    "Guadeloupe" : "Гваделупа",
    "Equatorial Guinea" : "Экваториальная Гвинея",
    "Greece" : "Греция",
    "South Georgia and the South Sandwich Islands" : "Южная Георгия и Южные Сандвичевы Острова",
    "Guatemala" : "Гватемала",
    "Guam" : "Гуам",
    "Guinea-Bissau" : "Гвинея-Биссау",
    "Guyana" : "Гайана",
    "Hong Kong" : "Гонконг",
    "Heard Island and McDonald Islands" : "Остров Херд и острова Макдональд",
    "Honduras" : "Гондурас",
    "Croatia" : "Хорватия",
    "Haiti" : "Гаити",
    "Hungary" : "Венгрия",
    "Indonesia" : "Индонезия",
    "Ireland" : "Ирландия",
    "Israel" : "Израиль",
    "Isle of Man" : "Остров Мэн",
    "India" : "Индия",
    "British Indian Ocean Territory" : "Британская территория Индийского океана",
    "Iraq" : "Ирак",
    "Iran (Islamic Republic of)" : "Исламская Республика Иран",
    "Iceland" : "Исландия",
    "Italy" : "Италия",
    "Jersey" : "Джерси",
    "Jamaica" : "Ямайка",
    "Jordan" : "Иордания",
    "Japan" : "Япония",
    "Kenya" : "Кения",
    "Kyrgyzstan" : "Киргизия",
    "Cambodia" : "Камбожда",
    "Kiribati" : "Кирибати",
    "Comoros" : "Коморы",
    "Saint Kitts and Nevis" : "Сент-Китс и Невис",
    "Korea (Democratic People's Republic of)" : "Корейская Народная Демократическая Республика (КНДР)",
    "Korea, Republic of" : "Корея",
    "Kuwait" : "Кувейт",
    "Cayman Islands" : "Каймановы острова",
    "Kazakhstan" : "Казахстан",
    "Lao People's Democratic Republic" : "Лаос",
    "Lebanon" : "Ливан",
    "Saint Lucia" : "Сент-Люсия",
    "Liechtenstein" : "Лихтенштейн",
    "Sri Lanka" : "Шри Ланка",
    "Liberia" : "Либерия",
    "Lesotho" : "Лесото",
    "Lithuania" : "Литва",
    "Luxembourg" : "Люксембург",
    "Latvia" : "Латвия",
    "Libya" : "Ливия",
    "Morocco" : "Марокко",
    "Monaco" : "Монако",
    "Moldova, Republic of" : "Молдова",
    "Montenegro" : "Черногория",
    "Saint Martin (French part)" : "Сен-Мартен (владение Франции)",
    "Madagascar" : "Мадагаскар",
    "Marshall Islands" : "Маршалловы Острова",
    "North Macedonia" : "Северная Македония",
    "Mali" : "Мали",
    "Myanmar" : "Мьянма",
    "Mongolia" : "Монголия",
    "Macao" : "Макао",
    "Northern Mariana Islands" : "Северные Марианские Острова",
    "Martinique" : "Мартиника",
    "Mauritania" : "Мавритания",
    "Montserrat" : "Монтсеррат",
    "Malta" : "Мальта",
    "Mauritius" : "Маврикий",
    "Maldives" : "Мальдивы",
    "Malawi" : "Малави",
    "Mexico" : "Мексика",
    "Malaysia" : "Малайзия",
    "Mozambique" : "Мозамбик",
    "Namibia" : "Намибия",
    "New Caledonia" : "Новая Каледония",
    "Niger" : "Нигер",
    "Norfolk Island" : "Норфолские Острова",
    "Nigeria" : "Нигерия",
    "Nicaragua" : "Никарагуа",
    "Netherlands" : "Нидерланды",
    "Norway" : "Норвегия",
    "Nepal" : "Непал",
    "Nauru" : "Науру",
    "Niue" : "Ниуэ",
    "New Zealand" : "Новая Зеландия",
    "Oman" : "Оман",
    "Panama" : "Панама",
    "Peru" : "Перу",
    "French Polynesia" : "Французская Полинезия",
    "Papua New Guinea" : "Папуа Новая Гвинея",
    "Philippines" : "Филипинны",
    "Pakistan" : "Пакистан",
    "Poland" : "Польша",
    "Saint Pierre and Miquelon" : "Сен-Пьер и Микелон",
    "Pitcairn" : "Острова Питкэрн",
    "Puerto Rico" : "Пуэрто Рико",
    "Palestine, State of" : "Палестина",
    "Portugal" : "Португалия",
    "Palau" : "Палау",
    "Paraguay" : "Парагвай",
    "Qatar" : "Катар",
    "Réunion" : "Реюньон",
    "Romania" : "Румыния",
    "Serbia" : "Сербия",
    "Russian Federation" : "Российская Федерация",
    "Rwanda" : "Руанда",
    "Saudi Arabia" : "Саудовская Аравия",
    "Solomon Islands" : "Соломоновы Острова",
    "Seychelles" : "Сейшельские Острова",
    "Sudan" : "Судан",
    "Sweden" : "Швеция",
    "Singapore" : "Сингапур",
    "Saint Helena, Ascension and Tristan da Cunha" : "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
    "Slovenia" : "Словения",
    "Svalbard and Jan Mayen" : "Шпицберген и Ян-Майен",
    "Slovakia" : "Словакия",
    "Sierra Leone" : "Сьерра Леоне",
    "San Marino" : "Сан Марино",
    "Senegal" : "Сенегал",
    "Somalia" : "Сомали",
    "Suriname" : "Суринам",
    "South Sudan" : "Южный Судан",
    "Sao Tome and Principe" : "Сантоме и Принсипи",
    "El Salvador" : "Эль-Сальвадор",
    "Sint Maarten (Dutch part)" : "Синт-Мартен Королевства Нидерландов",
    "Syrian Arab Republic" : "Сирийская Арабская Республика",
    "Eswatini" : "Эсватини",
    "Turks and Caicos Islands" : "Теркс и Кайкос",
    "Chad" : "Чад",
    "French Southern Territories" : "Французские Южные Территории",
    "Togo" : "Того",
    "Thailand" : "Тайланд",
    "Tajikistan" : "Таджикистан",
    "Tokelau" : "Токелау",
    "Timor-Leste" : "Восточный Тимор",
    "Turkmenistan" : "Туркменистан",
    "Tunisia" : "Тунис",
    "Tonga" : "Тонганский",
    "Turkey" : "Турция",
    "Trinidad and Tobago" : "Тринидад и Тобаго",
    "Tuvalu" : "Тувалу",
    "Taiwan, Province of China" : "Тайвань",
    "Tanzania, United Republic of" : "Танзания",
    "Ukraine" : "Украина",
    "Uganda" : "Уганда",
    "United States Minor Outlying Islands" : "Внешние малые острова США",
    "United States of America" : "Соединенные Штаты Америки",
    "Uruguay" : "Уругвай",
    "Uzbekistan" : "Узбекистан",
    "Holy See" : "Ватикан",
    "Saint Vincent and the Grenadines" : "Сант Винсент и Гренадины",
    "Venezuela (Bolivarian Republic of)" : "Венесуэла",
    "Virgin Islands (British)" : "Британские Вирджинские Острова",
    "Virgin Islands (U.S.)" : "Американские Вирджинские Острова",
    "Viet Nam" : "Вьетнам",
    "Vanuatu" : "Вануату",
    "Wallis and Futuna" : "Уоллис и Футуна",
    "Samoa" : "Самоа",
    "Yemen" : "Йемен",
    "Mayotte" : "Майотта",
    "South Africa" : "Южная Африка",
    "Zambia" : "Замбия",
    "Zimbabwe" : "Зимбабве"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
