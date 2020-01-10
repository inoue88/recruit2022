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
      }
    },
    {
      path: '/about',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: About
      }
    },
    {
      path: '/message',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: Message
      }
    },
    {
      path: '/culture',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: Culture
      }
    },
    {
      path: '/interview',
      components: {
        header: Header,
        footer: Footer,
        footerEntry: FooterEntry,
        title: TitleCommon,
        default: InterviewList
      }
    },
    {
      path: '/interview/:id(\\d+)',
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
