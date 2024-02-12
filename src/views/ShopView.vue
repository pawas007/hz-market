<script setup>
import productImage from '@/assets/images/product.png'
import {onMounted, reactive, ref} from "vue"
import {FwbPagination, FwbSelect} from 'flowbite-vue'
import {useProductsStore} from "@/stores/shopStore.js";
import PreLoader from "@/components/PreLoader.vue";

const loaderMain = ref(true)
const loaderProduct = ref(true)
const shopStore = useProductsStore()
const currentCategoryId = ref(1)
const perOptions = [
  {value: 4, name: '4'},
  {value: 8, name: '8'},
  {value: 12, name: '12'},
  {value: 24, name: '24'}
]

const pagination = reactive({
  currentPage: 1,
  totalItems: 1,
  perPage: 12,
  lastPage: 1
})

const getCategoryProducts = () => {
  loaderProduct.value = true
  shopStore.getCategoryProducts(currentCategoryId.value, pagination.currentPage, pagination.perPage).then((response) => {
    const {current_page, total, last_page, per_page} = response.data.meta
    pagination.currentPage = current_page
    pagination.totalItems = total
    pagination.lastPage = last_page
    pagination.perPage = per_page
    setTimeout(() => {
      loaderProduct.value = false
      loaderMain.value = false
    }, 1000)
  })
}

onMounted(() => {
  shopStore.getCategories()
  getCategoryProducts()
})

</script>
<template>
  <PreLoader v-if="loaderMain"/>
  <div v-else>
    <div class="list_head flex justify-between">
      <h5 class="text-2xl leading-tight tracking-tight mt-6 mb-5 dark:text-white">
        Category:</h5>
      <fwb-select
          @change="getCategoryProducts()"
          v-model="pagination.perPage"
          :options="perOptions"
          label="Per page"/>
    </div>
    <div class="md:flex">
      <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li v-for="category in shopStore.categories" :key="category.id">
          <button
              @click="currentCategoryId = category.id;pagination.currentPage = 1;getCategoryProducts();"
              :class="category.id === currentCategoryId ? 'inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full '
            :'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900  hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white bg-gray-100'">
            {{ category.title }}
          </button>
        </li>
      </ul>
      <div class="products_wrap relative w-full">
        <PreLoader v-if="loaderProduct"/>
        <div v-else class="product_list">
          <div v-if="shopStore.products.length"
               class="px-6  text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <div class="grid grid-cols-4 gap-4">
              <div v-for="product in shopStore.products" :key="product.id"
                   class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img class="rounded-t-lg h-64 mx-auto" :src="productImage" alt=""/>
                </div>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                      product.title
                    }}</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ product.short_description.slice(0, 100) }} ...
                  </p>
                  <div class="flex justify-between mb-4">
                    <p class="text-gray-900 dark:text-white">{{ product.price }} $</p>
                    <p class="text-gray-500 dark:text-white">In stock: {{ product.in_stock }}</p>
                  </div>
                  <button
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-10" v-if="pagination.lastPage > 1">
              <fwb-pagination v-model="pagination.currentPage"
                              :total-items="pagination.totalItems"
                              @click="getCategoryProducts()"
                              :perPage="pagination.perPage"></fwb-pagination>
            </div>
          </div>
          <p v-else class="text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Product list empty</p>
        </div>
      </div>
    </div>
  </div>
</template>
