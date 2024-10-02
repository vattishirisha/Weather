let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = document.getElementById("location").value;
  console.log(location);
  let fetchData = async () => {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5396dc24488bdf9745431426bbecfcda`
    );
    let finalData = await data.json();
    console.log(finalData);
    let tempValue = Math.round(finalData.main.temp - 273);
    let humidValue = finalData.main.humidity;
    let weatherDescription = finalData.weather[0].main.toUpperCase();

    let desc = document.getElementById("desc");
    desc.innerHTML = weatherDescription.toUpperCase();

    let temp = document.querySelector("#temperature>h1");
    temp.innerHTML = `${tempValue}<sup>0</sup>`;

    let humid = document.querySelector("#humidity>h1");
    humid.innerHTML = `${humidValue}<p>KMPH</p>`;
    let img = document.getElementById("img");
    let bgc = document.getElementById("container");
    console.dir(bgc)
    switch (weatherDescription) {
      case "CLEAR":
        img.src = "./Assets/sunny-day.png";
        bgc.style.backgroundImage = "url(./Assets/clearWeather.gif)";
        break;
      case "CLOUDS":
        img.src = "./Assets/clouds.png";
        bgc.style.backgroundImage = "url(./Assets/cloudsWeather.gif)";
        break;
      case "MIST":
        img.src = "./Assets/mist.png";
        bgc.style.backgroundImage = "url(./Assets/mistWeather.gif)";
        break;
      case "HAZE":
        img.src = "./Assets/haze.png";
        bgc.style.backgroundImage = "url(./Assets/hazeWeather.gif)";
        break;
      case "RAIN":
        img.src = "./Assets/raining.png";
        bgc.style.backgroundImage = "url(./Assets/rainWeather.gif)";
        break;
      case "SNOW":
        img.src = "./snow.png";
        bgc.style.backgroundImage = "url(./snowWeather.gif)";
        break;
      case "DUST":
        img.src = "./Assets/sandstorm.png";
        bgc.style.backgroundImage = "url(./Assets/dustWeather.gif)";
        break;
      default:
        img.src = "./Assets/sunny-day.png";
        bgc.style.backgroundImage = "url(./Assets/clearWeather.gif)";
    }
    }
    fetchData();

}) 