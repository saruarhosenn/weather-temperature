// Variables
const API_KEY = "bdc70dd31b4e7bcfd35a3d76a7d67196";
const warningText = document.getElementById("warning-text");
// const noFoundText = document.getElementById("no-found-text");

document.getElementById("search-btn").onclick = () => {
    // Search Bar
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value;
    searchInput.value = "";

    // Warning Condition
    if (searchText === "") {
        warningText.style.display = "block";
    } else {
        warningText.style.display = "none";
    };

    // API Link
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
};

const setInnerText = (id, text1, text2) => {
    document.getElementById(id).innerText = `${text1} ${text2}`;
};

// Set Data
const displayData = temperature => {
    const url = ` https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherImg = document.getElementById("weather-img");
    weatherImg.setAttribute("src", url);
    setInnerText("city-name", temperature.name, "");
    setInnerText("temperature", temperature.main.temp, "°C");
    setInnerText("condition", temperature.weather[0].main, "");
    console.log(temperature);
};
