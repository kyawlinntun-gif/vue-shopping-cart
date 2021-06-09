<template>
    <div class="cart-item-card">
        <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>

        <button class="view-product-button">Pay by Credit Card</button>
    </div>
</template>

<script>
export default {
    name: 'CartSummaryPaymentCard',
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal;
        }
    }
}
</script>

<style lang="scss">
button.view-product-button {
    padding: 10px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}
</style>
