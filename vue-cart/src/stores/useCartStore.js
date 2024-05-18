import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import apiService from "../../services/apiService";

const toast = useToast();



export const useCartStore = defineStore('cart', {

    
    state: () => ({ 
        product: [
            {
                id: 1,
                name: 'Iphone 14',
                price: 800,
                image: 'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg'
            },
            {
                id: 2,
                name: 'Samsung s20',
                price: 1800,
                image: 'https://cdn.pixabay.com/photo/2020/04/16/17/12/computer-5051577_1280.jpg'
            },
            {
                id: 3,
                name: 'TV LG-600',
                price: 2800,
                image: 'https://cdn.pixabay.com/photo/2017/04/07/12/58/lion-2210947_640.jpg'
            },
            {
                id: 4,
                name: 'Huawei 67HY',
                price: 600,
                image: 'https://cdn.pixabay.com/photo/2015/12/24/15/22/huawei-p8-1106911_640.jpg'
            }
        ],
        cartItems: []
     }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
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
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                toast.success("Your item updated", {
                    timeout: 2000
                });
            } 
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0) {
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
    },
    
  })