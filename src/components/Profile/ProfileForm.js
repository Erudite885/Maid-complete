import React, {useRef, useContext} from 'react'
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css'

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY(project specific key)]", {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assume it always succeeds
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='new-password'>New Password</label>
            <input type='password' id='new-password' ref={newPasswordInputRef} minLength='7'></input>
        </div>
        <div className={classes.action}>
            <button>Change Password</button>
        </div>
    </form>
  )
}

export default ProfileForm