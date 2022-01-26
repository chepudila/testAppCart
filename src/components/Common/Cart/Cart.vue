<template>
    <div class="cart">
        <ul class="cart__products">
            <li v-for="product in productsInCart" :key="product.id">
                <cart-product
                    :productData="product"
                    :productVerbose="groupsData[product.group].products[product.id].verbose"
                    :dollarExhangeRate="dollarExhangeRate"
                    @deleteFromCart="$emit('deleteFromCart', $event)"
                    @changeCountInCart="changeCountInCart($event, product)"
                />
            </li>
        </ul>
        <div v-if="total" class="cart__total">
            <span v-text="totalText" />
        </div>
    </div>
</template>

<script>
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
    data() {
        return {
            productsCount: {},
        };
    },
    computed: {
        total() {
            if (this.productsInCart && Object.values(this.productsInCart).length) {
                return (
                    Object.values(this.productsInCart).reduce((accumulator, currentValue) => {
                        if (this.productsCount[currentValue.id]) {
                            return currentValue.price * this.productsCount[currentValue.id] + accumulator;
                        } else {
                            return accumulator + currentValue.price;
                        }
                    }, 0) * this.dollarExhangeRate
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
        changeCountInCart(count, product) {
            this.productsCount[product.id] = count;
        }
    },
};
</script>

<style lang="scss" scoped>
.cart {
    .cart__products {
        margin: 0;
        padding: 0;

        li {
            display: flex;
            margin-bottom: 0.5em;
        }
    }
}
</style>
