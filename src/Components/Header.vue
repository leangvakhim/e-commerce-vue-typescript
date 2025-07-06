<template lang="">
    <div class="top-header-area" id="sticker">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-sm-12 text-center">
					<div class="main-menu-wrap">
						<!-- logo -->
						<div class="site-logo">
							<a href="index.html">
								<img :src="logo" alt="" :style="{height: '50px',}">
							</a>
						</div>
						<!-- logo -->

						<!-- menu start -->
						<nav class="main-menu">
							<ul>
								<li :class="{ 'current-list-item' : route.path === '/home' }" ><router-link to="/home">Home</router-link>
									<!-- <ul class="sub-menu">
										<li><a href="index.html">Static Home</a></li>
										<li><a href="index_2.html">Slider Home</a></li>
									</ul> -->
								</li>
                                <li :class="{ 'current-list-item' : route.path === '/shop' }"><router-link to="/shop">Shop</router-link></li>
								<li :class="{ 'current-list-item' : route.path === '/about' }"><router-link to="/about">About</router-link></li>
								<!-- <li><a href="#">Pages</a>
									<ul class="sub-menu">
										<li><a href="404.html">404 page</a></li>
										<li><a href="about.html">About</a></li>
										<li><a href="cart.html">Cart</a></li>
										<li><a href="checkout.html">Check Out</a></li>
										<li><a href="contact.html">Contact</a></li>
										<li><a href="news.html">News</a></li>
										<li><a href="shop.html">Shop</a></li>
									</ul>
								</li> -->
								<!-- <li><a href="news.html">News</a>
									<ul class="sub-menu">
										<li><a href="news.html">News</a></li>
										<li><a href="single-news.html">Single News</a></li>
									</ul>
								</li> -->
								<li :class="{ 'current-list-item' : route.path === '/contact' }"><router-link to="/contact">Contact</router-link></li>
								<!-- <li><a href="shop.html">Shop</a>
									<ul class="sub-menu">
										<li><a href="shop.html">Shop</a></li>
										<li><a href="checkout.html">Check Out</a></li>
										<li><a href="single-product.html">Single Product</a></li>
										<li><a href="cart.html">Cart</a></li>
									</ul>
								</li> -->
								<li>
									<div class="header-icons">
										<router-link class="shopping-cart" to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
										<a class="mobile-hide search-bar-icon" href="#"><i class="fas fa-search"></i></a>
									</div>
								</li>
							</ul>
						</nav>
						<a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
						<div class="mobile-menu"></div>
						<!-- menu end -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<script>
import logo from "../assets/img/ecommerce.png";

export default {
    name: 'Header',
    data() {
        return {
            logo: logo
        }
    }
}
</script>
<style lang="">

</style>