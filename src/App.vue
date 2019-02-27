<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/highscore">High Score</router-link> |
      <router-link to="/rules">Rules</router-link> |
      <router-link to="/settings">settings</router-link> |
      <router-link to="/menu">Menu</router-link> ||
      <router-link to="/login"><button v-if="!user" type="button">Login</button></router-link>
      <button class="navbutton" v-if="user" @click="logout" type="button">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  data () {
    return {
      user: null
    }
  },
  methods: {
    /* If you're logged in signs you out */
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({path: '/'});
        });
    }
  },
  /* Checks if you are logged in or not. Shows Login/Sign in button */
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
