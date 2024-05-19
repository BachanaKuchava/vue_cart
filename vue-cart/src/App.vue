

<template>
<div class="container">
  <Header />
  <RouterView />

</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

import axios from 'axios';
// export default {
//   mounted() {
//     axios.get('http://localhost:5038/api/vue-cart/GetNotes')
//     .then(response => console.log(response.data);)
//   }
// }
</script>

<style scoped>

</style>
