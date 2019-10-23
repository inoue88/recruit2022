<template lang="pug">
  .message
    HeaderTitle(TitleEn="Interview" TitleJa="インタビュー")
    div
      b-container
        InterviewList
    FooterEntry
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import InterviewList from "../components/InterviewList.vue";
import FooterEntry from "../components/FooterEntry.vue";

export default {
  name: "about",
  components: {
    HeaderTitle,
    InterviewList,
    FooterEntry
  }
};
</script>
