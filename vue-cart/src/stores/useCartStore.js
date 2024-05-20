
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import apiService from "../../services/apiService";

const toast = useToast();

export const useCartStore = defineStore('cart', {
  state: () => ({
    product: [],
    cartItems: []
  }),
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const items = await apiService.getItems();
        this.product = items;
        toast.success("Products loaded successfully", {
          timeout: 2000
        });
      } catch (error) {
        toast.error("Failed to load products", {
          timeout: 2000
        });
      }
    },
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Your item updated", {
          timeout: 2000
        });
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        toast.success("Your item saved", {
          timeout: 2000
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Your item updated", {
          timeout: 2000
        });
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        }
        toast.success("Your item updated", {
          timeout: 2000
        });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      toast.success("Your item removed", {
        timeout: 2000
      });
    }
  }
});
