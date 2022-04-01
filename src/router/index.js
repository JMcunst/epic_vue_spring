import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../views/About.vue'),
    },
]

const router = new VueRouter({
	mode:'history', //해쉬값 제거 방식
    base: process.env.BASE_URL,
    routes,
});

export default router