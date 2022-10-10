import React, {useContext} from "react";
import { Link } from "react-router-dom"
import AuthContext from "../../store/auth-context"

import style from "./headerNav.module.css";

const HeaderNav = () => {
  const  authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <header className={style.header}>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="form">Book Now</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
