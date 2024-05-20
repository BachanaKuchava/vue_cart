<template>
  <div class="container mt-4">
    <div v-if="product" class="card">
      <img :src="product.image" class="card-img-top" alt="" height="300px">
      <div class="card-body">
        <h5 class="card-title">{{product.name }}</h5>
        <p class="card-text">{{ product.description || 'No description available' }}</p>
        <span class="badge bg-danger">{{ product.price }}</span>
        <button @click="addToCart(product)" class="btn btn-primary mt-3">
          <i class="bi bi-cart-check"></i> Add To Cart
        </button>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/useCartStore';

const route = useRoute();
const cartStore = useCartStore();
const product = ref(null);

const fetchProduct = () => {
  const productId = parseInt(route.params.id);
  product.value = cartStore.product.find(p => p.id === productId);
};

onMounted(() => {
  fetchProduct();
});

const addToCart = (product) => {
  cartStore.addToCart(product);
};
</script>

<style scoped>

</style>
