<template lang="">
    <div class="product-section mt-150 mb-150">
		<div class="container">
			<div class="row">
                <div class="col-md-12">
                    <div class="product-filters">
                        <ul>
                          <li
                            :class="{ active: selectedCategory === '' }"
                            @click="selectCategory('')"
                            data-filter="*"
                          >All</li>
                          <li
                            v-for="(category, index) in categorys"
                            :key="index"
                            :class="{ active: selectedCategory === category }"
                            @click="selectCategory(category)"
                            :data-filter="`.${category.replace(/\\s+/g, '-').toLowerCase()}`"
                          >
                            {{ category }}
                          </li>
                        </ul>
                    </div>
                </div>
            </div>

			<div class="row product-lists">
				<div
				  v-for="product in paginatedProducts"
				  :key="product.id"
				  class="col-lg-4 col-md-6 text-center"
				  :class="product.type"
				>
				<div class="single-product-item">
			      <div class="product-image">
			        <router-link :to="`/shop/product/${product.id}`"><img :src="product.image" alt="" :style="{height: '250px', width: 'auto', objectFit: 'contain'}" ></router-link>
			      </div>
			      <h3 :style="{
						display: '-webkit-box',
						WebkitLineClamp: 1,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						padding: '0 20px'
						}">{{ product.name }}</h3>
			      <p class="product-price"><span></span> {{ product.price }}$ </p>
			      <a @click="handleAddToCart(product)" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
			    </div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li>
							  <a @click.prevent="changePage(currentPage - 1)" :class="{ disabled: currentPage === 1 }">Prev</a>
							</li>
							<li v-for="page in totalPages" :key="page">
							  <a @click.prevent="changePage(page)" :class="{ active: currentPage === page }">{{ page }}</a>
							</li>
							<li>
							  <a @click.prevent="changePage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">Next</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { API_ENDPOINTS } from "../APIConfig";
import axios from "axios";
import { useCart } from '../CartContext.vue';
import Swal from "sweetalert2";

type Product = {
	  id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    type: string;
};

export default {
    name: 'ShopProduct',
    data() {
      return {
        products: [] as Product[],
        categorys: [] as string[],
        selectedCategory: '',
        currentPage: 1,
        pageSize: 6
      };
    },
    computed: {
      filteredProducts() {
        if (!this.selectedCategory) return this.products;
        return this.products.filter(
          product => product.type.toLowerCase() === this.selectedCategory.toLowerCase()
        );
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.pageSize;
        return this.filteredProducts.slice(start, start + this.pageSize);
      },
      totalPages() : number {
        return Math.ceil(this.filteredProducts.length / this.pageSize);
      }
    },
    methods: {
      selectCategory(category: string) {
        this.selectedCategory = category;
        this.currentPage = 1;
      },
      changePage(page: number) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
      }
    },
    mounted() {
      axios.get(`${API_ENDPOINTS.getProduct}`)
        .then(response => {
          this.products = response.data.map((item: any) => ({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            type: item.category
          }));
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });

      axios.get(`${API_ENDPOINTS.getCategory}`)
        .then(response => {
          this.categorys = response.data;
        })
        .catch(error => {
          console.error('Error fetching category:', error);
        });
    },
    setup() {
      const { addToCart } = useCart();

      function handleAddToCart(product: Product) {
        addToCart(product);
        Swal.fire({
          title: 'Success!',
          text: `Product has been added to your cart.`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }

      return { handleAddToCart };
    }
}
</script>