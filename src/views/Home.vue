<template>
    <div class="home">
        <ProductDescriptionDrawer :product="product" :active="active.drawer_view" v-on:close-product-drawer="closeProductDrawer" v-if="active.drawer_view"></ProductDescriptionDrawer>
        <div class="product-cards-container">
            <ProductSummaryCart v-for="product in items" v-bind:key="product.id" :product="product" v-on:view-product="viewProduct(product)" />
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js';
import ProductSummaryCart from '../components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer'

export default {
    name: 'Home',
    components: {
        ProductSummaryCart,
        ProductDescriptionDrawer
    },
    data() {
        return {
            items: items,
            product: null,
            active: {
                drawer_view: false
            }
        }
    },
    methods: {
        viewProduct(product)
        {
            console.log(product);
            this.active.drawer_view = true;
            this.product = product;
        },
        closeProductDrawer()
        {
            this.active.drawer_view = false;
            this.product = null;
        }
    }
}
</script>

<style lang="scss">
    .product-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
