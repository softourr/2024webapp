<template>
  <div class="weather-wrap">
    <div class="location">
      {{ $store.state.weatherData.city }} /
      {{ $store.state.weatherData.location }}
    </div>
    <div>
      <img
        :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@4x.png`"
        alt=""
      />
    </div>
    <div class="result">
      <div class="card-wrap">
        <p class="tit">Temp</p>
        <p>{{ ($store.state.weatherData.temp - 273.13).toFixed(1) }}°C</p>
      </div>
      <div class="card-wrap">
        <p class="tit">Desc</p>
        <p>{{ $store.state.weatherData.text }}</p>
      </div>
    </div>
    <div class="vuex">
      <!-- {{ import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("getWeather");
}); @click="$store.commit('addCount', 10)">CLICK</button> -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.weather-wrap {
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .location {
    border-radius: 20px;
    padding: 10px 16px;
    background-color: skyblue;
    color: white;
    font-weight: bold;
  }

  .card-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tit {
    width: 100px;
    border-radius: 20px;
    padding: 10px 16px;
    background-color: skyblue;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .result {
    display: flex;
    justify-content: space-around;
    border-radius: 20px;
    padding: 10px 16px;
    width: 300px;
    height: 120px;
    border: 2px solid skyblue;
    color: skyblue;
    font-weight: bold;
  }
}
</style>
