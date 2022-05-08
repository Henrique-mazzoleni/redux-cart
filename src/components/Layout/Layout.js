import { Fragment } from "react";

import MainHeader from "./MainHeader";
import Cart from "../Cart/Cart";
import Products from "../Shop/Products";

const Layout = (props) => {
    return <Fragment>
        <MainHeader />
        <Cart />
        <Products />
    </Fragment>
}

export default Layout;