<template lang="">
    <div class="more-products mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">
						<h3><span class="orange-text">Related</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>
			<div class="row">
			  <div class="col-lg-4 col-md-6 text-center" v-for="(product, index) in productrelated" :key="index">
			    <div class="single-product-item">
			      <div class="product-image">
			        <router-link :to="`/shop/product/${product.id}`"><img :src="product.image" alt="" :style="{height: '250px', width: 'auto', objectFit: 'contain'}" ></router-link>
			      </div>
			      <h3 :style="{
						display: '-webkit-box',
						WebkitLineClamp: 1,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						padding: '0 20px'
						}">{{ product.title }}</h3>
			      <p class="product-price"><span></span> {{ product.price }}$ </p>
			      <a @click="handleAddToCart(product)" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
			    </div>
			  </div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import axios from 'axios';
import { API_ENDPOINTS } from '../APIConfig';
import { useCart } from '../CartContext.vue';
import Swal from 'sweetalert2';

type Product = {
	id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
};

interface ProductRelated {
	id: number;
	name: string;
	price: number;
	image: string;
	category: string;
	description: string;
}

export default defineComponent({
	name: 'ProductRelated',
	props: {
		product: {
			type: Object as PropType<{
				id: number;
				name: string;
				price: number;
				image: string;
				category: string;
			}>,
			required: true
		}
	},
	data() {
        return {
			productrelated: [] as ProductRelated[]
		};
    },
	mounted() {
		axios.get(`${API_ENDPOINTS.getProduct}`)
		.then(response => {
			const items = response.data.filter((p: ProductRelated) => p.category === this.product.category && p.id !== this.product.id);
			this.productrelated = items.slice(0, 3);
		})
		.catch(error => {
			console.error('Error fetching product:', error);
		});
	},
	setup() {
		const { addToCart } = useCart();

		function handleAddToCart(product: Product) {
			addToCart(product);
			Swal.fire({
				title: 'Success!',
				text: `Product has been added to your cart.`,
				icon: 'success',
				confirmButtonText: 'OK'
			});
		}

		return { handleAddToCart };
    }
});
</script>
<style lang="">

</style>