import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store, //使用vuex功能
    render: h => h(App)
}).$mount('#app')