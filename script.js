
        const apiKey = "32f4d0a9bfb2a71b822c9fdc81a26c89";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        //https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=32f4d0a9bfb2a71b822c9fdc81a26c89
        
        const searchbox = document.querySelector(".search input");
        const searchbtn= document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon")
        
        async function checkweather(city){
            const response = await fetch(apiURL+city+`&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{

            
            var data =  await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png"
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            }
        }
            searchbtn.addEventListener("click",()=>{
                checkweather(searchbox.value);
            })
        
            
  