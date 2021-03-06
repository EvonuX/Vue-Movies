import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Upcoming from './views/Upcoming.vue'
import Popular from './views/Popular.vue'
import SearchResults from './views/SearchResults.vue'
import Movie from './views/Movie.vue'
import Person from './views/Person.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 800)
    })
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/person/:id',
      name: 'Person',
      component: Person
    }
  ]
})
