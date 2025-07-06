<template lang="">
    <div>
        <Header />
        <Search />
        <HomeBanner />
        <HomeFeature />
        <HomeProduct />
        <Testimonial />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import HomeBanner from '../Components/Home/HomeBanner.vue';
import HomeFeature from '../Components/Home/HomeFeature.vue';
import HomeProduct from '../Components/Home/HomeProduct.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';
import Testimonial from '../Components/Testimonial.vue';

export default {
    components: {
        Header,
        Search,
        HomeBanner,
        HomeFeature,
        HomeProduct,
        Testimonial,
        LogoCarousel,
        Footer,
        CopyRight
    },
    name: 'Home'
}
</script>
<style lang="">

</style>