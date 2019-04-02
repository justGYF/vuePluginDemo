<template>
  <div id="app">
    <div class="header">
      <p class="title">{{title}}</p>
      <div to="./" class="routerLink" @click="toHomePage" v-if="login">返回首页</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
        login: 'login/changeHomeBut',
        title: 'login/getTitle'
    })
  },
  methods: {
  toHomePage () {
      this.$router.push('./')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.header {
  width: 100%;
  height: 50px;
  margin: 0;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.title {
  text-indent: 150px;
  line-height: 50px;
  font-size: 25px;
  letter-spacing: 5px;
  float: left;
}
.routerLink {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    background: #5382A1;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    float: right;
    margin: 10px 100px 0 0;
}
</style>
