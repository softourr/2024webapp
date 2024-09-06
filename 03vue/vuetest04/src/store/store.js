import axios from "axios";
import { createStore } from "vuex";
import { weatherApiKey } from "../../config.json";

export default createStore({
  state: {
    // initial data
    name: "홍길동",
    counter: 0,
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
      timezone: "0",
    },
  },
  mutations: {
    // commit
    addCount(state, payload) {
      state.counter += payload;
    },
    updateData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
      state.weatherData.timezone = payload.sys.timezone;
    },
  },
  actions: {
    async getWeather(context, city) {
      if (!city) city = "seoul";

      //   context.state.weatherData.city
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`
        );
        console.log(res.data);
        context.commit("updateData", res.data);
      } catch {
        alert(`'${city}' CITY is not exist.`);
      }
    },
  },
});
