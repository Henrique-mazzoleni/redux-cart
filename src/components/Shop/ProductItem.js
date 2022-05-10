import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Button from '../UI/Button'

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
    const dispatch = useDispatch()
    
    const addToCartHandler = () => {
        dispatch(cartActions.addOne({
            id: props.id,
            title: props.title,
            price: +props.price,
            amount: 1,
        }))
    }

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <h3>{props.title}</h3>
        <span className={styles.price}>${props.price.toFixed(2)}</span>
      </div>
      <div className={styles.description}>
          <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
          <Button onAction={addToCartHandler} >Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
