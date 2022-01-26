<template>
    <div class="cart-product">
        <div class="cart-product__left-column">
            <h5 v-text="productTitle" />
            <div class="cart-product__price">
                <span v-text="priceRublesText" />
            </div>
        </div>
        <div class="cart-product__middle-column">
            <label>
                <span>Кол-во:</span>
                <input
                    type="number"
                    value="1"
                    min="1"
                    :max="productData.count"
                    @input="$emit('changeCountInCart', $event.target.value)"
                />
            </label>
        </div>
        <div class="cart-product__right-column">
            <button @click="$emit('deleteFromCart', productData)">Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartProduct",
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
    },
    computed: {
        productTitle() {
            return this.productVerbose + ` (${this.productData.count})`;
        },
        priceRubles() {
            return (this.productData.price * this.dollarExhangeRate).toFixed(2);
        },
        priceRublesText() {
            return `Цена: ${this.priceRubles} руб. / шт.`;
        },
    },
};
</script>

<style lang="scss" scoped>
.cart-product {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1em;
    margin: 0.5em;
    padding: 0.2em;
    border-bottom: 1px solid #ffffff;

    .cart-product__left-column {
        h5 {
            margin: 0;
            font-size: 1em;
            word-break: break-word;
        }
    }

    .cart-product__middle-column {
        margin-left: auto;

        span {
            margin-right: 1em;
        }

        input {
            max-width: 2em;
        }
    }

    .cart-product__right-column button {
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
</style>
