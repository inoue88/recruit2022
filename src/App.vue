<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
</style>
