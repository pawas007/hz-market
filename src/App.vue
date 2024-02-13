<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/header/Header.vue";
</script>
<template>
  <Header/>
  <main class="dark:bg-gray-800 min-h-screen p-12">
    <div class="container mx-auto max-w-screen-xl">
      <RouterView/>
    </div>
  </main>
</template>

