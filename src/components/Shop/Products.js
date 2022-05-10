import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = (props) => {
  const productList = useSelector((state) => state.cart.products);

  const renderedItems = productList.map((item) => (
    <ProductItem
      id={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className={styles.products}>
      <h2>BUY YOUR FAVORITE PRODUCTS</h2>
      {renderedItems}
    </div>
  );
};

export default Products;
