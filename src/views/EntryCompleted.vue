<template lang='pug'>
  .entry-completed
    b-container.container-small.text-center
      h1.mb-5 エントリーが完了しました
      p.mb-5 後ほど担当者から履歴書等のご提出物についてご連絡させていただきます。
      p.mb-5 3営業日以内に弊社担当者からご返信させていただきますので、<br />しばらくお待ちくださいませ。
      p.mb-5 万が一返信メールが届かない場合は、<br />お手数ですがrec@aim-factory.comに直接ご連絡ください。
      .pt-5
        b-button(variant='outline-primary' to="/" squared) トップページに戻る
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.entry-completed{
  margin-bottom: 10rem;
}
</style>
