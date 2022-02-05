//////////////////////////////////////////////////////////////////////////
// Level 1, Part 1 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD
// ACTIVITY NAME:      RANDOM CAT PHOTO
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
// Level 1, Part 2 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD
// ACTIVITY NAME:      RANDOM FOOD PHOTO
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
// Level 1, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD
// ACTIVITY NAME:      RANDOM DOG PHOTO
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
let yugiohDiv = document.querySelector("#yugiohDiv");
let yugiohImg = document.querySelector("#yugiohImg");
let yugiohBtn = document.querySelector("#yugiohBtn");

// ASYNC/AWAIT
async function getYugiohCardImg() {
  let name = "Kuriboh"; // <-- try other name like: "Dark%Magician",  "Tornado%20Dragon", "Lava%Golem"
  let response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
  let data = await response.json();
  console.log(data);
  console.log(data.data);
  console.log(data.data[0].card_images[0].image_url);

  yugiohImg.src = data.data[0].card_images[0].image_url;
}

// EVENT LISTENERS
yugiohBtn.addEventListener("click", () => {
  getYugiohCardImg();
});

//////////////////////////////////////////////////////////////////////////
// Level 2, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS
// ACTIVITY NAME:      Sunrise & Sunset
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let sunDiv = document.querySelector("#sunDiv");
let sunText = document.querySelector("#sunText");
sunText.innerHTML = `
For latitude __ and longitude __:<br/>
Sunrise is at __<br/>
Sunset is at __
`;
let sunBtn = document.querySelector("#sunBtn");

// ASYNC/AWAIT
async function getSunriseSunsetData() {
  latitude = 40; // <-- try another number between -90 to 90
  longitude = 5; // <-- try another number between -180 to 180

  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
  );
  let data = await response.json();
  console.log(data);

  sunText.innerHTML = `
  For latitude ${latitude} and longitude ${longitude}:<br/>
  Sunrise is at ${data.results.sunrise}<br/>
  Sunset is at ${data.results.sunset}
`;
}

// EVENT LISTENERS
sunBtn.addEventListener("click", () => {
  getSunriseSunsetData();
});

//////////////////////////////////////////////////////////////////////////
// Level 3, Part 1 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      GET POKEMON IMAGE
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let pokeDiv2 = document.querySelector("#pokeDiv2");
let pokeText2 = document.querySelector("#pokeImg2");
let pokeBtn2 = document.querySelector("#pokeBtn2");

// ASYNC/AWAIT
async function getPokemonImg2() {
  let pokemon = "pikachu"; // <-- try other pokemon names like: "charmander", "squirtle", "bulbasaur"
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
let yugiohDiv2 = document.querySelector("#yugiohDiv2");
let yugiohImg2 = document.querySelector("#yugiohImg2");
let yugiohBtn2 = document.querySelector("#yugiohBtn2");

// ASYNC/AWAIT
async function getYugiohCardImg2() {
  let name = "Kuriboh"; // <-- try other name like: "Dark%Magician",  "Tornado%20Dragon", "Lava%Golem"
  let response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
  let data = await response.json();
  console.log(data);
  console.log(data.data);
  console.log(data.data[0].card_images[0].image_url);

  yugiohImg2.src = data.data[0].card_images[0].image_url;
}

// EVENT LISTENERS
yugiohBtn2.addEventListener("click", () => {
  getYugiohCardImg2();
});

//////////////////////////////////////////////////////////////////////////
// Level 3, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      Sunrise & Sunset
///////////////////////////////////////////////////////////////////////////

// SELECTORS
let sunDiv2 = document.querySelector("#sunDiv2");
let sunText2 = document.querySelector("#sunText2");
sunText2.innerHTML = `
For latitude __ and longitude __:<br/>
Sunrise is at __<br/>
Sunset is at __
`;
let sunBtn2 = document.querySelector("#sunBtn2");

// ASYNC/AWAIT
async function getSunriseSunsetData2() {
  latitude = 40; // <-- try another number between -90 to 90
  longitude = 5; // <-- try another number between -180 to 180

  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
  );
  let data = await response.json();
  console.log(data);

  sunText2.innerHTML = `
  For latitude ${latitude} and longitude ${longitude}:<br/>
  Sunrise is at ${data.results.sunrise}<br/>
  Sunset is at ${data.results.sunset}
`;
}

// EVENT LISTENERS
sunBtn2.addEventListener("click", () => {
  getSunriseSunsetData2();
});

//////////////////////////////////////////////////////////////////////////
// Level 4, Part 1 of 3
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
