
<template>
  <div class="col-md-4 md-2">
    <div class="card" @click="goToProductPage">
      <img :src="product.image" class="card-img-top" alt="" height="300px">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Dolorum, iusto.
        </p>
        <div>
          <span class="badge bg-danger">{{ product.price }}</span>
          <button @click.stop="addToCart" class="btn btn-primary">
            <i class="bi bi-cart-check"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/useCartStore';

const cartStore = useCartStore();
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const addToCart = () => {
  cartStore.addToCart(props.product);
};

const goToProductPage = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>

  