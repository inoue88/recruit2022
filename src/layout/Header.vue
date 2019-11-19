<template lang="pug">
header.header
  router-link.header__logo(to="/")
    img(src='img/logo.svg')
    span.header__title-sub 2020新卒採用
  input.header__btn(type='checkbox' id='header-btn')
  label.header__icon(for='header-btn')
    span.header__bar
  .header__nav
    router-link.header__nav-item(to="/about")
      span.header__reading 私達について
      | about us
    router-link.header__nav-item(to="/message")
      span.header__reading 代表メッセージ
      | message
    router-link.header__nav-item(to="/culture")
      span.header__reading カルチャー
      | culture
    router-link.header__nav-item(to="/interview")
      span.header__reading 社員インタビュー
      | interview
    router-link.header__nav-item(to="job")
      b-button(size="sm" variant='impact' squared) ENTRY
</template>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.header {
  position: absolute;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  $parent: &;
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
      background-color: var(--primary);
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
    display: block;
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    transition: color 0.5s ease-out;
    &:hover {
      text-decoration: none;
    }
  }
  &__reading {
    display: block;
    font-size: 1.8rem;
    font-weight: normal;
  }
}
@include media-breakpoint-down(lg) {
  .header__title-sub {
  }
  button.btn-impact {
    width: 100%;
    height: 4rem;
  }
}
@include media-breakpoint-up(lg) {
  .header {
    &__nav {
      font-size: 13px;
      font-weight: bold;
      display: block;
      width: auto !important;
      &:before {
        display: none;
      }
    }
    &__nav-item {
      display: inline-block;
    }
    &__bar {
      display: none;
    }
    &__reading {
      display: none;
    }
  }
}
</style>
