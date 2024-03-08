import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Nav from '@/components/Nav'
import Cricle from '@/components/Cricle'
import News from '@/components/News'
import test from '@/components/test'
import test2 from '@/components/test2'

import Home from '@/views/Home'
import College from '@/views/College'
import Special from '@/views/Special'
import Ency from '@/views/Encyclopedia'
import Commu from '@/views/commu/Commu'
import Prep from '@/views/Prep'
import HomePage from '@/views/HomePage'

// import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/col',
      name: 'college',
      component: College

    },
    {
      path: '/spe',
      name: 'special',
      component: Special
    },
    {
      path: '/ency',
      name: 'encyclopedia',
      component: Ency
    },
    {
      path: '/com',
      name: 'communication',
      component: Commu
    },
    {
      path: '/pre',
      name: 'preparation',
      component: Prep
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/circle',
      name: 'circle',
      component: Cricle
    },
    {
      path: '/new',
      name: 'new',
      component: News
    },
    {
      path: '/t',
      name: 'test',
      component: test
    },
    {
      path: '/t2',
      name: 'test2',
      component: test2
    },
    {
      path: '/newsuser/personal/:id',
      component: r => require.ensure([], () => r(require('@/views/person/Personal')), 'personal'),
      // meta: {
      //   requireLogin: true
      // },
      children: [
        {
          // path: '/personal/info/:id',
          path: '/newsuser/personal/info/:id',
          name: 'info',
          component: r => require.ensure([], () => r(require('@/views/person/Info')), 'info')
        },
        {
          path: '/newsuser/personal/myarticle/:id',
          name: 'myarticle',
          component: r => require.ensure([], () => r(require('@/views/person/MyArticle')), 'myarticle')
        },
        {
          path: '/newsuser/personal/mycollect/:id',
          name: 'mycollect',
          component: r => require.ensure([], () => r(require('@/views/person/MyCollect')), 'mycollect')
        },
        {
          path: '/newsuser/personal/myfan/:id',
          name: 'myfan',
          component: r => require.ensure([], () => r(require('@/views/person/MyFanAndFollow')), 'myfan')
        },
        {
          path: '/newsuser/personal/myfollow/:id',
          name: 'myfollow',
          component: r => require.ensure([], () => r(require('@/views/person/MyFanAndFollow')), 'myfollow')
        }
      ]
    }

  ]
})
