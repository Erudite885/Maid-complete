import React from 'react'
// import Header from "./components/header/Header";
// import Footer from "./footer/Footer";
// import Header from './';

const Layout = (props) => {
  return (
    <>
        {/* <Header /> */}
        <main>{props.children}</main>
        {/* <Footer/> */}
    </>
  )
}

export default Layout