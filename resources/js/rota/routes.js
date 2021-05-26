import Foo from './Foo.vue'
import Bar from './Bar.vue'

const routes = [
  {
    path: '/foo',
    name: 'foo', component: Foo
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar
  }
]

export default routes;
