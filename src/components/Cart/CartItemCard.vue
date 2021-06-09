<template>
    <div class="cart-item-card">
        <div class="header">
            <h3>{{ product.name }}</h3>
            <h3>In Cart: {{ product.quantity }}</h3>
            <h3>In Total: ${{ product_total.toFixed(2) }}</h3>
        </div>

        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'CartItemCard',
    props: ['product'],
    computed: {
        product_total() {
            return this.product.quantity * this.product.price;
        },
        description() {
            return this.product.description.substring(0, 120);
        }
    }
}
</script>

<style lang="scss">
.cart-item-card {
    width: 90%;
    margin: 5%;
    background: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    .header {
        display: flex;
        justify-content: space-around;
    }
}
</style>
