import React from "react";
import { Link } from "react-router-dom";
import classes from "../App.css";
import cartLogo from "./images/shopping-cart.png";

function CartScreen(props) {
  return (
    <Link
      className={classes.Cart}
      to={{
        pathname: "/shoppingCart",
        state: { cart: props.cart }
      }}
    >
      <img src={cartLogo} style={{ height: "18px" }} alt="shopping_cart" />
      &#40;{props.cartAmount}&#41;
    </Link>
  );
}

export default CartScreen;
