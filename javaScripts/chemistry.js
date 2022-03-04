let chemistryHistory = [];

const chemistryQuestions = [
    {
        question : 'According to Charles Law, the volume of a gas becomes zero at',
        options : ['0°C', '-100°C', '-273°C', '-373°C'],
        answer :'-273°C',
        duration : 10
    },
    {
        question : 'A substance that is used as a ripening agent for fruits is',
        options : ['Ethane', 'Propane', 'Methane', 'Butane'],
        answer :'Ethane',
        duration : 10
    },
    {
        question : 'The Sulphide which is insoluble in dilute hydrochloric acid is',
        options : ['Fes', 'CuS', 'ZnS', 'Na2S'],
        answer :'CuS',
        duration : 10
    },
    {
        question : 'Whats the PH of 0.001 moldm³ solution of the sodium hydroxide',
        options : ['14', '13', '12', '11'],
        answer :'11',
        duration : 10
    },
    {
        question : 'The type of bonding in [cu(NH3)⁴]²+ is',
        options : ['coordinate', 'electrovalent', 'metalic', 'covalent'],
        answer :'coordinate',
        duration : 10
    },
    {
        question : 'Which of the following is an example of a chemical change?',
        options : ['dissolution of salt in water', 'rusting of iron', 'melting of ice', 'seperating a mixture by distillation'],
        answer :'rusting of iron',
        duration : 10
    },
    {
        question : 'According to the kinetic Theory an increase in temperature causes the kinetic energy of particles to',
        options : ['decrease', 'remain constant', 'increase', 'be zero'],
        answer :'increase',
        duration : 10
    },
    {
        question : 'The periodic classification is an arrangement of the elements',
        options : ['atomic weights', 'isotopic weights', 'molecular weights', 'Atomic numbers'],
        answer :'Atomic numbers',
        duration : 10
    },
    {
        question : 'The boiling of fat and aqueous caustic soda is referred to as',
        options : ['hydrolysis', 'esterification', 'acidification', 'saponification'],
        answer :'saponification',
        duration : 10
    },
    {
        question : 'Which of the following pairs of substance will react further with oxygen to form a higher oxide?',
        options : ['CO2 and H2O', 'NO and H2O', 'CO and CO2', 'SO2 and NO'],
        answer :'SO2 and NO',
        duration : 10
    },
    {
        question : 'The number of electrons in the valence shell of an element of atomic number 14 is?',
        options : ['1', '2', '3', '4'],
        answer :'4',
        duration : 10
    },
    {
        question : 'Beryllium and Aluminium have similar properties because they',
        options : ['are both metals', 'belong to the same group', 'belong to the same period', 'are positioned diagonally to each other'],
        answer :'are positioned diagonally to each other',
        duration : 10
    },
    {
        question : 'The refreshing and characteristic taste of soda water and other soft drinks is as a result of the presense of',
        options : ['carbon(IV)oxide', 'carbon(II)oxide', 'soda', 'glucose'],
        answer :'carbon(IV)oxide',
        duration : 10
    },
    {
        question : 'A balanced chemical equation obeys the law of',
        options : ['conservation of mass', 'definite proportions', 'multiple proportions', 'conservation of energy'],
        answer :'conservation of mass',
        duration : 10
    },
    {
        question : 'Which of the following is used to power steam engines',
        options : ['lubricating oil', 'coal', 'bitumen', 'diesel oil'],
        answer :'coal',
        duration : 10
    },
    {
        question : 'Diamond is a bad conductor of electricity its bonding electrons are used in',
        options : ['crystal lattice formation', 'covalent bond formation', 'metallic bond formation', 'coordinate bond formation'],
        answer :'covalent bond formation',
        duration : 10
    },
    {
        question : 'In an electrochemical cell, polarization is caused by',
        options : ['Oxygen', 'Hydrogen', 'Tetraoxosulphate(IV)acid', 'Chlorine'],
        answer :'Hydrogen',
        duration : 10
    },
    {
        question : 'The enzyme used in the hydrolysis of starch to dextrin and maltose is',
        options : ['Zymase', 'Sucrase', 'Amylase', 'Lactase'],
        answer :'Amylase',
        duration : 10
    },
    {
        question : 'Ammonium chloride can be seperated from its mixture with common salt by',
        options : ['Distillation', 'Evaporation', 'Decantation', 'Sublimation'],
        answer :'Sublimation',
        duration : 10
    },
    {
        question : 'The ability of carbon to form long chains is referred to as',
        options : ['Alkylation', 'Acylation', 'Carbonation', 'Catenation'],
        answer :'Catenation',
        duration : 10
    },
    {
        question : 'The Industrial preparation of hydrogen gas from water gas is referred to as',
        options : ['Bosch process', 'Contact process', 'Haber process', 'Bayer process'],
        answer :'Bosch process',
        duration : 10
    },
    {
        question : 'The colour of litmus in an alkaline medium is',
        options : ['Red', 'Yellow', 'Blue', 'Pink'],
        answer :'Blue',
        duration : 10
    },
    {
        question : 'The process that requires the use of hardwater in its operation is',
        options : ['Tanning', 'Bottling', 'Laundry', 'Dyeing'],
        answer :'Bottling',
        duration : 10
    },
    {
        question : 'An example of an acidic oxide is',
        options : ['NO', 'CO', 'SO2', 'CuO'],
        answer :'SO2',
        duration : 10
    },
    {
        question : 'Diamond cannot be used',
        options : ['In making bicycle chains', 'As abrasives', 'In cutting glass and metals', 'As die for drawing wires'],
        answer :'In making bicycle chains',
        duration : 10
    },
    {
        question : 'The arrangement of particles in crystal  lattices can be studied using',
        options : ['X-rays', 'β-rays', 'α-rays', 'Ɣ-rays'],
        answer :'In making bicycle chains',
        duration : 10
    },
    {
        question : 'An example of a solid emulsion is',
        options : ['Butter', 'Hair cream', 'Milk', 'Cod-liver oil'],
        answer :'Butter',
        duration : 10
    },
    {
        question : 'The gas that is used for the treatment of cancer is',
        options : ['Neon', 'Radon', 'Xenon', 'Argon'],
        answer :'Radon',
        duration : 10
    },
    {
        question : 'Chemicals that are produced in small quantities and with very high degree of purity are',
        options : ['Bulk chemicals', 'Fine chemicals', 'Heavy chemicals', 'Light Chemicals'],
        answer :'Fine chemicals',
        duration : 10
    },
    {
        question : 'Metals can be stretched into wires because they are',
        options : ['Ductile', 'Good conductors', 'Lustrous', 'Malleable'],
        answer :'Ductile',
        duration : 10
    },
]

