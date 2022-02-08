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
// Example:   Random Cat Photo with Fetch Get Method
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const catDiv = document.querySelector("#catDiv");
const catImg = document.querySelector("#catImg");
const catBtn = document.querySelector("#catBtn");

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
// Example:   Random Food Photo with Fetch Get Method
///////////////////////////////////////////////////////////////////////////

// CREATING HTML & SELECTORS
const foodDiv = document.querySelector("#foodDiv");
const foodImg = document.querySelector("#foodImg");
const foodBtn = document.querySelector("#foodBtn");

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
const dogDiv = document.querySelector("#dogDiv");
const dogImg = document.querySelector("#dogImg");
const dogBtn = document.querySelector("#dogBtn");

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
// Example:   Pokemon Image with Fetch Get Method + Query Parameters
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const pokeDiv2 = document.querySelector("#pokeDiv2");
const pokeText2 = document.querySelector("#pokeImg2");
const pokeBtn2 = document.querySelector("#pokeBtn2");

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
// Stage:     Level 2, Part 2 of 3
// Example:   Rick and Morty Image with Fetch Get Method + Query Parameters
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const rickDiv2 = document.querySelector("#rickDiv2");
const rickImg2 = document.querySelector("#rickImg2");
const rickBtn2 = document.querySelector("#rickBtn2");

// ASYNC/AWAIT
async function getRickMortyImg2() {
  let name = "rick"; // <-- try other name like:
  let response = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
  let data = await response.json();
  rickImg2.src = data.results[0].image;
}

// EVENT LISTENERS
rickBtn2.addEventListener("click", () => {
  getRickMortyImg2();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 2, Part 3 of 3
// Activity:  Digimon Image with Fetch Get Method + Query Parameters
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const digiDiv2 = document.querySelector("#digiDiv2");
const digiImg2 = document.querySelector("#digiImg2");
const digiInput2 = document.querySelector("#digiInput2");
const digiBtn2 = document.querySelector("#digiBtn2");

// ASYNC/AWAIT
async function getDigimonImg2() {
  let name = "Agumon";
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
// Example:   Pokemon Image with Fetch Get Method + Query Parameters + Input Fields
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const pokeDiv3 = document.querySelector("#pokeDiv3");
const pokeImg3 = document.querySelector("#pokeImg3");
const pokeInput3 = document.querySelector("#pokeInput3");
const pokeBtn3 = document.querySelector("#pokeBtn3");

// ASYNC/AWAIT
async function getPokemonImg3() {
  let pokemon = pokeInput3.value;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  console.log(data);
  pokeImg3.src = data.sprites.front_default;
}

// EVENT LISTENERS
pokeBtn3.addEventListener("click", () => {
  getPokemonImg3();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 3, Part 2 of 3
// Example:   Rick & Morty Image with Fetch Get Method + Query Parameters + Input Fields
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const rickDiv3 = document.querySelector("#rickDiv3");
const rickImg3 = document.querySelector("#rickImg3");
const rickInput3 = document.querySelector("#rickInput3");
const rickBtn3 = document.querySelector("#rickBtn3");

// ASYNC/AWAIT
async function getRickMortyImg3() {
  let name = rickInput3.value;
  let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  let data = await response.json();
  console.log(data);
  rickImg3.src = data.results[0].image;
}

// EVENT LISTENERS
rickBtn3.addEventListener("click", () => {
  getRickMortyImg3();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 3, Part 3 of 3
// Activity:  Digimon Image with Fetch Get Method + Query Parameters + Input Fields
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const digiDiv3 = document.querySelector("#digiDiv3");
const digiImg3 = document.querySelector("#digiImg3");
const digiInput3 = document.querySelector("#digiInput3");
const digiBtn3 = document.querySelector("#digiBtn3");

// ASYNC/AWAIT
async function getDigimonImg3() {
  let name = digiInput3.value;
  let response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
  let data = await response.json();
  console.log(data);
  digiImg3.src = data[0].img;
}

// EVENT LISTENERS
digiBtn3.addEventListener("click", () => {
  getDigimonImg3();
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
// Stage:     Level 4, Part 1 of 3
// Example:   Pokemon Image with Fetch Get Method + Query Parameters + Dropdown List
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const pokeDiv4 = document.querySelector("#pokeDiv4");
const pokeImg4 = document.querySelector("#pokeImg4");
const pokeList4 = document.querySelector("#pokeList4");
const pokeBtn4 = document.querySelector("#pokeBtn4");

// ASYNC/AWAIT
async function createPokemonDropDownList() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  let data = await response.json();
  let myArray = data.results;
  let pokemonNames = myArray.map((pokemon) => pokemon.name);
  pokeList4.innerHTML = pokemonNames.map((name) => `<option value=${name}>${name}</option>`);
}
createPokemonDropDownList();

async function getPokemonImg4() {
  let pokemon = pokeList4.value;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  pokeImg4.src = data.sprites.front_default;
}

// EVENT LISTENERS
pokeBtn4.addEventListener("click", () => {
  getPokemonImg4();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 4, Part 2 of 3
// Example:   Rick & Morty Image with Fetch Get Method + Query Parameters + Dropdown List
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const rickDiv4 = document.querySelector("#rickDiv4");
const rickImg4 = document.querySelector("#rickImg4");
const rickList4 = document.querySelector("#rickList4");
const rickBtn4 = document.querySelector("#rickBtn4");

// ASYNC/AWAIT
async function createRickMortyDropDownList() {
  let response = await fetch(`https://rickandmortyapi.com/api/character`);
  let data = await response.json();
  let myArray = data.results;
  console.log(myArray);
  let names = myArray.map((character) => {
    let fullName = character.name;
    let firstName = fullName.split(" ")[0];
    return firstName.toLowerCase();
  });
  rickList4.innerHTML = names.map((name) => `<option value=${name}>${name}</option>`);
}
createRickMortyDropDownList();

async function getRickMortyImg4() {
  let name = rickList4.value;
  let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  let data = await response.json();
  console.log(data);
  rickImg4.src = data.results[0].image;
}

// EVENT LISTENERS
rickBtn4.addEventListener("click", () => {
  getRickMortyImg4();
});

//////////////////////////////////////////////////////////////////////////
// Stage:     Level 4, Part 3 of 3
// Activity:  Digimon Image with Fetch Get Method + Query Parameters + Dropdown List
///////////////////////////////////////////////////////////////////////////

// SELECTORS
const digiDiv4 = document.querySelector("#digiDiv4");
const digiImg4 = document.querySelector("#digiImg4");
const digiList4 = document.querySelector("#digiList4");
const digiInput4 = document.querySelector("#digiInput4");
const digiBtn4 = document.querySelector("#digiBtn4");

// ASYNC/AWAIT
async function createDigimonDropDownList() {
  let response = await fetch(`https://digimon-api.vercel.app/api/digimon`);
  let data = await response.json();
  let list = data.map((digimon) => digimon.name);
  digiList4.innerHTML = list.map((digimon) => `<option value=${digimon}>${digimon}</option>`);
}
createDigimonDropDownList();

async function getDigimonImg4() {
  let name = digiList4.value;
  let response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
  let data = await response.json();
  digiImg4.src = data[0].img;
}

// EVENT LISTENERS
digiBtn4.addEventListener("click", () => {
  getDigimonImg4();
});
