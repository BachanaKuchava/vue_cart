<template>
        <div class="row my-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>IMG</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>SubTotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in data.cartItems" :key="item.id">
                                    <td>{{ item.id }}</td>
                                    <td>
                                        <img :src=" item.image " 
                                        width="60px"
                                        height="60px"
                                        alt=""
                                        class="img-fluid rounded"
                                        >
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <i class="bi bi-caret-up" @click="data.incrementQ(item)"></i>
                                        {{ item.quantity }}
                                        <i class="bi bi-caret-down" @click="data.decrementQ(item)"></i>
                                    </td>
                                    <td>{{ item.price }}</td>
                                    <td>{{ item.price *  item.quantity  }}</td>
                                    <td>
                                        <i class="bi bi-cart-x text-danger fw-bo" 
                                        @click="data.removeFromCart(item)"></i>
                                    </td>                                   
                                </tr>
                                <tr>

                                    <th class="text-center" colspan="3">
                                        Total
                                    </th>
                                    <td class="text-center" colspan="3">
                                        <span class="badge badge bg-danger tounded-pill">${{ data.cartItems.reduce((acc,item) =>
                                     acc+= item.price * item.quantity, 0) }}</span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';

const data = useCartStore();


</script>

<style>

i {
    cursor: pointer;
}

</style>