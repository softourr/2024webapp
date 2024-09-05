<template>
  <div class="weather-wrap">
    <div class="location">
      {{ props.data.city }} / {{ props.data.location }}
    </div>
    <div>
      <img
        :src="`https://openweathermap.org/img/wn/${props.data.icon}@4x.png`"
        alt=""
      />
    </div>
    <div class="result">
      <div class="card-wrap">
        <p class="tit">Temp</p>
        <p>{{ (props.data.temp - 273.13).toFixed(1) }}°C</p>
      </div>
      <div class="card-wrap">
        <p class="tit">Desc</p>
        <p>{{ props.data.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

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
    background-color: darkslategray;
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
    background-color: darkslategray;
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
    border: 2px solid darkslategray;
    color: darkslategray;
    font-weight: bold;
  }
}
</style>
