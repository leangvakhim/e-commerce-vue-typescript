<template lang="">
    <div class="checkout-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="checkout-accordion-wrap">
						<div class="accordion" id="accordionExample">
						  <div class="card single-accordion">
						    <div class="card-header" id="headingOne">
						      <h5 class="mb-0">
						        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						          Billing Address
						        </button>
						      </h5>
						    </div>

						    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						      <div class="card-body">
						        <div class="billing-address-form">
						        	<form action="index.html">
						        		<p><input type="text" placeholder="Name"></p>
						        		<p><input type="email" placeholder="Email"></p>
						        		<p><input type="text" placeholder="Address"></p>
						        		<p><input type="tel" placeholder="Phone"></p>
						        		<p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Say Something"></textarea></p>
						        	</form>
						        </div>
						      </div>
						    </div>
						  </div>
						  <div class="card single-accordion">
						    <div class="card-header" id="headingTwo">
						      <h5 class="mb-0">
						        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						          Shipping Address
						        </button>
						      </h5>
						    </div>
						    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						      <div class="card-body">
						        <div class="shipping-address-form">
						        	<p>Your shipping address form is here.</p>
						        </div>
						      </div>
						    </div>
						  </div>
						  <div class="card single-accordion">
						    <div class="card-header" id="headingThree">
						      <h5 class="mb-0">
						        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						          Card Details
						        </button>
						      </h5>
						    </div>
						    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						      <div class="card-body">
						        <div class="card-details">
						        	<p>Your card details goes here.</p>
						        </div>
						      </div>
						    </div>
						  </div>
						</div>

					</div>
				</div>

				<div class="col-lg-4">
					<div class="order-details-wrap" >
						<table class="order-details" :style="{ width: '100%' }">
							<thead>
								<tr>
									<th>Your order Details</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody class="order-details-body">
								<tr>
									<td>Product</td>
									<td>Total</td>
								</tr>
								<tr v-for="(product, index) in cartItems" :key="index">
									<td>{{product.name}}</td>
									<td>${{product.price}}</td>
								</tr>
							</tbody>
							<tbody class="checkout-details">
								<!-- <tr>
									<td>Subtotal</td>
									<td>$190</td>
								</tr> -->
								<!-- <tr>
									<td>Shipping</td>
									<td>$50</td>
								</tr> -->
								<tr>
									<td>Total</td>
									<td>${{cartTotal.toFixed(2)}}</td>
								</tr>
							</tbody>
						</table>
						<div id="paypal-button-container" style="margin-top: 20px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue';
import { useCart } from '../CartContext.vue'
import Swal from 'sweetalert2';

const { cart } = useCart()
const { removeFromCart } = useCart();
const { finalizeCartTotal } = useCart();

const cartItems = computed(() => cart)
const rawTotal = computed(() => Number(finalizeCartTotal()));
const cartTotal = ref(0);

watchEffect(() => {
  const total = rawTotal.value;
  cartTotal.value = !isNaN(total) ? total : 0;
});

function handleSuccess() {
	Swal.fire({
		title: 'Payment Successful!',
		text: 'Thank you for your purchase.',
		icon: 'success',
		confirmButtonText: 'OK'
	}).then(() => {
		window.location.reload();
	});
}

const paypalRendered = ref(false);

async function loadPayPalSdk(clientId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      return resolve();
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("PayPal SDK failed to load"));
    document.body.appendChild(script);
  });
}

const clientID = 'AQpDVDsTN1hXrieCNukTp48w1CV8WaRy--atpa9-f_eSxryIwte3dD4Q2XzS8TKWhtAAG81XlgQ5kSh9';

async function renderPayPalButtons() {
  if (paypalRendered.value) return;
  const paypalContainer = document.getElementById('paypal-button-container');
  if (!paypalContainer) return;

  try {
    await loadPayPalSdk(clientID);

    window.paypal.Buttons({
      createOrder: (_: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: { value: cartTotal.value.toFixed(2) }
          }]
        });
      },
      onApprove: async (_data: any, actions: any) => {
        await actions.order.capture();
        handleSuccess();
      },
      onError: (err: any) => {
        console.error('PayPal error:', err);
      }
    }).render(paypalContainer);

    paypalRendered.value = true;
  } catch (error) {
    console.error('PayPal SDK load error:', error);
  }
}

onMounted(renderPayPalButtons);

</script>
<style lang="">

</style>