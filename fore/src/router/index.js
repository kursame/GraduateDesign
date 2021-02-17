import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Search from '@/components/Search'
import Exam from '@/components/Exam'
import Problem from '@/components/Problem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'exam',
          name: 'Exam',
          component: Exam
        }
      ]
    },
    {
      path: 'problem',
      name: 'Problem',
      component: Problem
    }
  ]
})
