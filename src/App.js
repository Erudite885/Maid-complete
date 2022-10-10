import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './signUp/components/Layout/Layout';
// import UserProfile from "./signUp/components/Profile/UserProfile";
// import AuthPage from './signUp/pages/AuthPage';
// import HomePage from './signUp/pages/HomePage';
// import AuthContext from './signUp/store/auth-context';
// import UserProfile from './components/Profile/UserProfile';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import BookingPage from "./pages/BookingPage";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";


const App = () => {
  const authCtx = useContext(AuthContext);
    
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
         
          <Route path="/form" element={authCtx.isLoggedIn ? (<BookingPage />) : <Navigate to='/auth' />}></Route>
          {/* 'comment here' <Route path="/profile" element={<UserProfile />}></Route>  */}
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Layout>
      <Footer />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />}></Route>
          )}
          <Route
            path="/profile"
            element={
              authCtx.isLoggedIn ? <UserProfile /> : <Navigate to="/auth" />
            }
          ></Route>
        </Routes>
      </Layout> */}
    </>
  );
}

export default App;