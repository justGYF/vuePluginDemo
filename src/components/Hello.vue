<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <ul>
      <li v-for="(item, index) in linkData" @click="linkRouter(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue Plugin Demo Link',
      linkData: [
        { name: '日历', value: '/calendar' },
        { name: 'echarts', value: '/echartsDemo' },
        { name: '滑动方向', value: '/slider' },
        { name: 'css画树', value: '/treeDom' }
      ]
    }
  },
  methods: {
    linkRouter (val) {
      this.$router.push({path: this.linkData[val].value});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-weight: normal;
  width: auto;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  margin: 10px auto;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 1200px;
  height: 300px;
  margin: 10px auto;
}

li {
  position: relative;
  float: left;
  width: 18%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #000 transparent #000 transparent;
  padding: 0;
  margin-left: 5%;
  cursor: pointer;
}
li:after {
  border: solid transparent;
  content: ' ';
  height: 0;
  left: 100%;
  top: 0;
  position: absolute;
  width: 0;
  border-width: 15px;
  border-left-color: #000;
}
li:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  left: -30px;
  top: 0;
  position: absolute;
  width: 0;
  border-width: 15px;
  border-right-color: #000;
}
li:hover {
  text-shadow: 1px 1px 1px #ccc;
}
a {
  color: #42b983;
}
</style>
