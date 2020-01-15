<template lang='pug'>
header.header
  router-link.header__logo(to="/")
    img(src="/static/images/common/logo.svg")
    span.header__title-sub RECRUIT 2021
  input.header__btn(type='checkbox' id='header-btn' v-model='menuCheck')
  label.header__icon(for='header-btn')
    span.header__bar
  .header__nav
    router-link.header__nav-item(to="/message" @click.native='clearCheck')
      span.header__nav-item--ja 代表メッセージ
      span.header__nav-item--en message
    router-link.header__nav-item(to="/culture" @click.native='clearCheck')
      span.header__nav-item--ja カルチャー
      span.header__nav-item--en culture
    router-link.header__nav-item(to="/style" @click.native='clearCheck')
      span.header__nav-item--ja スタイル
      span.header__nav-item--en style
    router-link.header__nav-item(to="/member" @click.native='clearCheck')
      span.header__nav-item--ja メンバー
      span.header__nav-item--en member
    b-button(variant='aimred' to="/job" squared class='entry-button') ENTRY
</template>

<script>
export default {
  data () {
    return {
      menuCheck: false
    }
  },
  methods: {
    clearCheck: function () {
      this.$data.menuCheck = false
    }
  }
}

</script>
<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.header {
  $parent: &;
  position: absolute;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  &__btn {
    display: none;
    &:checked ~ #{$parent}__icon {
      #{$parent}__bar {
        background: transparent;
        &:before {
          transform: rotate(-45deg);
          top: 0;
        }
        &:after {
          transform: rotate(45deg);
          top: 0;
        }
      }
    }
    &:checked ~ #{$parent}__nav:before {
      height: 100vh;
    }
    &:checked ~ #{$parent}__nav {
      display: block;
      width: 100%;
      padding: 2rem;
    }
  }
  &__icon {
    cursor: pointer;
    display: inline-block;
    padding: 24px 20px;
    position: relative;
    user-select: none;
    margin-left: auto;
  }
  &__bar {
    background: #fff;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
    &::before,
    &::after {
      background: #fff;
      content: "";
      display: block;
      position: absolute;
      transition: all 0.2s ease-out;
      height: 100%;
      width: 100%;
    }
    &::before {
      top: 5px;
    }
    &::after {
      top: -5px;
    }
  }
  &__nav {
    display: none;
    &:before {
      content: "";
      display: block;
      background: var(--primary);
      position: fixed;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 0;
      top: 0;
    }
  }
  &__logo {
    &:hover {
      text-decoration: none;
    }
  }
  &__title-sub {
    color: #fff;
    margin-left: 1rem;
  }
  &__nav-item {
    color: #fff;
    display: block;
    padding: 0 0 2rem;
    text-transform: uppercase;
    display: block;
    position: relative;
    text-decoration: none;
    &::after {
      position: absolute;
      content: "";
      bottom: 0.5rem;
      left: 0;
      width: 0;
      height: 1px;
      background: white;
      transition: all 0.3s ease 0s;
    }
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
    &:hover::after {
      width: 4rem;
    }
    &--ja {
      display: block;
      font-size: 1.4rem;
      line-height: 1.2;
    }
  }
  .entry-button {
    width: 100%;
    padding: 1.5rem;
  }
}
@include media-breakpoint-up(lg) {
  .header {
    $parent: &;
    &__nav {
      display: block;
      width: auto;
      margin-right: 1rem;
      &:before {
        display: none;
      }
    }
    &__bar {
      display: none;
    }
    &__nav-item {
      display: inline-block;
      padding: 1rem;
      &--ja {
        display: none;
      }
    }
  &__btn {
    display: none;
    &:checked ~ #{$parent}__nav {
      padding: 0;
      width: auto;
    }
  }
    .entry-button {
      width: auto;
      padding: 6px 1.5rem;
    }
  }
}
</style>
