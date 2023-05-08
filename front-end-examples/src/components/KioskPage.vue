<template>
  <div id="main">
    <h1 id="header"> Date:
      {{ currentDate.month }} / {{ currentDate.day }} / {{ currentDate.year }}
    </h1>
    <div class="weather">
      <div v-if="populated">
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
    <div class="news">
      News will go here
    </div>
    <div id="fixed-1">one</div>
    <div id="fixed-2">two</div>
    <div id="fixed-3">three</div>
  </div>
</template>

<script>
import WeatherService from "../service/WeatherService.js";
export default {
  data: function () {
    return {
      currentDate: {
        year: "",
        month: "",
        day: "",
      },
      currentWeather: {},
      location: {},
      populated: false,
    };
  },

  created() {
    this.getCurrentDate();
  },

  methods: {
    getCurrentWeather() {
      WeatherService.getCurrentWeather().then((response) => {
        this.currentWeather = response.data.current;
        this.location = response.data.location;
      });
      this.populated = true;
    },

    getCurrentDate() {
      let date = new Date();
      this.currentDate.year = date.getFullYear();
      this.currentDate.month = date.getMonth() + 1;
      this.currentDate.day = date.getDate();
    },
  },
};
</script>

<style scoped>
.weather {
  grid-area: weather;
  justify-self: center;
  background-color: orange;
  width: 20vw;
  height: 10vw;
}

.news{
  grid-area: news;
  background-color: yellow;
}

#fixed-1{
  grid-area: fixed-1;
  background-color: red;
}

#fixed-2{
  grid-area: fixed-2;
  background-color: blue;
}

#fixed-3{
  grid-area: fixed-3;
  background-color: green
}

#header {
  grid-area: header;
  background-color: aqua;
}

.button {
  margin: 10px;
}

#main {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "weather weather news"
    "weather weather news"
    "fixed-1 fixed-2 fixed-3";
}
</style>