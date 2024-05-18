const countryFlags = {
    "Algeria": "🇩🇿",
    "Andorra": "🇦🇩",
    "Argentina": "🇦🇷",
    "Armenia": "🇦🇲",
    "Australia": "🇦🇺",
    "Belgium": "🇧🇪",
    "Canada": "🇨🇦",
    "China": "🇨🇳",
    "Cyprus": "🇨🇾",
    "Egypt": "🇪🇬",
    "France": "🇫🇷",
    "Germany": "🇩🇪",
    "Greece": "🇬🇷",
    "Italy": "🇮🇹",
    "Nigeria": "🇳🇬",
    "North Korea": "🇰🇵",
    "Palestine": "🇵🇸",
    "Spain": "🇪🇸",
    "United Kingdom": "🇬🇧",
    "United States": "🇺🇸"
};
// let countryFlagsImages = {}


let city; // Change this to the desired city
const apiKey = 'ebea856a2fc542f2a7a130908241405';
let weatherData = {};
let astronomy = {};


document.getElementById('places').addEventListener('change', function () {
    const locationElement = document.getElementById('places');
    const chosenLocation = locationElement.value;
    console.log(chosenLocation);
    if (chosenLocation !== "None") {

        city = chosenLocation;

        fetchWeatherData(city)
            .then(data => {
                weatherData = data.weatherData;
                astronomy = data.astronomy;
                console.log(weatherData);
                console.log(astronomy);
                displayWeatherInfo(weatherData, astronomy);
            })
    }
});


async function fetchWeatherData() {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const apiUrl2 = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}&dt=2024-05-17`;

    try {
        const response = await fetch(apiUrl);
        const response2 = await fetch(apiUrl2);
        const responsejson1 = await response.json();
        console.log("got 1");


        const responsejson2 = await response2.json();
        return {weatherData: responsejson1, astronomy: responsejson2};
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


// Function to display weather information
function displayWeatherInfo(weatherData, astronomyData) {
    const infoDisplay = document.getElementById('infoDisplay');
    if (weatherData) {

        const clearConditionEmoji = "🌈";
        const sunnyConditionEmoji = "☀️";
        const sunnyCloudyEmoji = "🌥️";
        const cloudyConditionEmoji = "☁️";
        const rainyConditionEmoji = "🌧️";
        const thunderEmoji = "🌩️";
        let currentConditionEmoji = "";

        const coldTemp = "❄️";
        const hotTemp = "🔥";
        let currentTempEmoji = "";

        const sunriseEmoji = "🌅";
        const sunsetEmoji = "🌇";

        const {location, current} = weatherData;
        const {astronomy} = astronomyData;
        const {astro} = astronomy;
        const {name, country} = location;
        const {temp_c, temp_f, condition} = current;

        if (temp_c > 20) {
            currentTempEmoji = hotTemp;
        } else {
            currentTempEmoji = coldTemp;
        }

        if (condition.text === "Clear") {
            currentConditionEmoji = clearConditionEmoji;
        } else if (condition.text === "Sunny") {
            currentConditionEmoji = sunnyConditionEmoji;
        } else if (condition.text === "Partly Cloudy") {
            currentConditionEmoji = sunnyCloudyEmoji;
        } else if (condition.text === "Overcast") {
            currentConditionEmoji = cloudyConditionEmoji;
        } else if (condition.text === "Patchy light rain with thunder") {
            currentConditionEmoji = thunderEmoji;
        }
        let {sunrise, sunset} = astro;
        sunrise = changeTo24TimeAndRemoveAMPM(sunrise);
        sunset = changeTo24TimeAndRemoveAMPM(sunset);


        const flag = getCountryFlag(country);

        const flagImg = document.createElement("img");
        flagImg.src = flag;

        infoDisplay.innerHTML = `
            <p>${flag} Location: ${name}</p>
            <p>${currentConditionEmoji} Condition: ${condition.text}</p>
            <p>${currentTempEmoji} Temperature: ${temp_c}°C / ${temp_f}°F </p>
            <p>${sunriseEmoji} Sunrise: ${sunrise}</p>
            <p>${sunsetEmoji} Sunset: ${sunset}</p>
                    
        `;
    } else {
        infoDisplay.innerHTML = '<p>Unable to fetch weather data</p>';
    }
}

function getCountryFlag(country) {
    return countryFlags[country];

}

function changeTo24TimeAndRemoveAMPM(timeString) {

    let hours = parseInt(timeString.substring(0, 2));
    let minutes = parseInt(timeString.substring(3, 5));
    let isPM = timeString.indexOf("PM") > -1;

    if (isPM && hours < 12) {
        hours += 12;
    } else if (!isPM && hours === 12) {
        hours = 0;
    }

    timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');


    return timeString.replace(/\s[AP]M$/, "");

}
