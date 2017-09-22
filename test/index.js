import Vue from 'vue/dist/vue.common.js'
import retina from 'retinajs'
import VueRetina from '../src/index'

Vue.use(VueRetina, {retina})

new Vue({
  el: '#app',
  template: '#template',
  data: {
    img: 'google-logo.png'
  },
  mounted () {
  }
})
