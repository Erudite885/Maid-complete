import React, { useState } from "react";
import { DUMMYITEMSTHREE } from "./DUMMYITEMS";
import "./formfive.css";

const FormRadio = () => {
  const list = DUMMYITEMSTHREE;
  console.log(list);
  
  // const [checked, setChecked] = useState();
  // console.log(checked);

  // const isChecked = (value) => value === checked;
  // console.log(checked);

  //  const onSelect = (e) => {
  //    if(e.target.checked){
  //      setChecked(e.target.value);
  //    } else {
  //      setChecked(e.target.name);
  //    }
  // }
  // console.log(checked);

  // const classs = checked ? 'checked-input' : 'not-checked-item';

  //  *** the one below is working for unmapped radio list ***

   const [checked, setChecked] = useState("59");

  const isChecked = (value) => value === checked;
  console.log(checked);

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
  }
  console.log(checked);

  console.log(checked);

  // *** the one above is working for unmapped radio list ***

  return (
    <div>
      {/* {list.map(({ id, name, value, label }) => {  */}
      {/* //      return (
  //        <label key={id} className={checked ? 'checked-input' : 'not-checked-item'}>
  //          <input */}
      {/* //          id={id}
  //            type={name}
  //            name={name}
  //            value={value}
   //           checked={isChecked({value})}
   //           onChange={onSelect}
   //         /> */}
      {/* //        {label}
      //    </label>
      //  );
      //})} 
     
      // {/* <p>value of checked: ${checked} </p> */}
      {/* <br /> */}
      <br></br>

      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio1"
          value="59"
          checked={isChecked("59")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio1">
          deep cleaning
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio2"
          value="30"
          checked={isChecked("30")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio2">
          clean inside kitchen cabinets
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio3"
          value="61"
          checked={isChecked("61")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio3">
          finished basement
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio4"
          value="10"
          checked={isChecked("10")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio4">
          we have pets
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio5"
          value="60"
          checked={isChecked("60")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio5">
          clean inside windows
        </label>
      </div>
      <br />
      <br />
      <p>value: ${+checked} </p>
    </div>
  );
};

export default FormRadio;
