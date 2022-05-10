import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const Cart = () => {
  const { cartSize, cartList } = useSelector((state) => state.cart);

  const renderedList = cartList.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      amount={item.amount}
    />
  ));

  const empty = <p>Your cart is empty</p>;

  return (
    <div className={styles.cart}>
      <h3>Your Shopping Cart</h3>
      {cartSize ? renderedList : empty}
    </div>
  );
};

export default Cart;
