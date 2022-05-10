import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notification from "../UI/Notification";
import MainHeader from "./MainHeader";
import Cart from "../Cart/Cart";
import Products from "../Shop/Products";

import { sendCartData, fetchCartData } from "../../store/cart-actions";

const Layout = () => {
  const dispatch = useDispatch()
  const { showCart, showNotification } = useSelector((state) => state.ui);
  const { changed, cartList: cart} = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (changed) dispatch(sendCartData(cart))
  }, [dispatch, cart, changed]);

  return (
    <Fragment>
      {showNotification && <Notification />}
      <MainHeader />
      {showCart && <Cart />}
      <Products />
    </Fragment>
  );
};

export default Layout;
