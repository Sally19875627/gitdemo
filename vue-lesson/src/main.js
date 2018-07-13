import Vue from 'vue'
import App from './App.vue'
import'bootstrap/dist/css/bootstrap.min.css'
import Announcement from "./Announcement.vue"
import Artical from "./Artical.vue"

Vue.component("app-announcement", Announcement);
Vue.component("app-artical", Artical);

new Vue({
  el: '#app',
  render: h=> h(App)
})
