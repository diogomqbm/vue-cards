import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CreateDeck from '../views/CreateDeck.vue'
import ViewDeck from '../views/ViewDeck.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/deck/new'
  },
  {
    path: '/deck/new',
    name: 'CreateDeck',
    component: CreateDeck
  },
  {
    path: '/deck/:id',
    name: 'ViewDeck',
    component: ViewDeck
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
