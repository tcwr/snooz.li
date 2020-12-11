import Vue from 'vue'
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("v-icon", Icon);



import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
 
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
