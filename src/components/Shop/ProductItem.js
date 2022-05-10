import Button from '../UI/Button'

import styles from "./ProductItem.module.css";



const ProductItem = (props) => {
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
          <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
