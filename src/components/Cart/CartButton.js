import Button from "../UI/Button";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <Button className={styles.button}>
      My Cart <span className={styles['cart-size']}>1</span>
    </Button>
  );
};

export default CartButton;
