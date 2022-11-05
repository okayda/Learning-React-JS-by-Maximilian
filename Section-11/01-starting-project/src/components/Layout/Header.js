import { Frament } from "React";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = function (props) {
  return (
    <Frament className={classes.header}>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Frament>
  );
};

export default Header;
