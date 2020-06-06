OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "Lo stato del servizio non può essere determinato.",
    "No database date available." : "Nessuna data del database disponibile.",
    "Database file location not available!" : "Posizione del file del database non disponibile!",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "L'utente \"%s\" ha fatto l'accesso con un indirizzo IP \"%s\" non valido.",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "L'utente \"%s\" ha eseguito l'accesso con indirizzo IP \"%s\" dalla nazione bloccata \"%s\".",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "L'accesso dell'utente \"%s\" con indirizzo IP \"%s\" non è stato controllato a causa di problemi con il servizio di geolocalizzazione.",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "ERRORE: il servizio sembra non essere installato sull'host del server Nextcloud o non raggiungibile per il server web o non è configurato correttamente (il database è disponibile per IPv4 e IPv6?!). Forse l'utilizzo del funzione exec() di php è disabilitato nel php.ini.",
    "Date of the database cannot be determined!" : "La data del database non può essere determinata!",
    "local" : "locale",
    "default" : "predefinito",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "ERRORE: il servizio sembra non essere installato correttamente o il database non è disponibile su %s.",
    "ERROR: The database is not initialized. Please run update." : "ERRORE: il database non è inizializzato. Esegui l'aggiornamento.",
    "ERROR: The database is currently initializing. Please wait until update is finished. This may take several minutes." : "ERRORE: il database è in fase di inizializzazione. Attendi fino al termine dell'aggiornamento. Questo potrebbe richiedere diversi minuti.",
    "ERROR: The database is corrupted. Please run update again." : "ERRORE: il database è danneggiato. Esegui nuovamente l'aggiornamento.",
    "ERROR: The database is currently updating. Please wait until update is finished. This may take several minutes." : "ERRORE: il database è in fase di aggiornamento. Attendi fino al termine dell'aggiornamento. Questo potrebbe richiedere diversi minuti.",
    "ERROR: Something is missing." : "ERRORE: manca qualcosa.",
    "No database available!" : "Nessun database disponibile!",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Blocca l'utente in base alla nazione stimata dal suo indirizzo IP.",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. (Early Version)" : "Si tratta di un'interfaccia per servizi di geolocalizzazione, che permette il blocco (attualmente solo registrazione!) dei tentativi di accesso dalle nazioni specificate. (Versione iniziale)",
    "Loading" : "Caricamento",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Si tratta di un'interfaccia per servizi di geolocalizzazione, che permette il blocco (attualmente solo registrazione!) dei tentativi di accesso dalle nazioni specificate.",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "I tentativi di accesso da IP della rete locale non vengono bloccati (o registrati).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "La configurazioni errata di Nextcloud (specialmente in container) può far sembrare tutti gli accessi provenire da IP della rete locale.",
    "If you are accessing from external network, this should be an external IP address: " : "Se stai accedendo da una rete esterna, questo dovrebbe essere un indirizzo esterno:",
    "is local." : "è locale.",
    "is external." : "è esterno.",
    "Determination of the country from IP address is only as good as the chosen service." : "La determinazione della nazione dall'indirizzo IP è buona solo quanto il servizio scelto.",
    "Service" : "Servizio",
    "Choose the service you want to use to determine the country from the IP Address:" : "Scegli il servizio che vuoi usare per determinare la nazione dall'indirizzo IP:",
    "Status of the chosen service: " : "Stato del servizio scelto:",
    "Date of the database: " : "Data del database:",
    "Configuration of the chosen service: " : "Configurazione del servizio scelto:",
    "Location of the database: " : "Posizione del database:",
    "Update Database" : "Aggiorna database",
    "Country Selection" : "Selezione nazione",
    "Choose the selection mode" : "Scegli la modalità di selezione",
    "No country is blocked but the selected ones (blacklist)" : "Nessuna nazione è bloccata tranne quelle selezionate (lista nera)",
    "All countries are blocked but the selected ones (whitelist)" : "Tutte le nazioni sono bloccate tranne quelle selezionate (lista bianca)",
    "Select countries from list" : "Seleziona le nazioni dall'elenco",
    "The following countries were selected in the list above: " : "Sono state selezionate le seguenti nazioni nell'elenco in alto:",
    "Reaction" : "Reazione",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Se un tentativo di accesso viene rilevato dalle nazioni scelte, il tentativo viene registrato con le informazioni seguenti",
    "( be aware of data protection issues depending on your logging strategy)" : "(fai attenzione ai problemi relativi alla protezione dei dati in base alla tua strategia di registrazione degli accessi)",
    "with IP Address" : "con indirizzo IP",
    "with Country Code" : "con codice nazionale",
    "with username" : "con nome utente",
    "In addition, the login attempt can also be blocked" : "In aggiunta, il tentativo di accesso può anche essere bloccato",
    "(in a future version)" : "(in una versione futura)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Attiva il blocco del tentativo di accesso dagli indirizzi IP delle nazioni specificate.",
    "Test" : "Prova",
    "Possibilities to test if the Geoblocker is working as expected:" : "Possibilità di provare se Geoblocker funziona come previsto:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Il prossimo tentativo di accesso dell'utente \"%s\" sarà simulato come proveniente dall'indirizzo IP seguente: ",
    "COUNTRY NOT FOUND" : "NAZIONE NON TROVATA",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Emirati Arabi Uniti",
    "Afghanistan" : "Afghanistan",
    "Antigua and Barbuda" : "Antigua e Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albania",
    "Armenia" : "Armenia",
    "Angola" : "Angola",
    "Antarctica" : "Antartide",
    "Argentina" : "Argentina",
    "American Samoa" : "Samoa Americane",
    "Austria" : "Austria",
    "Australia" : "Australia",
    "Aruba" : "Aruba",
    "Åland Islands" : "Isole Åland",
    "Azerbaijan" : "Azerbaijan",
    "Bosnia and Herzegovina" : "Bosnia ed Erzegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesh",
    "Belgium" : "Belgio",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgaria",
    "Bahrain" : "Bahrein",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Saint Barthelemy",
    "Bermuda" : "Bermuda",
    "Brunei Darussalam" : "Brunei Darussalam",
    "Bolivia (Plurinational State of)" : "Bolivia (Stato Plurinazionale di)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius e Saba",
    "Brazil" : "Brasile",
    "Bahamas" : "Bahamas",
    "Bhutan" : "Bhutan",
    "Bouvet Island" : "Isola Bouvet",
    "Botswana" : "Botswana",
    "Belarus" : "Bielorussia",
    "Belize" : "Belize",
    "Canada" : "Canada",
    "Cocos (Keeling) Islands" : "Isole Cocos (Keeling)",
    "Congo, Democratic Republic of the" : "Congo, Repubblica Democratica del",
    "Central African Republic" : "Repubblica Centrafricana",
    "Congo" : "Congo",
    "Switzerland" : "Svizzera",
    "Côte d'Ivoire" : "Costa d'Avorio",
    "Cook Islands" : "Isole di Cook",
    "Chile" : "Cile",
    "Cameroon" : "Camerun",
    "China" : "Cina",
    "Colombia" : "Colombia",
    "Costa Rica" : "Costa Rica",
    "Cuba" : "Cuba",
    "Cabo Verde" : "Capo Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Isola di Natale",
    "Cyprus" : "Cipro",
    "Czechia" : "Cechia",
    "Germany" : "Germania",
    "Djibouti" : "Gibuti",
    "Denmark" : "Danimarca",
    "Dominica" : "Dominica",
    "Dominican Republic" : "Repubblica Dominicana",
    "Algeria" : "Algeria",
    "Ecuador" : "Ecuador",
    "Estonia" : "Estonia",
    "Egypt" : "Egitto",
    "Western Sahara" : "Sahara occidentale",
    "Eritrea" : "Eritrea",
    "Spain" : "Spagna",
    "Ethiopia" : "Etiopia",
    "Finland" : "Finlandia",
    "Fiji" : "Figi",
    "Falkland Islands (Malvinas)" : "Isole Falkland (Malvinas)",
    "Micronesia (Federated States of)" : "Micronesia (Stati Federati di)",
    "Faroe Islands" : "Isole Faroe",
    "France" : "Francia",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Regno Unito di Gran Bretagna e Irlanda del Nord",
    "Grenada" : "Grenada",
    "Georgia" : "Georgia",
    "French Guiana" : "Guiana Francese",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibilterra",
    "Greenland" : "Groenlandia",
    "Gambia" : "Gambia",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadalupa",
    "Equatorial Guinea" : "Guinea Equatoriale",
    "Greece" : "Grecia",
    "South Georgia and the South Sandwich Islands" : "Georgia del Sud e Isole Sandwich Australi",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea-Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Isole Heard e McDonald",
    "Honduras" : "Honduras",
    "Croatia" : "Croazia",
    "Haiti" : "Haiti",
    "Hungary" : "Ungheria",
    "Indonesia" : "Indonesia",
    "Ireland" : "Irlanda",
    "Israel" : "Israele",
    "Isle of Man" : "Isola di Man",
    "India" : "India",
    "British Indian Ocean Territory" : "Territorio Britannico dell'Oceano Indiani",
    "Iraq" : "Iraq",
    "Iran (Islamic Republic of)" : "Iran (Repubblica Islamica dell')",
    "Iceland" : "Islanda",
    "Italy" : "Italia",
    "Jersey" : "Jersey",
    "Jamaica" : "Giamaica",
    "Jordan" : "Giordania",
    "Japan" : "Giappone",
    "Kenya" : "Kenya",
    "Kyrgyzstan" : "Kirghizistan",
    "Cambodia" : "Cambogia",
    "Kiribati" : "Kiribati",
    "Comoros" : "Comore",
    "Saint Kitts and Nevis" : "Saint Kitts e Nevis",
    "Korea (Democratic People's Republic of)" : "Corea (Repubblica Democratica Popolare di)",
    "Korea, Republic of" : "Corea, Repubblica di",
    "Kuwait" : "Kuwait",
    "Cayman Islands" : "Isole Cayman",
    "Kazakhstan" : "Kazakistan",
    "Lao People's Democratic Republic" : "Repubblica Democratica Popolare del Laos",
    "Lebanon" : "Libano",
    "Saint Lucia" : "Saint Lucia",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Liberia",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Lituania",
    "Luxembourg" : "Lussemburgo",
    "Latvia" : "Lettonia",
    "Libya" : "Libia",
    "Morocco" : "Marocco",
    "Monaco" : "Monaco",
    "Moldova, Republic of" : "Moldavia, Repubblica di",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "Saint Martin (parte francese)",
    "Madagascar" : "Madagascar",
    "Marshall Islands" : "Isole Marshall",
    "North Macedonia" : "Macedonia del Nord",
    "Mali" : "Mali",
    "Myanmar" : "Myanmar",
    "Mongolia" : "Mongolia",
    "Macao" : "Macao",
    "Northern Mariana Islands" : "Isole Marianne settentrionali",
    "Martinique" : "Martinica",
    "Mauritania" : "Mauritania",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauritius",
    "Maldives" : "Maldive",
    "Malawi" : "Malawi",
    "Mexico" : "Messico",
    "Malaysia" : "Malaysia",
    "Mozambique" : "Mozambico",
    "Namibia" : "Namibia",
    "New Caledonia" : "Nuova Caledonia",
    "Niger" : "Niger",
    "Norfolk Island" : "Isola Norfolk",
    "Nigeria" : "Nigeria",
    "Nicaragua" : "Nicaragua",
    "Netherlands" : "Paesi Bassi",
    "Norway" : "Norvegia",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nuova Zelanda",
    "Oman" : "Oman",
    "Panama" : "Panama",
    "Peru" : "Perù",
    "French Polynesia" : "Polinesia Francese",
    "Papua New Guinea" : "Papua Nuova Guinea",
    "Philippines" : "Filippine",
    "Pakistan" : "Pakistan",
    "Poland" : "Polonia",
    "Saint Pierre and Miquelon" : "Saint Pierre e Miquelon",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Porto Rico",
    "Palestine, State of" : "Palestina, Stato di",
    "Portugal" : "Portogallo",
    "Palau" : "Palau",
    "Paraguay" : "Paraguay",
    "Qatar" : "Qatar",
    "Réunion" : "Réunion",
    "Romania" : "Romania",
    "Serbia" : "Serbia",
    "Russian Federation" : "Federazione Russa",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Arabia Saudita",
    "Solomon Islands" : "Isole Salomone",
    "Seychelles" : "Seychelles",
    "Sudan" : "Sudan",
    "Sweden" : "Svezia",
    "Singapore" : "Singapore",
    "Saint Helena, Ascension and Tristan da Cunha" : "Sant'Elena, Ascensione e Tristan da Cunha",
    "Slovenia" : "Slovenia",
    "Svalbard and Jan Mayen" : "Svalbard e Jan Mayen",
    "Slovakia" : "Slovacchia",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalia",
    "Suriname" : "Suriname",
    "South Sudan" : "Sudan del Sud",
    "Sao Tome and Principe" : "Sao Tome e Principe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sint Maarten (parte olandese)",
    "Syrian Arab Republic" : "Repubblica Araba Siriana",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Isole Turks e Caicos",
    "Chad" : "Ciad",
    "French Southern Territories" : "Terre Australi Francesi",
    "Togo" : "Togo",
    "Thailand" : "Thailandia",
    "Tajikistan" : "Tagikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor Est",
    "Turkmenistan" : "Turkmenistan",
    "Tunisia" : "Tunisia",
    "Tonga" : "Tonga",
    "Turkey" : "Turchia",
    "Trinidad and Tobago" : "Trinidad e Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwan, provincia della Cina",
    "Tanzania, United Republic of" : "Tanzania, Repubblica Unita di",
    "Ukraine" : "Ucraina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Isole minori esterne degli Stati Uniti d'America",
    "United States of America" : "Stati Uniti d'America",
    "Uruguay" : "Uruguay",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Città del Vaticano",
    "Saint Vincent and the Grenadines" : "Saint Vincent e Grenadine",
    "Venezuela (Bolivarian Republic of)" : "Venezuela (Repubblica Bolivariana di)",
    "Virgin Islands (British)" : "Isole Vergini (Britanniche)",
    "Virgin Islands (U.S.)" : "Isole Vergini (U.S.A.)",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis e Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Yemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Sudafrica",
    "Zambia" : "Zambia",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=2; plural=(n != 1);");
