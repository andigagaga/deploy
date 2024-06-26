import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";
import { useNavigate } from "react-router-dom";

export default function CartItems() {
  const { all_product, cartItems, removeToCart, getTotalCartAmount } =
    useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    width: "150px",
                  }}
                >
                  <span
                    style={{ textDecoration: "line-through", color: "#9CAFAA" }}
                  >
                    Rp{e.old_price.toLocaleString("id-ID")}
                  </span>
                  Rp{e.new_price.toLocaleString("id-ID")}
                </p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p style={{ fontWeight: "bold", color: "#ff5722" }}>
                  Rp{(e.new_price * cartItems[e.id]).toLocaleString("id-ID")}
                </p>
                <img
                  className="cart-icon-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount().toLocaleString("id-ID")}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>Rp.{getTotalCartAmount().toLocaleString("id-ID")}</h3>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
