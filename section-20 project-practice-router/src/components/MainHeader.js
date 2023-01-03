import { NavLink } from "react-router-dom";
import classes from "./layout/MainNavigation.module.css";

const MainHeader = function () {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Quotes</h1>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
