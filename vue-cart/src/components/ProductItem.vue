<template>

    <div class="col-md-4 md-2">
        <div class="card">
                <img :src="product.image" class="card-img-top" alt="" srcset="" 
                height="300px"
                >
                <div class="card-body ">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Dolorum, iusto.
                    </p>
                    <div> 

                    
                    <span class="badge bg-danger">
                        {{ product.price }}
                    </span>
                    <button @click=data.addToCart(product) 
                    class="btn btn-primary"> 
                        
                        <i class="bi bi-cart-check"></i>
                        Add To Cart

                    </button>
                </div>


                </div>
        </div>

    </div>

</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';

const data = useCartStore();

    const props = defineProps({
        product: {
            type: Object,
            required:true
        }
    });



</script>

<style>

</style>