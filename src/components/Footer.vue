<template lang='pug'>
header.footer
  b-container
    b-row.footer__wrapper(align-v="center")
      b-col
        b-nav.footer__nav
          b-nav-item(to="/message") MESSAGE
          b-nav-item(to="/culture") CULTUIRE
          b-nav-item(to="/style") STYLE
          b-nav-item(to="/member") MEMBER
        b-nav.footer__nav
          b-nav-item(href="https://www.aim-factory.com/" target="_blank") コーポレートサイト
          b-nav-item(href="https://www.aim-factory.com/contacts/new" target="_blank") お問い合わせ
          b-nav-item(href="https://www.aim-factory.com/privacy" target="_blank") 個人情報保護方針
      b-col
        img(src='/static/images/common/logo-landscape.svg' class='footer__logo')
        span RECRUIT 2021
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
    .col:last-child{
      padding-top: 2rem;
      text-align: center;
      &:before{
        content: '';
        display: inline-block;
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #fff;
        margin-bottom: 1.5rem;
      }
    }
  }
  a {
    color: var(--white);
  }
  padding: 1rem 0;
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
    padding: 4rem 0;
    &__wrapper {
      display: flex;
      flex-direction: row-reverse;
      .col:last-child{
        padding-top: 0;
        text-align: left;
        &:before{
          content: normal;
        }
      }
    }
    &__nav {
      justify-content: flex-end;
    }
  }
}
</style>
