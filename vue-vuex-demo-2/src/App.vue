<template>
  <div id="app">
    欢迎您,{{$store.state.name}}
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="button" value="通过mutations修改共享数据" @click="handleUpdate"/>
    <input type="button" value="调用actions中定义的函数" @click="handleCallAction"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleUpdate(){
      //mutations中定义的函数不能直接调用，必须通过这种方式来调用
      //setName为mutations中定义的函数名称，后面为传递参数
      this.$store.commit('setName','廖乐乐')
    },
    handleCallAction(){
      this.$store.dispatch('setNameByAxios')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
