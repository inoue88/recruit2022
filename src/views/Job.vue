<template lang="pug">
  .about
    HeaderTitle(TitleEn="About" TitleJa="私達について")
    section.job-sec
      b-container.container--small
        b-row(align-v="center")
          b-col
            h5 2020年卒業予定の就職活動生、2019年卒業の就職活動生
          b-col
            b-img(v-bind:src="'/img/job/image01.jpg'")
        table.job-table
          tr(v-for="(item, index) in JobNum01" v-bind:key="item.id")
            th {{ item.th }}
            td(v-html="item.td")
        .text-center.p-5
          router-link.header__nav-item(to="entry")
            b-button(size="lg" variant='impact' squared) ENTRY
    section.job-sec
      b-container.container--small
        b-row(align-v="center")
          b-col
            h5 2020年卒業予定の就職活動生、2019年卒業の就職活動生
          b-col
            b-img(v-bind:src="'/img/job/image02.jpg'" )
        table.job-table
          tr(v-for="(item, index) in JobNum02" v-bind:key="item.id")
            th {{ item.th }}
            td(v-html="item.td")
        .text-center.p-5
          router-link.header__nav-item(to="entry")
            b-button(size="lg" variant='impact' squared) ENTRY
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import FooterEntry from "../components/FooterEntry.vue";
export default {
  name: "job",
  components: {
    HeaderTitle,
    FooterEntry
  },
  data() {
    return {
      JobNum01: [
        {
          th: "応募条件",
          td:
            "2020年卒業予定の就職活動生, 2019年卒業の就職活動生<br>※学部・学科・専門不問"
        },
        {
          th: "給与",
          td:
            "月給250,000円～<br>住居手当：会社から30分以内（公共交通機関の乗車時間or徒歩時間）に居住している<br>勤務者には月30,000円を支給　※新卒入社3年目まで"
        },
        {
          th: "勤務時間",
          td:
            "10：00～19：00（実働8時間）<br>週1回リモート勤務OK ※試用期間終了後から"
        },
        {
          th: "福利厚生",
          td:
            "社会保険完備, 交通費全額支給, ビジネス誌読み放題, FreeTime（週1回勤務時間内に2時間のフリータイムを付与）, 誕生祝い金（お子様の誕生時と1歳・2歳・3歳の誕生日に10万円支給）"
        },
        {
          th: "教育・研修",
          td:
            "社内セミナー, 社外セミナー無料受講, 資格取得支援, 内定者インターン, 新入社員研修, 階層別/職種別研修"
        },
        {
          th: "休日・休暇",
          td:
            "完全週休2日（休日勤務の振休取得率100％）, 祝日、夏季休暇、年末年始, 有給休暇（入社日に付与、取得促進ウィークあり）, 慶弔休暇、特別休暇、産前産後休暇、育児・介護休業"
        }
      ],
      JobNum02: [
        {
          th: "応募ポジション",
          td:
            "・Sales / キャリアアドバイザーのアシスタントとして求人内容のヒアリング・仕事紹介・面談・日程調整など、コンサルタント業務のサポートを行います。<br><br>・Attract customers / 転職希望者の方に弊社へご来社いただくという一見、シンプルなポジションですが、弊社ビジネスの根幹となる重要な「集客」の仕事です。具体的には、弊社のキャリアカウンセリングをご希望している転職希望者の方へお電話あるいはメールをお送りして弊社への来社をご案内するのがメインとなります。ゆくゆくは、データから分析・効果測定を行い、ユーザーの行動を数値にまとめていただく業務もお任せします。"
        },
        {
          th: "募集要項",
          td: "3か月以上、インターン可能な方"
        },
        {
          th: "就職面接対策つき！",
          td:
            "インターン参加者には、現役のキャリアアドバイザーから、人材業界のマーケットについて、レクチャーを行うほか、就職模擬面接なども実施します。人事はどんなところを見ているの？受け答えのポイントは？など、を豊富な経験に基づきアドバイスします。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.job-sec {
  margin-bottom: 5rem;
}
.job-table {
  width: 100%;
  tr {
    border-bottom: 1px solid #ddd;
  }
  th,
  td {
    padding: 1.5rem 0;
    line-height: 1.6;
  }
  th {
    vertical-align: top;
    width: 11rem;
    font-weight: bold;
  }
}
</style>
