<template>
  <div id='main'>
    <div id='hero'>
      <h1 id="hero-text"> Register Now for Camp Crystal Lake!</h1>
      <h2 id='hero-sub'>Aug 1st - 9th</h2>
      <button id='register' >Click Here to Register</button>
    </div>
    <div id="fixed-1">one</div>
    <div id="fixed-2">two</div>
    <div id="fixed-3">three</div>

  </div>
</template>

<script>
export default {
  

}
</script>

<style scoped>
#hero{
  grid-area: hero;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 80vh;
  width: 100%;
  border: 3px solid green;
  align-items: center;
background-image: url("file:///C:/Users/Jerpr/Downloads/wave-haikei.svg");
background-size:cover;
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

#register{
  width: 25%;
  height: 5%;
  background-color: gray;
  border: 3px solid orangered;
  border-radius: 5px;
}

#register:hover{
  background-color: aliceblue;
}


#hero-text{
  color: orangered;
}

#hero-sub{
  color: orangered;
}

#main{
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
  "hero hero hero"
  "hero hero hero"
  "fixed-1 fixed-2 fixed-3";


}

</style>