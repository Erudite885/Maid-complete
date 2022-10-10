import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import style from "./AuthForm.module.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY(project specific key)]";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY(project specific key)]";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            let errorMessage = "Failed Authentication";
            // console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
        authCtx.login(data.idToken, expirationTime.toISOString);
        navigate("/", {replace: true}); // check for accuracy of this logic
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={style.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" required></input>
        </div>
        <div className={style.control}>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          ></input>
        </div>
        <div className={style.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request</p>}
          <button
            type="button"
            className={style.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
