'use strict';
let apiKey = '287f0ceec9bb27a1800c48f569b53372'

let dateInfo = document.querySelector('.date'),
    time = document.querySelector('.time'),
    country = document.querySelector('.country'),
    generalWeatherData = document.querySelector('.weather_data'),
    temperature = document.querySelector('.temp'),
    feelsLike = document.querySelector('.feels_like'),
    visible = document.querySelector('.visible'),
    lastUpdateInfo = document.querySelector('.last_update p'),
    updateBtn = document.querySelector('.last_update button'),
    weatherImgs = document.querySelectorAll('.weather_img svg'),
    today = new Date(),
    fullDateName = today.toLocaleDateString('en-US', {
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }),
    fullTimeName = today.toLocaleTimeString('en-US', {
        hour: 'numeric', 
        minute: '2-digit',
        hourCycle: 'h12' 
    }),
    countrySelect = document.querySelector('.select_country'),
    citySelect = document.querySelector('.select_city'),
    coordValue = 'Kyiv,UA',
    countryCoordValue = null,
    cityCoordValue = null;


time.textContent = `${fullTimeName}`;
setInterval(()=>{
  time.textContent = `${new Date().toLocaleTimeString('en-US', {
        hour: 'numeric', 
        minute: '2-digit',
        hourCycle: 'h12' 
    })}`;
  
}, 15000)
let countries = [
    {
      "code": "UA",
      "name": "Ukraine",
      "administrative_centers": [
        { "id": 703448, "name": "Kyiv", "region": "Kyiv City / Kyiv Oblast", "coordinates": { "lat": 50.4500, "lon": 30.5233 } },
        { "id": 709930, "name": "Kharkiv", "region": "Kharkiv Oblast", "coordinates": { "lat": 49.9800, "lon": 36.2500 } },
        { "id": 691650, "name": "Odesa", "region": "Odesa Oblast", "coordinates": { "lat": 46.4800, "lon": 30.7300 } },
        { "id": 707474, "name": "Dnipro", "region": "Dnipropetrovsk Oblast", "coordinates": { "lat": 48.4600, "lon": 35.0500 } },
        { "id": 702550, "name": "Donetsk", "region": "Donetsk Oblast", "coordinates": { "lat": 48.0167, "lon": 37.8000 } },
        { "id": 701891, "name": "Zaporizhzhia", "region": "Zaporizhzhia Oblast", "coordinates": { "lat": 47.8333, "lon": 35.1667 } },
        { "id": 698740, "name": "Lviv", "region": "Lviv Oblast", "coordinates": { "lat": 49.8400, "lon": 24.0300 } },
        { "id": 692194, "name": "Mykolaiv", "region": "Mykolaiv Oblast", "coordinates": { "lat": 46.9667, "lon": 31.9833 } },
        { "id": 687697, "name": "Vinnytsia", "region": "Vinnytsia Oblast", "coordinates": { "lat": 49.2300, "lon": 28.4700 } },
        { "id": 707474, "name": "Poltava", "region": "Poltava Oblast", "coordinates": { "lat": 49.5883, "lon": 34.5517 } },
        { "id": 708308, "name": "Khmelnytskyi", "region": "Khmelnytskyi Oblast", "coordinates": { "lat": 49.4200, "lon": 26.9800 } },
        { "id": 699268, "name": "Kropyvnytskyi", "region": "Kirovohrad Oblast", "coordinates": { "lat": 48.5000, "lon": 32.2667 } },
        { "id": 692794, "name": "Cherkasy", "region": "Cherkasy Oblast", "coordinates": { "lat": 49.4400, "lon": 32.0700 } },
        { "id": 703884, "name": "Chernihiv", "region": "Chernihiv Oblast", "coordinates": { "lat": 51.5000, "lon": 31.2800 } },
        { "id": 703355, "name": "Chernivtsi", "region": "Chernivtsi Oblast", "coordinates": { "lat": 48.2800, "lon": 25.9300 } },
        { "id": 697920, "name": "Sumy", "region": "Sumy Oblast", "coordinates": { "lat": 50.9167, "lon": 34.7833 } },
        { "id": 695594, "name": "Zhytomyr", "region": "Zhytomyr Oblast", "coordinates": { "lat": 50.2500, "lon": 28.6667 } },
        { "id": 695922, "name": "Rivne", "region": "Rivne Oblast", "coordinates": { "lat": 50.6190, "lon": 26.2515 } },
        { "id": 689558, "name": "Lutsk", "region": "Volyn Oblast", "coordinates": { "lat": 50.7500, "lon": 25.3333 } },
        { "id": 690226, "name": "Uzhhorod", "region": "Zakarpattia Oblast", "coordinates": { "lat": 48.6200, "lon": 22.3000 } },
        { "id": 697526, "name": "Ternopil", "region": "Ternopil Oblast", "coordinates": { "lat": 49.5500, "lon": 25.6000 } },
        { "id": 694086, "name": "Kherson", "region": "Kherson Oblast (partially occupied)", "coordinates": { "lat": 46.6667, "lon": 32.6167 } },
        { "id": 702737, "name": "Ivano-Frankivsk", "region": "Ivano-Frankivsk Oblast", "coordinates": { "lat": 48.9167, "lon": 24.7000 } }
      ]
    },
    {
      "code": "PL",
      "name": "Poland",
      "administrative_centers": [
        { "id": 756135, "name": "Warsaw", "region": "Masovian Voivodeship", "coordinates": { "lat": 52.2298, "lon": 21.0118 } },
        { "id": 3099488, "name": "Krakow", "region": "Lesser Poland Voivodeship", "coordinates": { "lat": 50.0617, "lon": 19.9372 } },
        { "id": 3081368, "name": "Wroclaw", "region": "Lower Silesian Voivodeship", "coordinates": { "lat": 51.1077, "lon": 17.0305 } },
        { "id": 3094802, "name": "Poznan", "region": "Greater Poland Voivodeship", "coordinates": { "lat": 52.4069, "lon": 16.9299 } },
        { "id": 3093133, "name": "Lodz", "region": "Lodz Voivodeship", "coordinates": { "lat": 51.7688, "lon": 19.4560 } }
      ]
    },
    {
      "code": "DE",
      "name": "Germany",
      "administrative_centers": [
        { "id": 2950159, "name": "Berlin", "region": "Berlin", "coordinates": { "lat": 52.5200, "lon": 13.4050 } },
        { "id": 2867714, "name": "Munich", "region": "Bavaria", "coordinates": { "lat": 48.1374, "lon": 11.5755 } },
        { "id": 2911298, "name": "Hamburg", "region": "Hamburg", "coordinates": { "lat": 53.5500, "lon": 10.0000 } },
        { "id": 2801268, "name": "Frankfurt am Main", "region": "Hesse", "coordinates": { "lat": 50.1155, "lon": 8.6822 } },
        { "id": 2825297, "name": "Cologne", "region": "North Rhine-Westphalia", "coordinates": { "lat": 50.9333, "lon": 6.9500 } }
      ]
    },
    {
      "code": "BG",
      "name": "Bulgaria",
      "administrative_centers": [
        { "id": 727011, "name": "Sofia", "region": "Sofia City Province", "coordinates": { "lat": 42.6975, "lon": 23.3242 } },
        { "id": 725470, "name": "Varna", "region": "Varna Province", "coordinates": { "lat": 43.2141, "lon": 27.9147 } },
        { "id": 732047, "name": "Plovdiv", "region": "Plovdiv Province", "coordinates": { "lat": 42.1408, "lon": 24.7495 } },
        { "id": 729580, "name": "Burgas", "region": "Burgas Province", "coordinates": { "lat": 42.5000, "lon": 27.4667 } }
      ]
    },
    {
      "code": "FR",
      "name": "France",
      "administrative_centers": [
        { "id": 2988507, "name": "Paris", "region": "Ile-de-France", "coordinates": { "lat": 48.8534, "lon": 2.3488 } },
        { "id": 3036498, "name": "Marseille", "region": "Provence-Alpes-Côte d'Azur", "coordinates": { "lat": 43.2965, "lon": 5.3698 } },
        { "id": 3020668, "name": "Lyon", "region": "Auvergne-Rhône-Alpes", "coordinates": { "lat": 45.7500, "lon": 4.8500 } },
        { "id": 3031582, "name": "Toulouse", "region": "Occitanie", "coordinates": { "lat": 43.6043, "lon": 1.4437 } }
      ]
    },
    {
      "code": "ES",
      "name": "Spain",
      "administrative_centers": [
        { "id": 3117735, "name": "Madrid", "region": "Community of Madrid", "coordinates": { "lat": 40.4165, "lon": -3.7026 } },
        { "id": 3128760, "name": "Barcelona", "region": "Catalonia", "coordinates": { "lat": 41.3888, "lon": 2.1590 } },
        { "id": 2511475, "name": "Seville", "region": "Andalusia", "coordinates": { "lat": 37.3828, "lon": -5.9732 } },
        { "id": 2514651, "name": "Valencia", "region": "Valencian Community", "coordinates": { "lat": 39.4697, "lon": -0.3774 } }
      ]
    },
    {
      "code": "IT",
      "name": "Italy",
      "administrative_centers": [
        { "id": 3169070, "name": "Rome", "region": "Lazio", "coordinates": { "lat": 41.8919, "lon": 12.5113 } },
        { "id": 3173435, "name": "Milan", "region": "Lombardy", "coordinates": { "lat": 45.4643, "lon": 9.1895 } },
        { "id": 3177434, "name": "Naples",
          "region": "Campania", "coordinates": { "lat": 40.8333, "lon": 14.2500 } },
        { "id": 3176959, "name": "Turin", "region": "Piedmont", "coordinates": { "lat": 45.0704, "lon": 7.6868 } }
      ]
    },
    {
      "code": "GR",
      "name": "Greece",
      "administrative_centers": [
        { "id": 264371, "name": "Athens", "region": "Attica", "coordinates": { "lat": 37.9838, "lon": 23.7275 } },
        { "id": 734077, "name": "Thessaloniki", "region": "Central Macedonia", "coordinates": { "lat": 40.6401, "lon": 22.9444 } }
      ]
    },
    {
      "code": "PT",
      "name": "Portugal",
      "administrative_centers": [
        { "id": 2267057, "name": "Lisbon", "region": "Lisbon District", "coordinates": { "lat": 38.7223, "lon": -9.1393 } },
        { "id": 2735941, "name": "Porto", "region": "Porto District", "coordinates": { "lat": 41.1496, "lon": -8.6109 } }
      ]
    }
  ];

countries.forEach((el, i)=>{
  countrySelect.innerHTML += `<option value="${el.code}">${el.name}</option>`;  
});
countrySelect.addEventListener('change', e=>{
  let cityList = countries.find(el=>el.code === e.target.value);
  citySelect.innerHTML = '';
  cityList.administrative_centers.forEach((el, i)=>{
    citySelect.innerHTML += `<option value="${el.name}">${el.name}</option>`
  });
  countryCoordValue = cityList.code;
});

async function fetchData(url) {
    const responce = await fetch(url);
    const data = await responce.json();
    renderWeather(data);
    switch (data.weather[0].main) {
        case 'Thunderstorm':
            showWeatherImg('rain');
            break;
        case 'Drizzle':
            showWeatherImg('rain');
            break;
        case 'Rain':
            showWeatherImg('rain');
            break;
        case 'Snow':
            showWeatherImg('snow');
            break;
        case 'Mist':
            showWeatherImg('fog');
            break;
        case 'Smoke':
            showWeatherImg('fog');
            break;
        case 'Haze':
            showWeatherImg('fog');
            break;
        case 'Fog':
            showWeatherImg('fog');
            break;
        case 'Ash':
            showWeatherImg('mountain');
            break;
        case 'Clear':
            showWeatherImg('sun');
            break;
        case 'Clouds':
            showWeatherImg('cloud');
            break;
        default:
            console.log('Погода: Невідомий стан.');
            break;
    };
};

function renderWeather (data){
    dateInfo.textContent = `${fullDateName}`;
    country.textContent = `${data.sys.country}, ${data.name}`;
    temperature.textContent = `${Math.round(data.main.temp)} C`;
    feelsLike.textContent = `Feels Like: ${Math.round(data.main.feels_like)} C`;
    visible.textContent = `${data.weather[0].description}`;
    generalWeatherData.innerHTML = `
            <p>Hummity: ${data.main.humidity} %</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Wind: ${data.wind.speed}km/h SSE</p>
    `;
    lastUpdateInfo.textContent = `${today.toLocaleDateString('en-US', {
        month: 'short', 
        day: 'numeric' 
    })} ${new Date().toLocaleTimeString('en-US', {
        hour: 'numeric', 
        minute: '2-digit',
        hourCycle: 'h12' 
    })}`;
};

function showWeatherImg(type){
    let list = [...weatherImgs];
    list.forEach(el=>{
        if (el.classList.contains(type)) {
            el.classList.remove('hide');
            el.classList.add('show');
        }else{
            el.classList.remove('show');
            el.classList.add('hide');
        }
    })
};

fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${coordValue}&appid=${apiKey}&units=metric`)

citySelect.addEventListener('change', e=>{
  cityCoordValue = e.target.value;
  coordValue = `${cityCoordValue},${countryCoordValue}`;
  fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${coordValue}&appid=${apiKey}&units=metric`);
});

updateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${coordValue}&appid=${apiKey}&units=metric`);
});