<template lang="pug">
  div
    HeaderInterview(TitleEn="Interview" TitleJa="インタビュー")
</template>

<script>
import HeaderInterview from "../components/HeaderInterview.vue";
import Interview from "../api/Interview.json";
export default {
  data() {
    return {
      Interview: Interview
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
