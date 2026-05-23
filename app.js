
// using api inside a function bcz 
// should have to run when clicked button if the lin is outside then the api run first before txt eextract  

async function getWeather() {
  const API_KEY = "02c60d71a0bf7d6eac1a28d5e888c94a";
  const getCity = document.querySelector("#getCity").value.trim();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(getCity)},NP&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }

    const data = await response.json();

    const { temp, feels_like, humidity } = data.main;
    const name = data.name;

    document.querySelector("#city").innerText       = name;
    document.querySelector("#tempr").innerText      = temp + "°C";
    document.querySelector("#humidityy").innerText  = humidity;
    document.querySelector("#feels_like").innerText = feels_like;

  } catch (error) {
    console.error("Weather fetch failed:", error.message);
    alert(error.message);
  }
}
