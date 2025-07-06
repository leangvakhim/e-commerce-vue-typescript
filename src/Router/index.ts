import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Pages/Home.vue'
import Shop from '../Pages/Shop.vue'
import About from '../Pages/About.vue'
import Contact from '../Pages/Contact.vue'
import Loading from '../Components/Loading.vue'
import Cart from '../Pages/Cart.vue'
import NotFound from '../Pages/NotFound.vue'
import Product from '../Pages/Product.vue'
import Checkout from '../Pages/Checkout.vue'

const routes = [
    { path: "/", redirect: '/home' },
    { path: '/home', component: Loading, props: () => ({ componentToRender: Home }) },
    { path: '/shop', component: Loading, props: () => ({ componentToRender: Shop }) },
    { path: '/shop/product/:id', component: Loading, props: (route: { params: { id: BigInteger } }) => ({ componentToRender: Product, id: route.params.id }) },
    { path: '/checkout', component: Loading, props: () => ({ componentToRender: Checkout }) },
    { path: '/about', component: Loading, props: () => ({ componentToRender: About }) },
    { path: '/contact', component: Loading, props: () => ({ componentToRender: Contact }) },
    { path: '/cart', component: Loading, props: () => ({ componentToRender: Cart }) },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router