const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');
let randNum;
/*
можно так
async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data);
}
getQuotes();*/

function getRandomNum() {
  randNum =  Math.floor(Math.random() * 9 ); 
}

async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  getRandomNum();
  quote.textContent = data[randNum].text;
  author.textContent = data[randNum].author;
}

getQuotes();

changeQuoteBtn.addEventListener('click', getQuotes);

