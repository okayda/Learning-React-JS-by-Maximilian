import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const products = useSelector((state) => state.items);
  const dispatch = useDispatch();

  console.log(products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products &&
          products.map((item) => {
            return (
              <CartItem
                key={item.id}
                dispatch={dispatch}
                item={{
                  title: item.title,
                  quantity: item.quantity,
                  total: `$${item.quantity * item.price}`,
                  price: item.price,
                }}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default Cart;
