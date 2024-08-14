const inputText = document.querySelector(".txt");
const btn = document.querySelector(".btn");
// output vars
const citylocation = document.querySelector(".location");
const weather = document.querySelector(".weather");
const time = document.querySelector(".localTime");

async function getData(cityName) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=48cff1d738794a96b07124240241308&q=${cityName}&aqi=yes`
  );
  return await data.json();
}

btn.addEventListener("click", async () => {
  const inputValue = inputText.value;
  const result = await getData(inputValue);
  citylocation.innerHTML = `${result.location.name} -   ${result.location.country}`;
  weather.innerHTML = `${result.current.temp_c} celcius`;
  time.innerHTML = `${result.location.localtime}`;
});
