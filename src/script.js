let currentDay = new Date (); 

let p = document.querySelector("p"); 

let hours = currentDay.getHours(); 
let minutes = currentDay.getMinutes(); 

let days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[currentDay.getDay()]; 

p.innerHTML = `${day},  ${hours}:${minutes} pm EST`; 


function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name; 
}

function search(event) {
  event.preventDefault(); 
  let apiKey = "116390a0e4a4a5a1b58dd99c1f83f002";
  let city = document.querySelector("#new-city").value; 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition); 
  
}

function changeCity(event) {
 event.preventDefault();
 let input = document.querySelector("#new-city");
 console.log(input.value);

  let h1 = document.querySelector("h1");
 h1.innerHTML = `${input.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);



