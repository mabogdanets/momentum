import playList from './playList.js';
const audio = new Audio();
const play = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const playListDiv = document.querySelector('.play-list');
let listItem;
let isPlay = false;
let playNum = 0;

function playAudio() { 
  play.classList.add('pause'); //воспроизвести
  isPlay = true;
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  listItem = document.querySelector(`.play-list > li:nth-child(${playNum+1})`);
  listItem.classList.add('item-active');
}

function pauseAudio() {
  play.classList.remove('pause'); //остановить
  listItem.classList.remove('item-active');
  isPlay = false;
  audio.pause();
}

play.addEventListener('click', function() {
  if (isPlay === false) {
    playAudio();
  } else {
    pauseAudio();
  }
});

function playNext() {
  if (playNum === playList.length-1) {
    playNum = 0;
  } else {
    playNum += 1;
  }
  listItem.classList.remove('item-active');
  playAudio();
}

function playPrev() {
  if (playNum === 0) {
    playNum = playList.length-1;
  } else {
    playNum -= 1;
  }
  listItem.classList.remove('item-active');
  playAudio();
}

prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);

playList.forEach(el => { //можно так   for(let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListDiv.append(li);

});