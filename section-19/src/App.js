import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { uiActions } from "./store/ui-slice";

import { sendCartData } from "./store/cart-slice";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // const sendCartData = async function () {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );
    // const response = await fetch(
    //   "https://dev1-301218-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) {
    //   throw new Error("Sending cart data failed.");
    // }
    // dispatch(
    //   uiActions.showNotification({
    //     status: "success",
    //     title: "Success...",
    //     message: "Sent cart data successfully!",
    //   })
    // );
    // };

    // if (initial) {
    //   initial = false;
    //   return;
    // }

    // sendCartData().catch((error) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "error",
    //     title: "Error!",
    //     message: "Sending cart data failed!",
    //   })
    // );
    // });

    if (initial) {
      initial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
