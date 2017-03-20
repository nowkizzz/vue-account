import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import About from '@/components/Aboutme'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      // name: 'Login',
      component: Login,
      },
      {
      path: '/main',
      // name: 'Main',
      component: Main,
      children: [
        {
          path: '/main',
          // name: 'Hello',
          component: Hello
        },
        {
          path: '/main/home',
          // name: 'Home',
          component: Home
        },
        {
          path: '/main/aboutMe',
          // name: 'About',
          component: About
        }
      ]

    },

  ]
})
