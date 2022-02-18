
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


// Setting The EXit Buttons on Exam Sections
const homeIcon = document.getElementById('home-icon');
const exitDiv1 = document.getElementById('exit-div1');
const exitDiv2 = document.getElementById('exit-div2');
const summary = document.getElementById('summary');

function exit(){
    if(summary.hidden){
        summary.hidden ? homeIcon.hidden = true : homeIcon.hidden = false;
        summary.hidden ? exitDiv1.hidden = false : exitDiv1.hidden = true;
        summary.hidden ? exitDiv2.hidden = false : exitDiv2.hidden = true;
    }
}

// exit();