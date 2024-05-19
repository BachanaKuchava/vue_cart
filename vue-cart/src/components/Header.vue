<!-- <template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">   
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Vue_Cart</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart"> 
            <i class="bi bi-cart-check">Cart({{data.countCartItems}})</i>
            
        </router-link>
                            
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>

</template>



<script setup>

import router from '@/router';
import { useCartStore } from '../stores/useCartStore';

const data = useCartStore();


</script>



<style>



</style> -->


<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue_Cart</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="bi bi-cart-check">Cart ({{ cartItemCount }})</i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/useCartStore';

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.countCartItems);
</script>

<style>
/* Add your styles here */
</style>

