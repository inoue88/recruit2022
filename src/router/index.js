import Vue from 'vue'
import Router from 'vue-router'
// commonparts
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FooterEntry from '@/components/FooterEntry'
import TitleCommon from '@/components/TitleCommon'
// page
import Home from '@/views/Home'
import Culture from '@/views/Culture'
import Message from '@/views/Message'
import Style from '@/views/Style'
import MemberList from '@/views/MemberList'
import Member from '@/views/Member'
import Job from '@/views/Job'
import Entry from '@/views/Entry'
import EntryCompleted from '@/views/EntryCompleted'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'new_graduates',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        default: Home
      },
      meta: { title: 'トップページ ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/message',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: Message
      },
      meta: { title: '代表メッセージ ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/culture',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: Culture
      },
      meta: { title: 'カルチャー ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/style',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: Style
      },
      meta: { title: 'スタイル ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/member',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: MemberList
      },
      meta: { title: 'メンバー ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/member/:id(\\d+)',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        default: Member
      },
      props: {
        default: route => ({
          id: Number(route.params.id)
        })
      }
    },
    {
      path: '/job',
      components: {
        header: Header,
        footer: Footer,
        title: TitleCommon,
        default: Job
      },
      meta: { title: '採用情報｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/entry',
      components: {
        header: Header,
        footer: Footer,
        title: TitleCommon,
        default: Entry
      },
      meta: { title: 'エントリー｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/entry/completed',
      components: {
        header: Header,
        footer: Footer,
        title: TitleCommon,
        default: EntryCompleted
      },
      meta: { title: '応募完了｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
