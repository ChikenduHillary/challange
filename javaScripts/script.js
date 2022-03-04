
// Catching MenuBar Items
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const navItems = [nav1, nav2, nav3, nav4]


function navAnimation(direction1, direction2){
    navItems.forEach((nav, i)=>{
        i++
        nav.classList.replace(`slide-${direction1}-${i}`, `slide-${direction2}-${i}`)
    })

}

function toggleNav(){
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change')
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Nav In Animation
        navAnimation('out', 'in')
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
           // Nav In Animation
        navAnimation('in', 'out')
    }
}

// Event Listeners
if(menuBars){
    menuBars.addEventListener('click', toggleNav);
    navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav)
})
}



// -----------------Theme Mode Change Functions------------

// Catching DarkMode Switch Itmes
const modeChange = document.getElementById('mode');
const modeChange2 =document.getElementById('mode2')
const modeInput = document.getElementById('dark-mode-switch');
const sectionVB = document.getElementById('section-video-background');
let subImage = document.getElementById('sub-image');
let subVideo = document.getElementById('sub-video');
const images = [...document.getElementsByClassName('sub-image')];
const videos = [...document.getElementsByClassName('sub-video')];

if(modeInput || modeChange){
    modeInput.addEventListener('change', modes1)
    modeChange.addEventListener('click', modes);
}

function darkLightMode(isDark) {
    images.forEach((image)=>{
        image.hidden = isDark ? true : false;
    });
    videos.forEach((video)=>{
        video.hidden = isDark ? false : true;
    })
    isDark ? sectionVB.setAttribute('src', 'videos/background-dark.mp4') : sectionVB.setAttribute('src', 'videos/background-light.mp4')

}

function summaryItems(theme) {
    if(theme == 'dark'){
        subImage.hidden = true;
        subVideo.hidden = false;
    } else {
        subVideo.hidden = true;
        subImage.hidden = false;
    }
}

function  modes1(event) {
    toggleDarkLightMode(event.target.checked);
    
}

function  modes() {
    modeChange.classList.toggle('dark-active');
    let isContain = modeChange.classList.contains('dark-active');
    toggleDarkLightMode(isContain);
    isContain ? modeInput.checked = true : modeInput.checked = false;
}

function toggleDarkLightMode(event) {
    if(event){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        darkLightMode(true);
        isdark = true;
        modeChange.classList.replace('fa-sun', 'fa-moon');
        modeChange2.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        darkLightMode(false);
        isdark = false;
        modeChange.classList.replace('fa-moon', 'fa-sun');
        modeChange2.classList.replace('fa-moon', 'fa-sun');
    }
}

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme == 'dark' && modeInput) {
        modeInput.checked = true;
        darkLightMode(true);
        modeChange.classList.add('dark-active');
        modeChange.classList.replace('fa-sun', 'fa-moon');
        modeChange2.classList.replace('fa-sun', 'fa-moon');
    } else {
        if(modeInput){
            modeInput.checked = false;
            darkLightMode(false);
            modeChange.classList.replace('fa-moon', 'fa-sun');
            modeChange2.classList.replace('fa-moon', 'fa-sun');
        }
    }
}


//----------------- Functions for Displaying Each Subject in summary Section----------------
const subHeading = document.getElementById('sub-heading');


// Displaying each subject Contents
function subjectSummaryDisplay(subject, subItems) {
    subHeading.textContent = subject;
    subImage.setAttribute('src', subItems.image);
    subVideo.setAttribute('src', subItems.video);
}

// Loading each Sujects Contents on Click
function mathematics() {
    var mathsItems = {
        image : 'images/mathematics.svg',
        video : 'videos/mathematics.mp4',

    };
    subjectSummaryDisplay("Mathematics", mathsItems);
}

function physics() {
    var physicsItems = {
        image : 'images/physics.svg',
        video : 'videos/physics.mp4',
    };
    subjectSummaryDisplay("Physics", physicsItems);
}

function chemistry() {
    var chemistryItems = {
        image : 'images/chemistry.svg',
        video : 'videos/chemistry.mp4',
    };
    subjectSummaryDisplay("Chemistry", chemistryItems);
}

function biology() {
    var biologyItems = {
        image : 'images/biology.svg',
        video : 'videos/biology.mp4',
    };
    subjectSummaryDisplay("Biology", biologyItems);
}

function english() {
    var englishItems = {
        image : 'images/english.svg',
        video : 'videos/english.mp4',
    };
    subjectSummaryDisplay("English", englishItems);
}

function geography() {
    var geographyItems = {
        image : 'images/geography.svg',
        video : 'videos/geography.mp4',
    };
    subjectSummaryDisplay("Goegraphy", geographyItems);
}

// ------Sending Informations to Examground.html
function runPhysics() {
    localStorage.setItem('subject', 'physics');
}
function runMathematics() {
    localStorage.setItem('subject', 'mathematics');
}
function runChemistry() {
    localStorage.setItem('subject', 'chemistry');
}
function runEnglish() {
    localStorage.setItem('subject', 'english');
}
function runBiology() {
    localStorage.setItem('subject', 'biology');
}
function runGeography() {
    localStorage.setItem('subject', 'geography');
}

// Calling Contents On load
function callSubjects() {
    summaryItems(currentTheme);
    let subject = localStorage.getItem('subject');
    switch (subject) {
        case 'mathematics':
            mathematics();
            break;      
        case 'physics':
            physics();
            break;
        case 'chemistry':
            chemistry();
            break;
        case 'biology':
            biology();
            break;
        case 'english':
            english();
            break;
        case 'geography':
        geography();
        break;
        default:
            break;
    }
}

// Catching each page elements
const examPageEl = document.getElementById('exam-page');
const correctionPageEl = document.getElementById('correction-page');
const resultsPageEl = document.getElementById('results-page');

// Setting The EXit Buttons on Exam Sections
const exitEl = document.getElementById('exit-element')
const homeIcon = document.getElementById('home-icon');
const exitDiv1 = document.getElementById('exit-div1');
const exitDiv2 = document.getElementById('exit-div2');
const summaryEl = document.getElementById('summary');

function exit(){
    if(summaryEl){
        summaryEl.hidden ? homeIcon.style.display = 'none': homeIcon.style.display = 'block';
        summaryEl.hidden ? exitDiv1.hidden = false : exitDiv1.hidden = true;
        summaryEl.hidden ? exitDiv2.hidden = false : exitDiv2.hidden = true;
        examPageEl.hidden ? exitEl.hidden = false : exitEl.hidden = true;
    }
}

exit()

// Home icon Navigation
function homeIconDisplay(){
    summaryPage()
    summaryEl.hidden = false
    exit();
}

// -----------Opening Each Sections----------

function examPage(){
    examPageEl.hidden = false;
    correctionPageEl.hidden = true;
    resultsPageEl.hidden = true;
    summaryEl.hidden = true;
    exit();
}

function summaryPage(){
    summaryEl.hidden = false;
    correctionPageEl.hidden = true;
    resultsPageEl.hidden = true;
    examPageEl.hidden = true;
    exit();
}

function correctionPage(){
    correctionPageEl.hidden = false;
    summaryEl.hidden = true;
    resultsPageEl.hidden = true;
    examPageEl.hidden = true;
    exit();
    correctionView(0);
}

function resultsPage(){
    resultsPageEl.hidden = false;
    summaryEl.hidden = true;
    correctionPageEl.hidden = true;
    examPageEl.hidden = true;
    exit();
    displayResults();
    computerAnswers();
    getCurrentResultAndUpdateSore()
}

// -----------Setting Exam Functions---------
const durationEl = document.getElementById('duration');
const examQuestions = document.getElementById('exam-questions');
const examOptions = [...document.getElementsByClassName('options')];
const examRadioOptions = [...document.getElementsByClassName('exam-options')];
const questionNumber = document.getElementById('question-number');
const examForm = document.getElementById('exam-form');
const audio = document.querySelector('audio');

let history = [];
let yourResults = [];
let questionsIndex = [];
let yourAnswers = '';
let yourAnswersNumber = 0;
let correctAnswers = "";
let computerAnswersNumbers = 0;
let index = 0;
let firstQuestion = 0;

// Checking Radio buttons when Div is clicked
function checkButtons(i){
    examRadioOptions[i].checked = true;
};


let questionIndex = 0;
let questionsYouAnswered = []
function loadQuestions(questions, index){
        examPage();
        questionsYouAnswered.push(index)
        examQuestions.textContent = questions[index].question;
        examOptions.forEach((optionContianer, i)=>{
            optionContianer.textContent = questions[index].options[i];
        });
        examRadioOptions.forEach((optionbutton, i)=>{
            optionbutton.checked = false;
            optionbutton.setAttribute('value', questions[index].options[i]);
        });
        questionIndex++; 
        questionNumber.textContent = questionIndex;
}

let run = 0;
let width = 100;
function duration(dur){ 
    var onGoing = setInterval(frame, dur);
    function frame(){
        if(width < 0){
            audio.setAttribute('src', 'audios/wrong.mp3');
            audio.play();
            yourResults.push('TimeOut😪');
            clearInterval(onGoing); 
            width = 100;        
            runQuestions();
        } else if(run == 1){
            checkAnswers()
            clearInterval(onGoing);
            width = 100;
            run = 0;
            runQuestions();
        } else {
            width -= 0.1;
            durationEl.style.width = width + '%';
        }
    }
}

function grabAnswers(e){
    e.preventDefault();
    for(let i = 0; i <= 4; i++){
        if (e.srcElement[i].checked) {
            yourAnswers = e.srcElement[i].value;
            run = 1;
        }
    }
}

function runQuestions(){
    function loopQuestions(subject){
        let questionIndex = Math.floor(Math.random() * subject.length);
        questionsIndex.push(questionIndex)
        questionsIndex.forEach(element => {
            if (element == questionIndex) {
                if (questionIndex +1 == subject.length) {
                    questionIndex--;
                } else {
                    questionIndex++;
                }
            }
        });
        firstQuestion++;
        if (index < 4) {
            if(firstQuestion == 1){
                loadQuestions(subject, questionIndex);
                duration(subject[questionIndex].duration);
                correctAnswers = subject[questionIndex].answer
                 // Getting time of challenge
                const currentDate = new Date();
                let curHour = currentDate.getHours() > 12 ? currentDate.getHours() - 12 + ':' + (currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()) + 'pm': (currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours()) + ':' + (currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()) + 'am';
                history.push(curHour)
                history.push(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`)
            }else{
                loadQuestions(subject, questionIndex)
                duration(subject[questionIndex].duration);
                correctAnswers = subject[questionIndex].answer;
                index++
            }
        } else {
            resultsPage()
        }
    }
    // Checking which subject And running there questions questions
    let subject = localStorage.getItem('subject');
    switch (subject) {
        case 'physics':
            loopQuestions(physicsQuestions);
            break;
        case 'chemistry':
            loopQuestions(chemistryQuestions);
            break;
        case 'mathematics':
            loopQuestions(mathematicsQuestions);
            break;
        case 'english':
            loopQuestions(englishQuestions);
            break;
        case 'biology':
            loopQuestions(biologyQuestions);
            break;
        case 'geography':
            loopQuestions(geographyQuestions);
            break;
        default:
            break;
    }
}

function checkAnswers(){
    if (yourAnswers == correctAnswers) {
        audio.setAttribute('src', 'audios/correct.mp3');
        audio.play();
        yourResults.push('correct😂');
    } else {
        yourResults.push('wrong😢');
        audio.setAttribute('src', 'audios/wrong.mp3');
        audio.play();
    }
   
}


// Displaying Your results on the results section after the test
const resultScores = document.getElementById('result-scores');
const messageEl = document.getElementById('message-to-you');
const yourScores = [...document.getElementsByClassName('you-result')];
const computerScores = [...document.getElementsByClassName('computer-result')];

function displayResults(){
    for(let i=0; i<=4; i++){
        if (yourResults[i] == 'correct😂') {
            yourScores[i].classList.replace('fa-times', 'fa-check');
            yourAnswersNumber++
        } else {
            yourScores[i].classList.replace('fa-check', 'fa-times');
        }
    }
    history.push(yourAnswersNumber);
}

function computerAnswers(){
    for(let i=0; i<=4; i++){
        if (Math.floor(Math.random()*2)) {
            computerAnswersNumbers++
            computerScores[i].classList.replace('fa-times', 'fa-check');
        } else {
            computerScores[i].classList.replace('fa-check', 'fa-times');
        }
    }
    history.push(computerAnswersNumbers);
    resultScores.textContent = `${yourAnswersNumber} : ${computerAnswersNumbers}`
    if (yourAnswersNumber > computerAnswersNumbers) {
        messageEl.textContent = 'You Won!'
        messageEl.style.backgroundColor = '#04d743'
        let totalWin = localStorage.getItem('totalWin');
        totalWin++
        localStorage.setItem('totalWin', totalWin);
    } else if(computerAnswersNumbers > yourAnswersNumber) {
        messageEl.textContent = 'You Lose'
        messageEl.style.backgroundColor = 'red';
        let totalLost = localStorage.getItem('totalLost');
        totalLost++
        localStorage.setItem('totalLost', totalLost);
    } else {
        messageEl.textContent = 'Draw';
        messageEl.style.backgroundColor = '#809fa8'
    }
}

// Functions for View Correction Page
const correctionQuestions = document.getElementById('correction-question');
const yourAnswerEl = document.getElementById('you-answer-el');
const computerAnswersEl = document.getElementById('compt-answer-el');
const correctionRadioButtons = [...document.getElementsByClassName('correction-radio-button')];
const correctionLabels = [...document.getElementsByClassName('correction-label')];
const correctionSpanEl = document.getElementById('correction-span')
const nextCorrection = document.getElementById('next-correction');
const prevCorrection = document.getElementById('prev-correction');


let correctionIndex = 0;

function correctionView(correctionIndex){
    if (correctionIndex == 5) {
        resetAndRun();
    }
    function loadCorrections(subject, indexes){
        if (correctionIndex < 6) {
            correctionSpanEl.textContent = correctionIndex +1;
            correctionQuestions.textContent = subject[indexes[correctionIndex]].question;
            subject[indexes[correctionIndex]].options.forEach((element, i) => {
                correctionLabels[i].textContent = element;
                correctionRadioButtons[i].setAttribute('value', element);
            });
            correctionRadioButtons.forEach(element => {
                element.disabled = false;
               if (element.value == subject[indexes[correctionIndex]].answer) {
                   element.checked = true;
               } else {
                   element.disabled = true;
               }
            });
            if(correctionIndex == 4){
                nextCorrection.innerHTML = 'Rematch';
            } else {
                nextCorrection.innerHTML = 'Next';
            }
        } 
    }
    let subject = localStorage.getItem('subject');
    switch (subject) {
        case 'physics':
            loadCorrections(physicsQuestions, questionsYouAnswered);
            break;
        case 'chemistry':
            loadCorrections(chemistryQuestions, questionsYouAnswered);
            break;
        case 'mathematics':
            loadCorrections(mathematicsQuestions, questionsYouAnswered);
            break;
        case 'english':
            loadCorrections(englishQuestions, questionsYouAnswered);
            break;
        case 'geography':
            loadCorrections(geographyQuestions, questionsYouAnswered);
            break;
        case 'biology':
            loadCorrections(biologyQuestions, questionsYouAnswered);
            break;
        default:
            break;
    }
}

function prevCorrections(){
    if (correctionIndex <= 0) {
        correctionIndex = 0;
        correctionView(correctionIndex)
    } else {
        correctionIndex--
        correctionView(correctionIndex)
    }
}

function nextCorrections(){
    correctionIndex++
    correctionView(correctionIndex);
}

// Reseting all values
function resetAndRun(){
    history = [];
    correctionIndex = 0;
    questionsIndex = [];
    questionIndex = 0;
    computerAnswersNumbers = 0;
    yourAnswersNumber = 0;
    yourResults = [];
    yourAnswers = '';
    correctAnswers = '';
    index = 0;
    firstQuestion = 0;
    run = 0;
    width = 100;
    runQuestions();
}


// -------history Section---------
const summaryScores = [...document.getElementsByClassName('score')];
const summarytime = [...document.getElementsByClassName('time')];
const summaryDate = [...document.getElementsByClassName('date')];
const subProgressBar = document.getElementById('sub-progress-bar');
const subWinProgress = document.getElementById('sub-progress1')
const subLostProgress = document.getElementById('sub-progress2');


function settingHistory(){
    localStorage.setItem('takenTestBefore', 'true');
    localStorage.setItem('physicsHistory', JSON.stringify(physicsHistory));
    localStorage.setItem('chemistryHistory', JSON.stringify(chemistryHistory));
    localStorage.setItem('mathematicsHistory', JSON.stringify(mathematicsHistory));
    localStorage.setItem('englishHistory', JSON.stringify(englishHistory));
    localStorage.setItem('geographyHistory', JSON.stringify(geographyHistory));
    localStorage.setItem('biologyHistory', JSON.stringify(biologyHistory));
    localStorage.setItem('totalWin', '0');
    localStorage.setItem('totalLost', '0');
    localStorage.setItem('phyWinProgress', '0');
    localStorage.setItem('phyLostProgress', '0');
    localStorage.setItem('chemWinProgress', '0');
    localStorage.setItem('chemLostProgress', '0');
    localStorage.setItem('mathsWinProgress', '0');
    localStorage.setItem('mathsLostProgress', '0');
    localStorage.setItem('engWinProgress', '0');
    localStorage.setItem('engLostProgress', '0');
    localStorage.setItem('bioWinProgress', '0');
    localStorage.setItem('bioLostProgress', '0');
    localStorage.setItem('geoWinProgress', '0');
    localStorage.setItem('geoLostProgress', '0');
}


function getCurrentResultAndUpdateSore(){
    if (history.length) {
        let subjectHistory = {
            time : history[0],
            date : history[1],
            yourScore : history[2],
            computerScore : history[3]
        }

        function reducingLengthAndStoringProgress(subjectArr, subjectWin, subjectLost){
            subjectWins = localStorage.getItem(subjectWin)
            subjectLosts  = localStorage.getItem(subjectLost)
            if (subjectArr[0].yourScore > subjectArr[0].computerScore) {
                subjectWins++;
                localStorage.setItem(subjectWin, subjectWins)
            } else if(subjectArr[0].yourScore == subjectArr[0].computerScore){
               return
            }  else {
                subjectLosts++
                localStorage.setItem(subjectLost, subjectLosts)
            }

            // Removing the last Item if its up to 5
            if (subjectArr.length > 5) {
                subjectArr.pop();
            }
        }

        if (localStorage.getItem('takenTestBefore')) {
            // Adding history to each subject
            let subject = localStorage.getItem('subject');
            switch (subject) {
                case 'physics':
                        physicsHistory = JSON.parse(localStorage.getItem('physicsHistory'));
                        physicsHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(physicsHistory, 'phyWinProgress', 'phyLostProgress');
                        localStorage.setItem('physicsHistory', JSON.stringify(physicsHistory));
                        break;
                case 'chemistry':
                        chemistryHistory = JSON.parse(localStorage.getItem('chemistryHistory'));
                        chemistryHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(chemistryHistory, 'chemWinProgress', 'chemLostProgress');
                        localStorage.setItem('chemistryHistory', JSON.stringify(chemistryHistory));
                        break;
                case 'mathematics':
                        mathematicsHistory = JSON.parse(localStorage.getItem('mathematicsHistory'));
                        mathematicsHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(mathematicsHistory, 'mathsWinProgress', 'mathsLostProgress');
                        localStorage.setItem('mathematicsHistory', JSON.stringify(mathematicsHistory));
                        break;
                case 'english':
                        englishHistory = JSON.parse(localStorage.getItem('englishHistory'));
                        englishHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(englishHistory, 'engWinProgress', 'engLostProgress');
                        localStorage.setItem('englishHistory', JSON.stringify(englishHistory));
                        break;
                case 'biology':
                        biologyHistory = JSON.parse(localStorage.getItem('biologyHistory'));
                        biologyHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(biologyHistory, 'bioWinProgress', 'bioLostProgress');
                        localStorage.setItem('biologyHistory', JSON.stringify(biologyHistory));
                        break;
                case 'geography':
                        geographyHistory = JSON.parse(localStorage.getItem('geographyHistory'));
                        geographyHistory.unshift(subjectHistory);
                        reducingLengthAndStoringProgress(geographyHistory, 'geoWinProgress', 'geoLostProgress');
                        localStorage.setItem('geographyHistory', JSON.stringify(geographyHistory));
                        break;
                default:
                    break;
            }
       } else {
           settingHistory()
           getCurrentResultAndUpdateSore()
       }
    }



    // loading each history content 
    function upLoadHistoryContent(subject){
        try {
            for (let index = 0; index < subject.length; index++) {
                if (subject[index].time) {  
                    summaryScores[index].textContent = `${subject[index].yourScore} : ${subject[index].computerScore}`;
                    summarytime[index].textContent = subject[index].time;
                    summaryDate[index].textContent = subject[index].date;
                } else {
                    return
                }
            }
        } catch (error) {
            settingHistory()
        } 
    }

    // Function for setting Summary progress bar
    function setProgressBar(subWins, subLost){
        let winPercent = subWins / (Number(subWins) + Number(subLost)) * 100;
        if (winPercent) {
            subProgressBar.style.width = `${Math.floor(winPercent)}%`;
            subWinProgress.textContent = `${Math.floor(winPercent)}%`;
            subLostProgress.textContent = `${100 - Math.floor(winPercent)}%`;
        }
    }

    let subject = localStorage.getItem('subject');
    switch (subject) {
        case 'physics':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('physicsHistory')))
            setProgressBar(localStorage.getItem('phyWinProgress'), localStorage.getItem('phyLostProgress'))
            break;
        case 'chemistry':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('chemistryHistory')))
            setProgressBar(localStorage.getItem('chemWinProgress'), localStorage.getItem('chemLostProgress'))
            break;
        case 'mathematics':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('mathematicsHistory')))
            setProgressBar(localStorage.getItem('mathsWinProgress'), localStorage.getItem('mathsLostProgress'))
            break;
        case 'english':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('englishHistory')))
            setProgressBar(localStorage.getItem('engWinProgress'), localStorage.getItem('engLostProgress'))
            break;
        case 'biology':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('biologyHistory')))
            setProgressBar(localStorage.getItem('bioWinProgress'), localStorage.getItem('bioLostProgress'))
            break;
        case 'geography':
            upLoadHistoryContent(JSON.parse(localStorage.getItem('geographyHistory')))
            setProgressBar(localStorage.getItem('geoWinProgress'), localStorage.getItem('geoLostProgress'))
            break;
        default:
            break;
    }
}


// Updating Home Page

const totalWinsEl = document.getElementById('total-win');
const totalWinLevel = document.getElementById('total-wins');
const totalLostEl = document.getElementById('total-lost');
const TotalProgressPercent = document.getElementById('progress-percent');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');

const phyProgressWin = document.getElementById('phy-progress');
const phyProgressLost = document.getElementById('phy-progress2');
const phyProgressBar = document.getElementById('phy-progress-bar');
const pyhLastCmpt = document.getElementById('phy-last-compt');
const pyhLastCmptTime = document.getElementById('phy-last-compt-time');
const pyhLastCmptDate = document.getElementById('phy-last-compt-date');

const chemProgressWin = document.getElementById('chem-progress');
const chemProgressLost = document.getElementById('chem-progress2');
const chemProgressBar = document.getElementById('chem-progress-bar');
const chemLastCmpt = document.getElementById('chem-last-compt');
const chemLastCmptTime = document.getElementById('chem-last-compt-time');
const chemLastCmptDate = document.getElementById('chem-last-compt-date');

const mathsProgressWin = document.getElementById('maths-progress');
const mathsProgressLost = document.getElementById('maths-progress2');
const mathsProgressBar = document.getElementById('maths-progress-bar');
const mathsLastCmpt = document.getElementById('maths-last-compt');
const mathsLastCmptTime = document.getElementById('maths-last-compt-time');
const mathsLastCmptDate = document.getElementById('maths-last-compt-date');

const engProgressWin = document.getElementById('eng-progress');
const engProgressLost = document.getElementById('eng-progress2');
const engProgressBar = document.getElementById('eng-progress-bar');
const engLastCmpt = document.getElementById('eng-last-compt');
const engLastCmptTime = document.getElementById('eng-last-compt-time');
const engLastCmptDate = document.getElementById('eng-last-compt-date');

const geoProgressWin = document.getElementById('geo-progress');
const geoProgressLost = document.getElementById('geo-progress2');
const geoProgressBar = document.getElementById('geo-progress-bar');
const geoLastCmpt = document.getElementById('geo-last-compt');
const geoLastCmptTime = document.getElementById('geo-last-compt-time');
const geoLastCmptDate = document.getElementById('geo-last-compt-date');

const bioProgressWin = document.getElementById('bio-progress');
const bioProgressLost = document.getElementById('bio-progress2');
const bioProgressBar = document.getElementById('bio-progress-bar');
const bioLastCmpt = document.getElementById('bio-last-compt');
const bioLastCmptTime = document.getElementById('bio-last-compt-time');
const bioLastCmptDate = document.getElementById('bio-last-compt-date');

function updateHomePage(){
    let totalWin = localStorage.getItem('totalWin');
    let totalLost = localStorage.getItem('totalLost');
    if (Number(totalWin)) {
        let totalWins = (totalWin/(Number(totalLost)+Number(totalWin))) * 100;
        let totalLosts = 100 - totalWins;
        level1.textContent = `Level ${Math.floor(totalWin/100)}`;
        level2.textContent = `Level ${Math.floor(totalWin/100)}`;
        totalWinLevel.textContent = `Total Wins: ${totalWin}`;
        totalWinsEl.textContent = `Total Win ${Math.floor(totalWins)}%`;
        totalLostEl.textContent = `Total Lost ${Math.floor(totalLosts)}%`;
        TotalProgressPercent.style.width = `${Math.floor(totalWins)}%`
    }

    function updateScoresAndProgress(subArr, subTime, subDate, lastMatch, win, lost, winEl, lostEl, progressBar){
        subTime.textContent =  subArr[0].time;
        subDate.textContent = subArr[0].date;
        lastMatch.textContent = `${subArr[0].yourScore} : ${subArr[0].computerScore}`;
        let wins = (win/(Number(win)+Number(lost))) * 100;
        let losts = 100 - wins;
        if(wins){
            winEl.textContent = `${Math.floor(wins)}%`;
            lostEl.textContent = `${Math.floor(losts)}%`;
            progressBar.style.width = `${Math.floor(wins)}%`;
        }
  
    }

    try {
        let physicsHistory = JSON.parse(localStorage.getItem('physicsHistory'));
        updateScoresAndProgress(physicsHistory, pyhLastCmptTime, pyhLastCmptDate, pyhLastCmpt, localStorage.getItem('phyWinProgress'), localStorage.getItem('phyLostProgress'), phyProgressWin, phyProgressLost, phyProgressBar);
    } catch (error) {

    }

    try {
        let chemistryHistory = JSON.parse(localStorage.getItem('chemistryHistory'));
        updateScoresAndProgress(chemistryHistory, chemLastCmptTime, chemLastCmptDate, chemLastCmpt, localStorage.getItem('chemWinProgress'), localStorage.getItem('chemLostProgress'), chemProgressWin, chemProgressLost, chemProgressBar);
    } catch (error) {
        
    }

    try {
        let mathematicsHistory = JSON.parse(localStorage.getItem('mathematicsHistory'));
        updateScoresAndProgress(mathematicsHistory, mathsLastCmptTime, mathsLastCmptDate, mathsLastCmpt, localStorage.getItem('mathsWinProgress'), localStorage.getItem('mathsLostProgress'), mathsProgressWin, mathsProgressLost, mathsProgressBar);
    } catch (error) {
    
    }

    try {
        let englishHistory = JSON.parse(localStorage.getItem('englishHistory'));
        updateScoresAndProgress(englishHistory, engLastCmptTime, engLastCmptDate, engLastCmpt, localStorage.getItem('engWinProgress'), localStorage.getItem('engLostProgress'), engProgressWin, engProgressLost, engProgressBar);
    } catch (error) {
      
    }

    try {
        let biologyHistory = JSON.parse(localStorage.getItem('biologyHistory'));
        updateScoresAndProgress(biologyHistory, bioLastCmptTime, bioLastCmptDate, bioLastCmpt, localStorage.getItem('bioWinProgress'), localStorage.getItem('bioLostProgress'), bioProgressWin, bioProgressLost, bioProgressBar);
    } catch (error) {
      
    }

    try {
        let geographyHistory = JSON.parse(localStorage.getItem('geographyHistory'));
        updateScoresAndProgress(geographyHistory, geoLastCmptTime, geoLastCmptDate, geoLastCmpt, localStorage.getItem('geoWinProgress'), localStorage.getItem('geoLostProgress'), geoProgressWin, geoProgressLost, geoProgressBar);
    } catch (error) {
      
    }
}




if(examForm){
    examForm.addEventListener('submit', grabAnswers);
    nextCorrection.addEventListener('click', nextCorrections);
    prevCorrection.addEventListener('click', prevCorrections);
    getCurrentResultAndUpdateSore();
}