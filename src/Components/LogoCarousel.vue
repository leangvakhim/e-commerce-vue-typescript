<template lang="">
    <div class="logo-carousel-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<swiper
						:slides-per-view="4"
						:loop="true"
						:autoplay="{ delay: 2000 }"
						class="logo-carousel-inner"
					>
						<swiper-slide class="single-logo-item">
							<img :src="logo1" alt="" />
						</swiper-slide>
						<swiper-slide class="single-logo-item">
							<img :src="logo2" alt="" />
						</swiper-slide>
						<swiper-slide class="single-logo-item">
							<img :src="logo3" alt="" />
						</swiper-slide>
						<swiper-slide class="single-logo-item">
							<img :src="logo4" alt="" />
						</swiper-slide>
						<swiper-slide class="single-logo-item">
							<img :src="logo5" alt="" />
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import logo1 from '../assets/img/company-logos/1.png';
import logo2 from '../assets/img/company-logos/2.png';
import logo3 from '../assets/img/company-logos/3.png';
import logo4 from '../assets/img/company-logos/4.png';
import logo5 from '../assets/img/company-logos/5.png';

import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

export default {
    name: 'LogoCarousel',
    components: {
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            logo1,
            logo2,
            logo3,
            logo4,
            logo5
        }
    }
}
</script>
<style lang="">

</style>