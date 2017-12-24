import Vue from 'vue'
import Router from 'vue-router'
import Slides from '@/components/Slides'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/0'
    }, {
      path: '/:id',
      component: Slides,
      props: true
    }
  ]
})
