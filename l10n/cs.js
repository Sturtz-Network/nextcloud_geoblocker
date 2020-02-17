OC.L10N.register(
    "geoblocker",
    {
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Uživatel „%s“ se příhlásil(a) z IP adresy „%s“ z blokované země „%s“.",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Přihlášení uživatele „%s“ s IP adresou „%s“ se nepodařilo zkontrolovat kvůli problémům s lokační službou.",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "Uživatel „%s“ se přihlásil(a) s neplatnou IP adresou „%s“.",
    "OK.  (Please make sure the databases are up to date. This is currently not checked here.)" : "OK. (Ověřte, že databáze jsou aktuální. To tu zatím není ověřováno.)",
    "ERROR: \"geoiplookup\" seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "CHYBA: na hostiteli Nexcloud serveru se nezdá být nainstalované „geoiplookup“, nebo není dosažitelné pro webový server, nebo je nesprávně nastavené (je k dispozici databáze pro IPv4 a IPv6?). Možná je v php.ini vypnuté používání funkce exec().",
    "GeoBlocker" : "Geoblokace",
    "Blocks user depending on the estimated country of thier IP address." : "Blokování uživatelů závisí na odhadu země na základě jeho IP adresy.",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. (Early Version)" : "Toto je nadstavba nad geolokačními službami, která umožňuje blokování (v tuto chvíli pouze zaznamenávání!) pokusů o přihlášení z určených zemí. (ranná verze)",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Toto je nadstavba nad geolokačními službami, která umožňuje blokování (v tuto chvíli pouze zaznamenávání!) pokusů o přihlášení z určených zemí.",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Pokusy o přihlášení z IP adres v místní síti nejsou blokovány (ani zaznamenávány).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Nesprávné nastavení Nextcloud (zejména v kontejneru) může vést k tomu, že veškerý přístup se bude jevit přicházet z IP adresy v místní síti.",
    "If you are accessing from external network, this should be an external IP address: " : "Pokud přistupujete z externí sítě, toto by měla být externí IP adresa:",
    "Determination of the country from IP address is only as good as the chosen service." : "Zjišťování země na základě IP adresy je pouze tak dobré, jaká je pro to zvolená služba.",
    "Service" : "Služba",
    "Choose the service you want to use to determine the country from the IP Address:" : "Zvolte službu, kterou chcete použít pro zjištění země na základě IP adresy:",
    "local" : "místní",
    "default" : "výchozí",
    "Status of the chosen service: " : "Stav zvolené služby:",
    "Country Selection" : "Výběr země",
    "Selection mode" : "Režim výběru",
    "No country is blocked but the selected ones" : "Nejsou blokovány žádné země vyjma těch vybraných",
    "All countries are blocked but the selected ones" : "Jsou blokovány všechny země vyjma těch vybraných",
    "The following countries were selected in the list above: " : "Ve výše uvedeném seznamu byly vybrány následující země:",
    "Reaction" : "Reakce",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Pokud je zjištěn pokus o přihlášení ze zvolených zemí, pokus je zaznamenán společně s následující informací",
    "( be aware of data protection issues depending on your logging strategy)" : "(pozor na problémy s ochranou osobních údajů v závislosti na tom, jak zaznamenáváte údaje)",
    "with IP Address" : "s IP adresou",
    "with Country Code" : "s kódem země",
    "with username" : "s uživatelským jménem",
    "In addition, the login attempt can also be blocked" : "Krom toho může být pokus o přihlášení se zablokován",
    "(in a future version)" : "(v budoucí verzi)",
    "Activate blocking of the login attempt from IP adresses of the specified countries." : "Aktivovat blokování pokusů o přihlášení z IP adres, pocházejících ze zadaných zemí.",
    "COUNTRY NOT FOUND" : "ZEMĚ NENALEZENA",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Spojené Arabské Emiráty",
    "Afghanistan" : "Afgánistán",
    "Antigua and Barbuda" : "Antigua a Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albánie",
    "Armenia" : "Arménie",
    "Angola" : "Angola",
    "Antarctica" : "Antarktida",
    "Argentina" : "Argentina",
    "American Samoa" : "Americká Samoa",
    "Austria" : "Rakousko",
    "Australia" : "Austrálie",
    "Aruba" : "Aruba",
    "Åland Islands" : "Alandy",
    "Azerbaijan" : "Ázerbájdžán",
    "Bosnia and Herzegovina" : "Bosna a Hercegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladéš",
    "Belgium" : "Belgie",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulharsko",
    "Bahrain" : "Bahrajn",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Svatý Bartoloměj",
    "Bermuda" : "Bermudy",
    "Brunei Darussalam" : "Brunej",
    "Bolivia (Plurinational State of)" : "Bolívie",
    "Bonaire, Sint Eustatius and Saba" : "Karibské Nizozemsko",
    "Brazil" : "Brazílie",
    "Bahamas" : "Bahamy",
    "Bhutan" : "Bhútán",
    "Bouvet Island" : "Bouvetův ostrov",
    "Botswana" : "Botswana",
    "Belarus" : "Bělorusko",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Kokosové ostrovy",
    "Congo, Democratic Republic of the" : "Kongo",
    "Central African Republic" : "Středoafrická republika",
    "Congo" : "Kongo",
    "Switzerland" : "Švýcarsko",
    "Côte d'Ivoire" : "Pobřeží slonoviny",
    "Cook Islands" : "Cookovy ostrovy",
    "Chile" : "Chile",
    "Cameroon" : "Kamerun",
    "China" : "Čína",
    "Colombia" : "Kolumbie",
    "Costa Rica" : "Kostarika",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Kapverdy",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Vánoční ostrov",
    "Cyprus" : "Kypr",
    "Czechia" : "Česká Republika",
    "Germany" : "Německo",
    "Djibouti" : "Džibutsko",
    "Denmark" : "Dánsko",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Dominikánská republika",
    "Algeria" : "Alžír",
    "Ecuador" : "Ekvádor",
    "Estonia" : "Estonsko",
    "Egypt" : "Egypt",
    "Western Sahara" : "Západní Sahara",
    "Eritrea" : "Eritrea",
    "Spain" : "Španělsko",
    "Ethiopia" : "Etiopie",
    "Finland" : "Finsko",
    "Fiji" : "Fidži",
    "Falkland Islands (Malvinas)" : "Falklandské ostrovy (Malvíny)",
    "Micronesia (Federated States of)" : "Mikronésie",
    "Faroe Islands" : "Faerské ostrovy",
    "France" : "Francie",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Spojené království Velké Británie a Severního Irska",
    "Grenada" : "Grenada",
    "Georgia" : "Gruzie",
    "French Guiana" : "Francouzská Guyana",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grónsko",
    "Gambia" : "Gambie",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadeloupe",
    "Equatorial Guinea" : "Rovníková Guinea",
    "Greece" : "Řecko",
    "South Georgia and the South Sandwich Islands" : "Jižní Georgie a Jižní Sandwichovy ostrovy",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea-Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hongkong",
    "Heard Island and McDonald Islands" : "Heardův ostrov a McDonaldovy ostrovy",
    "Honduras" : "Honduras",
    "Croatia" : "Chorvatsko",
    "Haiti" : "Haiti",
    "Hungary" : "Maďarsko",
    "Indonesia" : "Indonézie",
    "Ireland" : "Irsko",
    "Israel" : "Izrael",
    "Isle of Man" : "Man",
    "India" : "Indie",
    "British Indian Ocean Territory" : "Britské indickooceánské území",
    "Iraq" : "Irák",
    "Iran (Islamic Republic of)" : "Írán",
    "Iceland" : "Island",
    "Italy" : "Itálie",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamajka",
    "Jordan" : "Jordánsko",
    "Japan" : "Japonsko",
    "Kenya" : "Keňa",
    "Kyrgyzstan" : "Kyrgyzstán",
    "Cambodia" : "Kambodža",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komory",
    "Saint Kitts and Nevis" : "Svatý Kryštof a Nevis",
    "Korea (Democratic People's Republic of)" : "Severní Korea (KLDR)",
    "Korea, Republic of" : "Jižní Korea",
    "Kuwait" : "Kuvajt",
    "Cayman Islands" : "Kajmanské ostrovy",
    "Kazakhstan" : "Kazachstán",
    "Lao People's Democratic Republic" : "Laos",
    "Lebanon" : "Libanon",
    "Saint Lucia" : "Svatá Lucie",
    "Liechtenstein" : "Lichnštejnsko",
    "Sri Lanka" : "Srí Lanka",
    "Liberia" : "Libérie",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Litva",
    "Luxembourg" : "Lucembursko",
    "Latvia" : "Lotyšsko",
    "Libya" : "Libye",
    "Morocco" : "Maroko",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Moldávie",
    "Montenegro" : "Černá Hora",
    "Saint Martin (French part)" : "Svatý Martin (francouzská část)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Maršalovy ostrovy",
    "North Macedonia" : "Severní Makedonie",
    "Mali" : "Mali",
    "Myanmar" : "Barma",
    "Mongolia" : "Mongolsko",
    "Macao" : "Macao",
    "Northern Mariana Islands" : "Severní Mariany",
    "Martinique" : "Martinik",
    "Mauritania" : "Mauritánie",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Maurícius",
    "Maldives" : "Maledivy",
    "Malawi" : "Malawi",
    "Mexico" : "Mexiko",
    "Malaysia" : "Malajsie",
    "Mozambique" : "Mozambik",
    "Namibia" : "Nambie",
    "New Caledonia" : "Nová Kaledonie",
    "Niger" : "Niger",
    "Norfolk Island" : "Norfolk",
    "Nigeria" : "Nigérie",
    "Nicaragua" : "Nikaragua",
    "Netherlands" : "Nizozemí",
    "Norway" : "Norsko",
    "Nepal" : "Nepál",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nový Zéland",
    "Oman" : "Omán",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Francouzská Polynésie",
    "Papua New Guinea" : "Papua-Nová Guinea",
    "Philippines" : "Filipíny",
    "Pakistan" : "Pakistán",
    "Poland" : "Polsko",
    "Saint Pierre and Miquelon" : "Saint-Pierre a Miquelon",
    "Pitcairn" : "Pitcairnovy ostrovy",
    "Puerto Rico" : "Portoriko",
    "Palestine, State of" : "Palestina",
    "Portugal" : "Portugalsko",
    "Palau" : "Palau",
    "Paraguay" : "Paraguay",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Rumunsko",
    "Serbia" : "Srbsko",
    "Russian Federation" : "Ruská federace",
    "Rwanda" : "Rwanda",
    "Saudi Arabia" : "Saudská Arábie",
    "Solomon Islands" : "Šalamounovy ostrovy",
    "Seychelles" : "Seychely",
    "Sudan" : "Súdán",
    "Sweden" : "Švédsko",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Svatá Helena",
    "Slovenia" : "Slovinsko",
    "Svalbard and Jan Mayen" : "Špicberky a Jan Mayen",
    "Slovakia" : "Slovensko",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somálsko",
    "Suriname" : "Surinam",
    "South Sudan" : "Jižní Súdán",
    "Sao Tome and Principe" : "Svatý Tomáš a Princův ostrov",
    "El Salvador" : "Salvador",
    "Sint Maarten (Dutch part)" : "Svatý Martin (nizozemská část)",
    "Syrian Arab Republic" : "Sýrie",
    "Eswatini" : "SZ: Svazijsko",
    "Turks and Caicos Islands" : "Turks a Caicos",
    "Chad" : "Čad",
    "French Southern Territories" : "Francouzská jižní a antarktická území",
    "Togo" : "Togo",
    "Thailand" : "Thajsko",
    "Tajikistan" : "Tádžikistán",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Východní Timor",
    "Turkmenistan" : "Turkmenistán",
    "Tunisia" : "Tunisko",
    "Tonga" : "tonga",
    "Turkey" : "Turecko",
    "Trinidad and Tobago" : "Trinidad a Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Tchaj-wan (provincie)",
    "Tanzania, United Republic of" : "Tanzanie",
    "Ukraine" : "Ukrajina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Menší odlehlé ostrovy Spojených států amerických",
    "United States of America" : "Spojené státy americké",
    "Uruguay" : "Uruguay",
    "Uzbekistan" : "Uzbekistán",
    "Holy See" : "Svatý stolec",
    "Saint Vincent and the Grenadines" : "Svatý Vincenc a Grenadiny",
    "Venezuela (Bolivarian Republic of)" : "Venezuela",
    "Virgin Islands (British)" : "Britské Panenské ostrovy",
    "Virgin Islands (U.S.)" : "Americké Panenské ostrovy",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis a Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Jihoafrická republika",
    "Zambia" : "Zambie",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
