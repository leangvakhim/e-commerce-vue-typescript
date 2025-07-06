<template>
    <div v-if="!sdkReady">Loading PayPal...</div>
    <div v-else :key="total" ref="paypalRef" style="min-height: 100px;"></div>
</template>

<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';

    interface PaypalProps {
        total: number;
        onSuccess?: () => void;
}

    const props = defineProps<PaypalProps>();

    const paypalRef = ref<HTMLElement | null>(null);
    const sdkReady = ref(false);
    const clientID = 'AQpDVDsTN1hXrieCNukTp48w1CV8WaRy--atpa9-f_eSxryIwte3dD4Q2XzS8TKWhtAAG81XlgQ5kSh9';

    declare global {
        interface Window {
        paypal: any;
        }
    }

    onMounted(() => {
        if (window.paypal) {
            sdkReady.value = true;
        } else {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}`;
            script.async = true;
            script.onload = () => {
            sdkReady.value = true;
            };
            document.body.appendChild(script);
        }
    });

    watch(sdkReady, (ready) => {
        if (ready && paypalRef.value && paypalRef.value.childElementCount === 0) {
        window.paypal.Buttons({
            createOrder: (_: any, actions: any) => {
            return actions.order.create({
                    purchase_units: [{
                    amount: { value: (props.total || 0).toFixed(2) }
                }]
            });
            },
            onApprove: async (data: any, actions: any) => {
                console.log('Approval data:', data);
                await actions.order.capture();
                if (props.onSuccess) {
                    props.onSuccess();
                }
            },
                onError: (err: any) => {
                console.error('PayPal error:', err);
            }
        }).render(paypalRef.value);
    }
});
</script>