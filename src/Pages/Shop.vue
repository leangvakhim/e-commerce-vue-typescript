<template lang="">
    <div>
        <Header />
        <Search />
        <ShopBanner />
        <ShopProduct />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';
import ShopBanner from '../Components/Shop/ShopBanner.vue';
import ShopProduct from '../Components/Shop/ShopProduct.vue';

export default {
    name: 'Shop',
    components: {
        Header,
        Search,
        ShopBanner,
        ShopProduct,
        LogoCarousel,
        Footer,
        CopyRight
    },
}
</script>
<style lang="">

</style>