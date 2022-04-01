import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName "about" */ '@/views/About.vue')
    },
    {
        path: "/imageupload",
        name: "ImageUpload",
        component: () => import(/* webpackChunkName "about" */ '@/views/ImageUpload.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;