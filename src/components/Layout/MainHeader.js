import CartButton from "../Cart/CartButton";

import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={styles.header}>
      <h2>ReduxCart</h2>
      <CartButton />
    </div>
  );
};

export default MainHeader;
