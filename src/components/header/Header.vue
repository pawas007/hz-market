<script setup>
import {RouterLink} from "vue-router"
import {useDark, useToggle} from '@vueuse/core'
import {MoonIcon, SunIcon} from '@heroicons/vue/24/solid'
import Cart from "@/components/header/Cart/Cart.vue"

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
<template>
  <header class="shadow sticky top-0 z-50">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://flowbite.com" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Hz shop"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hz shop</span>
        </a>
        <div class="flex items-center lg:order-2">
          <button @click="toggleDark()" class="">
            <SunIcon v-if="isDark" class="h-6 w-6 text-yellow-500"/>
            <MoonIcon v-else class="h-6 w-6 text-yellow-500 "/>
          </button>
          <Cart/>
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <RouterLink
                  class="text-slate-900 dark:text-white font-medium tracking-tight transition-colors"
                  :to="{name:'home'}">Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                  class="text-slate-900 dark:text-white font-medium tracking-tight transition-colors"
                  :to="{name:'shop'}">Shop
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>