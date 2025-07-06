<template lang="">
<div class="testimonail-section mt-150 mb-150">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1 text-center">
        <swiper
          :modules="[Autoplay]"
          :loop="true"
          :autoplay="{ delay: 4000 }"
          :slides-per-view="1"
          class="testimonial-sliders"
        >
          <swiper-slide class="single-testimonial-slider">
            <div class="client-avater">
              <img :src="avatar1" alt="">
            </div>
            <div class="client-meta">
              <h3>Saira Hakim <span>Local shop owner</span></h3>
              <p class="testimonial-body">
                " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
              </p>
              <div class="last-icon">
                <i class="fas fa-quote-right"></i>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="single-testimonial-slider">
            <div class="client-avater">
              <img :src="avatar2" alt="">
            </div>
            <div class="client-meta">
              <h3>David Niph <span>Local shop owner</span></h3>
              <p class="testimonial-body">
                " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
              </p>
              <div class="last-icon">
                <i class="fas fa-quote-right"></i>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="single-testimonial-slider">
            <div class="client-avater">
              <img :src="avatar3" alt="">
            </div>
            <div class="client-meta">
              <h3>Jacob Sikim <span>Local shop owner</span></h3>
              <p class="testimonial-body">
                " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
              </p>
              <div class="last-icon">
                <i class="fas fa-quote-right"></i>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import avatar1 from '../assets/img/avaters/avatar1.png';
import avatar2 from '../assets/img/avaters/avatar2.png';
import avatar3 from '../assets/img/avaters/avatar3.png';

export default {
    name: 'Testimonial',
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
        return {
            avatar1,
            avatar2,
            avatar3,
            Autoplay
        }
    }
}
</script>
<style lang="">

</style>