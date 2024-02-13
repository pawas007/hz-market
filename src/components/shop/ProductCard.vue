<script setup>
import productImage from "@/assets/images/product.png"
import {useCartStore} from "@/stores/cartStore.js"
import {useToast} from "vue-toastification"
import {CheckBadgeIcon} from "@heroicons/vue/24/solid/index.js"
import {computed} from "vue"

const toast = useToast();
const cartStorage = useCartStore()
const props = defineProps({
  product: Object,
})

const isProductInCart = computed(() => {
  return cartStorage.cart.some(product => product.id === props.product.id)
})

const addProduct = () => {
  const {id, title, price, in_stock} = props.product
  const cartProduct = {id, title, price, in_stock, quantity: 1}
  if (isProductInCart.value) return toast.info('Product already in cart')
  cartStorage.addProduct(cartProduct)
  toast.success('Product added')
}

</script>
<template>
  <div class="p-5">
    <img class="rounded-t-lg h-64 mx-auto" :src="productImage"/>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
        product.title
      }}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ product.short_description.slice(0, 100) }} ...
    </p>
    <div class="flex justify-between mb-4">
      <p class="text-gray-900 dark:text-white">${{ product.price }}</p>
      <p class="text-gray-500 dark:text-white">In stock: {{ product.in_stock }}</p>
    </div>
    <button
        @click="addProduct"
        class="w-full text-center flex justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add to cart
      <CheckBadgeIcon class="ml-2 h-5 w-5 text-green-500" v-if="isProductInCart"/>
    </button>
  </div>
</template>