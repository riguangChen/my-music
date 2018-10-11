// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

// Vue.config.productionTip = false
import 'common/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router
})
