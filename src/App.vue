<template>
  <div id="app">
    <Header></Header>
    <router-view>

    </router-view>
    <!-- <MainPage></MainPage> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue"
import Footer from "./components/layout/Footer.vue"

// import MainPage from "./components/MainPage.vue"



export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // MainPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}
h1{
    width: 100%;
    text-align: left;
}
h3{
    margin-bottom: 10px;
}
body{
    background-color: #fff;
    color: #000;
    min-height: 100vh;
    
    font-family: 'Montserrat', sans-serif;
}
.wrapper {
    width: 1200px;
    margin: 0 auto;
 
    padding: 15px;
    min-height: 90vh;
}
.content{
    display: flex;
    flex-wrap: wrap;
}

textarea{
    width: 100%;
    height: 50vh;
    padding: 15px;
    resize: none;
    border: 1px solid #000;
    border-radius: 5px;
    
}
input, button{
    margin-top: 30px;
    width: 200px;
    height: 40px;
    cursor: pointer;
    border: 0;
    font-family: 'Montserrat', sans-serif;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
