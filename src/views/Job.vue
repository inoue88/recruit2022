<template lang='pug'>
.job
  HeaderTitle(titleEn='Job' titleJa='採用情報' code='job')
  b-container.container-small
    .mb-5
      h1.h2 2021年度新卒エントリー
    table.job-table
      tr(v-for="(item, index) in EntryNum01" v-bind:key="item.id")
        th {{ item.th }}
        td(v-html="item.td")
    .text-center.p-5.mb-5
      b-button(size="lg" squared variant='aimred' to='/entry') ENTRY
</template>

<script>
export default {
  name: 'Job',
  data () {
    return {
      EntryNum01: [
        {
          th: '募集職種',
          td: '（1）キャリアアドバイザー・コンサルタントセールス職（2）事業開発職'
        },
        {
          th: '応募条件',
          td: '2021年卒業予定の就職活動生<br>2020年卒業の就職活動生<br>※学部・学科・専門不問'
        },
        {
          th: '求める人物像',
          td: '・新しいことや未経験のことも楽しめる好奇心をお持ちの方<br>・チームメンバーと協働できる方<br>・自ら主体的に行動を起こせる方、人を巻き込んで行動を起こせる方'
        },
        {
          th: '給与',
          td: '月給250,000円～<br>住居手当：会社から30分以内（公共交通機関の乗車時間or徒歩時間）に居住している<br>勤務者には月30,000円を支給　※新卒入社3年目まで'
        },
        {
          th: '勤務時間',
          td: '10：00～19：00（実働8時間）<br>週1回リモート勤務OK ※試用期間終了後から'
        },
        {
          th: '福利厚生',
          td: '社会保険完備<br>交通費全額支給<br>ビジネス誌読み放題<br>FreeTime（週1回勤務時間内に2時間のフリータイムを付与）<br>誕生祝い金（お子様の誕生時と1歳・2歳・3歳の誕生日に10万円支給）'
        },
        {
          th: '教育・研修',
          td: '社内セミナー<br>社外セミナー無料受講<br>資格取得支援<br>内定者インターン<br>新入社員研修<br>階層別/職種別研修'
        },
        {
          th: '休日・休暇',
          td: '完全週休2日（休日勤務の振休取得率100％）<br>祝日、夏季休暇、年末年始<br>有給休暇（入社日に付与、取得促進ウィークあり）<br>慶弔休暇、特別休暇、産前産後休暇、育児・介護休業'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.job-table {
  width: 100%;
  tr {
    border-bottom: 1px solid #ccc;
  }
  th,
  td {
    padding: 0.5rem 0;
    line-height: 1.6;
    display: block;
  }
  th {
    margin-top: 1rem;
  }
  @include media-breakpoint-up(lg) {
    th,
    td {
      padding: 1.5rem 0;
      display: table-cell;
    }
    th {
      vertical-align: top;
      width: 12rem;
    }
  }
}
</style>
