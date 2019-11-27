import Vue from 'vue'
import Router from 'vue-router'
// commonparts
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// page
import Home from '@/components/Home'
import About from '@/components/About'
import Message from '@/components/Message'
import Culture from '@/components/Culture'
import InterviewList from '@/components/InterviewList'
import Interview from '@/components/Interview'
import Job from '@/components/Job'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        footer: Footer,
        default: Home
      }
    },
    {
      path: '/about',
      components: {
        header: Header,
        footer: Footer,
        default: About
      }
    },
    {
      path: '/message',
      components: {
        header: Header,
        footer: Footer,
        default: Message
      }
    },
    {
      path: '/culture',
      components: {
        header: Header,
        footer: Footer,
        default: Culture
      }
    },
    {
      path: '/interview',
      components: {
        header: Header,
        footer: Footer,
        default: InterviewList
      }
    },
    {
      path: '/interview/:id(\\d+)',
      // component: Interview,
      // props: route => ({
      //   id: Number(route.params.id)
      // })
      components: {
        header: Header,
        footer: Footer,
        default: Interview,
      },
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/job',
      components: {
        header: Header,
        footer: Footer,
        default: Job
      }
    }
  ]
})
