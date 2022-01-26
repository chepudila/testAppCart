import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../components/RouterViews/DashboardView.vue";
import CartView from "../components/RouterViews/CartView.vue";
import { store } from "../store";
import { getMainMenu } from "../api"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: DashboardView,
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartView,
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
