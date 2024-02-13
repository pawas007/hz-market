import {defineStore} from 'pinia';

export const useCartStore = defineStore({
    id: 'cartStore',

    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    }),

    getters: {
        total() {
            return this.cart.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        },
        count() {
            return this.cart.length
        }
    },

    actions: {
        changeQuantity(index, type) {
            const product = this.cart[index];
            if (!product) return;

            switch (type) {
                case 'increment':
                    if (product.quantity < product.in_stock) product.quantity++;
                    break;
                case 'decrement':
                    if (product.quantity > 1) product.quantity--;
                    else this.deleteProduct(index); // Delete the product if the quantity becomes 0
                    break;
            }

            this.updateLocalCart();
        },

        deleteProduct(index) {
            this.cart.splice(index, 1);
            this.updateLocalCart();
        },

        addProduct(product) {
            this.cart.push(product);
            this.updateLocalCart();
        },

        updateLocalCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
    },
});