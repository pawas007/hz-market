<script setup>
import {ref} from 'vue'
import {FwbButton, FwbModal} from 'flowbite-vue'
import {ShoppingCartIcon} from "@heroicons/vue/24/solid/index.js"
const isShowCart = ref(false)
</script>
<template>
  <div class="cart_header_item ml-3">
    <ShoppingCartIcon @click="isShowCart = true" class="h-6 w-6 text-black-500 dark:text-white cursor-pointer"/>
  </div>
  <fwb-modal v-if="isShowCart" @close="isShowCart = false" class="justify-end">
    <template #header>
      <div class="flex items-center text-lg dark:text-white">
        Products in cart:
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 dark:text-slate-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
        companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
        ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
        possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="isShowCart = false" color="green">
          Make order
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
