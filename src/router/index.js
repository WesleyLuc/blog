import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login.vue';
import Post from '../components/post.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login, 
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
