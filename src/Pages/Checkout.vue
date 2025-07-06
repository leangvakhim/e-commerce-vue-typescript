<template lang="">
    <div>
        <Header />
        <Search />
        <CheckoutBanner />
        <CheckoutForm/>
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import CheckoutBanner from '../Components/Checkout/CheckoutBanner.vue';
import CheckoutForm from '../Components/Checkout/CheckoutForm.vue';
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';

export default {
    name: 'Checkout',
    components: {
        Header,
        Search,
        CheckoutBanner,
        CheckoutForm,
        LogoCarousel,
        Footer,
        CopyRight
    }
}
</script>
<style lang="">

</style>