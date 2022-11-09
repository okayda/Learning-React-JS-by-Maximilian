import CartContext from "./cart-context";

const CartProvider = function (props) {
  const addItemCartHandler = function (item) {};

  const removeItemFromCartHandler = function (id) {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
