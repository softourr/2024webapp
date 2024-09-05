<template>
  <div class="app-wrap">
    <NavBarView />
    <SearchBarView @search-city="searchCity" />
    <WeatherView :data="weatherData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBarView from "./components/NavBarView.vue";
import SearchBarView from "./components/SearchBarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";
import { weatherApiKey } from "../config.json";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

const getWeather = async () => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=${weatherApiKey}`
    );
    console.log(res.data);

    weatherData.value.icon = res.data.weather[0].icon;
    weatherData.value.temp = res.data.main.temp;
    weatherData.value.text = res.data.weather[0].description;
    weatherData.value.location = res.data.sys.country;
    weatherData.value.city = res.data.name;
  } catch (error) {
    console.error("ERROR : ", error);
  }
};

onMounted(() => {
  getWeather();
});

const searchCity = (city) => {
  weatherData.value.city = city;
  getWeather();
};
</script>

<style lang="scss" scoped>
.app-wrap {
  height: 100vh;
}
</style>
