<template lang="pug">
  div 
    h1 インタビュー一覧
  //- //- 001：jsonからデータを取り込み
  //- ul
  //-   li(v-for="(item, index, n) in ListSample" v-bind:key="item.id")
  //-     h2 {{index + 1}}

</template>

<script>
// import InterviewList from "./InterviewList.json";

export default {
  data() {
    return {
      // //- 001：jsonからデータを取り込み
      // ListSample: InterviewList
    };
  }
};
</script>
