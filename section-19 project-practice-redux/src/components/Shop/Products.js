import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const dispatch = useDispatch();

  const id = "SAL123";

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={id}
          dispatch={dispatch}
          title="Sardines"
          price={6}
          description="Best sardines in the world"
          quantity={1}
        />
      </ul>
    </section>
  );
};

export default Products;
