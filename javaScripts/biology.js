let biologyHistory = [];

const biologyQuestions = [
    {
        question : 'A group of closely related organisms capable of interbreeding to procude the fertile offspring are known as members of a?',
        options : ['Kingdom', 'Class', 'Family', 'Species'],
        answer :'Species',
        duration : 50
    },
    {
        question : 'The cytoplasm of a cell is considered a very important component because it',
        options : ['Regulates the amount of energy in the cell', 'Suspends all cell organelles', 'Is the outermost part of the cell', 'Is solely responsible for cell division'],
        answer :'Suspends all cell organelles',
        duration : 50
    },
    {
        question : 'Red blood cells were found to have busrt open after been placed in distill for an hour. This phenomenon is known as?',
        options : ['Plasmolysis', 'Diffusion', 'Heamolysis', 'Wilting'],
        answer :'Heamolysis',
        duration : 50
    },
    {
        question : 'The curverture movement of plants in response to the stimulus of water is called',
        options : ['Hydrotropism', 'Geotropism', 'Phototropism', 'Thigmotropism'],
        answer :'Hydrotropism',
        duration : 50
    },
    {
        question : 'The Longest bone in the body is the?',
        options : ['Humerous', 'Femur', 'Scapula', 'Tibia'],
        answer :'Femur',
        duration : 50
    },
    {
        question : 'Which of the following structures is not a skelectal material?',
        options : ['Chitin', 'Bone', 'Cartilage', 'Muscle'],
        answer :'Muscle',
        duration : 50
    },
    {
        question : 'The part of the ear which contains nerve cells sensitive to sound vibrations is the',
        options : ['Cochies', 'Ampulla', 'Tympanum', 'Melleus'],
        answer :'Cochies',
        duration : 50
    },
    {
        question : 'A seed of a flowering plant can best be described as',
        options : ['Radicle and Plumule', 'The developed Ovule', 'The embryo and endosperm', 'Developed ovary'],
        answer :'The developed Ovule',
        duration : 50
    },
    {
        question : 'Which of the following processes remove carbon from the atmosphere',
        options : ['Putrefaction', 'Photosynthesis', 'Volcanic Eruption', 'Burning of fuels'],
        answer :'Photosynthesis',
        duration : 50
    },
    {
        question : 'The matured sex cell which take part in sexual reproduction is referred to as?',
        options : ['Gamete', 'Fetus', 'Embrayo', 'Zygote'],
        answer :'Gamete',
        duration : 50
    },
    {
        question : 'The biome that is characterized with large herbivores, few and scattered fire resistant trees is?',
        options : ['Savanna', 'Tropical rain forest', 'Montane forest', 'Desert'],
        answer :'Savanna',
        duration : 50
    },
    {
        question : 'Red blood cells are known as ____?',
        options : ['Erythrocytes', 'Thrombocytes', 'Phagocytes', 'Leucocytes'],
        answer :'Erythrocytes',
        duration : 50
    },
    {
        question : 'The joint between the femur and tibia is known as _____?',
        options : ['Hinge joint', 'Ball and socket joint', 'Pivot joint', 'Gliding joint'],
        answer :'Hinge joint',
        duration : 50
    },
    {
        question : 'What is the primary function of the cofactors?',
        options : ['To aid in enzyme functions', 'To synthesize enzymes', 'To inhibit enzymes', 'To break down old enzymes'],
        answer :'To aid in enzyme functions',
        duration : 50
    },
    {
        question : 'Coloration of the eye is ______ variation',
        options : ['Physiological', 'Morphological', 'Adaptive', 'Recessive'],
        answer :'Morphological',
        duration : 50
    },
    {
        question : 'Which of the following choices correctly describes the composition of the cell membrane?',
        options : ['Contains only lipids', 'Contains lipids and proteins', 'Contains lipids and cytosol', 'Containes only proteins'],
        answer :'Contains lipids and proteins',
        duration : 50
    },
    {
        question : 'The feeding relationship among a set of members of a community is referred to as _____?',
        options : ['A food  web', 'Pyramid of energy', 'A food chain', 'Pyramid of member'],
        answer :'Pyramid of member',
        duration : 50
    },
    {
        question : 'Nitrogen is released to the air when ____?',
        options : ['Plants absorbs mineral salt', 'Suger is completely broken down', 'Through plant uptake', 'When lightning strike'],
        answer :'When lightning strike',
        duration : 50
    },
    {
        question : 'Size colour and fingerprints are examples of _____?',
        options : ['Physiological variation', 'Discontinous Variation', 'Morphological variation', 'Adaptive variation'],
        answer :'Morphological variation',
        duration : 50
    },
    {
        question : 'The level of organism in spirogyra and volvox is?',
        options : ['Organ', 'System', 'Cell', 'Tissue'],
        answer :'Cell',
        duration : 50
    },
    {
        question : 'The common thing in plant and animal cell is',
        options : ['Chloroplast', 'Cell wall', 'Necleus', 'Centrioles'],
        answer :'Necleus',
        duration : 50
    },
    {
        question : 'The modification in structure, physiology and behaviour of plant and animal is called ____',
        options : ['Adaption', 'Evolution', 'Variation', 'Succession'],
        answer :'Adaption',
        duration : 50
    },
    {
        question : 'A bacteria that is spherically shaped is called?',
        options : ['Diplobacillus', 'Coccus', 'Bacillus', 'Vibrio'],
        answer :'Coccus',
        duration : 50
    },
    {
        question : 'The flame cells are used for excretion in?',
        options : ['Fluke', 'Nematode', 'Bacteria', 'Volvox'],
        answer :'Fluke',
        duration : 50
    },
    {
        question : 'Food chain refers to the feeding relationships between animals in a ______?',
        options : ['Family', 'Phylum', 'Community', 'Group'],
        answer :'Community',
        duration : 50
    },
    {
        question : 'The host of Taenia solium is ____?',
        options : ['Cow', 'Pig', 'Sheep', 'Dog'],
        answer :'Pig',
        duration : 50
    },
    {
        question : 'An example of organism which exists as a colony is?',
        options : ['Volvox', 'Paramecium', 'Euglena', 'Chlamydomonas'],
        answer :'Pig',
        duration : 50
    },
    {
        question : 'The following are example of morphological variation except',
        options : ['Size', 'Ability to taste PTC', 'Color', 'Fingerprint'],
        answer :'Ability to taste PTC',
        duration : 50
    },
    {
        question : 'Ability to taste PTC in some individuals is a character that is',
        options : ['Acquired', 'Heritage', 'Sex-linked', 'Morphological'],
        answer :'Heritage',
        duration : 50
    },
    {
        question : 'What organelle is the site of photosynthesis in plant',
        options : ['Chloroplasts', 'Ribosomes', 'Cytoplasm', 'Mitochondria'],
        answer :'Chloroplasts',
        duration : 50
    },
]