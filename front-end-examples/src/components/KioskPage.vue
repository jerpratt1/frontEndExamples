<template>
  <div>
    <h1>This is the landing page for the kiosk.</h1>
    <div class="weather" v-if="populated">
      <div id="location">Location: {{ location.name }}</div>
      <div>Current Temp: {{ currentWeather.temp_f }} &#8457;</div>
      <div>Feels Like: {{ currentWeather.feelslike_f }} &#8457;</div>
      <div>Wind Speed: {{ currentWeather.wind_mph }} MPH</div>
    </div>
    <div>
      <button class="button" v-on:click="getCurrentWeather">
        Click Here to get weather
      </button>
    </div>
  

  </div>
</template>

<script>
import WeatherService from '../service/WeatherService.js';
export default {
  data: function () {
    return {
      currentWeather: {},
      location: {},
      populated: false,
    };
  },

  methods: {
    getCurrentWeather() {
      WeatherService.getCurrentWeather().then((response) => {
        this.currentWeather = response.data.current;
        this.location = response.data.location;
      });
      this.populated = true;
    },
  },
};
</script>

<style scoped>

</style>