<template lang="">
    <div>
        <Header />
        <Search />
        <ContactBanner />
        <ContactForm />
        <ContactLocation />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script>
import ContactBanner from '../Components/Contact/ContactBanner.vue';
import ContactForm from '../Components/Contact/ContactForm.vue';
import ContactLocation from '../Components/Contact/ContactLocation.vue';
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import Search from '../Components/Search.vue';

export default {
    name: 'Contact',
    components: {
        Header,
        Search,
        ContactBanner,
        ContactForm,
        ContactLocation,
        LogoCarousel,
        Footer,
        CopyRight
    },
}
</script>
<style lang="">

</style>