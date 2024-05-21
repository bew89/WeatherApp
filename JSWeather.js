const countryFlags = {
    "Afghanistan": "🇦🇫",
    "Albania": "🇦🇱",
    "Algeria": "🇩🇿",
    "Andorra": "🇦🇩",
    "Angola": "🇦🇴",
    "Antigua and Barbuda": "🇦🇬",
    "Argentina": "🇦🇷",
    "Armenia": "🇦🇲",
    "Australia": "🇦🇺",
    "Austria": "🇦🇹",
    "Azerbaijan": "🇦🇿",
    "Bahamas": "🇧🇸",
    "Bahrain": "🇧🇭",
    "Bangladesh": "🇧🇩",
    "Barbados": "🇧🇧",
    "Belarus": "🇧🇾",
    "Belgium": "🇧🇪",
    "Belize": "🇧🇿",
    "Benin": "🇧🇯",
    "Bhutan": "🇧🇹",
    "Bolivia": "🇧🇴",
    "Bosnia and Herzegovina": "🇧🇦",
    "Botswana": "🇧🇼",
    "Brazil": "🇧🇷",
    "Brunei": "🇧🇳",
    "Bulgaria": "🇧🇬",
    "Burkina Faso": "🇧🇫",
    "Burundi": "🇧🇮",
    "Cabo Verde": "🇨🇻",
    "Cambodia": "🇰🇭",
    "Cameroon": "🇨🇲",
    "Canada": "🇨🇦",
    "Central African Republic": "🇨🇫",
    "Chad": "🇹🇩",
    "Chile": "🇨🇱",
    "China": "🇨🇳",
    "Colombia": "🇨🇴",
    "Comoros": "🇰🇲",
    "Congo, Democratic Republic of the": "🇨🇩",
    "Congo, Republic of the": "🇨🇬",
    "Costa Rica": "🇨🇷",
    "Croatia": "🇭🇷",
    "Cuba": "🇨🇺",
    "Cyprus": "🇨🇾",
    "Czechia": "🇨🇿",
    "Denmark": "🇩🇰",
    "Djibouti": "🇩🇯",
    "Dominica": "🇩🇲",
    "Dominican Republic": "🇩🇴",
    "Ecuador": "🇪🇨",
    "Egypt": "🇪🇬",
    "El Salvador": "🇸🇻",
    "Equatorial Guinea": "🇬🇶",
    "Eritrea": "🇪🇷",
    "Estonia": "🇪🇪",
    "Eswatini": "🇸🇿",
    "Ethiopia": "🇪🇹",
    "Fiji": "🇫🇯",
    "Finland": "🇫🇮",
    "France": "🇫🇷",
    "Gabon": "🇬🇦",
    "Gambia": "🇬🇲",
    "Georgia": "🇬🇪",
    "Germany": "🇩🇪",
    "Ghana": "🇬🇭",
    "Greece": "🇬🇷",
    "Grenada": "🇬🇩",
    "Guatemala": "🇬🇹",
    "Guinea": "🇬🇳",
    "Guinea-Bissau": "🇬🇼",
    "Guyana": "🇬🇾",
    "Haiti": "🇭🇹",
    "Honduras": "🇭🇳",
    "Hungary": "🇭🇺",
    "Iceland": "🇮🇸",
    "India": "🇮🇳",
    "Indonesia": "🇮🇩",
    "Iran": "🇮🇷",
    "Iraq": "🇮🇶",
    "Ireland": "🇮🇪",
    "Israel": "🇮🇱",
    "Italy": "🇮🇹",
    "Jamaica": "🇯🇲",
    "Japan": "🇯🇵",
    "Jordan": "🇯🇴",
    "Kazakhstan": "🇰🇿",
    "Kenya": "🇰🇪",
    "Kiribati": "🇰🇮",
    "Kuwait": "🇰🇼",
    "Kyrgyzstan": "🇰🇬",
    "Laos": "🇱🇦",
    "Latvia": "🇱🇻",
    "Lebanon": "🇱🇧",
    "Lesotho": "🇱🇸",
    "Liberia": "🇱🇷",
    "Libya": "🇱🇾",
    "Liechtenstein": "🇱🇮",
    "Lithuania": "🇱🇹",
    "Luxembourg": "🇱🇺",
    "Madagascar": "🇲🇬",
    "Malawi": "🇲🇼",
    "Malaysia": "🇲🇾",
    "Maldives": "🇲🇻",
    "Mali": "🇲🇱",
    "Malta": "🇲🇹",
    "Marshall Islands": "🇲🇭",
    "Mauritania": "🇲🇷",
    "Mauritius": "🇲🇺",
    "Mexico": "🇲🇽",
    "Micronesia": "🇫🇲",
    "Moldova": "🇲🇩",
    "Monaco": "🇲🇨",
    "Mongolia": "🇲🇳",
    "Montenegro": "🇲🇪",
    "Morocco": "🇲🇦",
    "Mozambique": "🇲🇿",
    "Myanmar": "🇲🇲",
    "Namibia": "🇳🇦",
    "Nauru": "🇳🇷",
    "Nepal": "🇳🇵",
    "Netherlands": "🇳🇱",
    "New Zealand": "🇳🇿",
    "Nicaragua": "🇳🇮",
    "Niger": "🇳🇪",
    "Nigeria": "🇳🇬",
    "North Korea": "🇰🇵",
    "North Macedonia": "🇲🇰",
    "Norway": "🇳🇴",
    "Oman": "🇴🇲",
    "Pakistan": "🇵🇰",
    "Palau": "🇵🇼",
    "Palestine": "🇵🇸",
    "Panama": "🇵🇦",
    "Papua New Guinea": "🇵🇬",
    "Paraguay": "🇵🇾",
    "Peru": "🇵🇪",
    "Philippines": "🇵🇭",
    "Poland": "🇵🇱",
    "Portugal": "🇵🇹",
    "Qatar": "🇶🇦",
    "Romania": "🇷🇴",
    "Russia": "🇷🇺",
    "Rwanda": "🇷🇼",
    "Saint Kitts and Nevis": "🇰🇳",
    "Saint Lucia": "🇱🇨",
    "Saint Vincent and the Grenadines": "🇻🇨",
    "Samoa": "🇼🇸",
    "San Marino": "🇸🇲",
    "Sao Tome and Principe": "🇸🇹",
    "Saudi Arabia": "🇸🇦",
    "Senegal": "🇸🇳",
    "Serbia": "🇷🇸",
    "Seychelles": "🇸🇨",
    "Sierra Leone": "🇸🇱",
    "Singapore": "🇸🇬",
    "Slovakia": "🇸🇰",
    "Slovenia": "🇸🇮",
    "Solomon Islands": "🇸🇧",
    "Somalia": "🇸🇴",
    "South Africa": "🇿🇦",
    "South Korea": "🇰🇷",
    "South Sudan": "🇸🇸",
    "Spain": "🇪🇸",
    "Sri Lanka": "🇱🇰",
    "Sudan": "🇸🇩",
    "Suriname": "🇸🇷",
    "Sweden": "🇸🇪",
    "Switzerland": "🇨🇭",
    "Syria": "🇸🇾",
    "Taiwan": "🇹🇼",
    "Tajikistan": "🇹🇯",
    "Tanzania": "🇹🇿",
    "Thailand": "🇹🇭",
    "Timor-Leste": "🇹🇱",
    "Togo": "🇹🇬",
    "Tonga": "🇹🇴",
    "Trinidad and Tobago": "🇹🇹",
    "Tunisia": "🇹🇳",
    "Turkey": "🇹🇷",
    "Turkmenistan": "🇹🇲",
    "Tuvalu": "🇹🇻",
    "Uganda": "🇺🇬",
    "Ukraine": "🇺🇦",
    "United Arab Emirates": "🇦🇪",
    "United Kingdom": "🇬🇧",
    "United States": "🇺🇸",
    "Uruguay": "🇺🇾",
    "Uzbekistan": "🇺🇿",
    "Vanuatu": "🇻🇺",
    "Vatican City": "🇻🇦",
    "Venezuela": "🇻🇪",
    "Vietnam": "🇻🇳",
    "Yemen": "🇾🇪",
    "Zambia": "🇿🇲",
    "Zimbabwe": "🇿🇼"
};

const date = getDate();
let city; // Change this to the desired city
const apiKey = 'ebea856a2fc542f2a7a130908241405';
let weatherData = {};
let astronomyData = {};


document.getElementById('textInput').addEventListener('change', function () {
    const locationElement = document.getElementById('textInput');
    run(locationElement);
});
document.getElementById('places').addEventListener('change', function () {
    const locationElement = document.getElementById('places');
    run(locationElement);
})

function run(locationElement) {
    const chosenLocation = locationElement.value;
    console.log(chosenLocation);
    if (chosenLocation !== "None") {

        city = chosenLocation;

        fetchWeatherData(city)
            .then(data => {
                console.log(data)
                if (data === undefined) {
                    throw new Error('Bad response from server');
                }
                return data;
            })
            .then(data => {
                weatherData = data.weatherData;
                astronomyData = data.astronomyData;
                displayWeatherInfo(weatherData, astronomyData);
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.log('Fetch error:', error);
            });
    } else {
        const display = document.getElementById('infoDisplay');
        display.innerHTML = "";
    }
}


async function fetchWeatherData() {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const apiUrl2 = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}&dt=${date}`;

    const errorMessage = `{"error":{"code":1006,"message":"No matching location found."}}`
    try {
        let weather = await fetch(apiUrl);

        let astronomy = await fetch(apiUrl2);

        weather = await weather.json();

        astronomy = await astronomy.json();
        let errorCode;
        try {
            errorCode = weather.error.code;
        } catch (err) {
            console.log(err)
        }
        if (errorCode !== 1006) { //Error code from the api
            return {weatherData: weather, astronomyData: astronomy};
        } else {
            document.getElementById('infoDisplay').innerHTML = `${city} does not exist
            or is bad input.`;

        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


function displayWeatherInfo(weatherData, astronomyData) {
    const infoDisplay = document.getElementById('infoDisplay');
    infoDisplay.innerHTML = "";
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
        } else if (condition.text === "Partly cloudy") {
            currentConditionEmoji = sunnyCloudyEmoji;
        } else if (condition.text === "Overcast") {
            currentConditionEmoji = cloudyConditionEmoji;
        } else if (condition.text === "Patchy light rain with thunder") {
            currentConditionEmoji = thunderEmoji;
        } else if (condition.text === "Light rain shower") {
            currentConditionEmoji = rainyConditionEmoji;
        }
        let {sunrise, sunset} = astro;
        sunrise = changeTo24TimeAndRemoveAMPM(sunrise);
        sunset = changeTo24TimeAndRemoveAMPM(sunset);

        if (city === "41.82, 1.47") {
            infoDisplay.innerHTML = `<p><img src="catalonia-flag.256x160.png" alt=""> Location: ${name}</p>`;
        } else {
            let flag = getCountryFlag(country);
            infoDisplay.innerHTML = `<p>${flag} Location: ${name}</p>`
        }

        infoDisplay.innerHTML += `
       
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

function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return year + "-" + month + "-" + day;
}