<template>
    <ul class="cart">
        <li v-for="product in productsInCart" :key="product.id">
            <cart-product
                :productData="product"
                :productVerbose="groupsData[product.group].products[product.id].verbose"
                :dollarExhangeRate="dollarExhangeRate"
                @deleteFromCart="$emit('deleteFromCart', $event)"
            />
        </li>
    </ul>
    <div v-if="total" class="cart__total">
        <span v-text="totalText" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartProduct from "./components/CartProduct.vue";

export default {
    name: "Cart",
    components: {
        CartProduct,
    },
    props: {
        productsInCart: {
            type: Object,
            default: () => ({}),
        },
        groupsData: {
            type: Object,
            default: () => ({}),
        },
        dollarExhangeRate: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        ...mapGetters(["GET_PRODUCTS_DATA", "GET_PRODUCTS_GROUPS", "GET_DOLLAR_EXCHANGE_RATE", "GET_CART"]),
        total() {
            if (this.GET_CART) {
                return (
                    Object.values(this.GET_CART).reduce(function (accumulator, currentValue) {
                        return accumulator + currentValue.price;
                    }, 0) * this.GET_DOLLAR_EXCHANGE_RATE
                ).toFixed(2);
            } else {
                return "";
            }
        },
        totalText() {
            return `Всего: ${this.total} руб.`;
        },
    },
    methods: {
        ...mapActions(["DELETE_PRODUCT_FROM_CART"]),
    },
};
</script>

<style lang="scss" scoped>
.cart {
    margin: 0;
    padding: 0;

    li {
        display: flex;
        margin-bottom: 0.5em;
    }
}
</style>
