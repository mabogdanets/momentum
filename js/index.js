const timeDiv = document.querySelector('.time');
const dateDiv = document.querySelector('.date');
const greetingDiv = document.querySelector('.greeting');
const name = document.querySelector('.name');
let randomNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function showDate() {
  const date = new Date();
  const options = {month: 'long', day: 'numeric', weekday: "long"};
  const currentDate = date.toLocaleDateString('ru-Ru', options);
  dateDiv.textContent = currentDate;
}

function getTimeOfDay() {
  const timeOfDayArray = [ "night", "morning", "day", "evening"];
  const date = new Date();
  const hours = date.getHours();
  const timeOfDay = timeOfDayArray[Math.floor(hours/6)];  
  return timeOfDay;
}

function printGreeting() {
  const timeOfDay = getTimeOfDay();
  greetingDiv.textContent = `Good ${timeOfDay}, `;
}

function showTime() {  
  showDate();
  printGreeting();
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeDiv.textContent = currentTime;
  setTimeout(showTime, 1000);
}
showTime();


function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);


function getRandomNum() {
  randomNum = Math.floor(Math.random() * 20 + 1).toString().padStart(2, "0");
}
getRandomNum();


function setBg() {
  const img = new Image();
  let timeOfDay = getTimeOfDay();
  let bgNum = randomNum;
  img.src = `https://raw.githubusercontent.com/mabogdanets/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => { // сокращание от этого img.addEventListener('load', () {
    document.body.style.backgroundImage = `url(${img.src})`;
  }
}
setBg();


function getSlideNext() {
  if  ( Number(randomNum) === 20 ) {
    randomNum = "01";
  } else {
    randomNum = Number(randomNum) + 1;    
  }  
  randomNum = randomNum.toString().padStart(2, "0");
  setBg();
}


function getSlidePrev(){
  if  ( Number(randomNum) === 1 ) {
    randomNum = "20";
  } else {
    randomNum = Number(randomNum) - 1;
  }
  randomNum = randomNum.toString().padStart(2, "0");
  setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

