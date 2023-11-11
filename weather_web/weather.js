const apiKey=" ";
const apiUrl=" ";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    
    if(data.weather[0].main=="Clouds"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/3313/3313908.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/56/56926.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/3520/3520662.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/6423/6423448.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/175/175959.png";
    }
    
}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
