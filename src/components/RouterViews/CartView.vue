<template>
    <div class="cart-view">
        <Cart
            :productsInCart="GET_CART"
            :groupsData="GET_PRODUCTS_GROUPS"
            :dollarExhangeRate="GET_DOLLAR_EXCHANGE_RATE"
            @deleteFromCart="deleteFromCart"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cart from "../Common/Cart/Cart.vue";

export default {
    name: "CartView",
    components: {
        Cart,
    },
    computed: {
        ...mapGetters(["GET_PRODUCTS_GROUPS", "GET_DOLLAR_EXCHANGE_RATE", "GET_CART"]),
    },
    methods: {
        ...mapActions(["DELETE_PRODUCT_FROM_CART"]),
        deleteFromCart(product) {
            this.DELETE_PRODUCT_FROM_CART(product);
        },
    },
};
</script>
