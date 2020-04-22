<template>
  <div id="app">
    <div id="title">
      <h1>{{ title }}</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { getPageTitle } from './utils/window';

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
    --background-default: #dff4f7;
    --light-background: #D8D8D8;
    --background-title: #1c7000;
    --title-color: #fbe500;
    --title-size: 4rem;
    --light-grey: #9c9c9c;

    background-color: var(--background-default);
    margin: 0;
    font-size: 16px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
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
