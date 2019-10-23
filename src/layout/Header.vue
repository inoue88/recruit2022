<template lang="pug">
header.header
  router-link.header__logo(to="/")
    img(src='http://placehold.jp/60x60.png')
    span.header__title-sub 2020新卒採用
  input.header__btn(type='checkbox' id='header-btn')
  label.header__icon(for='header-btn')
    span.header__bar
  .header__nav
    router-link.header__nav-item(to="about")
      | about us
    router-link.header__nav-item(to="message")
      | message
    router-link.header__nav-item(to="culture")
      | culture
    router-link.header__nav-item(to="interview")
      | interview
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
      background: green;
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
    display: inline-block;
    padding: 1rem;
    text-transform: uppercase;
  }
}
@include media-breakpoint-up(lg) {
  .header {
    &__nav {
      display: block;
      width: auto;
      &:before {
        display: none;
      }
    }
    &__bar {
      display: none;
    }
  }
}
</style>
