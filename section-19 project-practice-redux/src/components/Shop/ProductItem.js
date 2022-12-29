import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store";

const ProductItem = (props) => {
  const { id, title, price, description, quantity } = props;

  const addProduct = function () {
    props.dispatch(
      cartActions.addIncrease({ id, title, price, description, quantity })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProduct}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
