import React, { useState } from "react"
import { Router } from "@reach/router"
import { CheckoutPage } from "../components/CheckoutPage"
import { Cart } from "../components/Cart"
import PrivateRoute from "../components/PrivateRoute"
import { SubmittedPage } from "../components/SubmittedPage"

const CartPage = () => {
  const [isProceedOrder, setIsProceedOrder] = useState(false)

  return (
    // Ended up doing it this way = to protect checkout and success routes from the user
    <Router basepath="/cart">
      <PrivateRoute
        component={CheckoutPage}
        path="/checkout"
        isPrivateVar={isProceedOrder}
      />
      <PrivateRoute
        component={SubmittedPage}
        path="/checkout/submitted"
        isPrivateVar={isProceedOrder}
      />
      <Cart path="/" setIsProceedOrder={setIsProceedOrder} />
    </Router>
  )
}

export default CartPage
