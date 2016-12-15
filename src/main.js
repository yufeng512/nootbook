// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import Vue from 'vue'
import App from './App'
import store from './store'

// console.log(Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: c => c(App)
})
