<template lang="pug">
  .message
    HeaderTitle(TitleEn="Culture" TitleJa="カルチャー")
    section.home-sec
      b-container
        b-row
          b-col(cols="12" lg="6")
            CultureList(
              Title="人事評価制度"
              Txt="半期（6か月）に1回、個人目標を設定し達成基準を満たした社員には達成度合いに応じてインセンティブを支給します。"
              Img="image01"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="社内ランク制度"
              Txt="目標達成時のインセンティブはランクに連動しより高いランクで達成した際は高いインセンティブとなります。"
              Img="image02"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="MVP・表彰制度"
              Txt="1年に1回、期末総会で、一番活躍した社員1名をMVPとして／最もアイムバリューを体現した社員1名をバリュー大賞として表彰しています。"
              Img="image03"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="資格取得支援"
              Txt="IT人材支援とプロとして更なる知識、業務理解のため・ITパスポート・国家資格キャリアコンサルタント・人材協認定コンサルタント資格"
              Img="image04"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="社外研修支援"
              Txt="IT人材支援とプロとして更なる知識、業務理解のため社外研修の受講を推奨しています。"
              Img="image01"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="アイムライブラリー"
              Txt="ビジネスパーソンとして、知識／トレンドをインプットするため、社員が自由に利用できるアイムライブラリーを設置しています。"
              Img="image05"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="夏季休暇選択制度"
              Txt="アイムファクトリーはカレンダー通りの勤務でお盆休みはありません。その代わり、7月1日～9月30日まで、夏季休暇として特別休暇を3日付与しています。"
              Img="image06"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="月1リモート"
              Txt="職種に関係なく、月に１回リモートワークができる制度です。通勤時間を休息や準備時間に当てることで、リフレッシュしながら効率的に勤務してもらうことが目的です。社内SNSやSkypeを利用し、オフィス外でもしっかりと成果がだせる環境を整えています。"
              Img="image06"
              )
          b-col(cols="12" lg="6")
            CultureList(
              Title="次世代育成支援"
              Txt="家族を持つ方でも働きやすく、キャリアを構築できるよう、時短勤務・男性向けの特別休暇誕生祝い金（誕生時と3歳の誕生日まで10万円支給）、ママ社員トークセッションなどの制度やイベントでバックアップしています。"
              Img="image06"
              )
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import CultureList from "../components/CultureList.vue";
import CultureTitle from "../components/CultureTitle.vue";

export default {
  name: "culture",
  components: {
    HeaderTitle,
    CultureList,
    CultureTitle
  },
  data() {
    return {
      CultureList: [
        {
          Title: "人事評価制度",
          Txt:
            "半期（6か月）に1回、個人目標を設定し達成基準を満たした社員には達成度合いに応じてインセンティブを支給します。",
          Img: "image01"
        },
        {
          Title: "社内ランク制度",
          Txt:
            "目標達成時のインセンティブはランクに連動しより高いランクで達成した際は高いインセンティブとなります。",
          Img: "image02"
        },
        {
          Title: "MVP・表彰制度",
          Txt:
            "1年に1回、期末総会で、一番活躍した社員1名をMVPとして／最もアイムバリューを体現した社員1名をバリュー大賞として表彰しています。",
          Img: "image03"
        },
        {
          Title: "資格取得支援",
          Txt:
            "IT人材支援とプロとして更なる知識、業務理解のため・ITパスポート・国家資格キャリアコンサルタント・人材協認定コンサルタント資格",
          Img: "image04"
        },
        {
          Title: "社外研修支援",
          Txt:
            "IT人材支援とプロとして更なる知識、業務理解のため社外研修の受講を推奨しています。",
          Img: "image01"
        },
        {
          Title: "アイムライブラリー",
          Txt:
            "ビジネスパーソンとして、知識／トレンドをインプットするため、社員が自由に利用できるアイムライブラリーを設置しています。",
          Img: "image05"
        },
        {
          Title: "夏季休暇選択制度",
          Txt:
            "アイムファクトリーはカレンダー通りの勤務でお盆休みはありません。その代わり、7月1日～9月30日まで、夏季休暇として特別休暇を3日付与しています。",
          Img: "image06"
        },
        {
          Title: "月1リモート",
          Txt:
            "職種に関係なく、月に１回リモートワークができる制度です。通勤時間を休息や準備時間に当てることで、リフレッシュしながら効率的に勤務してもらうことが目的です。社内SNSやSkypeを利用し、オフィス外でもしっかりと成果がだせる環境を整えています。",
          Img: "image06"
        },
        {
          Title: "次世代育成支援",
          Txt:
            "家族を持つ方でも働きやすく、キャリアを構築できるよう、時短勤務・男性向けの特別休暇誕生祝い金（誕生時と3歳の誕生日まで10万円支給）、ママ社員トークセッションなどの制度やイベントでバックアップしています。",
          Img: "image06"
        }
      ]
    };
  }
};
</script>
