import Vue from 'vue'
import Router from 'vue-router'
// commonparts
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FooterEntry from '@/components/FooterEntry'
import TitleCommon from '@/components/TitleCommon'
// page
import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import Culture from '@/views/Culture'
import InterviewList from '@/views/InterviewList'
import Interview from '@/views/Interview'
import Job from '@/views/Job'
import Entry from '@/views/Entry'
import EntryCompleted from '@/views/EntryCompleted'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'recruits',
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
        default: About
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
        default: Culture
      },
      meta: { title: 'カルチャー ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/member',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: InterviewList
      },
      meta: { title: '社員インタビュー ｜ アイムファクトリー株式会社 2021年新卒採用 ｜ アイムファクトリー株式会社', desc: '' }
    },
    {
      path: '/member/:id(\\d+)',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        default: Interview
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
      }
    },
    {
      path: '/entry',
      components: {
        header: Header,
        footer: Footer,
        title: TitleCommon,
        default: Entry
      }
    },
    {
      path: '/entry/completed',
      components: {
        header: Header,
        footer: Footer,
        title: TitleCommon,
        default: EntryCompleted
      }
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
