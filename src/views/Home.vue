<template>
    <div class="home">

        <div class="product-cards-container">
            <ProductSummaryCart v-for="product in items" v-bind:key="product.id" :product="product" v-on:view-product="viewProduct($event)" />
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js';
import ProductSummaryCart from '../components/products/ProductSummaryCard.vue';

export default {
    name: 'Home',
    components: {
        ProductSummaryCart
    },
    data() {
        return {
            items: items
        }
    },
    methods: {
        viewProduct($event)
        {
            console.log($event);
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
