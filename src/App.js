import React, {useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
//react-router

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
//toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase, { initializeApp } from 'firebase/app'

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"

import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './config/firebaseConfig';

//init firebase
const app = initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
