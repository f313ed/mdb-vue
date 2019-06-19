import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import SearchList from '@/components/SearchList';
import Demo from '@/components/Demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'SearchList',
      component: SearchList
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
});
