import axios from "axios";

/* let baseUrl = 'http://api.weatherapi.com/v1';
let key = '46aaf2bf3ed84d28b64171506232404'; */

export default {
    
getCurrentWeather() {
    return axios.get('http://api.weatherapi.com/v1/current.json?key=46aaf2bf3ed84d28b64171506232404&q=43224&aqi=no')
}
}