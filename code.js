//////////////////////////////////////////////////////////////////////////
//        __       ___________    ____  _______  __          __
//       |  |     |   ____\   \  /   / |   ____||  |        /_ |
//       |  |     |  |__   \   \/   /  |  |__   |  |         | |
//       |  |     |   __|   \      /   |   __|  |  |         | |     (\_/)
//       |  `----.|  |____   \    /    |  |____ |  `----.    | |     (O.o)
//       |_______||_______|   \__/     |_______||_______|    |_|     (> <)
//
//                  Learn:  Fetch with a Get Method
//
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 1, Part 1 of 3
// Activity:  Random Cat Photo with Fetch Get Method
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
// Activity:  Random Food Photo with Fetch Get Method
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
// Activity:  Random Dog Photo with Fetch Get Method
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
//         _                                _               ___
//        | |      ___    __ __    ___     | |             |_  )
//        | |__   / -_)   \ V /   / -_)    | |              / /
//        |____|  \___|    \_/    \___|    |_|             /___|
//      _|"""""|_|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|
//      "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'
//
//                  Learn:  Fetch with a Get Method
//                          + URL Query Parameters
//
///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 2, Part 1 of 3
// Activity:  Pokemon Image with Fetch Get Method + Query Parameters
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
// Stage:     Level 2, Part 2 of 3
// Activity:  Yugioh Card Image with Fetch Get Method + Query Parameters
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
// Stage:     Level 2, Part 3 of 3
// Activity:  Digimon Image with Fetch Get Method + Query Parameters
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
//            _                           _         ___
//           ( )                         (_ )     /'_  )
//           | |       __   _   _    __   | |    (_)_) |       __      _
//           | |  _  /'__`\( ) ( ) /'__`\ | |     _(_ <      o'')}____//
//           | |_( )(  ___/| \_/ |(  ___/ | |    ( )_) |      `_/      )
//           (____/'`\____)`\___/'`\____)(___)   `\____)      (_(_/-(_/
//
//                  Learn:  Fetch with a Get Method
//                          + URL Query Parameters
//                          + Input Field
//
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 3, Part 1 of 3
// Activity:  Pokemon Image with Fetch Get Method + Query Parameters + Input Fields
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let pokeDiv2 = document.querySelector("#pokeDiv2");
let pokeImg2 = document.querySelector("#pokeImg2");
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
// Stage:     Level 3, Part 2 of 3
// Activity:  Yugioh Card Image with Fetch Get Method + Query Parameters + Input Fields
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
// Stage:     Level 3, Part 1 of 3
// Activity:  Digimon Image with Fetch Get Method + Query Parameters + Input Fields
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let digiDiv2 = document.querySelector("#digiDiv2");
let digiImg2 = document.querySelector("#digiImg2");
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
//
//          O                          O      o   O
//          o                          o      O   o                    __
//          o                          O      o   o                   / _)
//          O       .oOo.  o   O .oOo. o      OooOO          _/\/\/\_/ /
//          O       OooO'  O   o OooO' O          O        _|         /
//          o     . O      o  O  O     o          o      _|  (  | (  |
//          OOoOooO `OoO'  `o'   `OoO' O          O     /__.-'|_|--|_|
//
//               Learn:  Fetch with a Get Method
//                       + URL Query Parameters
//                       + Fetch -> Map Method -> Dropdown List
//
//////////////////////////////////////////////////////////////////////////

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
