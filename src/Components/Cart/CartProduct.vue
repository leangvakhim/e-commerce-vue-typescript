<template lang="">
    <div class="cart-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12">
					<div class="cart-table-wrap">
						<table class="cart-table">
							<thead class="cart-table-head">
								<tr class="table-head-row">
									<th class="product-remove"></th>
									<th class="product-image">Product Image</th>
									<th class="product-name">Name</th>
									<th class="product-price">Price</th>
									<th class="product-quantity">Quantity</th>
									<th class="product-total">Total</th>
								</tr>
							</thead>
							<tbody>
								<tr class="table-body-row" v-for="(product, index) in cartItems" :key="index">
									<td class="product-remove">
										<a @click="confirmRemove(product.id)">
											<i class="far fa-window-close"></i>
										</a>
									</td>
									<td class="product-image"><img :src="product.image" alt=""></td>
									<td class="product-name" :style="{padding: '0 10px'}">{{ product.name }}</td>
									<td class="product-price" :style="{padding: '0 10px'}">${{ product.price }}</td>
									<td class="product-quantity" :style="{padding: '0 20px'}" ><input type="number" v-model.number="product.quantity" min="1"></td>
									<td class="product-total" :style="{padding: '0 10px'}">${{ product.quantity * product.price }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="total-section">
						<table class="total-table">
							<thead class="total-table-head">
								<tr class="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>

								<tr class="total-data">
									<td><strong>Total: </strong></td>
									<td>${{ cartTotal.toFixed(2) }}</td>
								</tr>
							</tbody>
						</table>
						<div class="cart-buttons">
							<!-- <a href="cart.html" class="boxed-btn">Update Cart</a> -->
							<router-link to="/checkout" class="boxed-btn black">Check Out</router-link>
						</div>
					</div>

					<!-- <div class="coupon-section">
						<h3>Apply Coupon</h3>
						<div class="coupon-form-wrap">
							<form action="index.html">
								<p><input type="text" placeholder="Coupon"></p>
								<p><input type="submit" value="Apply"></p>
							</form>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script setup >
import { computed } from 'vue'
import { useCart } from '../CartContext.vue'
import Swal from 'sweetalert2';

const { cart } = useCart()
const { removeFromCart } = useCart();
const { finalizeCartTotal } = useCart();

const cartItems = computed(() => cart)
const cartTotal = computed(() => finalizeCartTotal());
const confirmRemove = async (id) => {

	const result = await Swal.fire({
		title: 'Are you sure?',
		text: 'Do you really want to remove this product from the cart?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Yes, delete it!',
	});

	if (result.isConfirmed) {
		removeFromCart(id);
		Swal.fire('Deleted!', 'Your product has been removed.', 'success');
	}
};
</script>
<style lang="">

</style>