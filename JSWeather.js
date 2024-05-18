
// Example usage: Fetch weather data for a specific city
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
//its over

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
    console.log("got here")
    console.log(weatherData)
    console.log(astronomy)
    const infoDisplay = document.getElementById('infoDisplay');
    if (weatherData) {
        console.log("got here2")

        const {location, current} = weatherData;
        const {astronomy} = astronomyData;
        const {astro} = astronomy;
        console.log(astro)
        const {name} = location;
        const {temp_c, temp_f, condition} = current;
        const {sunrise, sunset } = astro;

        console.log(sunrise)
        infoDisplay.innerHTML = `
            <p>Location: ${name}</p>
            <p>Condition: ${condition.text}</p>
            <p>Temperature: ${temp_c}°C / ${temp_f}°F </p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
                    
        `;
    } else {
        infoDisplay.innerHTML = '<p>Unable to fetch weather data</p>';
    }
}
