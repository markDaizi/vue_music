import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//css reset
import './../static/css/reset.css'
import NavBar from'./components/common/NavBar'

Vue.component(NavBar.name,NavBar)

//axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;
/*Axios.defaults.baseURL = '';*/
Vue.config.productionTip = false
Vue.use(MintUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
