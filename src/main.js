/* eslint-disable standard/object-curly-even-spacing */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import './assets/scss/custom.scss'
import VueHead from 'vue-head'

Vue.use(VueHead)

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueCarousel)

new Vue({
  router,
  render: h => h(App),
  // 追加
  head: {
    meta: [
      {name: 'description', content: 'アイムファクトリー株式会社 2021年新卒採用｜アイムファクトリー株式会社'},
      // {property: 'og:type', content: 'website'},
      // Twitter
      // { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
      // { n: 'twitter:description', c: 'Content description less than 200 characters'},
      // Facebook / Open Graph
      // { property: 'fb:app_id', content: '123456789' },
      // { property: 'og:title', content: 'Content Title' },
      // with shorthand
      { p: 'og:image', c: 'https://xxxx.xx/image.jpg' }
    ]
  }
}).$mount('#app')
