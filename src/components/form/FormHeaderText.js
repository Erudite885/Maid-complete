import React from 'react';

import style from "./formHeaderText.module.css";

const FormHeaderText = () => {
  return (
    <section className={style.container}>
      <h3>book your cleaning service now</h3>
      <p>let us know what we can do for you.</p>
    </section>
  );
}

export default FormHeaderText;