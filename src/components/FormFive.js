import React, { useState } from 'react';
import { checkList } from './checkList';

import "./formfive.css";


const FormFive = () => {
    
    const [checked, setChecked] = useState([]);

    const handleCheck = (e) => {
        let upL = [...checked];
        if (e.target.checked) {
            upL = [...checked,  e.target.value];
        } else {
            upL.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(upL);
    }

    const checkedItems = checked.length ? checked.reduce((total, item) => {
        return +total + +item
    }) : '';
   
    
    let isChecked = (item) => checked.includes(item) ? "checked-item" : "checkInput";
      
console.log(checked.includes());

  return (
    <div>
      <div className="checkList">
        <div className="title">Your checkList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div className={isChecked(item)} key={index}>
              <input
                onChange={handleCheck}
                type="checkbox"
                value={item.price}
              />
              <span>{item.price}</span>
              {/* <p>total value of items checked: ${item.price}.</p> */}
              {/* {console.log(checked)} */}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <p>{`items checked are: $${checkedItems}`} </p>
      <br />
      <br />
      {/* <p>Price: $0</p> */}
    </div>
  );
}

export default FormFive;