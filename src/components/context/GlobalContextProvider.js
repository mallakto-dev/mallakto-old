import React, { createContext } from "react"
import { toast } from "react-toastify"

export const GlobalContext = createContext()

/* Mad props to https://github.com/jamstack-cms/jamstack-ecommerce and @dabit3 for the shopping cart logic */

function calculateTotal(cart) {
  const total = cart.reduce((acc, next) => {
    const quantity = next.quantity
    acc = acc + JSON.parse(next.price) * quantity
    return acc
  }, 0)
  return total
}

function calculateCartItemsCount(cart) {
  if (cart.length) {
    const count = cart.reduce((acc, next) => {
      return acc + next.quantity
    }, 0)
    return count
  } else {
    return 0
  }
}

const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  total: 0,
}

const STORAGE_KEY = "MALLAKTO_CART_"

class GlobalContextProvider extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (!storageState) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
      }
    }
  }

  setItemQuantity = item => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cartItems } = storageState
    const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
    cartItems[index].quantity = item.quantity
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cartItems,
        cartItemsCount: calculateCartItemsCount(cartItems),
        total: calculateTotal(cartItems),
      })
    )
    this.forceUpdate()
  }

  addToCart = item => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cartItems } = storageState
    if (cartItems.length) {
      const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
      if (index >= Number(0)) {
        /* If this item is already in the cartItems, update the quantity */
        cartItems[index].quantity = cartItems[index].quantity + item.quantity
      } else {
        /* If this item is not yet in the cartItems, add it */
        cartItems.push(item)
      }
    } else {
      /* If no items in the cartItems, add the first item. */
      cartItems.push(item)
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cartItems,
        cartItemsCount: calculateCartItemsCount(cartItems),
        total: calculateTotal(cartItems),
      })
    )

    toast("Товар добавлен в корзину", {
      position: toast.POSITION.TOP_RIGHT,
    })

    this.forceUpdate()
  }

  removeFromCart = item => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    let { cartItems } = storageState
    cartItems = cartItems.filter(c => c.id !== item.id)

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cartItems: cartItems,
        cartItemsCount: calculateCartItemsCount(cartItems),
        total: calculateTotal(cartItems),
      })
    )
    this.forceUpdate()
  }

  clearCart = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
    this.forceUpdate()
  }

  render() {
    let state = initialState
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (storageState) {
        state = JSON.parse(storageState)
      }
    }

    return (
      <GlobalContext.Provider
        value={{
          ...state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          setItemQuantity: this.setItemQuantity,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContextProvider
