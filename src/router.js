import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Message from "./views/Message.vue";
import Culture from "./views/Culture.vue";
import Entry from "./views/Entry.vue";
import Interview from "./views/Interview.vue";
import InterviewDetail from "./views/InterviewDetail.vue";
// import Test from "./views/Test.vue";
// import TestList from "./views/TestList.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Header,
        footer: Footer,
        default: Home
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: Header,
        footer: Footer,
        default: About
      }
    },
    {
      path: "/message",
      name: "message",
      components: {
        header: Header,
        footer: Footer,
        default: Message
      }
    },
    {
      path: "/culture",
      name: "culture",
      components: {
        header: Header,
        footer: Footer,
        default: Culture
      }
    },
    {
      path: "/interview",
      name: "interview",
      components: {
        header: Header,
        footer: Footer,
        default: Interview
      }
    }
    // {
    //   path: "/interview/:id",
    //   name: "InterviewDetail",
    //   components: {
    //     header: Header,
    //     footer: Footer,
    //     default: InterviewDetail
    //   }
    // },
    // {
    //   path: "/entry",
    //   name: "entry",
    //   components: {
    //     header: Header,
    //     footer: Footer,
    //     default: Entry
    //   }
    // }
    // {
    //   path: "/test",
    //   name: "testList",
    //   components: {
    //     default: TestList
    //   }
    // }
    // {
    //   path: "/test/:id",
    //   name: "test",
    //   component: Test,
    //   props: true
    // }
  ]
});
