const carData = {
    "Audi": ["A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "e-tron", "RS5", "RS7", "R8"],
    "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X3", "X5", "X6", "X7", "Z4", "i4", "iX", "M3", "M5", "M8"],
    "Ford": ["EcoSport", "Endeavour", "Figo", "Aspire", "Mustang", "Fiesta", "Focus", "Ranger", "Explorer", "Fusion"],
    "Toyota": ["Corolla", "Camry", "Innova Crysta", "Fortuner", "Hilux", "Land Cruiser", "Yaris", "Supra", "RAV4", "Highlander"],
    "Honda": ["City", "Amaze", "Jazz", "Civic", "Accord", "WR-V", "CR-V", "HR-V", "Pilot", "Odyssey"],
    "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "CLA", "CLS", "EQC"],
    "Hyundai": ["Santro", "i10", "i20", "Venue", "Verna", "Creta", "Alcazar", "Elantra", "Tucson", "Santa Fe", "Kona Electric"],
    "Kia": ["Seltos", "Sonet", "Carens", "Carnival", "Sportage", "Sorento", "EV6"],
    "Nissan": ["Micra", "Sunny", "Magnite", "Kicks", "X-Trail", "Patrol", "Altima", "Rogue", "GT-R", "Leaf"],
    "Volkswagen": ["Polo", "Vento", "Passat", "Jetta", "Tiguan", "Taigun", "Touareg", "ID.4", "Golf"],
    "Škoda": ["Fabia", "Octavia", "Rapid", "Superb", "Kushaq", "Kodiaq", "Slavia"],
    "Tata": ["Nano", "Tiago", "Tigor", "Altroz", "Punch", "Zest", "Harrier", "Safari", "Nexon", "Curvv", "Sierra EV"],
    "Mahindra": ["Thar", "Scorpio", "XUV300", "XUV400", "XUV500", "XUV700", "Bolero", "Marazzo", "Alturas G4"],
    "Jeep": ["Compass", "Meridian", "Wrangler", "Grand Cherokee", "Renegade"],
    "Lexus": ["ES", "LS", "RX", "NX", "UX", "GX", "LX"],
    "Jaguar": ["XE", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "F-Type"],
    "Volvo": ["XC40", "XC60", "XC90", "S60", "S90", "V60", "C40 Recharge"],
    "Porsche": ["718 Cayman", "718 Boxster", "911", "Panamera", "Macan", "Cayenne", "Taycan"],
    "Ferrari": ["488", "812 Superfast", "Portofino", "F8 Tributo", "Roma", "SF90 Stradale"],
    "Lamborghini": ["Huracán", "Aventador", "Urus", "Revuelto", "Gallardo"],
    "Maserati": ["Ghibli", "Quattroporte", "Levante", "MC20", "GranTurismo"],
    "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan", "Spectre"],
    "Bentley": ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne"],
    "Tesla": ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster"],
    "Suzuki": ["Alto", "Celerio", "Wagon R", "Swift", "Baleno", "Dzire", "Ertiga", "XL6", "Vitara Brezza", "Grand Vitara"],
    "Subaru": ["Impreza", "Legacy", "Outback", "Forester", "Crosstrek", "WRX"],
    "Chevrolet": ["Spark", "Aveo", "Cruze", "Malibu", "Camaro", "Corvette", "Equinox", "Tahoe", "Suburban"],
    "Mazda": ["Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-30", "CX-5", "CX-9", "MX-5 Miata"],
    "Peugeot": ["208", "308", "508", "2008", "3008", "5008"],
    "Renault": ["Kwid", "Triber", "Kiger", "Duster", "Captur", "Fluence", "Lodgy"],
    "Citroën": ["C3", "C3 Aircross", "C5 Aircross", "Berlingo", "DS7"],
    "Dodge": ["Charger", "Challenger", "Durango", "Journey", "RAM"],
    "Chrysler": ["300", "Pacifica", "Voyager"],
    "Land Rover": ["Defender", "Discovery Sport", "Discovery", "Range Rover Evoque", "Range Rover Velar", "Range Rover Sport", "Range Rover"],
    "Alfa Romeo": ["Giulia", "Giulietta", "Stelvio", "4C"],
    "Aston Martin": ["DB11", "DBS Superleggera", "Vantage", "DBX"],
    "Bugatti": ["Veyron", "Chiron", "Divo", "Bolide"],
    "McLaren": ["540C", "570S", "600LT", "720S", "765LT", "Artura", "P1", "Speedtail"],
    "Pagani": ["Zonda", "Huayra", "Utopia"],
    "Lotus": ["Elise", "Exige", "Evora", "Emira", "Eletre"],
    "Genesis": ["G70", "G80", "G90", "GV70", "GV80", "GV60"],
    "Infiniti": ["Q50", "Q60", "Q70", "QX50", "QX60", "QX80"],
    "Lincoln": ["Corsair", "Nautilus", "Aviator", "Navigator"],
    "Buick": ["Encore", "Envision", "Enclave", "Regal"],
    "Cadillac": ["CT4", "CT5", "CT6", "XT4", "XT5", "XT6", "Escalade"],
    "GMC": ["Terrain", "Acadia", "Canyon", "Sierra", "Yukon"],
    "Saab": ["9-3", "9-5", "900", "9000"],
    "Opel": ["Corsa", "Astra", "Insignia", "Mokka", "Grandland"],
    "Vauxhall": ["Corsa", "Astra", "Insignia", "Mokka", "Grandland"], // UK Opel
    "Fiat": ["Punto", "Linea", "500", "Tipo", "Doblo", "Panda"],
    "Dacia": ["Sandero", "Logan", "Duster", "Jogger"],
    "Isuzu": ["MU-X", "D-Max", "Trooper", "Rodeo"],
    "Proton": ["Saga", "Persona", "X70", "X50"],
    "Perodua": ["Myvi", "Axia", "Bezza", "Ativa"],
    "Great Wall": ["Haval H6", "Haval Jolion", "Tank 300"],
    "BYD": ["Atto 3", "Dolphin", "Seal", "Tang", "Han"],
    "Chery": ["Tiggo 4", "Tiggo 7", "Tiggo 8", "Arrizo 5"],
    "Geely": ["Coolray", "Tugella", "Emgrand", "Okavango"],
    "MG": ["Hector", "Astor", "ZS EV", "Gloster", "MG5"],
    "Rivian": ["R1T", "R1S"],
    "Lucid": ["Air", "Gravity"],
    "Fisker": ["Ocean", "Karma"],
    "Polestar": ["Polestar 1", "Polestar 2", "Polestar 3"],
    "Koenigsegg": ["Agera", "Jesko", "Regera", "Gemera"],
    "Maybach": ["57", "62", "S580", "GLS600"]
};

const bodyTypes = [
    "Convertible",
    "Coupe",
    "Crossover",
    "Hatchback",
    "Minivan",
    "MPV",
    "Pickup Truck",
    "Sedan",
    "Station Wagon",
    "SUV",
    "Roadster",
    "Fastback",
    "Van",
    "Off-road"
];

const conditions = [
    "Brand New",
    "Like New",
    "Used",
    "Certified Pre-Owned",
    "For Parts / Salvage"
];

const transmissions = [
    "Manual",
    "Automatic",
    "CVT",
    "DCT",
    "Semi-Automatic"
];

const cylinders = [3, 4, 5, 6, 8, 10, 12];

const fuelTypes = [
    "Petrol",
    "Diesel",
    "Electric",
    "Hybrid",
    "CNG",
    "LPG"
];



export { carData, bodyTypes, conditions, transmissions, cylinders,fuelTypes };