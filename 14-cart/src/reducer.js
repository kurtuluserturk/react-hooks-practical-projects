const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] }
    }
    if (action.type === "REMOVE") {
        return {
            ...state,
            cart: state.cart.filter((cartItem) =>
                cartItem.id !== action.payload)
        }
    }
    if (action.type === "INCREASE") {
        let tempCart = state.cart.map(cartItem => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === "DECREASE") {
        let tempCart = state.cart.map(cartItem => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter(cartItem => cartItem.amount !== 0)    // ürün sayısı 0 değilse göster 0 olanı yok et.
        return { ...state, cart: tempCart }
    }
    if (action.type === "GET_TOTALS") {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {  // Burası callback function
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {   // Burası dönülen 2. obje yani initial values
                total: 0,
                amount: 0
            }
        )
        total = parseFloat(total.toFixed(2))  // Noktadan sonra 2 basamak olsun diye
        return { ...state, total, amount }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }

    return state
}

export default reducer

// THE SAME THINGS WITH SWITCH STATEMENTS (OPTIONAL) 

/* switch (action.type) {
    case "CLEAR_CART":
        return { ...state, cart: [] }
    case "":
        return

    default:
        return state;
} */
