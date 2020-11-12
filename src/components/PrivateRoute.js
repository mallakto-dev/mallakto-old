import React from "react"
import { navigate } from "gatsby"


const PrivateRoute = ({ component: Component, location, isPrivateVar, ...rest }) => {
  if (!isPrivateVar && (location.pathname !== `/cart/checkout` || location.pathname !== `/cart/checkout/submitted`)) {
    navigate("/cart")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute