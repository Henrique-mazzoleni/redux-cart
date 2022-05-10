import { useSelector } from "react-redux";

import Button from "../UI/Button";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const cartSize = useSelector(state => state.cart.cartSize)

  return (
    <Button className={styles.button}>
      My Cart <span className={styles['cart-size']}>{cartSize}</span>
    </Button>
  );
};

export default CartButton;
