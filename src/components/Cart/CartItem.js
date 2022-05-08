import Button from "../UI/Button";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles.description}>
        <h3>{props.title} Item</h3>
        <div className={styles.price}>
          <h3>${(props.amount * props.price).toFixed(2)}</h3>
          <span>(${props.price.toFixed(2)})/item</span>
        </div>
      </div>
      <div className={styles.amount}>
        <span>x<h3>{props.amount}</h3></span>
        <div className={styles.actions}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
