import React from 'react'
import style from "./headerText.module.css";


const HeaderText = () => {
  return (
    <main>
      <div className={style.container}>
        <h2>
          book in under 60 seconds. <span>fast and easy.</span>
        </h2>
        <p>Save Time and Money With Online Booking and Flat Rate Pricing!</p>
      </div>
    </main>
  );
}

export default HeaderText