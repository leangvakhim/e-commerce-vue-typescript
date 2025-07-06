<template>
   <CartProvider>
     <router-view :key="$route.fullPath" />
   </CartProvider>
 </template>

 <script lang="ts">
 import { defineComponent } from 'vue'
 import CartProvider from './Components/CartContext.vue'

 export default defineComponent({
   name: 'App',
   components: { CartProvider }
 })
 </script>