<template lang="">
    <div>
        <Header />
        <Search />
        <AboutBanner />
        <AboutTeam />
        <Testimonial />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import AboutBanner from '../Components/About/AboutBanner.vue';
import AboutTeam from '../Components/About/AboutTeam.vue';
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';
import Testimonial from '../Components/Testimonial.vue';

export default {
    name: 'About',
    components: {
        Header,
        Search,
        AboutBanner,
        AboutTeam,
        Testimonial,
        LogoCarousel,
        Footer,
        CopyRight
    }
}
</script>
<style lang="">

</style>