let physicsHistory = []

const physicsQuestions = [
    {
        question : 'Natural redioactivity consists of the emission of',
        options : ['a-particles and b-rays', 'particles and X-rays', 'y-rays and X-rays', 'a-particles, b-rays and g-rays'],
        answer : 'a-particles, b-rays and g-rays',
        duration : 50
    },
    {
        question : 'Which of the following is true of an electrical charge',
        options : ['Positive charge means deficit electrons', 'Negative charge means excess of electrons', 'Electric current means movement of electrons', 'All of the above'],
        answer : 'All of the above',
        duration : 50
    },
    {
        question : 'Which of the following does not describe the image formed by a plane mirror',
        options : ['Erect', 'Laterraly inverted', 'Same distance from mirror as object', 'Magnified'],
        answer : 'Magnified',
        duration : 50
    },
    {
        question : 'Cathode rays are',
        options : ['High-energy electromagnetic waves', 'Protons', 'Neutrons', 'Streams of electrons'],
        answer : 'Streams of electrons',
        duration : 1
    },
    {
        question : 'The amount of heat needed to raise the temperature of 10kg of copper by 1k is its?',
        options : ['Specific heat Capacity', 'Latent heat', 'Heat capacity', 'Internal energy'],
        answer :'Heat capacity',
        duration : 50
    },
    {
        question : 'Shadow and Eclipses result from the',
        options : ['Refraction of light', 'Reflection of light', 'Defraction of light', 'Rectilinear propagation of light'],
        answer :'Rectilinear propagation of light',
        duration : 50
    },
    {
        question : 'Which of the following obeys Ohm\'s law',
        options : ['all metals', 'diode only', 'all electrolytes', 'glass'],
        answer :'all metals',
        duration : 50
    },
    {
        question : 'Which of the following has the lowest internal resistance when new',
        options : ['Leclanche cell', 'Daniell cell', 'Torch battery', 'Accumulator'],
        answer :'Accumulator',
        duration : 50
    },
    {
        question : 'The pitch of an acoustic device can be increased by',
        options : ['decreasing the loudness', 'increasing the intensity', 'increasing the frequency', 'decreasing the intensity'],
        answer :'increasing the frequency',
        duration : 50
    },
    {
        question : 'One the features of the fission process is that',
        options : ['it leads to chain reaction', 'it products are not radioactive', 'neutrons are not released', 'the sum of the masses of the reactants equal the sum of the masses of the products '],
        answer :'it leads to chain reaction',
        duration : 50
    },
    {
        question : 'The time rate of loss of heat by a body is proportional to the',
        options : ['temeperature of its surroundings', 'temperature of the body', 'difference in temperature between the body and its surroundings', 'ratio of the temperature of the body to that of its surrounding'],
        answer :'difference in temperature between the body and its surroundings',
        duration : 50
    },
    {
        question : 'Electrical appliances in homes are normally earthed so that',
        options : ['a person touching the appliances is safe electric shock', 'both the a.c and d.c sources can be used', 'the appliance are maintained at the higher pd than the earth', 'the appliances are maintained at a lower pd than the earth'],
        answer :'a person touching the appliances is safe electric shock',
        duration : 50
    },
    {
        question : 'The process whereby a liquid turns spontaneously into vapour is called',
        options : ['regelation', 'evaporation', 'boiling', 'sublimation'],
        answer :'evaporation',
        duration : 50
    },
    {
        question : 'The differences observed in solids, liquids and gases may be accounted for by',
        options : ['their relative masses', 'their melting points', 'the space and forces acting between the molecules', 'the different molecules in each of them'],
        answer :'the space and forces acting between the molecules',
        duration : 50
    },
    {
        question : 'Convex mirrors are used as driving mirrors because images formed are',
        options : ['erect, virtual and diminished', 'erect, real and diminished', 'erect, virtual and magnified', 'inverted, virtual and diminised'],
        answer :'the space and forces acting between the molecules',
        duration : 50
    },
    {
        question : 'Which of the following is not an example of electromagnetic wave?',
        options : ['x-ray', 'Radio waves', 'Sound waves', 'Sunlight'],
        answer :'Sound waves',
        duration : 50
    },
    {
        question : 'Under which conditions are cathode rays produced in a discharge tube?',
        options : ['High pressure and low voltage', 'High pressure and High Voltage', 'Low pressure and Low voltage', 'Low pressure and High voltage'],
        answer :'Low pressure and High voltage',
        duration : 50
    },
    {
        question : 'Which of the following instruments helps to maintain the correct humidity and temperature of a building',
        options : ['A compressor', 'A refrigerator', 'Air blower', 'Air conditioner'],
        answer :'Air conditioner',
        duration : 50
    },
    {
        question : 'An Element and its isotope only differ in the number of',
        options : ['Protons', 'Electrons', 'Ions', 'Neutrons'],
        answer :'Neutrons',
        duration : 50
    },
    {
        question : 'The thermal expansion of a solid is an advantage in',
        options : ['Balance wheel of a watch', 'Construction of steel rail lines', 'Construction of large steel bridges', 'Fitting of tyres on wheels'],
        answer :'Balance wheel of a watch',
        duration : 50
    },
    {
        question : 'The instrument used to measure the pressure of a gas is',
        options : ['Barometer', 'Thermometer', 'Hygrometer', 'Manometer'],
        answer :'Manometer',
        duration : 50
    },
    {
        question : 'Which of the following is a scaler qunatity',
        options : ['Tension', 'Weight', 'Mass', 'Inpulse'],
        answer :'Mass',
        duration : 50
    },
    {
        question : 'How can energy loss be minimized through Eddy-current?',
        options : ['By using high resistanece wire', 'By using insulated soft iron wires', 'By using low resistance wire', 'By using turns of wires'],
        answer :'By using high resistanece wire',
        duration : 50
    },
    {
        question : 'Which of the following is a semiconductor',
        options : ['copper', 'silicon', 'plastic', 'iron'],
        answer :'silicon',
        duration : 50
    },
    {
        question : 'Which of the following surface will absorbs radiant heat energy heat',
        options : ['white', 'red', 'black', 'blue'],
        answer :'black',
        duration : 50
    },
    {
        question : 'The instrument to measure the relative density of light is?',
        options : ['thermometer', 'hydrometer', 'spring balance', 'beaker'],
        answer :'hydrometer',
        duration : 50
    },
    {
        question : 'The action of blotting paper on ink is due to',
        options : ['diffusion', 'osmosis', 'capillarity', 'surface tension'],
        answer :'capillarity',
        duration : 50
    },
    {
        question : 'Which of the following is not a mechanical wave?',
        options : ['wave in closed pipe', 'radio waves', 'water waves', 'sound waves'],
        answer :'radio waves',
        duration : 50
    },
    {
        question : 'The instrument used to view stars is the',
        options : ['Prism binoculars', 'Telescope', 'Film projector', 'Microscope'],
        answer :'Telescope',
        duration : 50
    },
    {
        question : 'When an athlete perspires after running, he loses heat through',
        options : ['Evaporation', 'Conduction', 'Radiation', 'Convection'],
        answer :'Evaporation',
        duration : 50
    },
];
