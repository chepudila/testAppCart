<template>
    <div class="product" :class="{ 'product_price-rised': isPriceRised }">
        <div class="product__left-column">
            <h5 v-text="productTitle" />
            <div class="product__price">
                <span v-text="priceRublesText" />
            </div>
        </div>
        <div class="product__right-column">
            <button v-if="!isProductInCart" @click="$emit('addToCart', productData)">В корзину</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: {
        productData: {
            type: Object,
            default: () => ({}),
        },
        productVerbose: {
            type: String,
            default: "",
        },
        dollarExhangeRate: {
            type: Number,
            default: 0,
        },
        productsInCart: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        productTitle() {
            return this.productVerbose + ` (${this.productData.count})`;
        },
        priceRubles() {
            return (this.productData.price * this.dollarExhangeRate).toFixed(2);
        },
        priceRublesText() {
            return `Цена: ${this.priceRubles} руб.`;
        },
        isProductInCart() {
            return Boolean(this.productsInCart?.[this.productData.id]);
        },
    },
    data() {
        return {
            isPriceRised: false,
        };
    },
    watch: {
        priceRubles(newValue, oldValue) {
            this.isPriceRised = Number(newValue) > Number(oldValue);
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    margin: 0.5em;
    padding: 0.2em;
    border-radius: 0.3em;
    background: #383838;
    box-shadow: 0.2em 0.2em 0.3em #303030, -0.2em -0.2em 0.3em #404040;

    &.product_price-rised {
        background-color: indianred;
    }

    .product__left-column {
        h5 {
            margin: 0;
            font-size: 1em;
            word-break: break-word;
        }
    }

    .product__right-column {
        align-self: flex-end;
        min-width: fit-content;

        button {
            width: fit-content;
            cursor: pointer;
            font-weight: 600;
            background-color: #046ab2;
            border: none;
            color: #ffffff;
            border-radius: 0.2em;
            padding: 0.2em 0.4em;
            transition: 0.5s;

            &:hover {
                opacity: 0.6;
            }
        }
    }
}
</style>
