import { createRouter, createWebHistory } from "vue-router";
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Character from './pages/Character';
import NotFound from './pages/NotFound'

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/not_found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/:characterName',
      name: 'character',
      component: Character
    }
  ]
})

export default router;