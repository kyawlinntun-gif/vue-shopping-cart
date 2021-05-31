<template>
    <div class="home">

        <div class="product-cards-container">

        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js';

export default {
    name: 'Home',
    data() {
        return {
            items: items
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
