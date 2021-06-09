<template>
    <CartItemCard v-for="product in products" v-bind:key="product.id" :product="product"></CartItemCard>
    <CartSummaryPaymentCard></CartSummaryPaymentCard>
</template>

<script>
import CartItemCard from '../components/Cart/CartItemCard.vue';
import CartSummaryPaymentCard from '../components/Cart/CartSummaryPaymentCard.vue';

export default {
    name: 'Cart',
    components: { CartSummaryPaymentCard, CartItemCard },
    computed: {
        products() {
            return this.$store.getters.getCartItems;
        }
    }
}
</script>

<style lang="scss">

</style>
