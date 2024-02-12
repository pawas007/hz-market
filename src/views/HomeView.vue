<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
  <div
      class="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl w-1/2 transition-colors">
    <h3 class="text-slate-900 dark:text-white font-medium tracking-tight transition-colors">
      Home test page
    </h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm transition-colors mb-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius
      et mollitia laudantium. Facilis accusamus ipsa dolorum minima
      cupiditate. Libero cumque optio rerum molestias asperiores.
    </p>
    <RouterLink
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        :to="{name:'shop'}">To Shopping
    </RouterLink>
  </div>
</template>
