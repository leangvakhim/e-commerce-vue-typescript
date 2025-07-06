<template lang="">
    <div class="single-product mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="single-product-img">
						<img :src="this.product.image" :style="{ height: '500px', width: 'auto', objectFit: 'contain'}" alt="">
					</div>
				</div>
				<div class="col-md-7">
					<div class="single-product-content">
						<h3>{{this.product.name}}</h3>
						<p class="single-product-pricing"><span></span> ${{this.product.price}}</p>
						<p>{{this.product.description}}</p>
						<div class="single-product-form">
							<form >
								<input type="number" placeholder="0" min="1" v-model="quantity">
							</form>
							<a @click="handleAddToCart(product)" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							<p><strong>Categories: </strong>{{this.product.category}}</p>
						</div>
						<h4>Share:</h4>
						<ul class="product-share">
							<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i class="fab fa-twitter"></i></a></li>
							<li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
							<li><a href=""><i class="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import { useCart } from '../CartContext.vue';
import Swal from 'sweetalert2';

type Product = {
	id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    category: string;
    name: string;
};

export default defineComponent({
	name: 'ProductDetail',
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
	setup() {
		const { addToCart } = useCart();
		const quantity = ref(1);

		function handleAddToCart(product: Product) {
			addToCart({ ...product, quantity: quantity.value });
			Swal.fire({
				title: 'Success!',
				text: `Product has been added to your cart.`,
				icon: 'success',
				confirmButtonText: 'OK'
			});
		}

		return { handleAddToCart, quantity };
    }
});
</script>
<style lang="">

</style>