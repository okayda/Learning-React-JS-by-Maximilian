import classes from "./CartItem.module.css";
import { cartActions } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const id = "SAL123";

  const increaseQuantity = function () {
    props.dispatch(cartActions.addIncrease({ id: id }));
  };

  const decreaseQuantity = function () {
    props.dispatch(cartActions.decrease({ id: id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <span>{total} </span>
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantity}>-</button>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
