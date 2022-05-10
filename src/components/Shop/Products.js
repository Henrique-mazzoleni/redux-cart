import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_LIST = [
  {
    title: "Test",
    price: 6.0,
    description: 'This is a first product - amazing!',
  },
];

const Products = (props) => {
  const renderedItems = DUMMY_LIST.map((item) => (
    <ProductItem title={item.title} price={item.price} description={item.description} />
  ));

  return (
    <div className={styles.products}>
      <h2>BUY YOUR FAVORITE PRODUCTS</h2>
      {renderedItems}
    </div>
  );
};

export default Products;
