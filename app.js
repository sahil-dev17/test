const apiKey ="d90f31c9a4aefa625b4fc4487ef44f74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=d90f31c9a4aefa625b4fc4487ef44f74&units=metric&q=";

const  searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch (apiUrl + city);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data = await response.json();
   
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°C" ;
        document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " Kmph";
    
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="clouds.png";
    
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="clear.png";
    
        
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    
        
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    
        
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    
        
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    
        
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    }
  


window.onload=function(){
    searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value);
    })  
  }