import React from 'react';
// import FormFive from './components/FormFive';
import Form from './components/Form';
// import style from './App.module.css'
// import { DUMMY_DATA } from './components/dummy';
// import Card from './components/UI/Card';
// import { DUMMY_DATA } from "./components/dummyServices";
// import Form2 from './components/form2';
// import FormThree from './components/FormThree';
// import FormFour from './components/FormFour';
// import FormSix from "./components/FormSix";
// import FormRadio from './components/FormRadio';


const App = () => {
  
  // const formList = DUMMY_DATA[0].services.map((form) => (
  //   <li key={form.id} className={style.dummy}>
  //     <div>
  //       <h3>{form.name}</h3>
  //       <p>{form.price}</p>
  //       <span>{console.log(form)}</span>
      
  //     </div>
  //   </li>
    
  // ));
    
  return (
    <>
    
      <Form />
      <section>
        {/* <Card>
          <ul>{formList}</ul>
        </Card> */}
{/* 
        <Form2 />
<br/><br/><br/>
        <FormThree /> */}

        {/* <FormFour /> */}

        {/* <FormFive /> */}

        {/* <FormSix /> */}

        {/* <FormRadio /> */}
  
      </section>
    </>
  );
}

export default App;