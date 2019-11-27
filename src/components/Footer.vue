<template lang='pug'>
header.footer
  b-container
    b-row.footer__wrapper(align-v="center")
      b-col
        b-nav.footer__nav
          b-nav-item(to="/about") ABOUT US
          b-nav-item(to="/message") MESSAGE
          b-nav-item(to="/culture") CULTURE
          b-nav-item(to="/interview") INTERVIEW
        b-nav.footer__nav
          b-nav-item(href="https://www.aim-factory.com/" target="_blank") コーポレートサイト
          b-nav-item(href="https://www.aim-factory.com/contacts/new" target="_blank") お問い合わせ
          b-nav-item(href="https://www.aim-factory.com/privacy" target="_blank") 個人情報保護方針
      b-col
        img(src='/img/common/logo-landscape.svg' class='footer__logo')
        span 2020年新卒採用
        span.footer__copy-right Copyright (C) 2018 aimfactory Inc.
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom.scss';
.footer {
  &__wrapper {
    display: block;
  }
  a {
    color: var(--white);
  }
  padding: 4rem 0;
  background: var(--primary);
  color: var(--white);
  &__nav {
    justify-content: center;
  }
  &__logo {
    width: 160px;
    margin-right: 1rem;
  }
  &__copy-right {
    display: block;
    margin-top: 0.5rem;
    font-size: small;
  }
  @include media-breakpoint-up(lg) {
    &__wrapper {
      display: flex;
      flex-direction: row-reverse;
    }
    &__nav {
      justify-content: flex-end;
    }
  }
}
</style>
