import React, { useState } from 'react';
import { DUMMYITEMS, DUMMYITEMSTWO } from './DUMMYITEMS';

const FormThree = () => {
  const [bag, setBag] = useState();
  const [baggage, setBaggage] = useState();

  const selectHandler = (e) => {
    setBag(e.target.value);
    console.log(e.target.value);
  };

  const selectSecondHandler = (e) => {
    setBaggage(e.target.value);
    console.log(e.target.value);
  };

  let totalbag = +bag ;
  let totalbaggage = +baggage;
  
  return (
    <div>
      <h1>FormThree</h1>
      <select onChange={selectHandler} id={bag} value={bag}>
        {DUMMYITEMS.map((item) => (
          <option key={item.id} value={item.price}>
            {item.name}
          </option>
        ))}
      </select>
      <select onChange={selectSecondHandler} id={baggage} value={baggage}>
        {DUMMYITEMSTWO.map((item) => (
          <option key={item.id} value={item.price}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      <br />
      <br />
      You selected: {bag ? `$${bag} bags` : "0 Bags"},{" "}
      {baggage ? `$${baggage} baggages` : "0 baggages"}
      <br />
      You are to pay a total of ${totalbag + totalbaggage} only.
      <br />
    </div>
  );
}


export default FormThree;