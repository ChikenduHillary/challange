
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
let subHeading = document.getElementById('sub-heading');
let subProgressBar = document.getElementById('sub-progress-bar');
let subProgress1 = document.getElementById('sub-progress1');
let subProgress2 = document.getElementById('sub-progress2');
let phyProgress = document.getElementById('phy-progress');
let phyProgress2 = document.getElementById('phy-progress2');


// Displaying each subject Contents
function subjectSummaryDisplay(subject, subItems) {
    subHeading.textContent = subject;
    subImage.setAttribute('src', subItems.image);
    subVideo.setAttribute('src', subItems.video);
    subProgressBar.style.width = `${subItems.progress}%`;
    subProgress1.textContent = `${subItems.progress}%`;
    subProgress2.textContent = `${100-subItems.progress}%`;
}

// Loading each Sujects Contents on Click
function mathematics() {
    var mathsItems = {
        image : 'images/mathematics.svg',
        video : 'videos/mathematics.mp4',
        progress : 100,
    };
    subjectSummaryDisplay("Mathematics", mathsItems);
}

function physics() {
    var physicsItems = {
        image : 'images/physics.svg',
        video : 'videos/physics.mp4',
        progress : 90,
    };
    subjectSummaryDisplay("Physics", physicsItems);
}

function chemistry() {
    var chemistryItems = {
        image : 'images/chemistry.svg',
        video : 'videos/chemistry.mp4',
        progress : 40,
    };
    subjectSummaryDisplay("Chemistry", chemistryItems);
}

function biology() {
    var biologyItems = {
        image : 'images/biology.svg',
        video : 'videos/biology.mp4',
        progress : 40,
    };
    subjectSummaryDisplay("Biology", biologyItems);
}

function english() {
    var englishItems = {
        image : 'images/english.svg',
        video : 'videos/english.mp4',
        progress : 40,
    };
    subjectSummaryDisplay("English", englishItems);
}

function geography() {
    var geographyItems = {
        image : 'images/geography.svg',
        video : 'videos/geography.mp4',
        progress : 40,
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
    correctionView()
}

function resultsPage(){
    resultsPageEl.hidden = false;
    summaryEl.hidden = true;
    correctionPageEl.hidden = true;
    examPageEl.hidden = true;
    exit();
    displayResults();
    computerAnswers();
}

// -----------Setting Exam Functions---------
const durationEl = document.getElementById('duration');
const examQuestions = document.getElementById('exam-questions');
const examOptions = [...document.getElementsByClassName('options')];
const examRadioOptions = [...document.getElementsByClassName('exam-options')];
const questionNumber = document.getElementById('question-number');
const examForm = document.getElementById('exam-form');
const audio = document.querySelector('audio');


let questionsIndex = [];
let dateAndTime = []
let yourAnswers = '';
let yourAnswersNumber = 0;
let correctAnswers = "";
let computerAnswersNumbers = 0;
let index = 0;
let firstQuestion = 1;

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
            physicsCorrectWrong.push('TimeOut😪');
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
        if (index < 5) {
            if(firstQuestion == 1){
                loadQuestions(subject, questionIndex);
                 // Getting time of challenge
                const currentDate = new Date();
                dateAndTime.push(currentDate.getFullYear());
                dateAndTime.push(currentDate.getMonth());
                dateAndTime.push(currentDate.getDay());
                dateAndTime.push(currentDate.getHours());
                dateAndTime.push(currentDate.getMinutes());
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
        default:
            break;
    }
}

function checkAnswers(){
    if (yourAnswers == correctAnswers) {
        audio.setAttribute('src', 'audios/correct.mp3');
        audio.play();
        physicsCorrectWrong.push('correct😂');
    } else {
        physicsCorrectWrong.push('wrong😢');
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
        if (physicsCorrectWrong[i] == 'correct😂') {
            yourScores[i].classList.replace('fa-times', 'fa-check');
            yourAnswersNumber++
        } else {
            yourScores[i].classList.replace('fa-check', 'fa-times');
        }
    }
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
    resultScores.textContent = `${yourAnswersNumber} : ${computerAnswersNumbers}`
    if (yourAnswersNumber > computerAnswersNumbers) {
        messageEl.textContent = 'You Won!'
        messageEl.style.backgroundColor = '#04d743'
    } else if(computerAnswersNumbers > yourAnswersNumber) {
        messageEl.textContent = 'You Lose'
        messageEl.style.backgroundColor = 'red';
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


let correctionIndex = 0;
function correctionView(){
    function loadCorrections(subject, indexes){
        if (correctionIndex < 5) {
            correctionSpanEl.textContent = correctionIndex +1;
            correctionQuestions.textContent = subject[indexes[correctionIndex ]].question;
            subject[indexes[correctionIndex]].options.forEach((element, i) => {
                correctionLabels[i].textContent = element;
                correctionRadioButtons[i].setAttribute('value', element);
            });
            correctionRadioButtons.forEach(element => {
                element.disabled = false;
               if (element.value == subject[indexes[correctionIndex]].answer) {
                   element.checked = true;
                   console.log('worked')
               } else {
                   element.disabled = true;
               }
            });
            if(correctionIndex == 4){
                nextCorrection.innerHTML = 'Rematch';
                console.log('grabed');
            }
        } else {
            nextCorrection.innerHTML = 'Next';
            resetAndRun()
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
        default:
            break;
    }
    correctionIndex++
}

// Reseting all values
function resetAndRun(){
    correctionIndex = 0;
    questionsIndex = [];
    questionIndex = 0;
    computerAnswersNumbers = 0;
    yourAnswersNumber = 0;
    dateAndTime = [];
    physicsCorrectWrong = [];
    yourAnswers = '';
    correctAnswers = '';
    index = 0;
    firstQuestion = 1;
    run = 0;
    width = 100;
    runQuestions();
}


if(examForm){
    examForm.addEventListener('submit', grabAnswers);
    nextCorrection.addEventListener('click', correctionView)
}