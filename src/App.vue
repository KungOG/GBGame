<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/highscore">High Score</router-link> |
      <router-link to="/rules">Rules</router-link> |
      <router-link to="/settings">settings</router-link> |
      <router-link to="/menu">Menu</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';
</style>
