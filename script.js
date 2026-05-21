// Catálogo base con "Datos de Respaldo" (Fallback).
// Si la conexión a la API falla o tarda más de 1.5s, usaremos este número base.
const gameCatalog = [
    // TITANES Y ESPORTS
    { id: 730, name: "Counter-Strike 2", base: 1100000 },
    { id: 570, name: "Dota 2", base: 650000 },
    { id: 578080, name: "PUBG: BATTLEGROUNDS", base: 500000 },
    { id: 1172470, name: "Apex Legends", base: 250000 },
    { id: 271590, name: "Grand Theft Auto V", base: 140000 },
    { id: 252490, name: "Rust", base: 110000 },
    { id: 440, name: "Team Fortress 2", base: 85000 },
    { id: 359550, name: "Rainbow Six Siege", base: 75000 },
    { id: 230410, name: "Warframe", base: 60000 },
    { id: 381210, name: "Dead by Daylight", base: 50000 },
    { id: 236390, name: "War Thunder", base: 80000 },
    { id: 1085660, name: "Destiny 2", base: 70000 },
    { id: 553850, name: "Helldivers 2", base: 150000 },
    
    // AAA y MUNDOS ABIERTOS
    { id: 1091500, name: "Cyberpunk 2077", base: 70000 },
    { id: 292030, name: "The Witcher 3: Wild Hunt", base: 40000 },
    { id: 1245620, name: "Elden Ring", base: 90000 },
    { id: 1086940, name: "Baldur's Gate 3", base: 120000 },
    { id: 1174180, name: "Red Dead Redemption 2", base: 45000 },
    { id: 489830, name: "The Elder Scrolls V: Skyrim SE", base: 30000 },
    { id: 377160, name: "Fallout 4", base: 25000 },
    { id: 990080, name: "Hogwarts Legacy", base: 15000 },
    { id: 1716740, name: "Starfield", base: 10000 },
    { id: 582010, name: "Monster Hunter: World", base: 35000 },
    { id: 1593500, name: "God of War", base: 15000 },
    { id: 1817070, name: "Marvel's Spider-Man Remastered", base: 12000 },
    { id: 374320, name: "Dark Souls III", base: 12000 },
    { id: 1151640, name: "Horizon Zero Dawn", base: 8000 },
    { id: 1888930, name: "The Last of Us Part I", base: 5000 },
    { id: 2050650, name: "Resident Evil 4 Remake", base: 15000 },
    { id: 1196590, name: "Resident Evil Village", base: 10000 },
    { id: 1659040, name: "HITMAN 3", base: 8000 },

    // INDIES DE ORO (Aclamados)
    { id: 413150, name: "Stardew Valley", base: 85000 },
    { id: 105600, name: "Terraria", base: 45000 },
    { id: 367520, name: "Hollow Knight", base: 20000 },
    { id: 1145360, name: "Hades", base: 15000 },
    { id: 504230, name: "Celeste", base: 5000 },
    { id: 588650, name: "Dead Cells", base: 10000 },
    { id: 774361, name: "Blasphemous", base: 3000 },
    { id: 2114740, name: "Blasphemous 2", base: 2000 },
    { id: 250900, name: "The Binding of Isaac: Rebirth", base: 25000 },
    { id: 646570, name: "Slay the Spire", base: 15000 },
    { id: 391540, name: "Undertale", base: 4000 },
    { id: 268910, name: "Cuphead", base: 6000 },
    { id: 1794680, name: "Vampire Survivors", base: 15000 },
    { id: 2379780, name: "Balatro", base: 25000 },
    { id: 1868140, name: "Dave the Diver", base: 12000 },
    { id: 1562430, name: "DREDGE", base: 4000 },
    { id: 1092790, name: "Inscryption", base: 5000 },
    { id: 2832860, name: "Buckshot Roulette", base: 8000 },
    { id: 753640, name: "Outer Wilds", base: 3000 },
    { id: 632470, name: "Disco Elysium", base: 4000 },

    // COOPERATIVOS / VIRALES
    { id: 1966720, name: "Lethal Company", base: 45000 },
    { id: 739630, name: "Phasmophobia", base: 25000 },
    { id: 945360, name: "Among Us", base: 12000 },
    { id: 1097150, name: "Fall Guys", base: 15000 },
    { id: 2881650, name: "Content Warning", base: 20000 },
    { id: 1623730, name: "Palworld", base: 90000 },
    { id: 550, name: "Left 4 Dead 2", base: 35000 },
    { id: 548430, name: "Deep Rock Galactic", base: 20000 },
    { id: 648800, name: "Raft", base: 18000 },
    { id: 1326470, name: "Sons Of The Forest", base: 25000 },
    { id: 322330, name: "Don't Starve Together", base: 35000 },

    // SURVIVAL / SANDBOX / SIMULACIÓN
    { id: 4000, name: "Garry's Mod", base: 30000 },
    { id: 892970, name: "Valheim", base: 25000 },
    { id: 346110, name: "ARK: Survival Evolved", base: 35000 },
    { id: 264710, name: "Subnautica", base: 10000 },
    { id: 221100, name: "DayZ", base: 45000 },
    { id: 108600, name: "Project Zomboid", base: 35000 },
    { id: 251570, name: "7 Days to Die", base: 40000 },
    { id: 294100, name: "RimWorld", base: 25000 },
    { id: 427520, name: "Factorio", base: 20000 },
    { id: 233860, name: "Kenshi", base: 8000 },
    { id: 1203620, name: "Enshrouded", base: 15000 },
    { id: 394360, name: "Hearts of Iron IV", base: 40000 },
    { id: 289070, name: "Sid Meier's Civilization VI", base: 50000 },
    { id: 255710, name: "Cities: Skylines", base: 15000 },
    { id: 227300, name: "Euro Truck Simulator 2", base: 45000 },
    { id: 281990, name: "Stellaris", base: 20000 },
    { id: 1158310, name: "Crusader Kings III", base: 25000 },
    { id: 960090, name: "Bloons TD 6", base: 35000 },
    { id: 1454400, name: "Cookie Clicker", base: 15000 },
    { id: 275850, name: "No Man's Sky", base: 18000 },
    { id: 284160, name: "BeamNG.drive", base: 20000 },
    
    // PELEA, TÁCTICO Y VARIOS
    { id: 1364780, name: "Street Fighter 6", base: 25000 },
    { id: 1778820, name: "TEKKEN 8", base: 20000 },
    { id: 1971870, name: "Mortal Kombat 1", base: 5000 },
    { id: 261550, name: "Mount & Blade II: Bannerlord", base: 18000 },
    { id: 393380, name: "Squad", base: 15000 },
    { id: 1144200, name: "Ready or Not", base: 12000 },
    { id: 686810, name: "Hell Let Loose", base: 12000 },
    { id: 594650, name: "Hunt: Showdown", base: 25000 },
    { id: 620980, name: "Beat Saber", base: 5000 },
    { id: 546560, name: "Half-Life: Alyx", base: 2000 },
    { id: 700330, name: "SCP: Secret Laboratory", base: 15000 },

    // CLÁSICOS DE VALVE Y NOSTALGIA
    { id: 220, name: "Half-Life 2", base: 3500 },
    { id: 70, name: "Half-Life", base: 1200 },
    { id: 400, name: "Portal", base: 2500 },
    { id: 620, name: "Portal 2", base: 6000 },
    { id: 500, name: "Left 4 Dead", base: 1000 },
    { id: 10, name: "Counter-Strike (1.6)", base: 8000 },
    { id: 240, name: "Counter-Strike: Source", base: 4500 },
    
    // ROGUELIKES Y DECKBUILDERS
    { id: 1102190, name: "Monster Train", base: 1500 },
    { id: 1296610, name: "Peglin", base: 2000 },
    { id: 1229240, name: "Chained Echoes", base: 800 },
    { id: 1150690, name: "OMORI", base: 2000 },
    { id: 1118200, name: "People Playground", base: 15000 },
    { id: 1782210, name: "Slime Rancher 2", base: 3000 },
    { id: 433340, name: "Slime Rancher", base: 4000 },
    { id: 1942280, name: "Brotato", base: 8000 },
    { id: 2066020, name: "Soulstone Survivors", base: 1500 },
    { id: 1621690, name: "Core Keeper", base: 4500 },
    { id: 1172620, name: "Sea of Thieves", base: 1000 },
    { id: 1062090, name: "Timberborn", base: 4500 },
    
    // SIMULACIÓN Y GESTIÓN
    { id: 1129580, name: "Dyson Sphere Program", base: 5000 },
    { id: 15560, name: "AaaaaAAaaaAAAaaAAAAaAAAAA!!! for the Awesome", base: 100 }, // El nombre siempre hace gracia
    { id: 383120, name: "Empyrion - Galactic Survival", base: 2500 },
    { id: 242920, name: "Banished", base: 3500 },
    { id: 248390, name: "Craft The World", base: 1500 },
    { id: 671440, name: "Rise of Industry", base: 800 },
    { id: 647960, name: "Foundation", base: 2000 },
    { id: 453090, name: "Parkitect", base: 1200 },
    { id: 703080, name: "Planet Zoo", base: 7000 },
    { id: 493340, name: "Planet Coaster", base: 3500 },
    { id: 228380, name: "Wreckfest", base: 4000 },
    { id: 310560, name: "DiRT Rally", base: 800 },
    { id: 690790, name: "DiRT Rally 2.0", base: 3000 },
    { id: 244210, name: "Assetto Corsa", base: 15000 },
    { id: 805550, name: "Assetto Corsa Competizione", base: 6000 },
    { id: 730390, name: "Rider's Republic", base: 2500 },
    { id: 1222680, name: "Need for Speed Heat", base: 4000 },
    { id: 1846380, name: "Need for Speed Unbound", base: 5000 },
    
    // RPG, ESTRATEGIA Y GESTIÓN AAA
    { id: 236850, name: "Europa Universalis IV", base: 18000 },
    { id: 323190, name: "Frostpunk", base: 6000 },
    { id: 2855140, name: "Frostpunk 2", base: 25000 }, // Lanzamiento reciente
    { id: 480650, name: "DOOM", base: 3000 },
    { id: 782330, name: "DOOM Eternal", base: 4500 },
    { id: 1142710, name: "Total War: WARHAMMER III", base: 25000 },
    { id: 594570, name: "Total War: WARHAMMER II", base: 8000 },
    { id: 321360, name: "Total War: ROME II - Emperor Edition", base: 6000 },
    { id: 262060, name: "Darkest Dungeon", base: 4500 },
    { id: 1940340, name: "Darkest Dungeon II", base: 2500 },
    { id: 814380, name: "Sekiro: Shadows Die Twice", base: 8000 },
    { id: 1286680, name: "Tiny Tina's Wonderlands", base: 1500 },
    { id: 49520, name: "Borderlands 2", base: 6000 },
    { id: 397540, name: "Borderlands 3", base: 8000 },
    
    // MISTERIO, NARRATIVA Y NOVELAS VISUALES
    { id: 698780, name: "Doki Doki Literature Club Plus!", base: 1500 },
    { id: 933480, name: "Ender Lilies: Quietus of the Knights", base: 1000 },
    { id: 1113000, name: "Persona 4 Golden", base: 3000 },
    { id: 1687950, name: "Persona 5 Royal", base: 1000 },
    { id: 2161700, name: "Persona 3 Reload", base: 8000 },
    { id: 403640, name: "Dishonored 2", base: 1500 },
    { id: 205100, name: "Dishonored", base: 1200 },
    { id: 8870, name: "BioShock Infinite", base: 1500 },
    { id: 409710, name: "BioShock Remastered", base: 1000 },
    { id: 2620, name: "Call of Duty: Black Ops", base: 800 },
    { id: 202970, name: "Call of Duty: Black Ops II", base: 1500 },
    { id: 311210, name: "Call of Duty: Black Ops III", base: 4500 },
    
    // COOPERATIVOS, PUZZLES Y DIVERSOS
    { id: 582500, name: "We Were Here", base: 1200 },
    { id: 865360, name: "We Were Here Too", base: 500 },
    { id: 1436280, name: "Escape Simulator", base: 1500 },
    { id: 70600, name: "Worms Reloaded", base: 400 },
    { id: 227580, name: "I Am Bread", base: 150 },
    { id: 233720, name: "Surgeon Simulator", base: 200 },
    { id: 322520, name: "SUPERHOT", base: 800 },
    { id: 617830, name: "SUPERHOT VR", base: 500 },
    { id: 681280, name: "Descenders", base: 1800 },
    { id: 1056530, name: "Farming Simulator 22", base: 45000 },
    { id: 313160, name: "Farming Simulator 15", base: 1000 },
    { id: 252950, name: "Rocket League", base: 40000 }, // Ya no se vende en Steam pero sigue teniendo jugadores activos
    { id: 435150, name: "Divinity: Original Sin 2", base: 12000 },
    { id: 203160, name: "Tomb Raider (2013)", base: 2500 },
    { id: 391220, name: "Rise of the Tomb Raider", base: 2000 },
    { id: 750920, name: "Shadow of the Tomb Raider", base: 2200 },
    { id: 241930, name: "Middle-earth: Shadow of Mordor", base: 1500 },
    { id: 356190, name: "Middle-earth: Shadow of War", base: 2500 },
    { id: 219990, name: "Grim Dawn", base: 6000 },
    { id: 238960, name: "Path of Exile", base: 85000 },
    
    // ANIME, LUCHA Y JRPGs
    { id: 310950, name: "Street Fighter V", base: 1500 },
    { id: 976590, name: "Guilty Gear -Strive-", base: 4500 },
    { id: 1089090, name: "ONE PIECE Pirate Warriors 4", base: 1000 },
    { id: 851850, name: "DRAGON BALL Z: KAKAROT", base: 3500 },
    { id: 1229230, name: "DRAGON BALL: Sparking! ZERO", base: 45000 }, // Muy relevante y reciente
    { id: 389730, name: "TEKKEN 7", base: 3500 },
    { id: 2222890, name: "Granblue Fantasy: Relink", base: 8000 },
    { id: 552990, name: "World of Warships", base: 12000 },
    { id: 1059530, name: "Kards", base: 1200 },
    { id: 2085310, name: "MARVEL SNAP", base: 8000 },
    
    // TERROR Y SUPERVIVENCIA
    { id: 418370, name: "Outlast", base: 1500 },
    { id: 1304930, name: "The Outlast Trials", base: 6000 },
    { id: 242760, name: "The Forest", base: 12000 },
    { id: 493520, name: "GTFO", base: 2000 },
    { id: 230270, name: "Alien: Isolation", base: 1500 },
    
    // MMOs Y JUEGOS COMO SERVICIO (LIVE SERVICE)
    { id: 1063730, name: "New World", base: 15000 },
    { id: 1599340, name: "Lost Ark", base: 45000 },
    { id: 582660, name: "Black Desert", base: 20000 },
    { id: 306130, name: "The Elder Scrolls Online", base: 25000 },
    { id: 1151340, name: "Fallout 76", base: 35000 },
    { id: 39210, name: "FINAL FANTASY XIV Online", base: 35000 },
    { id: 386360, name: "SMITE", base: 12000 },
    { id: 315460, name: "Brawlhalla", base: 18000 },
    { id: 304390, name: "For Honor", base: 4000 },
    { id: 1449850, name: "Yu-Gi-Oh! Master Duel", base: 25000 },

    // SUPERVIVENCIA, CRAFTEO Y MUNDO ABIERTO
    { id: 526870, name: "Satisfactory", base: 40000 },
    { id: 244850, name: "Space Engineers", base: 6000 },
    { id: 387990, name: "Scrap Mechanic", base: 5000 },
    { id: 457140, name: "Oxygen Not Included", base: 12000 },
    { id: 1377380, name: "V Rising", base: 8000 },
    { id: 962130, name: "Grounded", base: 6000 },
    { id: 1003590, name: "State of Decay 2", base: 4500 },
    { id: 440900, name: "Conan Exiles", base: 10000 },
    { id: 815370, name: "Green Hell", base: 3500 },
    { id: 361420, name: "ASTRONEER", base: 4000 },
    { id: 1284190, name: "The Planet Crafter", base: 4500 },

    // COZY GAMES Y SIMULADORES DE TRABAJO
    { id: 613100, name: "House Flipper", base: 4000 },
    { id: 1290000, name: "PowerWash Simulator", base: 3500 },
    { id: 621060, name: "PC Building Simulator", base: 1500 },
    { id: 1131750, name: "Unpacking", base: 1200 },
    { id: 1158160, name: "Coral Island", base: 3000 },
    { id: 1084600, name: "My Time at Sandrock", base: 4500 },
    { id: 1401590, name: "Disney Dreamlight Valley", base: 5000 },
    { id: 1190000, name: "Car Mechanic Simulator 2021", base: 3500 },
    { id: 535930, name: "Two Point Hospital", base: 1500 },
    { id: 1649080, name: "Two Point Campus", base: 1000 },

    // ESTRATEGIA Y CONSTRUCCIÓN DE CIUDADES (RTS/CITY BUILDERS)
    { id: 916440, name: "Anno 1800", base: 8000 },
    { id: 813780, name: "Age of Empires II: Definitive Edition", base: 20000 },
    { id: 1466860, name: "Age of Empires IV", base: 12000 },
    { id: 231430, name: "Company of Heroes 2", base: 4000 },
    { id: 1677280, name: "Company of Heroes 3", base: 3000 },
    { id: 466560, name: "Northgard", base: 3500 },
    { id: 492720, name: "Tropico 6", base: 2500 },
    { id: 233450, name: "Prison Architect", base: 2000 },

    // INDIES FAMOSOS Y METROIDVANIAS
    { id: 261570, name: "Ori and the Blind Forest", base: 1500 },
    { id: 1057090, name: "Ori and the Will of the Wisps", base: 2500 },
    { id: 250760, name: "Shovel Knight: Treasure Trove", base: 800 },
    { id: 460950, name: "Katana ZERO", base: 1000 },
    { id: 632360, name: "Risk of Rain 2", base: 15000 },
    { id: 1337520, name: "Risk of Rain Returns", base: 2000 },
    { id: 418530, name: "Spelunky 2", base: 1200 },
    { id: 653530, name: "Return of the Obra Dinn", base: 500 },
    { id: 204360, name: "INSIDE", base: 1000 },
    { id: 48000, name: "LIMBO", base: 800 },
    { id: 424840, name: "Little Nightmares", base: 1500 },
    { id: 860510, name: "Little Nightmares II", base: 2000 },
    { id: 1533420, name: "Neon White", base: 800 },

    // ACTION RPG, HACK & SLASH Y JUEGOS JAPONESES
    { id: 524220, name: "NieR:Automata", base: 4500 },
    { id: 1113560, name: "NieR Replicant", base: 1000 },
    { id: 638970, name: "Yakuza 0", base: 2500 },
    { id: 1235140, name: "Yakuza: Like a Dragon", base: 3000 },
    { id: 2070850, name: "Like a Dragon: Infinite Wealth", base: 5000 },
    { id: 601150, name: "Devil May Cry 5", base: 4000 },
    { id: 460790, name: "Bayonetta", base: 800 },
    { id: 1462040, name: "FINAL FANTASY VII REMAKE INTERGRADE", base: 3500 },
    { id: 637650, name: "FINAL FANTASY XV WINDOWS EDITION", base: 2000 },
    { id: 740130, name: "Tales of Arise", base: 2000 },
    { id: 367500, name: "Dragon's Dogma: Dark Arisen", base: 2500 },
    { id: 2054970, name: "Dragon's Dogma 2", base: 15000 },

    // SHOOTERS (TÁCTICOS, FRENÉTICOS Y CLÁSICOS)
    { id: 107410, name: "Arma 3", base: 15000 },
    { id: 581320, name: "Insurgency: Sandstorm", base: 4000 },
    { id: 312660, name: "Sniper Elite 4", base: 1500 },
    { id: 1058020, name: "Sniper Elite 5", base: 2500 },
    { id: 976730, name: "Halo: The Master Chief Collection", base: 8000 },
    { id: 1240440, name: "Halo Infinite", base: 12000 },
    { id: 1229490, name: "ULTRAKILL", base: 6000 },
    { id: 519860, name: "DUSK", base: 500 },

    // TERROR Y SUSTOS EN GRUPO
    { id: 883710, name: "Resident Evil 2", base: 4000 },
    { id: 952060, name: "Resident Evil 3", base: 2000 },
    { id: 57300, name: "Amnesia: The Dark Descent", base: 800 },
    { id: 1944430, name: "Amnesia: The Bunker", base: 600 },
    { id: 282140, name: "SOMA", base: 500 },
    { id: 312840, name: "Five Nights at Freddy's", base: 1200 },
    { id: 747660, name: "Five Nights at Freddy's: Security Breach", base: 2500 },
    { id: 1274570, name: "DEVOUR", base: 2000 },
    { id: 1922110, name: "Demonologist", base: 1500 },
    { id: 967050, name: "Pacify", base: 1000 },

    // PARTY GAMES Y MULTIJUGADOR CAÓTICO
    { id: 880940, name: "Pummel Party", base: 2500 },
    { id: 431240, name: "Golf With Your Friends", base: 3500 },
    { id: 571740, name: "Golf It!", base: 1500 },
    { id: 674940, name: "Stick Fight: The Game", base: 2000 },
    { id: 285900, name: "Gang Beasts", base: 3000 },
    { id: 477160, name: "Human: Fall Flat", base: 4500 },
    { id: 728880, name: "Overcooked! 2", base: 4000 },
    { id: 1599600, name: "PlateUp!", base: 3500 },
    { id: 323850, name: "Move or Die", base: 800 },
    { id: 312530, name: "Duck Game", base: 600 },
    { id: 434170, name: "The Jackbox Party Pack 3", base: 1200 },
    { id: 341800, name: "Keep Talking and Nobody Explodes", base: 1000 },
    { id: 286160, name: "Tabletop Simulator", base: 6000 },

    // PUZZLES RELAJANTES Y MÁS CARTAS
    { id: 1284410, name: "GWENT: The Witcher Card Game", base: 1500 },
    { id: 368260, name: "Marvel's Midnight Suns", base: 1500 },
    { id: 210970, name: "The Witness", base: 400 },
    { id: 257510, name: "The Talos Principle", base: 500 },
    { id: 835960, name: "The Talos Principle 2", base: 1200 },
    { id: 736260, name: "Baba Is You", base: 800 },
    { id: 1455840, name: "Dorfromantik", base: 1500 },
    { id: 1127500, name: "Mini Motorways", base: 1000 },
    { id: 287980, name: "Mini Metro", base: 600 },

    // BRAWLERS Y BEAT'EM UPS
    { id: 1361510, name: "TMNT: Shredder's Revenge", base: 1500 },
    { id: 985890, name: "Streets of Rage 4", base: 800 },
    { id: 2138710, name: "Sifu", base: 1800 },
    { id: 976310, name: "Mortal Kombat 11", base: 4000 },
    { id: 627270, name: "Injustice 2", base: 1200 },

    // ÉXITOS RECIENTES Y TITANES ACTUALES
    { id: 2358720, name: "Black Myth: Wukong", base: 180000 },
    { id: 2356500, name: "Overwatch 2", base: 45000 },
    { id: 2344520, name: "Diablo IV", base: 35000 },
    { id: 1363080, name: "Manor Lords", base: 25000 },
    { id: 1145350, name: "Hades II", base: 30000 },
    { id: 2073850, name: "THE FINALS", base: 20000 },
    { id: 1203220, name: "NARAKA: BLADEPOINT", base: 120000 },
    { id: 1693980, name: "Dead Space (Remake)", base: 8000 },
    { id: 1627720, name: "Lies of P", base: 12000 },
    { id: 1501750, name: "Lords of the Fallen", base: 5000 },
    { id: 1888160, name: "ARMORED CORE VI FIRES OF RUBICON", base: 10000 },

    // EXCLUSIVOS DE PLAYSTATION AHORA EN PC
    { id: 2215430, name: "Ghost of Tsushima DIRECTOR'S CUT", base: 30000 },
    { id: 1817190, name: "Marvel's Spider-Man: Miles Morales", base: 8000 },
    { id: 2420110, name: "Horizon Forbidden West Complete Edition", base: 15000 },
    { id: 1659420, name: "UNCHARTED: Legacy of Thieves Collection", base: 5000 },
    { id: 1895880, name: "Ratchet & Clank: Rift Apart", base: 4000 },
    { id: 1649240, name: "Returnal", base: 2500 },
    { id: 1599660, name: "Sackboy: A Big Adventure", base: 1000 },

    // CO-OP SHOOTERS Y HORDAS
    { id: 218620, name: "PAYDAY 2", base: 25000 },
    { id: 1361210, name: "Warhammer 40,000: Darktide", base: 15000 },
    { id: 552500, name: "Warhammer: Vermintide 2", base: 12000 },
    { id: 232090, name: "Killing Floor 2", base: 6000 },
    { id: 924970, name: "Back 4 Blood", base: 4500 },
    { id: 699130, name: "World War Z", base: 3500 },

    // CONDUCCIÓN, VUELO Y SIMULACIÓN PURA
    { id: 1551360, name: "Forza Horizon 5", base: 20000 },
    { id: 1293830, name: "Forza Horizon 4", base: 15000 },
    { id: 270880, name: "American Truck Simulator", base: 18000 },
    { id: 1465360, name: "SnowRunner", base: 8000 },
    { id: 675010, name: "MudRunner", base: 2000 },
    { id: 1250410, name: "Microsoft Flight Simulator", base: 15000 },
    { id: 220200, name: "Kerbal Space Program", base: 5000 },
    { id: 573090, name: "Stormworks: Build and Rescue", base: 4000 },
    { id: 552100, name: "Brick Rigs", base: 3000 },
    { id: 230290, name: "Universe Sandbox", base: 2500 },
    { id: 585420, name: "Trailmakers", base: 3500 },

    // RPGs CLÁSICOS Y OBRAS MAESTRAS NARRATIVAS
    { id: 22380, name: "Fallout: New Vegas", base: 18000 },
    { id: 22330, name: "The Elder Scrolls IV: Oblivion", base: 4000 },
    { id: 1328670, name: "Mass Effect Legendary Edition", base: 12000 },
    { id: 17450, name: "Dragon Age: Origins - Ultimate Edition", base: 3500 },
    { id: 1222650, name: "Dragon Age: Inquisition", base: 4500 },
    { id: 379430, name: "Kingdom Come: Deliverance", base: 10000 },
    { id: 719040, name: "Wasteland 3", base: 2500 },
    { id: 291650, name: "Pillars of Eternity", base: 2000 },
    { id: 20920, name: "The Witcher 2: Assassins of Kings", base: 1500 },
    { id: 2600, name: "Vampire: The Masquerade - Bloodlines", base: 800 },
    { id: 1222140, name: "Detroit: Become Human", base: 6000 },

    // MUNDO ABIERTO, ACCIÓN Y SUPERVIVENCIA
    { id: 208650, name: "Batman: Arkham Knight", base: 8000 },
    { id: 1259420, name: "Days Gone", base: 9000 },
    { id: 1850570, name: "DEATH STRANDING DIRECTOR'S CUT", base: 6000 },
    { id: 234140, name: "Mad Max", base: 2500 },
    { id: 307690, name: "Sleeping Dogs: Definitive Edition", base: 2000 },
    { id: 1030840, name: "Mafia: Definitive Edition", base: 3500 },
    { id: 1097840, name: "Gears 5", base: 2500 },
    { id: 513710, name: "SCUM", base: 8000 },
    { id: 794260, name: "Outward Definitive Edition", base: 2000 },

    // CAZA, PESCA Y COZY GAMES
    { id: 518790, name: "theHunter: Call of the Wild", base: 12000 },
    { id: 1288320, name: "Way of the Hunter", base: 2500 },
    { id: 380600, name: "Fishing Planet", base: 8000 },
    { id: 1210320, name: "Potion Craft: Alchemist Simulator", base: 1500 },
    { id: 1062520, name: "Dinkum", base: 3000 },
    { id: 1244460, name: "Jurassic World Evolution 2", base: 5000 },

    // JUEGOS DE REALIDAD VIRTUAL (VR)
    { id: 438100, name: "VRChat", base: 25000 },
    { id: 555160, name: "Pavlov VR", base: 2000 },
    { id: 629730, name: "Blade & Sorcery", base: 4000 },
    { id: 1533390, name: "Gorilla Tag", base: 5000 },

    // LUCHA, BRAWLERS Y ANIME JRPG
    { id: 678950, name: "DRAGON BALL FighterZ", base: 3000 },
    { id: 1498590, name: "THE KING OF FIGHTERS XV", base: 1500 },
    { id: 678960, name: "CODE VEIN", base: 2500 },
    { id: 738540, name: "Tales of Vesperia: Definitive Edition", base: 1200 },
    { id: 429660, name: "Tales of Berseria", base: 1000 },
    { id: 1121560, name: "Atelier Ryza: Ever Darkness", base: 1500 },
    { id: 359870, name: "FINAL FANTASY X/X-2 HD Remaster", base: 2000 },
    { id: 814000, name: "CHRONO TRIGGER", base: 1500 },

    // UNIVERSO STAR WARS Y OTROS
    { id: 1774580, name: "STAR WARS Jedi: Survivor", base: 6000 },
    { id: 1172380, name: "STAR WARS Jedi: Fallen Order", base: 4500 },
    { id: 920210, name: "LEGO Star Wars: The Skywalker Saga", base: 5000 },

    // INDIES DE DESTRUCCIÓN Y PLATAFORMAS 3D
    { id: 1167630, name: "Teardown", base: 5000 },
    { id: 253230, name: "A Hat in Time", base: 1500 },
    { id: 1237320, name: "Sonic Frontiers", base: 3500 },
    { id: 731490, name: "Crash Bandicoot N. Sane Trilogy", base: 2500 },
    { id: 996580, name: "Spyro Reignited Trilogy", base: 2000 },

    // MISTERIO ASIMÉTRICO Y VARIOS
    { id: 1433140, name: "The Texas Chain Saw Massacre", base: 3500 },
    { id: 438740, name: "Friday the 13th: The Game", base: 1000 },
    { id: 1568590, name: "Goose Goose Duck", base: 8000 },
    { id: 466240, name: "Deceit", base: 1500 },
    { id: 859570, name: "Secret Neighbor", base: 1000 },
    { id: 975370, name: "Dwarf Fortress", base: 4000 },
    { id: 629760, name: "MORDHAU", base: 2500 },
    { id: 692850, name: "Bloodstained: Ritual of the Night", base: 1200 },
    { id: 283640, name: "Salt and Sanctuary", base: 800 },
    { id: 534550, name: "Guacamelee! 2", base: 500 },
    { id: 464920, name: "Surviving Mars", base: 2000 },
    { id: 1934680, name: "Age of Mythology: Retold", base: 20000 },
    { id: 2141910, name: "Magic: The Gathering Arena", base: 8000 },
    { id: 462780, name: "Darksiders Warmastered Edition", base: 1000 },
    { id: 388410, name: "Darksiders II Deathinitive Edition", base: 800 },
    { id: 485510, name: "Nioh: Complete Edition", base: 1200 },
    { id: 1325200, name: "Nioh 2 - The Complete Edition", base: 4000 },
    { id: 211820, name: "Starbound", base: 3500 },

    // SHOOTERS TÁCTICOS Y DE EXTRACCIÓN
    { id: 1789480, name: "Marauders", base: 1500 },
    { id: 1808500, name: "ARC Raiders", base: 30000 },
    { id: 1782120, name: "ZERO Sievert", base: 1200 },
    { id: 1824220, name: "Chivalry 2", base: 5000 },
    { id: 505460, name: "Foxhole", base: 4000 },
    { id: 589290, name: "Holdfast: Nations At War", base: 1000 },
    { id: 424030, name: "War of Rights", base: 800 },
    { id: 16900, name: "GROUND BRANCH", base: 1200 },
    { id: 362890, name: "Black Mesa", base: 3500 },

    // GRANDES SAGAS DE UBISOFT Y MUNDO ABIERTO
    { id: 242050, name: "Assassin's Creed IV Black Flag", base: 3000 },
    { id: 812140, name: "Assassin's Creed Odyssey", base: 6000 },
    { id: 2208920, name: "Assassin's Creed Valhalla", base: 7000 },
    { id: 220240, name: "Far Cry 3", base: 2000 },
    { id: 298110, name: "Far Cry 4", base: 2500 },
    { id: 552520, name: "Far Cry 5", base: 6000 },
    { id: 460930, name: "Tom Clancy's Ghost Recon Wildlands", base: 5000 },
    { id: 365590, name: "Tom Clancy's The Division", base: 1500 },
    { id: 2221490, name: "Tom Clancy's The Division 2", base: 3500 },
    { id: 243470, name: "Watch_Dogs", base: 1000 },
    { id: 447040, name: "Watch_Dogs 2", base: 2000 },

    // INDIES IMPRESCINDIBLES Y PREMIADOS
    { id: 1332010, name: "Stray", base: 4500 },
    { id: 1313140, name: "Cult of the Lamb", base: 6000 },
    { id: 553420, name: "TUNIC", base: 1200 },
    { id: 894020, name: "Death's Door", base: 1000 },
    { id: 383870, name: "Firewatch", base: 1500 },
    { id: 501300, name: "What Remains of Edith Finch", base: 1200 },
    { id: 1703340, name: "The Stanley Parable: Ultra Deluxe", base: 1000 },
    { id: 311690, name: "Enter the Gungeon", base: 2500 },
    { id: 881100, name: "Noita", base: 3000 },
    { id: 1282730, name: "Loop Hero", base: 1500 },
    { id: 972660, name: "Spiritfarer", base: 1800 },
    { id: 683320, name: "GRIS", base: 600 },
    { id: 638230, name: "Journey", base: 500 },
    { id: 239030, name: "Papers, Please", base: 1500 },
    { id: 219150, name: "Hotline Miami", base: 1200 },
    { id: 274170, name: "Hotline Miami 2: Wrong Number", base: 1000 },

    // ESTRATEGIA, TÁCTICOS Y SIMULACIÓN
    { id: 268500, name: "XCOM 2", base: 5000 },
    { id: 212680, name: "FTL: Faster Than Light", base: 2500 },
    { id: 590380, name: "Into the Breach", base: 1500 },
    { id: 48700, name: "Mount & Blade: Warband", base: 3500 },
    { id: 704850, name: "Thief Simulator", base: 1500 },
    { id: 641320, name: "Cooking Simulator", base: 1000 },
    { id: 448280, name: "Job Simulator", base: 800 },
    { id: 3164500, name: "Schedule I", base: 60000 },

    // ACCIÓN, AVENTURA Y JUEGOS DE DISPAROS AAA
    { id: 870780, name: "Control Ultimate Edition", base: 3500 },
    { id: 108710, name: "Alan Wake", base: 800 },
    { id: 474960, name: "Quantum Break", base: 600 },
    { id: 201810, name: "Wolfenstein: The New Order", base: 1500 },
    { id: 612880, name: "Wolfenstein II: The New Colossus", base: 1200 },
    { id: 548570, name: "RAGE 2", base: 1000 },
    { id: 225540, name: "Just Cause 3", base: 2500 },
    { id: 517630, name: "Just Cause 4", base: 1500 },
    { id: 6860, name: "Hitman: Blood Money", base: 500 },
    { id: 203140, name: "Hitman: Absolution", base: 800 },
    { id: 63380, name: "Sniper Elite V2", base: 400 },
    { id: 238090, name: "Sniper Elite 3", base: 600 },
    { id: 1237950, name: "STAR WARS Battlefront II", base: 6000 },
    { id: 1222730, name: "STAR WARS: Squadrons", base: 800 },

    // TERROR Y SUPERVIVENCIA OSCURA
    { id: 414340, name: "Hellblade: Senua's Sacrifice", base: 1500 },
    { id: 2461850, name: "Senua's Saga: Hellblade II", base: 2000 },
    { id: 594330, name: "Visage", base: 800 },
    { id: 1295920, name: "The Mortuary Assistant", base: 600 },
    { id: 1262350, name: "SIGNALIS", base: 1000 },
    { id: 1989270, name: "Slay the Princess", base: 1500 },
    { id: 274520, name: "Darkwood", base: 800 },
    { id: 999220, name: "Amnesia: Rebirth", base: 500 },
    { id: 414700, name: "Outlast 2", base: 1200 },
    { id: 480490, name: "Prey", base: 1500 },
    { id: 614570, name: "Dishonored: Death of the Outsider", base: 800 },

    // JRPGs Y JUEGOS CON ENFOQUE NARRATIVO
    { id: 1244090, name: "Sea of Stars", base: 1500 },
    { id: 921570, name: "OCTOPATH TRAVELER", base: 1200 },
    { id: 1971650, name: "OCTOPATH TRAVELER II", base: 2000 },
    { id: 1446650, name: "BRAVELY DEFAULT II", base: 1000 },
    { id: 319630, name: "Life is Strange", base: 1500 },
    { id: 1190460, name: "Life is Strange: True Colors", base: 1000 },
    { id: 260230, name: "Valiant Hearts: The Great War", base: 500 },
    { id: 256290, name: "Child of Light", base: 400 },
    { id: 213670, name: "South Park: The Stick of Truth", base: 1500 },
    { id: 485980, name: "South Park: The Fractured But Whole", base: 1200 },

    // NOSTALGIA Y ARCADE
    { id: 322170, name: "Geometry Dash", base: 25000 },
    { id: 3590, name: "Plants vs. Zombies GOTY Edition", base: 5000 },
    { id: 1276390, name: "Bloons TD Battles 2", base: 2500 },
    { id: 1262240, name: "Plants vs. Zombies: Battle for Neighborville", base: 1000 },
    { id: 40800, name: "Super Meat Boy", base: 800 },
    { id: 113200, name: "The Binding of Isaac", base: 2000 },
    { id: 224760, name: "FEZ", base: 400 },
    { id: 26800, name: "Braid", base: 200 },
    { id: 307780, name: "Mortal Kombat X", base: 1800 },
    { id: 200710, name: "Torchlight II", base: 1200 },
    { id: 475150, name: "Titan Quest Anniversary Edition", base: 1500 }

    

    
];

// Variables de estado
let score = 0;
let highScore = 0;
let currentGameLeft = null;
let currentGameRight = null;
let isAnimating = false;
let isFirstRound = true;

// SISTEMA DE PRECARGA OPTIMIZADA
let gameQueue = [];
let isFillingQueue = false;
const MAX_QUEUE_SIZE = 4; // Mantenemos 4 listos para velocidad extrema

const scoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreEl = document.getElementById('final-score');

const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num);
const getSteamImageUrl = (appId) => `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`;

const showLoader = (side) => document.getElementById(`loader-${side}`).classList.remove('hidden');
const hideLoader = (side) => document.getElementById(`loader-${side}`).classList.add('hidden');


async function fetchGameData(gameBase) {
    // 1. Añadimos un timestamp para "engañar" al proxy y evitar que nos devuelva caché antigua
    const timestamp = Date.now();
    const steamApiUrl = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${gameBase.id}&t=${timestamp}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(steamApiUrl)}`;

    let players = gameBase.base; // Asignamos el respaldo por defecto

    try {
        // 2. Aumentamos el timeout a 4000ms (4 segundos). 
        // Como usas precarga en segundo plano, la red tiene tiempo para respirar sin penalizar la UI del usuario.
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch(proxyUrl, { signal: controller.signal });
        clearTimeout(timeoutId); // Si llega a tiempo, cancelamos la bomba lógica

        if (response.ok) {
            const steamData = await response.json();
            
            // 3. Validación estricta: Comprobamos que el objeto exista y que player_count no sea 'undefined'
            // Esto soluciona el bug de los juegos que tienen legítimamente 0 jugadores concurrentes.
            if (steamData?.response && typeof steamData.response.player_count !== 'undefined') {
                players = steamData.response.player_count; // Datos 100% reales
            } else {
                throw new Error("El JSON de Steam no tiene el formato esperado");
            }
        } else {
            throw new Error(`HTTP Error Proxy: ${response.status}`);
        }
    } catch (error) {
        console.warn(`[Modo Fallback activado] Fallo al obtener datos reales de ${gameBase.name}: ${error.message}`);
        
        // Solo aplicamos la variación matemática si falló el fetch real
        players = Math.floor(players * (0.9 + Math.random() * 0.2));
    }

    const imageUrl = getSteamImageUrl(gameBase.id);

    // Precarga de imagen (Lógica intacta, funciona bien)
    await new Promise((resolve) => {
        const img = new Image();
        const imgTimeout = setTimeout(resolve, 1000);
        
        img.onload = () => { clearTimeout(imgTimeout); resolve(); };
        img.onerror = () => { clearTimeout(imgTimeout); resolve(); };
        img.src = imageUrl;
    });

    return {
        id: gameBase.id,
        title: gameBase.name,
        image: imageUrl,
        players: players
    };
}

// Seleccionar juego que no esté activo ni en cola
function getRandomGameBase() {
    const activeIds = [
        currentGameLeft?.id, 
        currentGameRight?.id, 
        ...gameQueue.map(g => g.id)
    ].filter(id => id !== undefined);

    let availableGames = gameCatalog.filter(g => !activeIds.includes(g.id));
    if (availableGames.length === 0) availableGames = gameCatalog; 

    return availableGames[Math.floor(Math.random() * availableGames.length)];
}

// Llenado de cola SECUENCIAL para evitar bloqueos del proxy gratuito
async function fillQueue() {
    if (isFillingQueue) return;
    isFillingQueue = true;

    // Ejecutamos el bucle hasta que tengamos los juegos necesarios
    while (gameQueue.length < MAX_QUEUE_SIZE) {
        const nextBase = getRandomGameBase();
        
        try {
            // AWAIT aquí asegura que la petición termine ANTES de lanzar la siguiente (Secuencial)
            const data = await fetchGameData(nextBase);
            gameQueue.push(data);
            
            // Le damos al proxy un "respiro" de 400ms entre cada petición
            // Esto evita que AllOrigins nos bloquee por hacer Spam (Error 429)
            await new Promise(resolve => setTimeout(resolve, 400));
            
        } catch (error) {
            console.error("Error cargando carta en cola:", error);
            // Si falla excepcionalmente, hacemos una pausa más larga antes de reintentar
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    isFillingQueue = false;
}
// ARRANQUE EN FRÍO: Disparamos la descarga en el milisegundo 0 (fuera de funciones)
fillQueue();

async function startGame() {
    score = 0;
    scoreEl.innerText = score;
    gameOverScreen.classList.add('hidden');
    isAnimating = true;
    isFirstRound = true;

    showLoader('left');
    showLoader('right');

    currentGameLeft = null;
    currentGameRight = null;

    // Esperamos a tener al menos 2 juegos. Si la red es decente, 
    // como lanzamos el fillQueue() arriba, ya deberían estar listos.
    while (gameQueue.length < 2) {
        await new Promise(r => setTimeout(r, 50)); // Chequeo ultra rápido (50ms)
    }

    currentGameLeft = gameQueue.shift();
    currentGameRight = gameQueue.shift();

    fillQueue(); // Reponer recámara

    hideLoader('left');
    hideLoader('right');
    
    updateUI();
    isAnimating = false;
}

function updateUI() {
    document.getElementById('title-left').innerText = currentGameLeft.title;
    document.getElementById('img-left').src = currentGameLeft.image;
    document.getElementById('players-left').innerText = formatNumber(currentGameLeft.players);
    
    document.getElementById('title-right').innerText = currentGameRight.title;
    document.getElementById('img-right').src = currentGameRight.image;
    document.getElementById('players-right').innerText = formatNumber(currentGameRight.players);

    document.getElementById('card-left').className = 'card';
    document.getElementById('card-right').className = 'card';
    
    if (isFirstRound) {
        document.getElementById('players-left-container').classList.add('hidden');
        document.getElementById('players-right-container').classList.add('hidden');
    } else {
        document.getElementById('players-left-container').classList.remove('hidden');
        document.getElementById('players-right-container').classList.add('hidden');
    }
}

async function makeGuess(sideClicked) {
    if (isAnimating) return;
    isAnimating = true;

    document.getElementById('players-left-container').classList.remove('hidden');
    document.getElementById('players-right-container').classList.remove('hidden');

    const leftPlayers = currentGameLeft.players;
    const rightPlayers = currentGameRight.players;
    
    let isCorrect = (sideClicked === 'left') ? (leftPlayers >= rightPlayers) : (rightPlayers >= leftPlayers);

    const clickedCard = document.getElementById(`card-${sideClicked}`);
    const otherCard = document.getElementById(sideClicked === 'left' ? 'card-right' : 'card-left');

    if (isCorrect) {
        clickedCard.classList.add('correct');
        score++;
        scoreEl.innerText = score;

        const winnerGame = (leftPlayers >= rightPlayers) ? currentGameLeft : currentGameRight;
        
        setTimeout(() => nextRound(winnerGame), 2000);
    } else {
        clickedCard.classList.add('wrong');
        otherCard.classList.add('correct');
        
        setTimeout(() => endGame(), 2500);
    }
}

async function nextRound(winnerGame) {
    isFirstRound = false;
    currentGameLeft = winnerGame;
    
    updateUI(); 

    if (gameQueue.length === 0) {
        showLoader('right');
        while (gameQueue.length === 0) {
            await new Promise(r => setTimeout(r, 50));
        }
        hideLoader('right');
    }

    currentGameRight = gameQueue.shift();
    fillQueue(); 
    
    updateUI();
    isAnimating = false;
}

function endGame() {
    if (score > highScore) {
        highScore = score;
        highScoreEl.innerText = highScore;
    }
    finalScoreEl.innerText = score;
    gameOverScreen.classList.remove('hidden');
}

// CONTROL DEL MODAL DE INSTRUCCIONES
const instructionsModal = document.getElementById('instructions-modal');
function openInstructions() { instructionsModal.classList.remove('hidden'); }
function closeInstructions() { instructionsModal.classList.add('hidden'); }
instructionsModal.addEventListener('click', function(event) {
    if (event.target === instructionsModal) closeInstructions();
});

// Iniciamos el juego cuando el HTML acabe de cargar
window.onload = startGame;