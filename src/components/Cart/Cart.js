import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);

  const renderedList = cartList.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <div className={styles.cart}>
      <h3>Your Shopping Cart</h3>
      {renderedList}
    </div>
  );
};

export default Cart;
