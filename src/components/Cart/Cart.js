import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const DUMMY_LIST = [
  {
    title: "Test",
    price: 6.0,
    amount: 3,
  },
];

const Cart = (props) => {
  const renderedList = DUMMY_LIST.map((item) => <CartItem title={item.title} price={item.price} amount={item.amount} />);

  return (
    <div className={styles.cart}>
      <h3>Your Shopping Cart</h3>
      {renderedList}
    </div>
  );
};

export default Cart;
