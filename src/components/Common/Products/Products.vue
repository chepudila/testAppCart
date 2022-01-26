<template>
    <div class="products">
        <div v-for="group in gropsForDisplay" :key="group.id" class="products__group">
            <h4 v-text="group.verbose" />
            <template v-for="product in group.products" :key="product.id">
                <Product
                    v-if="productsData[product.id]"
                    :productData="productsData[product.id]"
                    :productVerbose="product.verbose"
                    :dollarExhangeRate="dollarExhangeRate"
                    :productsInCart="productsInCart"
                    @addToCart="$emit('addToCart', $event)"
                />
            </template>
        </div>
    </div>
</template>

<script>
import Product from "./components/Product.vue";

export default {
    name: "Products",
    components: {
        Product,
    },
    props: {
        productsData: {
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
        productsInCart: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        gropsForDisplay() {
            let newGropsForDisplay = {};

            for (const key in this.groupsData) {
                if (Object.values(this.groupsData[key].products).some((product) => this.productsData[product.id])) {
                    newGropsForDisplay[key] = this.groupsData[key];
                }
            }

            return newGropsForDisplay;
        },
    },
};
</script>

<style lang="scss" scoped>
$gap: 1em;

.products {
    display: flex;
    flex-wrap: wrap;
    gap: $gap;
    margin-right: -$gap;

    .products__group {
        width: calc(100% / 3 - $gap);
        border-radius: 0.3em;
        background: #383838;
        box-shadow: 0.2em 0.2em 0.3em #303030, -0.2em -0.2em 0.3em #404040;

        h4 {
            margin: 0;
            text-align: center;
        }
    }

    @media screen and (max-width: 900px) {
        .products__group {
            width: 100%;
        }
    }
}
</style>
