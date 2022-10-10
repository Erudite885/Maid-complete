import React, { useState } from "react";
import { DUMMYITEMSFOUR } from "./DUMMYITEMS";
import "./formfive.css";

const FormRadio = () => {
  const list = DUMMYITEMSFOUR;
  // console.log(list);
  
  // const [checked, setRadioChecked] = useState();
  // console.log(checked);

  // const isChecked = (value) => value === checked;
  // console.log(checked);

  //  const onSelect = (e) => {
  //    if(e.target.checked){
  //      setRadioChecked(e.target.value);
  //    } else {
  //      setRadioChecked(e.target.name);
  //    }
  // }
  // console.log(checked);

  // const classs = checked ? 'checked-input' : 'not-checked-item';

  //  *** the one below is working for unmapped radio list ***

   const [radioChecked, setRadioChecked] = useState("59");

  const isRadioChecked = (value) => value === radioChecked;
  console.log(radioChecked);

  const onSelect = ({ target: { value } }) => {
    setRadioChecked(value);
  }
  console.log(radioChecked);

 

  // *** the one above is working for unmapped radio list ***

  return (
    <div>
      {list.map(({ id, name, value, label }) => {  
         return (
           <>
             {" "}
             <input
               id={id}
               type={name}
              //  name={name}
               value={value}
               checked={isRadioChecked({ value })}
               onChange={onSelect}
             />
             <label
               htmlFor={id}
               key={id}
               className={radioChecked ? "checked-input" : "not-checked-item"}
             >
               {label}
             </label>
           </>
         );
      })} 
     
      <p>value of checked: ${radioChecked} </p> 
      <br />

      {/*  // comment the unmapped radio below
       <br></br>

      <div className="form-check">
        <input
          type="radio"
          name="radioSample"
          id="radio1"
          value="59"
          checked={isRadioChecked("59")}
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
          checked={isRadioChecked("30")}
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
          checked={isRadioChecked("61")}
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
          checked={isRadioChecked("10")}
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
          checked={isRadioChecked("60")}
          onChange={onSelect}
        ></input>{" "}
        <label className="form-check-label" htmlFor="radio5">
          clean inside windows
        </label>
      </div> */}
      <br />
      <br />
      <p>value: ${+radioChecked} </p>
    </div>
  );
};

export default FormRadio;
