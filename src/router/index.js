import Vue from 'vue'
import Router from 'vue-router'
// commonparts
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// page
import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import Culture from '@/views/Culture'
import InterviewList from '@/views/InterviewList'
import Interview from '@/views/Interview'
import Job from '@/views/Job'
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
      components: {
        header: Header,
        footer: Footer,
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
        default: Job
      }
    }
  ]
})
