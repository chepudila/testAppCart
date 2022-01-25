<template>
    <div class="product">
        <h5 v-text="productTitle" />
        <div>
            <span>Цена: </span>
            <span v-text="priceRubles" />
            <span> руб.</span>
        </div>
        <button v-if="!isProductInCart" @click="$emit('addToCart', productData)">В корзину</button>
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
        isProductInCart() {
            return Boolean(this.productsInCart?.[this.productData.id]);
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    margin: 0.5em;
    padding: 0.2em;
    border-radius: 0.3em;
    background: #383838;
    box-shadow: 0.2em 0.2em 0.3em #303030, -0.2em -0.2em 0.3em #404040;

    h5 {
        margin: 0;
        font-size: 1em;
        word-break: break-word;
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
