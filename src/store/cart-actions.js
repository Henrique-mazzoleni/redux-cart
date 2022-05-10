import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const FIREBASE_URL =
  "https://reduxcart-api-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "loading",
        result: "Loading...",
        message: "Cart data is being sent.",
      })
    );

    const putData = async () => {
      const response = await fetch(FIREBASE_URL, {
        method: "PUT",
        body: JSON.stringify(cartData),
      });

      if (!response.ok) throw new Error("Unable to send cart data to Database");
    };

    try {
      await putData();
      dispatch(
        uiActions.setNotification({
          status: "success",
          result: "Success!",
          message: "Cart data sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "failed",
          result: "Failed!",
          message: "Unable to send cart data.",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "loading",
        result: "Loading...",
        message: "Retrieving cart data.",
      })
    );

    const fetchData = async () => {
      const response = await fetch(FIREBASE_URL);

      if (!response.ok) throw new Error('Not able to retrieve data.')

      const data = await response.json();
      console.log('fetching data');
      dispatch(cartActions.setCart(data || []));
    };

    try {
      await fetchData();
      dispatch(
        uiActions.setNotification({
          status: "success",
          result: "Success!",
          message: "Cart data retrieved successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "failed",
          result: "Failed!",
          message: "Unable to retrieve cart data.",
        })
      );
    }
  };
};
