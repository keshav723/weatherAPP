
const API_KEY = `87ecb4af044356baa8027dd699a9bf8e`
const form = document.querySelector("form");
const weather = document.querySelector("#weather");

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeatherApp = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   const response = await fetch(url);
   const data = await response.json();
   return showData(data)
   
   
}


const showData = (data)=>{
  if(data.cod ==="404"){
    weather.innerHTML =`
    <h2>city not found</h2>`
    return;
  }
    
weather.innerHTML = `
  <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
  <div>
    <h2>${data.main.temp}</h2>
    <h4> ${data.weather[0].main} </h4>
 </div>`
}

form.addEventListener("submit", function (event) {
    getWeatherApp(search.value);
    event.preventDefault();


})