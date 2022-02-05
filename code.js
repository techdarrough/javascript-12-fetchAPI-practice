//////////////////////////////////////////////////////////////////////////
//  .---------.          .-------------------------------.
//  | Level 1 |          | Learn Fetch with a Get Method |
//  '---------'          '-------------------------------'
//       ^      (\_/)                    ^
//       '----- (O.o) -------------------'
//              (> <)
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 1, Part 1 of 3
// Activity:  Get Random Cat Photo
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let catDiv = document.querySelector("#catDiv");
let catImg = document.querySelector("#catImg");
let catBtn = document.querySelector("#catBtn");

// ASYNC/AWAIT
async function getNewCatImg() {
  let response = await fetch("https://aws.random.cat/meow");
  let data = await response.json();
  console.log(data);
  catImg.src = data.file;
}

// EVENT LISTENERS
catBtn.addEventListener("click", () => {
  getNewCatImg();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 1, Part 2 of 3
// Activity:  Get Random Food Photo
///////////////////////////////////////////////////////////////////////////

// CREATING HTML & SELECTORS
let foodDiv = document.querySelector("#foodDiv");
let foodImg = document.querySelector("#foodImg");
let foodBtn = document.querySelector("#foodBtn");

// ASYNC/AWAIT
async function getNewFoodImg() {
  let response = await fetch("https://foodish-api.herokuapp.com/api");
  let data = await response.json();
  console.log(data);
  foodImg.src = data.image; // <--- update your code here
}

// EVENT LISTENERS
foodBtn.addEventListener("click", () => {
  getNewFoodImg();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 1, Part 3 of 3
// Activity:  Get Random Dog Photo
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let dogDiv = document.querySelector("#dogDiv");
let dogImg = document.querySelector("#dogImg");
let dogBtn = document.querySelector("#dogBtn");

// ASYNC/AWAIT
async function getNewDogImg() {
  let response = await fetch("https://random.dog/woof.json");
  let data = await response.json();
  console.log(data);

  // mp4 file extensions causes an error,
  // so this if block re-runs this function if the file extension is an mp4
  if (data.url.slice(-3) === "mp4") {
    return getNewDogImg();
  }

  // render dog image to the page
  dogImg.src = data.url;
}

// EVENT LISTENERS
dogBtn.addEventListener("click", () => {
  getNewDogImg();
});

//////////////////////////////////////////////////////////////////////////
// Level 2, Part 1 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS
// ACTIVITY NAME:      GET POKEMON IMAGE
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let pokeDiv = document.querySelector("#pokeDiv");
let pokeText = document.querySelector("#pokeImg");
let pokeBtn = document.querySelector("#pokeBtn");

// ASYNC/AWAIT
async function getPokemonImg() {
  let pokemon = "pikachu"; // <-- try other pokemon names like: "charmander", "squirtle", "bulbasaur"
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  console.log(data);
  pokeImg.src = data.sprites.front_default;
}

// EVENT LISTENERS
pokeBtn.addEventListener("click", () => {
  getPokemonImg();
});

//////////////////////////////////////////////////////////////////////////
// Level 2, Part 2 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS
// ACTIVITY NAME:      GET YUGIOH CARD IMAGE
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let yugiDiv = document.querySelector("#yugiDiv");
let yugiImg = document.querySelector("#yugiImg");
let yugiBtn = document.querySelector("#yugiBtn");

// ASYNC/AWAIT
async function getYugiohCardImg() {
  let name = "Kuriboh"; // <-- try other name like: "Dark%Magician",  "Tornado%20Dragon", "Lava%Golem"
  let response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
  let data = await response.json();
  console.log(data);
  console.log(data.data);
  console.log(data.data[0].card_images[0].image_url);

  yugiImg.src = data.data[0].card_images[0].image_url;
}

// EVENT LISTENERS
yugiBtn.addEventListener("click", () => {
  getYugiohCardImg();
});

//////////////////////////////////////////////////////////////////////////
// Level 2, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS
// ACTIVITY NAME:      Get Digimon Image
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let digiDiv = document.querySelector("#digiDiv");
let digiImg = document.querySelector("#digiImg");
let digiInput = document.querySelector("#digiInput");
let digiBtn = document.querySelector("#digiBtn");

// ASYNC/AWAIT
async function getDigimonImg() {
  let name = "Agumon";
  let response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
  let data = await response.json();
  console.log(data);
  digiImg.src = data[0].img;
}

// EVENT LISTENERS
digiBtn.addEventListener("click", () => {
  getDigimonImg();
});

//////////////////////////////////////////////////////////////////////////
// Level 3, Part 1 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      GET POKEMON IMAGE
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let pokeDiv2 = document.querySelector("#pokeDiv2");
let pokeText2 = document.querySelector("#pokeImg2");
let pokeInput2 = document.querySelector("#pokeInput2");
let pokeBtn2 = document.querySelector("#pokeBtn2");

// ASYNC/AWAIT
async function getPokemonImg2() {
  let pokemon = pokeInput2.value;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  console.log(data);
  pokeImg2.src = data.sprites.front_default;
}

// EVENT LISTENERS
pokeBtn2.addEventListener("click", () => {
  getPokemonImg2();
});

//////////////////////////////////////////////////////////////////////////
// Level 3, Part 2 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      GET YUGIOH CARD IMAGE
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let yugiDiv2 = document.querySelector("#yugiDiv2");
let yugiImg2 = document.querySelector("#yugiImg2");
let yugiInput2 = document.querySelector("#yugiInput2");
let yugiBtn2 = document.querySelector("#yugiBtn2");

// ASYNC/AWAIT
async function getYugiohCardImg2() {
  let name = yugiInput2.value;
  let response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
  let data = await response.json();
  console.log(data);
  console.log(data.data);
  console.log(data.data[0].card_images[0].image_url);

  yugiImg2.src = data.data[0].card_images[0].image_url;
}

// EVENT LISTENERS
yugiBtn2.addEventListener("click", () => {
  getYugiohCardImg2();
});

//////////////////////////////////////////////////////////////////////////
// Level 3, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      Get Digimon Image
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let digiDiv2 = document.querySelector("#digiDiv2");
let digiText2 = document.querySelector("#digiImg2");
let digiInput2 = document.querySelector("#digiInput2");
let digiBtn2 = document.querySelector("#digiBtn2");

// ASYNC/AWAIT
async function getDigimonImg2() {
  let name = digiInput2.value;
  let response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
  let data = await response.json();
  console.log(data);
  digiImg2.src = data[0].img;
}

// EVENT LISTENERS
digiBtn2.addEventListener("click", () => {
  getDigimonImg2();
});

//////////////////////////////////////////////////////////////////////////
// Level 5, Part 1 of 3
// LEARNING CONCEPTS:  FETCH with POST METHOD
// ACTIVITY NAME:
///////////////////////////////////////////////////////////////////////////

// Song Lyrics
// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song

// Get emoji
// https://github.com/cheatsnake/emojihub

// Build charts quickly
// https://quickchart.io/

// Get Book Info
// http://www.penguinrandomhouse.biz/webservices/rest/

// Live Cryptocurrency Data
// https://www.coingecko.com/en/api

// Companies Annual Reports
// https://www.sec.gov/edgar/sec-api-documentation

// Password Generator
// https://github.com/fawazsullia/password-generator/

// Send POST to get an AI's text sentiment analysis
// https://sentim-api.herokuapp.com/

// Send POST to get language translation
// https://libretranslate.com/docs/
