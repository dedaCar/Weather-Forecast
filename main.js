let xml = new XMLHttpRequest(),
  infoDiv = document.querySelector('#infoDiv'),
  one = document.querySelector('#one'),
  two = document.querySelector('#two'),
  three = document.querySelector('#three'),
  four = document.querySelector('#four'),
  five = document.querySelector('#five')
  inputId = document.querySelector('#inputId'),
  buttonId = document.querySelector('#buttonId'),
  autocomplete = document.querySelector('.autocomplete');

buttonId.addEventListener('click', call)


function call() {
  weatherServer();
}




function weatherServer() {

  let town = inputId.value;
  xml.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + town + '&APPID=a6cbd1739b09211445abdfb2703aa168');



  xml.addEventListener('readystatechange', function() {
    if (xml.readyState == 4 && xml.status == 200) {
      getData();
    }
  })
  xml.send();





  function getData() {
    let data = JSON.parse(xml.responseText);
    console.log(data);
    var temp = Math.ceil(data.main.temp - 273.15);
    one.innerHTML = "City:" + " " + data.name;
    two.innerHTML = "Temperature:" + " " + temp + "C";
    three.innerHTML = "Humidity:" + " " + data.main.humidity + "%";
    four.innerHTML = "Wind:" + " " + data.wind.speed + "mps";
    five.innerHTML = "Description:" + " " + data.weather[0].description;
    if (data.weather[0].description == 'clear sky') {
      infoDiv.style.backgroundImage = 'url(img/slika1.jpg)';
    } else if (data.weather[0].description == 'few clouds') {
      infoDiv.style.backgroundImage = 'url(img/fewClouds.jpg)';
    } else if (data.weather[0].description == 'scattered clouds') {
      infoDiv.style.backgroundImage = 'url(img/scatteredClouds.jpg)';
    } else if (data.weather[0].description == 'broken clouds') {
      infoDiv.style.backgroundImage = 'url(img/brokenClouds.jpg)';
    } else if (data.weather[0].description == 'shower rain') {
      infoDiv.style.backgroundImage = 'url(img/showerrain.png)';
    } else if (data.weather[0].description == 'rain') {
      infoDiv.style.backgroundImage = 'url(img/rain.jpg)';
    } else if (data.weather[0].description == 'thunderstorm') {
      infoDiv.style.backgroundImage = 'url(img/thunderstorm.jpg)'
    } else if (data.weather[0].description == 'snow') {
      infoDiv.style.backgroundImage = 'url(img/snow.jpg)';
    } else if (data.weather[0].description == 'mist') {
      infoDiv.style.backgroundImage = 'url(img/mist.jpg)';
    } else if (data.weather[0].description == 'thunderstorm with light rain') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormLight.jpg)';
    } else if (data.weather[0].description == 'thunderstorm with rain') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormRain.jpg)';
    } else if (data.weather[0].description == 'heavy thunderstorm') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormHeavy.jpg)';
    } else if (data.weather[0].description == 'ragged thunderstorm') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormHeavy.jpg)';
    } else if (data.weather[0].description == 'thunderstorm with light drizzle') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormHeavy.jpg)';
    } else if (data.weather[0].description == 'thunderstorm with drizzle') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormRain.jpg)';
    } else if (data.weather[0].description == 'thunderstorm with heavy drizzle') {
      infoDiv.style.backgroundImage = 'url(img/thunderstormRain.jpg)';
    } else if (data.weather[0].description == 'light intensity drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzle.jpg)';
    } else if (data.weather[0].description == 'drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzle.jpg)';
    } else if (data.weather[0].description == 'heavy intensity drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzle.jpg)';
    } else if (data.weather[0].description == 'light intensity drizzle rain') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'drizzle rain') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'heavy intensity drizzle rain') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'shower rain and drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'heavy shower rain and drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'heavy shower rain and drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'shower drizzle') {
      infoDiv.style.backgroundImage = 'url(img/drizzleRain.jpg)';
    } else if (data.weather[0].description == 'light rain') {
      infoDiv.style.backgroundImage = 'url(img/lightRain.jpg)';
    } else if (data.weather[0].description == 'moderate rain') {
      infoDiv.style.backgroundImage = 'url(img/lightRain.jpg)';
    } else if (data.weather[0].description == 'heavy intensity rain') {
      infoDiv.style.backgroundImage = 'url(img/heavyRain.jpg)';
    } else if (data.weather[0].description == 'very heavy rain') {
      infoDiv.style.backgroundImage = 'url(img/heavyRain.jpg)';
    } else if (data.weather[0].description == 'extreme rain') {
      infoDiv.style.backgroundImage = 'url(img/heavyRain.jpg)';
    } else if (data.weather[0].description == 'freezing rain') {
      infoDiv.style.backgroundImage = 'url(img/heavyRain.jpg)';
    } else if (data.weather[0].description == 'light intensity shower rain') {
      infoDiv.style.backgroundImage = 'url(img/lightRain.jpg)';
    } else if (data.weather[0].description == 'shower rain') {
      infoDiv.style.backgroundImage = 'url(img/rain.jpg)';
    } else if (data.weather[0].description == 'heavy intensity shower rain') {
      infoDiv.style.backgroundImage = 'url(img/rain.jpg)';
    } else if (data.weather[0].description == 'ragged shower rain') {
      infoDiv.style.backgroundImage = 'url(img/heavyRain.jpg)';
    } else if (data.weather[0].description == 'light snow') {
      infoDiv.style.backgroundImage = 'url(img/lightSnow.jpg)';
    } else if (data.weather[0].description == 'heavy snow') {
      infoDiv.style.backgroundImage = 'url(img/heavySnow.jpg)';
    } else if (data.weather[0].description == 'sleet') {
      infoDiv.style.backgroundImage = 'url(img/sleet.jpg)';
    } else if (data.weather[0].description == 'shower sleet') {
      infoDiv.style.backgroundImage = 'url(img/sleet.jpg)';
    } else if (data.weather[0].description == 'light rain and snow') {
      infoDiv.style.backgroundImage = 'url(img/rain&snow.jpg)';
    } else if (data.weather[0].description == 'rain and snow') {
      infoDiv.style.backgroundImage = 'url(img/rain&snow.jpg)';
    } else if (data.weather[0].description == 'light shower snow') {
      infoDiv.style.backgroundImage = 'url(img/showerSnow.jpg)';
    } else if (data.weather[0].description == 'shower snow') {
      infoDiv.style.backgroundImage = 'url(img/showerSnow.jpg)';
    } else if (data.weather[0].description == 'heavy shower snow') {
      infoDiv.style.backgroundImage = 'url(img/showerSnow.jpg)';
    } else if (data.weather[0].description == 'smoke') {
      infoDiv.style.backgroundImage = 'url(img/smoke.jpg)';
    } else if (data.weather[0].description == 'haze') {
      infoDiv.style.backgroundImage = 'url(img/haze.jpg)';
    } else if (data.weather[0].description == 'sand, dust whirl') {
      infoDiv.style.backgroundImage = 'url(img/sand.jpg)';
    } else if (data.weather[0].description == 'fog') {
      infoDiv.style.backgroundImage = 'url(img/fog.jpg)';
    } else if (data.weather[0].description == 'sand') {
      infoDiv.style.backgroundImage = 'url(img/sandStorm.jpg)';
    } else if (data.weather[0].description == 'dust') {
      infoDiv.style.backgroundImage = 'url(img/sandStorm.jpg)';
    } else if (data.weather[0].description == 'volcanic ash') {
      infoDiv.style.backgroundImage = 'url(img/volcanicAsh.jpg)';
    } else if (data.weather[0].description == 'squalls') {
      infoDiv.style.backgroundImage = 'url(img/squalls.jpg)';
    } else if (data.weather[0].description == 'tornado') {
      infoDiv.style.backgroundImage = 'url(img/tornado.jpg)';
    } else if (data.weather[0].description == 'overcast clouds') {
      infoDiv.style.backgroundImage = 'url(img/overcast.jpg)';
    } else if (data.weather[0].description == 'tropical storm') {
      infoDiv.style.backgroundImage = 'url(img/tropStorm.jpg)';
    } else if (data.weather[0].description == 'hurricane') {
      infoDiv.style.backgroundImage = 'url(img/hurricane.jpg)';
    } else if (data.weather[0].description == 'cold') {
      infoDiv.style.backgroundImage = 'url(img/cold.jpg)';
    } else if (data.weather[0].description == 'hot') {
      infoDiv.style.backgroundImage = 'url(img/hot.jpg)';
    } else if (data.weather[0].description == 'windy') {
      infoDiv.style.backgroundImage = 'url(img/windy.jpg)';
    } else if (data.weather[0].description == 'hail') {
      infoDiv.style.backgroundImage = 'url(img/hail.jpg)';
    } else if (data.weather[0].description == 'calm') {
      infoDiv.style.backgroundImage = 'url(img/calm.jpg)';
    } else if (data.weather[0].description == 'light breeze') {
      infoDiv.style.backgroundImage = 'url(img/breeze.jpg)';
    } else if (data.weather[0].description == 'gentle breeze') {
      infoDiv.style.backgroundImage = 'url(img/breeze.jpg)';
    } else if (data.weather[0].description == 'moderate breeze') {
      infoDiv.style.backgroundImage = 'url(img/heavyBreeze.jpg)';
    } else if (data.weather[0].description == 'fresh breeze') {
      infoDiv.style.backgroundImage = 'url(img/heavyBreeze.jpg)';
    } else if (data.weather[0].description == 'strong breeze') {
      infoDiv.style.backgroundImage = 'url(img/breeze.jpg)';
    } else if (data.weather[0].description == 'high wind, near gale') {
      infoDiv.style.backgroundImage = 'url(img/gale.jpg)';
    } else if (data.weather[0].description == 'gale') {
      infoDiv.style.backgroundImage = 'url(img/heavygale.jpg)';
    } else if (data.weather[0].description == 'severe gale') {
      infoDiv.style.backgroundImage = 'url(img/heavygale.jpg)';
    } else if (data.weather[0].description == 'storm') {
      infoDiv.style.backgroundImage = 'url(img/storm.jpg)';
    } else if (data.weather[0].description == 'violent storm') {
      infoDiv.style.backgroundImage = 'url(img/violentStorm.jpg)';
    }
  }
}
