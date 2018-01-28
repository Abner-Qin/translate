import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


/*使用VueResource插件*/
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})
