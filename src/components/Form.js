import React, { useState } from 'react';
import { BsHeart } from "react-icons/bs";


import { DUMMYITEMS, DUMMYITEMSTWO, DUMMYITEMSTHREE } from './DUMMYITEMS';
import style from './form.module.css';


const Form = () => {
  const [dropdownbedroom, setDropdownBedroom] = useState("");
  const [dropdownbathroom, setDropdownBathroom] = useState("");
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState([]);
  const [radioChecked, setRadioChecked] = useState("59");

  const list = DUMMYITEMSTHREE;

  const dropdownbedroomHandler = (e) => {
    setDropdownBedroom(e.target.value);
    console.log(e.target.value);
  }

  const dropdownbathroomHandler = (e) => {
    setDropdownBathroom(e.target.value);
    console.log(e.target.value);
  };

  let dropdownTotal = +dropdownbedroom + +dropdownbathroom;

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

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "no items checked yet...";

  let totalChecked = value.length
    ? value.reduce((total, item) => {
        return +total + +item;
      })
    : 0;
  console.log(totalChecked);

  let isChecked = (item) =>
    checked.includes(item) ? style.checkedItem : style.notCheckedItem;

    
  const isRadioChecked = (value) => value === radioChecked;
  console.log(radioChecked);

  const onRadioSelect = (e) => {
    setRadioChecked(e.target.value);
  };
  console.log(radioChecked);

  return (
    <section className={style.formSection}>
      <form className={style.formControl}>
        <div className={style.serviceSection}>
          <h2 className={style.serviceHeader}>Choose your service</h2>
          <p className={style.serviceText}>
            Our flat rate pricing applies to whole home cleanings. For extra
            large or extra dirty homes the price maybe more. For partial home
            cleans please call us.
          </p>
          <div className={style.serviceContainer}>
            <select
              value={dropdownbedroom}
              onChange={dropdownbedroomHandler}
              className={style.serviceBedroom}
            >
              {DUMMYITEMS.map((item) => (
                <option key={item.id} value={item.price}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              value={dropdownbathroom}
              onChange={dropdownbathroomHandler}
              className={style.serviceBathroom}
            >
              {DUMMYITEMSTWO.map((item) => (
                <option key={item.id} value={item.price}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p>
          {" "}
          You selected:{" "}
          {dropdownbedroom
            ? `$${dropdownbedroom} bedrooms`
            : "0 Bedrooms"} and{" "}
          {dropdownbathroom ? `$${dropdownbathroom} bathrooms` : "0 Bathrooms"}
        </p>

        <p> The total will be {dropdownTotal ? `$${dropdownTotal}` : "$0"}. </p>
        {console.log(dropdownTotal)}

        <hr />
        <section className={style.extrasSection}>
          <h2 className={style.a}>Select extras</h2>
          <p className={style.a}>
            Select any additional items you need cleaned. We recommend a deep
            cleaning if your home hasn't been regularly maintained. Any add-ons
            must be selected with all types of cleanings.
          </p>
          <div className={style.extrasWrapper}>
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
            <p>Total value of checked items: ${totalChecked}</p>
          </div>
        </section>
        <hr />

        <section className={style.radioSection}>
          <h2 className={style.radiobuttonHeading}>
            How often should we come?
          </h2>
          <p className={style.radiobuttonText}>
            You can change this at any time. Recurring discounts apply after the
            first cleaning.
          </p>
          <div className={style.radioInputLabelContainer}>
            <input
              type="radio"
              name="radioSample"
              id="radio1"
              value="59"
              checked={isRadioChecked("59")}
              onChange={onRadioSelect}
            ></input>
            <label className={style.radioLabel} htmlFor="radio1">
              One Time Cleaning
            </label>
          </div>
          <div className={style.radioInputLabelContainer}>
            <input
              type="radio"
              name="radioSample"
              id="radio2"
              value="30"
              checked={isRadioChecked("30")}
              onChange={onRadioSelect}
            ></input>
            <label className={style.radioLabel} htmlFor="radio2">
              Every Week
            </label>
          </div>
          <div className={style.radioInputLabelContainer}>
            <input
              type="radio"
              name="radioSample"
              id="radio3"
              value="61"
              checked={isRadioChecked("61")}
              onChange={onRadioSelect}
            ></input>
            <label className={style.radioLabel} htmlFor="radio3">
              Every 2 Weeks
            </label>
          </div>
          <div className={style.radioInputLabelContainer}>
            <input
              type="radio"
              name="radioSample"
              id="radio4"
              value="10"
              checked={isRadioChecked("10")}
              onChange={onRadioSelect}
            ></input>
            <label className={style.radioLabel} htmlFor="radio4">
              Every 4 Weeks
            </label>
          </div>
          <p>value: ${+radioChecked} </p>
        </section>
        <hr />

        {/* <section className={style.contactSection}>
          <h2 className={style.contactHeader}>Contact Information</h2>
          <p className={style.contactText}>Let us know how we can reach you.</p>
          <div className={style.contactInputContainer}>
            <input
              className={style.contactInput}
              type="text"
              placeholder="First Name**"
            ></input>
            <input
              className={style.contactInput}
              type="text"
              placeholder="Last Name**"
            ></input>
            <input
              className={style.contactInput}
              type="email"
              placeholder="Email**"
            ></input>
            <input
              className={style.contactInput}
              type="tel"
              placeholder="Phone**"
            ></input>
          </div>
        </section>
        <hr /> */}

        {/* <section className={style.serviceSection}>
          <h2 className={style.a}>Service Address</h2>
          <p className={style.a}>Where would like us to clean?</p>
          <div className={style.addressInputContainer}>
            <input
              className={style.addressInputItem}
              type="text"
              placeholder="Address**"
            ></input>
            <input
              className={style.addressInputItem}
              type="number"
              placeholder="Apt/Suite #"
            ></input>
            <select>
              <option>State**</option>
            </select>
            <input
              className={style.addressInputItem}
              type="text"
              placeholder="City**"
            ></input>
            <input
              className={style.addressInputItem}
              type="number"
              placeholder="Zip Code**"
            ></input>
          </div>
        </section>
        <hr /> */}

        {/* <section className={style.timeDateSection}>
          <h2 className={style.timeDateHeader}>
            When would you like us to come?
          </h2>
          <p className={style.timeDateText}>
            Please choose a date and time that works for you. If your preferred
            time isn't listed feel free to call us to see if we can make it
            work.
          </p>
          <div className={style.timeDateInputContainer}>
            <input
              className={style.timeDateInput}
              type="date"
              placeholder="Click to Choose a Date"
            ></input>
            <input className={style.timeDateInput} type="time"></input>
          </div>
        </section>
        <hr /> */}

        {/* <section className={style.discountSection}>
          <h2 className={style.discountHeader}>Discount code</h2>
          <div className={style.discountInputContainer}>
            <input
              className={style.discountInput}
              type="text"
              placeholder="Discount Code (or leave this blank) *"
            ></input>
            <button className={style.discountButton}>Apply</button>
          </div>
        </section>
        <hr /> */}

        {/* <section className={style.paymentSection}>
          <h2 className={style.paymentHeader}>Payment details</h2>
          <p className={style.paymentText}>
            Enter your card information below. Don't worry, you won't be charged
            until after service has been rendered.
          </p>
          <div className={style.paymentInputContainer}>
            <input
              className={style.paymentInput}
              type="number"
              placeholder="Card Number"
            ></input>
            <input className={style.paymentInput} type="text"></input>
          </div>
          'comment this line' <p className={style.a}>insert image here, connect via stripe</p> 
          <p className={style.paymentTextAuth}>
            I authorize Maid Complete to charge my credit card above for agreed
            upon purchases. I understand that my information will be saved to
            file for further transactions on my account.
          </p>
        </section>
        <hr /> */}

        {/* <section className={style.textAreaHeader}>
          <h2 className={style.a}>Anything else we should know?</h2>
          <textarea
            className={style.a}
            name="message"
            rows="5"
            cols="30"
            placeholder="Please provide any special instructions here."
          ></textarea>
        </section>
        <hr /> */}
        {/* <FormOutput />
        <section className={style.agreementSection}>
          <p className={style.agreementNoticeTerms}>
            By clicking the Book Now button you are agreeing to our Terms of
            Service and Privacy Policy.
          </p>
          <p className={style.agreementNoticeBills}>
            Don't worry, you won't be billed until the day of service and you
            will receive an email receipt instantly. We no longer acccept cash
            or checks.
          </p>
          <button className={style.bookNowButton}>Book Now</button>
        </section> */}
      </form>
    </section>
  );
}

export default Form;