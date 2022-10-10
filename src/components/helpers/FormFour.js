import React, { useState } from 'react';
import { BsHeart } from "react-icons/bs";
import { DUMMYITEMSTHREE } from './DUMMYITEMS';
import "./formfive.css";

const FormFour = () => {
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState([]);
  
  const list = DUMMYITEMSTHREE;

  const handleCheck = (e) => {
  
    let updatedList = [...checked];
    let totalValue = [...value];
    
    if (e.target.checked) {
      updatedList = [...checked, e.target.name];
      totalValue = [...value, e.target.value];
   
    } else {
      updatedList.splice(checked.indexOf(e.target.name), 1);
      totalValue.splice(value.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
    setValue(totalValue);
    console.log(totalValue);
  };



  const checkedItems = checked.length ? checked.reduce((total, item) => {
    return total + ', ' + item;
  }) : "no items checked yet...";

  let total = value.length ? value.reduce((total, item) => {
    return +total + +item;
  }) : 0;
  console.log(total)

  let isChecked = (item) => 
  checked.includes(item) ? 'checked-item' : 'not-checked-item';
  
  return (
    <>
      <h1>formFour4</h1>
      {list.map((item) => (
        <label className={isChecked(item.name)} key={item.id}>
          <input
            onChange={handleCheck}
            value={item.price}
            name={item.name}
            type="checkbox"
          ></input>
          {item.name}
          <BsHeart />
        </label>
      ))}
      <p>{`items checked are: ${checkedItems}`}</p>
      <br />
      <br />
      <p>Total value of checked items: ${total}</p>
    </>
  );
}

export default FormFour;