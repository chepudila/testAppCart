import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/RouterViews/Dashboard.vue";
import Cart from "../components/RouterViews/Cart.vue";
import { store } from "../store";
import { getMainMenu } from "../api"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(() => {
    if (!store.getters.GET_MAIN_MENU.length) {
        store.commit("SET_MAIN_MENU", getMainMenu());
    }
});

export { router };
