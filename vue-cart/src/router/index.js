
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Cart from '@/components/Cart.vue';
import ProductDetail from '../components/ProductDetail.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail, 
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

