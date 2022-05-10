import { Fragment } from "react";
import { useSelector } from 'react-redux';

import MainHeader from "./MainHeader";
import Cart from "../Cart/Cart";
import Products from "../Shop/Products";

const Layout = () => {
    const showCart = useSelector(state => state.ui.showCart)

    return <Fragment>
        <MainHeader />
        {showCart && <Cart />}
        <Products />
    </Fragment>
}

export default Layout;