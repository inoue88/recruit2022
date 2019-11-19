<template lang="pug">
  header.footer-g
    b-container
      b-row(align-v="center")
        b-col
          a.footer-g__ttl logo
          span 2020年新卒採用
          span.footer-g__copy-right Copyright (C) 2018 aimfactory Inc.
        b-col
          b-nav(small align="right")
            b-nav-item ABOUT US
            b-nav-item MESSAGE
            b-nav-item CULTURE
            b-nav-item INTERVIEW
          b-nav(small align="right")
            b-nav-item コーポレートサイト
            b-nav-item お問い合わせ
            b-nav-item 個人情報保護方針
</template>

<style lang="scss" scoped>
.footer-g {
  a {
    color: var(--white);
  }
  padding: 4rem 0;
  background: var(--primary);
  color: var(--white);
  &__copy-right {
    display: block;
    margin-top: 0.5rem;
    font-size: small;
  }
}
</style>
