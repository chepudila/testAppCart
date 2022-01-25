import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            MAIN_MENU: [],
            CART: [],
            PRODUCTS_DATA: null,
            PRODUCTS_GROUPS: null,
            DOLLAR_EXCHANGE_RATE: 0,
        };
    },
    mutations: {
        SET_MAIN_MENU(state, data) {
            state.MAIN_MENU = data;
        },
        SET_CART(state, data) {
            state.CART = data;
        },
        SET_PRODUCTS_DATA(state, data) {
            state.PRODUCTS_DATA = data;
        },
        SET_PRODUCTS_GROUPS(state, data) {
            state.PRODUCTS_GROUPS = data;
        },
        SET_DOLLAR_EXCHANGE_RATE(state, data) {
            state.DOLLAR_EXCHANGE_RATE = data;
        },
    },
    actions: {
        ADD_PRODUCT_TO_CART({ commit, state }, product) {
            commit("SET_CART", {
                ...state.CART,
                [product.id]: product,
            });
        },
        DELETE_PRODUCT_FROM_CART({ commit, state }, product) {
            let newCart = {};

            for (const key in state.CART) {
                if (state.CART[key].id !== product.id) {
                    newCart[key] = state.CART[key];
                }
            }

            commit("SET_CART", newCart);
        },
    },
    getters: {
        GET_MAIN_MENU(state) {
            return state.MAIN_MENU;
        },
        GET_CART(state) {
            return state.CART;
        },
        GET_PRODUCTS_DATA(state) {
            return state.PRODUCTS_DATA;
        },
        GET_PRODUCTS_GROUPS(state) {
            return state.PRODUCTS_GROUPS;
        },
        GET_DOLLAR_EXCHANGE_RATE(state) {
            return state.DOLLAR_EXCHANGE_RATE;
        },
    },
});

export { store };
