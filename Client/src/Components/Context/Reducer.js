export const reducer = (state, action) => {
  var pp = Object.values(state.products);
  switch (action.type) {
    case "PRODUCTS_DATA":
      return { ...state, products: { ...state.products, ...action.payload } }
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload }
    case "FILTER_BY_SEARCHITEMS":
      return { ...state, searchItems: action.payload }

    case "ADD_CART":
      return {
        ...state, cart: [...state.cart, { ...action.payload, qty: 1 }
        ]
      }
    case "VIEW_PRODUCT":
      return {
        ...state, viewProduct: [...state.viewProduct, { ...action.payload }
        ]
      }

    case "INC_QTY":

      let tempcart = state.cart.filter((c) =>
        c.id === action.payload.id ? c.qty = action.payload.qty + 1 : c.qty)

      return {
        ...state, cart: tempcart
      }
    case "DEC_QTY":
      let cartd = state.cart.map((c) =>
        c.id === action.payload.id ? c.qty = action.payload.qty - 1 : c.qty)

      return {
        ...state, cart: cartd
      }
    case "REMOVE_ITEM":
      return {
        ...state, cart:
          state.cart.filter((item) =>
            item.id !== action.payload)

      }
    case "REMOVE_VIEWITEM":
      return {
        ...state, viewProduct:
          state.viewProduct.filter((item) =>
            item.id !== action.payload)

      }
    case "CHECK_OUT":
      return { ...state, cart: [] }
    default:
      return state;
  }
}