<template>
    <ul class="cart">
        <li v-for="product in GET_CART" :key="product.id">
            <span v-text="GET_PRODUCTS_GROUPS[product.group].products[product.id].verbose" />
            <button @click="DELETE_PRODUCT_FROM_CART(product)">Удалить</button>
        </li>
    </ul>
    <div>
        <span>Всего: </span>
        <span>{{ total }}</span>
        <span> руб.</span>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Cart",
    computed: {
        ...mapGetters(["GET_PRODUCTS_DATA", "GET_PRODUCTS_GROUPS", "GET_DOLLAR_EXCHANGE_RATE", "GET_CART"]),
        total() {
            return (
                Object.values(this.GET_CART).reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue.price;
                }, 0) * this.GET_DOLLAR_EXCHANGE_RATE
            ).toFixed(2);
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

    button {
        width: fit-content;
        margin-left: auto;
        cursor: pointer;
        font-weight: 600;
        background-color: #046ab2;
        border: none;
        color: #ffffff;
        border-radius: 0.2em;
    }
}
</style>
