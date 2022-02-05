//////////////////////////////////////////////////////////////////////////
// Level 2, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS
// ACTIVITY NAME:      Sunrise & Sunset
///////////////////////////////////////////////////////////////////////////

{
  /* <div id="sunDiv">
<div id="sunText"></div>
<button id="sunBtn">Get Sunrise & Sunset Data</button>
</div> */
}

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
  latitude = 40;
  longitude = 5;

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
// Level 3, Part 3 of 3
// LEARNING CONCEPTS:  FETCH with GET METHOD + URL QUERY PARAMETERS + INPUT FIELDS
// ACTIVITY NAME:      Sunrise & Sunset
///////////////////////////////////////////////////////////////////////////

{
  /* <div id="sunDiv2">
<div id="sunText2"></div>
<div id="input">
  <div>Latitude:</div>
  <input
  id="sunLatitudeInput2"
  type="number"
  placeholder="pick a number -90 to 90"
/>
<div>Longitude:</div>
<input
id="sunLongitudeInput2"
type="number"
placeholder="pick a number -180 to 180"
/>
</div>
<button id="sunBtn2">Get Sunrise & Sunset Data</button>
</div> */
}

// SELECTORS
let sunDiv2 = document.querySelector("#sunDiv2");
let sunText2 = document.querySelector("#sunText2");
sunText2.innerHTML = `
For latitude __ and longitude __:<br/>
Sunrise is at __<br/>
Sunset is at __
`;
let sunLatitudeInput2 = document.querySelector("#sunLatitudeInput2");
let sunLongitudeInput2 = document.querySelector("#sunLongitudeInput2");
let sunBtn2 = document.querySelector("#sunBtn2");

// ASYNC/AWAIT
async function getSunriseSunsetData2() {
  latitude = sunLatitudeInput2.value;
  longitude = sunLongitudeInput2.value;

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
