<template lang="">
    <div>
        <Header />
        <Search />
        <CartBanner />
        <CartProduct />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import CartBanner from '../Components/Cart/CartBanner.vue';
import CartProduct from '../Components/Cart/CartProduct.vue';
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';

export default {
    name: 'Cart',
    components: {
        Header,
        Search,
        CartBanner,
        CartProduct,
        LogoCarousel,
        Footer,
        CopyRight
    }
}
</script>
<style lang="">

</style>