import { createStore } from 'vuex';

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
    state: {
        cart: []
    },
    getters: {
        getQuantity: state => product => {
            let item = state.cart.find(i => i.id === product.id);

            if(item) {
                return item.quantity;
            } else {
                return null;
            }
        },
        getCartItems: state => {
            return state.cart;
        },
        cartTotal: state => {
            return state.cart.reduce(function(a, b) {
                return a + (b.quantity * b.price)
            }, 0);
        }
    },
    mutations: {
        addToCart(state, product)
        {
            let item  = state.cart.find(i => i.id === product.id);

            if(item)
            {
                item.quantity++;
            } else {
                state.cart.push({...product, quantity: 1});
            }
            updateLocalStorage(state.cart);
        },
        removeFromCart(state, product)
        {
            let item = state.cart.find(i => i.id === product.id);

            if(item)
            {
                if(item.quantity > 1)
                {
                    item.quantity--;
                } else {
                    state.cart = state.cart.filter(i => i.id != product.id);
                }
            }
            updateLocalStorage(state.cart);
        },
        updateCartItemsFromLocalStorage(state)
        {
            let cart = localStorage.getItem('cart');
            if(cart) {
                state.cart = JSON.parse(cart);
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
