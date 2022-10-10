import React, { useState } from 'react'
import style from './form2.module.css'

const Form2 = () => {
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');   

    const selectHandler = (e) => {
        setBedroom(e.target.value);
        console.log(e.target.value);
    }

    const selectBathHandler = (e) => {
      setBathroom(e.target.value);
      console.log(e.target.value);
    }

  return (
    <div>
      <h1>Form 2</h1>
      <select
        id={bedroom}
        value={bedroom}
        onChange={selectHandler}
        className={style.serviceBedroom}
      >
        <option value="0" default>
          select Bedrooms
        </option>
        <option value="1 ">1 Bedroom</option>
        <option value="2 ">2 Bedrooms</option>
        <option value="3 ">3 Bedrooms</option>
        <option value="4 ">4 Bedrooms</option>
      </select>
      {bedroom && <h3>${bedroom} bedroom</h3>}
       {/* <div className={style.inputContainer}>
              <input
                className={style.serviceInput}
                type="number"
                placeholder="1500"
              />
              <label className={style.serviceInputLabel} htmlFor="">
                Square Footage
              </label>
            </div> */}

      <br />
      <select id={bathroom} value={bathroom} onChange={selectBathHandler}>
        <option value="0">select Bathrooms</option>
        <option value="1 ">1 Bathroom</option>
        <option value="2 ">2 Bathrooms</option>
        <option value="3 ">3 Bathrooms</option>
        <option value="4 ">4 Bathrooms</option>
        <option value="5 ">5 Bathrooms</option>
        <option value="6 ">6 Bathrooms</option>
        <option value="7 ">7 Bathrooms</option>
        <option value="8 ">8 Bathrooms</option>
      </select>
      {bathroom && <h3>${bathroom} bathroom</h3>}

      <br />
      <br />

      <h1>
        Total:{" "}
        <p>
          You selected: {bedroom ? `$${bedroom} bedrooms` : "0 Bedrooms"} and{" "}
          {bathroom ? `$${bathroom} bathrooms` : "0 Bathrooms"}
        </p>
        sumTotal: ${+bedroom + +bathroom}
        {console.log(+(bedroom) + +(bathroom))}
      </h1>
      
    </div>
  );
}

export default Form2;