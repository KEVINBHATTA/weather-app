
// using api inside a function bcz 
// should have to run when clicked button if the lin is outside then the api run first before txt eextract  

async function getWeather() {
const API_KEY = "02c60d71a0bf7d6eac1a28d5e888c94a";
const getCity = document.querySelector("#getCity").value.trim();
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(getCity)},NP&appid=${API_KEY}&units=metric`;


let response = await fetch(URL);
console.log(response);
let data = await response.json();
console.log(data);
const temp = data.main.temp;
const feels_like = data.main.feels_like;
const humidity = data.main.humidity;
const name = data.name;

// working on displaying
 document.querySelector("#city").innerText = name;
 document.querySelector("#tempr").innerText = temp + "°C";
 document.querySelector("#humidityy").innerText = humidity ;
  document.querySelector("#feels_like").innerText = feels_like ;
}


