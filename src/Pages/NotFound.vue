<template lang="">
    <div>
        <Header />
        <Search />
        <NotFoundBanner />
        <NotFoundBody />
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
import NotFoundBanner from '../Components/NotFound/NotFoundBanner.vue';
import NotFoundBody from '../Components/NotFound/NotFoundBody.vue';
import Search from '../Components/Search.vue';

export default {
    name: 'NotFound',
    components: {
        Header,
        Search,
        NotFoundBanner,
        NotFoundBody,
        LogoCarousel,
        Footer,
        CopyRight
    }
}
</script>
<style lang="">

</style>