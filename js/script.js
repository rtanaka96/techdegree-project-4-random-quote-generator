/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://uboraacademy.slack.com

/*** 
 * `quotes` array 
***/

let quotes = [
  { 
    "quote": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "source": "Harry Potter and the Sorcerer's Stone - J.K. Rowling",
    "citation": "GoodReads",
    "year": 1997,
    "category": "book"
  },
  {
    "quote": "There must be something strangely sacred in salt. It is in our tears and in the sea.",
    "source": "Sand and Foam - Khalil Gibran",
    "year": 1926,
    "category": "book"
  },
  {
    "quote": "While you are alive, eat good food.",
    "source": "Okuribito (Departures)",
    "year": 2008,
    "category": "film"
  },
  { 
    "quote": "Hey there demons, it's me, ya boi.",
    "source": "Buzzfeed Unsolved",
    "citation": "Youtube",
    "year": 2017,
    "category": "youtube"
  },
  {
    "quote": "Ladies truly are the dolls of maids. All these buttons are for my amusement. If I undo the buttons and pull out the cords, then, the sweet things within, those sweet and soft things...If I were still a pickpocket I’d slip my hand inside.",
    "source": "The Handmaiden",
    "year": 2016,
    "category": "film"
  },
  {
    "quote": "The first day, I stood in the kitchen leaning against the counter watching Annie feed the cats, and I knew I wanted to be able to do that forever: Annie on My Mind - Nancy Garden",
    "year": 1982,
    "citation": "GoodReads",
    "category": "book"
  },
  {
    "quote": "She kissed me while the moon was sinking down / In that holy hour, I felt an angel's lips against my mouth / She kissed while my fear of God was alive / And I cried the rosary behind closed eyes",
    "source": "God is a Woman - Rett Madison",
    "citation": "Genius",
    "year": 2018,
    "category": "song"
  },
  {
    "quote": "I hear you like a whisper / In the corner of my lovesick thoughts / Like sand through a filter / Trying to capture what time forgot / I need you to be here / I need to see you crystal clear / Like diamonds in a coal mine / In the moonlight when you appear",
    "source": "Ease My mind - Hayley Kiyoko",
    "citation": "Genius",
    "year": 2016 ,
    "category": "song"
  },
  {
    "quote": "僕たちの現在を / 繰り返すことだらけでもそう /いつか君と出会おう / そんな日を思って日々を行こう (Though right now we're stuck doing the same thing over and over, someday we'll meet / Thinking of that day, let's keep going day by day)",
    "source": "迷子犬と雨のビート (A Lost Dog and Beats of the Rain) - Asian Kung-Fu Generation",
    "citation": "Uta-net",
    "year": 2010,
    "category": "song"
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * Object.keys(quotes).length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let quote = `<p class="quote">${randomQuote.quote}</p>`;
  let source =  `<p class="source">${randomQuote.source}`;
  let category = `<span class="category">${randomQuote.category}</span>`;
  if (randomQuote.hasOwnProperty('citation') == true) {
    let citation = `<span class="citation">${randomQuote.citation}</span>`
    source =  source.concat(citation);
  }
  if (randomQuote.hasOwnProperty('year') == true) {
    let year = `<span class="year">${randomQuote.year}</span>`;
    source = source.concat(year);
  }
  source = source.concat(`</p>`);
  document.getElementById('quote-box').innerHTML = quote + source + category;

  // added call of randomcolor fn to have it change colors with each new quote
  randomColor();
}

/*** 
  * generate random color
  * rgb's max value per color is 255, so it generates a color based on 
***/

function randomColor() {
  let newColor = `${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}`;
  document.body.style.backgroundColor = `rgba(${newColor})`;
}

// print quote

printQuote();

// autorefresh quotes every 10secs

setInterval(printQuote,10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);