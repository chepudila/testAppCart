<template>
    <div class="dashboard">
        <Products
            :productsData="GET_PRODUCTS_DATA"
            :groupsData="GET_PRODUCTS_GROUPS"
            :dollarExhangeRate="GET_DOLLAR_EXCHANGE_RATE"
            :productsInCart="GET_CART"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Products from "../Common/Products/Products.vue";

export default {
    name: "Dashboard",
    components: {
        Products,
    },
    computed: {
        ...mapGetters(["GET_PRODUCTS_DATA", "GET_PRODUCTS_GROUPS", "GET_DOLLAR_EXCHANGE_RATE", "GET_CART"]),
    },
    methods: {
        ...mapActions(["ADD_PRODUCT_TO_CART"]),
        addToCart(product) {
            this.ADD_PRODUCT_TO_CART(product);
        },
    },
};
</script>
