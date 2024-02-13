<script setup>
import {ref} from 'vue'
import {FwbButton, FwbModal} from 'flowbite-vue'
import {ShoppingCartIcon} from "@heroicons/vue/24/solid/index.js"
import {useCartStore} from "@/stores/cartStore.js";
import productImage from "@/assets/images/product.png";

const isShowCart = ref(false)
const cartStore = useCartStore()

</script>
<template>
  <div class="cart_header_item ml-3">
    <button type="button"
            @click="isShowCart = true"
            class="relative inline-flex items-center p-1 text-sm font-medium text-center text-black  rounded-lg  outline-none">
      <ShoppingCartIcon class="h-6 w-6 text-black-500 dark:text-gray-400 cursor-pointer"/>
      <div v-if="cartStore.count"
           class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white  rounded-full -top-2 -end-2 dark:border-gray-400">
        {{ cartStore.count }}
      </div>
    </button>
  </div>
  <fwb-modal v-if="isShowCart" @close="isShowCart = false" class="justify-end">
    <template #header>
      <div class="flex items-center text-lg dark:text-white">
        Products in cart:
      </div>
    </template>
    <template #body>
      <div class="card_list" v-if="cartStore.cart.length">
        <div class="block pb-1 my-4  md:flex  dark:black-gray-700 shadow-lg rounded-md"
             v-for="(product,index) in cartStore.cart">
          <div class="w-1/6">
            <img class="w-full" :src="productImage" :alt="product.title">
          </div>
          <div class="w-full px-4 md:2/3">
            <div class="flex justify-between">
              <div class="">
                <h2 class="mb-2 text-sm font-bold dark:text-gray-400">{{ product.title }} ${{ product.price }}</h2>
                <div>
                  <p class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">In stock :
                    {{ product.in_stock }}</p>
                  <div class="relative flex items-center">
                    <label for="counter-input"
                           class="block mb-1 text-sm font-medium text-gray-900 dark:text-white mr-5">
                      Quantity:
                    </label>
                    <button type="button"
                            @click="cartStore.changeQuantity(index,'decrement')"
                            class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2.5 h-2.5 text-gray-900 dark:text-gray-400" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" d="M1 1h16"/>
                      </svg>
                    </button>
                    <input type="text" id="counter-input"
                           class="flex-shrink-0 text-gray-900 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center dark:text-gray-400"
                           :value="product.quantity" disabled>
                    <button type="button" id="increment-button"
                            @click="cartStore.changeQuantity(index,'increment')"
                            class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor"
                              d="M9 1v16M1 9h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <p class="text-lg font-bold text-blue-500 dark:text-gray-400 text-right pb-2">
                  ${{ product.price * product.quantity }}</p>
                <button
                    @click="cartStore.deleteProduct(index)"
                    class="text-center flex justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-lg dark:text-white font-bold dark:text-gray-400" v-else><p>Cart is empty</p>
      </div>
    </template>
    <template #footer v-if="cartStore.cart.length">
      <div class="flex justify-between">
        <div class="font-bold dark:text-gray-400">Total: $ {{ cartStore.total }}</div>
        <fwb-button @click="isShowCart = false" color="blue">
          Make order
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
