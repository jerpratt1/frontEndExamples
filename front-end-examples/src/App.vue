<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="chatbot">ChatBot</router-link> |
      <router-link to="voting">Voting</router-link> |
      <router-link to="tournaments">Tournaments</router-link> |
      <router-link to="campregistration">Camp Registration</router-link> |
      <router-link to="kiosk">Kiosk</router-link>
    </nav>
    <router-view id="route"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: gray;
  height: 100%;
  width: 100%;
  background-size: cover;
  
  }

#route{
  margin: 10px;
}

nav {
  padding: 30px;
  border: 3px solid gray;
  background-color: lightgray;
  border-radius: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}  

</style>
