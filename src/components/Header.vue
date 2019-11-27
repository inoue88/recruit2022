<template lang='pug'>
header.header
  router-link.header__logo(to="/")
    img(alt='aim factory' src='/img/common/logo.svg')
    span.header__title-sub RECRUIT 2020
  input.header__btn(type='checkbox' id='header-btn')
  label.header__icon(for='header-btn')
    span.header__bar
  .header__nav
    router-link.header__nav-item(to="/about")
      span.header__nav-item--ja 私達について
      span.header__nav-item--en about us
    router-link.header__nav-item(to="/message")
      span.header__nav-item--ja 代表メッセージ
      span.header__nav-item--en message
    router-link.header__nav-item(to="/culture")
      span.header__nav-item--ja カルチャー
      span.header__nav-item--en culture
    router-link.header__nav-item(to="/interview")
      span.header__nav-item--ja 社員インタビュー
      span.header__nav-item--en interview
    b-button(variant='aimred' to="/job" squared class='entry-button') ENTRY
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang='scss' scoped>
.header{
  padding: 3rem;
}
</style>
