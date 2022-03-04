let geographyHistory = [];

const geographyQuestions = [
    {
        question : 'How were the major mountain belts of the world produced',
        options : ['by weathering', 'by wind erosion', 'by folding', 'by river deposition'],
        answer :'by folding',
        duration : 50
    },
    {
        question : 'What commodity is associated with OPEC',
        options : ['Coffee', 'Iron and steel', 'vegetable oil', 'Mineral oil'],
        answer :'Mineral oil',
        duration : 50
    },
    {
        question : 'Which of the following rocks is composed of the skeletons of microscopic sea plants and animals?',
        options : ['Chalk', 'Granite', 'Sandstone', 'Slate'],
        answer :'Chalk',
        duration : 50
    },
    {
        question : 'Dodoma is to Tanzania as ______ to Nigeria',
        options : ['Abuja', 'Warri', 'Lagos', 'Port Harcourt'],
        answer :'Abuja',
        duration : 50
    },
    {
        question : 'Which of the following countries has the least potential for the production of steel?',
        options : ['India', 'Cuba', 'Japan', 'Germany'],
        answer :'Cuba',
        duration : 50
    },
    {
        question : 'The broad-based population pyramid is composed mainly',
        options : ['Active inhabitants', 'Old dependants', 'Young dependants', 'More females than males'],
        answer :'Young dependants',
        duration : 50
    },
    {
        question : 'Fluid basic lava flow is likely to give rise to a volcanic ______',
        options : ['Cinder', 'Saddle reef', 'Shield', 'Gap'],
        answer :'Shield',
        duration : 50
    },
    {
        question : 'In which of the followinf rock types is petroleum mainly found?',
        options : ['Metamorphic', 'Plutonic', 'Igneous', 'Sedimentary'],
        answer :'Sedimentary',
        duration : 50
    },
    {
        question : 'One basic mineral that is common to Sokoto, Ewekoro, Calabar and Nkalagu is',
        options : ['Gypsum', 'Coal', 'Marble', 'Limestone'],
        answer :'Limestone',
        duration : 50
    },
    {
        question : 'Soil conservation can be achieved through _____?',
        options : ['Monoculture', 'Mechanization', 'Strip-cropping', 'Floriculture'],
        answer :'Strip-cropping',
        duration : 50
    },
    {
        question : 'The oldest system of agriculture in Nigeria which now survives only in very remote areas is?',
        options : ['Bush fallowing', 'Mixed farming', 'Shifting cultivation', 'Market gardening'],
        answer :'Shifting cultivation',
        duration : 50
    },
    {
        question : 'Which of these hazard would most like result directly from deforestation?',
        options : ['Soil erosion', 'Mass wasting', 'Drought', 'Water pollution'],
        answer :'Soil erosion',
        duration : 50
    },
    {
        question : 'The dominant foreign exchange earner of senegal is',
        options : ['Tourism', 'Groundnut', 'Fish', 'Iron-core'],
        answer :'Groundnut',
        duration : 50
    },
    {
        question : 'A desert country which has a high population density supported by irrigation is ____?',
        options : ['Niger', 'Egypt', 'Sudan', 'Kuwait'],
        answer :'Egypt',
        duration : 50
    },
    {
        question : 'The greatest volcanic regions of Africa are found in?',
        options : ['The maghrib', 'Kenya and Tanzania', 'The Camaroons', 'Sudan and Ethiopia'],
        answer :'Kenya and Tanzania',
        duration : 50
    },
    {
        question : 'A type of land-form that is associated with large scale orogeny is a?',
        options : ['Fold mountain', 'Residual mountain', 'Block mountain', 'Volcanic mountain'],
        answer :'Fold mountain',
        duration : 50
    },
    {
        question : 'An instrument used for setting out right angle in surveying a percel of land is',
        options : ['Measuring rod', 'An optical squarer', 'A ranging pole', 'Theodolte'],
        answer :'An optical squarer',
        duration : 50
    },
    {
        question : 'The lack of access to food in some parts of the world emanates from',
        options : ['Educational inequality', 'Poor transport system', 'Economomic Inequality', 'Low development of natural resources'],
        answer :'Poor transport system',
        duration : 50
    },
    {
        question : 'All the following are exmaples of intrusive volcanic features except_______?',
        options : ['dykes', 'sills', 'laccolith', 'lava plateaux'],
        answer :'lava plateaux',
        duration : 50
    },
    {
        question : 'Latitude 66 and half marks the_____',
        options : ['antarctic circle', 'arctic circle', 'tropic of cancer', 'tropic of capricorn'],
        answer :'antarctic circle',
        duration : 50
    },
    {
        question : 'A well will always contain water if its dug_____',
        options : ['Below the Earth\'s basin', 'To reach sand bearing water', 'Above the water table', 'Below the water table'],
        answer :'To reach sand bearing water',
        duration : 50
    },
    {
        question : 'When the moon comes in between the earth and the sun',
        options : ['eclipes of the moon occurs', 'a solar eclipse occurs', 'the length of the day varies', 'the length of the day increase'],
        answer :'a solar eclipse occurs',
        duration : 50
    },
    {
        question : 'Lines joining places with same mean annual rainfall are called',
        options : ['isohyets', 'isohels', 'isohalines', 'isotherms'],
        answer :'isohyets',
        duration : 50
    },
    {
        question : 'what type of climate has the station_____',
        options : ['Cool temperature', 'warm temperature', 'Mediterranean', 'Cold temperature'],
        answer :'Cool temperature',
        duration : 50
    },
    {
        question : 'Which of the following is not a form of mass movement?',
        options : ['Landslide', 'Earthquake', 'Rockslide', 'Talus creep'],
        answer :'Earthquake',
        duration : 50
    },
    {
        question : 'The innermost section of the Earth is the______',
        options : ['Crust', 'Mantle', 'Core', 'Sial'],
        answer :'Core',
        duration : 50
    },
    {
        question : 'A line joining places having an equal degree of cloudiness is an______',
        options : ['Isoneph', 'Isohyet', 'Isobar', 'Isotherm'],
        answer :'Isoneph',
        duration : 50
    },
    {
        question : 'Which of the following is not a proof to show that the earth is spherical in shape?',
        options : ['Sunrise and Sunset', 'Ships visibily', 'Lunar eclipse', 'Twilight and dawn'],
        answer :'Twilight and dawn',
        duration : 50
    },
    {
        question : 'The system of cultivation of tropical commercial crops estaes is known as______',
        options : ['Strip cultivation', 'Plantation agriculture', 'Mixed cropping', 'Intensive farming'],
        answer :'Plantation agriculture',
        duration : 50
    },
    {
        question : 'A mercury barometer is used for measuring_____',
        options : ['Wind speed', 'Atmospheric pressure', 'Sunshine', 'Temperature'],
        answer :'Atmospheric pressure',
        duration : 50
    },
]
