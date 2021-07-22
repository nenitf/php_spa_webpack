import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'

const routes = [
  {
    path: '/router/',
    name: 'home', component: Home
  },
  {
    path: '/router/about',
    name: 'about',
    component: About
  }
]

export default routes;
