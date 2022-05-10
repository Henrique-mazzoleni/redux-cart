import { useSelector, useDispatch } from "react-redux";
import { uiActions } from '../../store/ui-slice';

import Button from "../UI/Button";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch()
  const cartSize = useSelector(state => state.cart.cartSize)

  const cartToggleHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <Button onAction={cartToggleHandler} className={styles.button}>
      My Cart <span className={styles['cart-size']}>{cartSize}</span>
    </Button>
  );
};

export default CartButton;
