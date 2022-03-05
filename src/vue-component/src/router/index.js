import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Pages/index.vue'
import Atoms from '@/Pages/atoms.vue'
import Molecules from '@/Pages/molecules.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/atoms',
      name: 'Atoms',
      component: Atoms
    },
    {
      path: '/molecules',
      name: 'Molecules',
      component: Molecules
    },
  ]
})
