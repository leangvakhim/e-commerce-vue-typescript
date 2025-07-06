<template lang="">
    <div>
        <Header />
        <Search />
        <ProductBanner />
        <ProductDetail v-if="product" :product="product" />
        <ProductRelated v-if="product" :product="product" />
        <LogoCarousel />
        <Footer />
        <CopyRight />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CopyRight from '../Components/CopyRight.vue';
import Footer from '../Components/Footer.vue';
import Header from '../Components/Header.vue';
import LogoCarousel from '../Components/LogoCarousel.vue';
import ProductBanner from '../Components/Product/ProductBanner.vue';
import ProductDetail from '../Components/Product/ProductDetail.vue';
import ProductRelated from '../Components/Product/ProductRelated.vue';
import Search from '../Components/Search.vue';
import { API_ENDPOINTS } from '../Components/APIConfig';
import axios from "axios";

interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	category: string;
	description: string;
}

export default defineComponent({
    name: 'Product',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Header,
        Search,
        ProductBanner,
        ProductDetail,
        ProductRelated,
        LogoCarousel,
        Footer,
        CopyRight
    },
    data() {
        return {
			product: null as Product | null
		};
    },
    mounted() {
        axios.get(`${API_ENDPOINTS.getProduct}/${this.id}`)
		.then(response => {
			const item = response.data;
			this.product = {
				id: item.id,
				name: item.title,
				price: item.price,
				image: item.image,
				category: item.category,
				description: item.description,
			};
		})
		.catch(error => {
			console.error('Error fetching product:', error);
		});

    }
});
</script>