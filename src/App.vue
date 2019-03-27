<template>
  <div id="app">
    <div to="./" class="routerLink" @click="toHomePage" v-if="login">返回首页</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
        login: 'login/changeHomeBut'
    })
  },
  methods: {
  toHomePage () {
      this.$router.push('./')
    }
  }
}
</script>

<style>
html, body, #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.routerLink {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    background: #5382A1;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    position: fixed;
    z-index: 999;
    right: 10px;
    top: 20px;
}
</style>
