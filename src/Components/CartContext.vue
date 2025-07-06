<template>
    <div>
      <slot />
    </div>
  </template>

<script lang="ts">
  import { defineComponent, provide, reactive, inject } from 'vue';

  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    [key: string]: any;
  }

  interface CartContextType {
    cart: Product[];
    finalTotal: number;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    decreaseToCart: (product: Product) => void;
    calculateCartTotal: () => number;
    finalizeCartTotal: () => void;
    finalizeCartTotalWithCoupon: (value: number) => void;
  }

  const CartSymbol = Symbol('Cart');

  export const useCart = (): CartContextType => {
    const context = inject<CartContextType>(CartSymbol);
    if (!context) {
      throw new Error('Cart context not available');
    }
    return context;
  };

  export default defineComponent({
    name: 'CartProvider',
    setup(_, { slots }) {
      const state = reactive({
        cart: [] as Product[],
        finalTotal: 0
      });

      const addToCart = (product: Product) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += product.quantity ?? 1;
        } else {
          state.cart.push({ ...product, quantity: product.quantity ?? 1 });
        }

        // console.log("cart is: ", state.cart);
      };

      const removeFromCart = (productId: number) => {
        const index = state.cart.findIndex(product => product.id === productId);
        if (index !== -1) {
          state.cart.splice(index, 1);
        }
        // state.cart = state.cart.filter(product => product.id !== productId);
        // console.log("cart is: ", state.cart);
      };

      const decreaseToCart = (product: Product) => {
        const item = state.cart.find(p => p.id === product.id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      };

      const calculateCartTotal = () => {
        return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      };

      const finalizeCartTotal = () => {
        state.finalTotal = calculateCartTotal();
        return state.finalTotal;
      };

      const finalizeCartTotalWithCoupon = (value: number) => {
        state.finalTotal = value;
      };

      const cartContext: CartContextType = {
        cart: state.cart,
        get finalTotal() {
          return state.finalTotal;
        },
        addToCart,
        removeFromCart,
        decreaseToCart,
        calculateCartTotal,
        finalizeCartTotal,
        finalizeCartTotalWithCoupon
      };

      provide(CartSymbol, cartContext);

      return () => slots.default?.(); // render slot content
    }
  });
</script>