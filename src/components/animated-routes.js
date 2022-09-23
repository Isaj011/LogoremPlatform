import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation} from 'react-router-dom'
import AdminDashboard from '../pages/admin-dashboard';
import ForgotPass from '../pages/forgot-pass';
import ResetPass from '../pages/resetPass';
import Signin from '../pages/signin';
import DbLogin from './db-login';
import LoginVerify from './login-verify';

import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import { productInputs, userInputs } from "../formSource";
import "../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";



const  AnimatedRoutes = ()=> {
  // const { darkMode } = useContext(DarkModeContext);

    const location = useLocation()

    return (  

        <AnimatePresence>

        <Routes location={location} key={location.pathname}>
        <Route element={<Signin/>} path="/" exact/>
        <Route element={<ResetPass/>} path="/resetPassword"/>
        <Route element={<AdminDashboard/>} path="/admin"/>
        <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
        </Route>
        <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
        <Route element={<LoginVerify/>} path="/verify"/>          
        <Route element={<ForgotPass/>} path="/forgotpassword"/>          
        <Route element={<DbLogin/>} path="/dblogin"/>          
      </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;