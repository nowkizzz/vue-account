import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Account from '@/components/Accounting'
import AccountMonth from '@/components/AccountMonth'
import AccountDetail from '@/components/AccountDetail'
import About from '@/components/Aboutme'
import Register from '@/components/Register'
import BudgeSet from '@/components/BudgeSet'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      // name: 'Login',
      component: Login,
      },
      {
      path: '/register',
      component: Register,
      },
      {
      path: '/main/:id',
      component: Main,
      children: [
        {
          path: '/main',
          component: AccountMonth
        },
        // {
        //   path: '/main/account',
        //   component: Account
        // },
        {
          path: '/main/detail',
          component: AccountDetail
        },
        {
          path: '/main/aboutMe',
          component: BudgeSet
        }
      ]

    },
      {
      path: '/account',
      component: Account,
      },

  ]
})
