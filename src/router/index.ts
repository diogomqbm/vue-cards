import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CreateDeck from '../views/CreateDeck.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/deck/new',
    name: 'CreateDeck',
    component: CreateDeck
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
