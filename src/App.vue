<template>
  <div id="app">
    <div id="title">
      <h1>{{ title }}</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import getPageTitle from './utils/title';

  export default {
    data () {
      return {
        title: getPageTitle()
      }
    }
  }
</script>

<style>

  body {
    margin: 0;
    font-size: 16px;
    
    --background-default: #dff4f7;
    --background-title: #1c7000;
    --title-color: #fbe500;
    --title-size: 4rem;
    --light-grey: #9c9c9c;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: var(--background-default);
    width: 100%;
    height: 100vh;
  }

  #title {
    padding: 10px;
    margin: 0;
    background-color: var(--background-title);
  }

  #title h1 {
    color: var(--title-color);
    font-size: var(--title-size);
  }

</style>
