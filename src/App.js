import React from "react";
import { Router, Route, Routes } from "react-router";
import Login from './Pages/Authentication/Login/index'
import Signup from './Pages/Authentication/Signup/index'
import TransactionPin from './Pages/Authentication/TransactionPin/index'
import VerifyPin from './Pages/Authentication/VerifyPin/index'
import ForgetPassword from './Pages/Authentication/ForgetPassword/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/TransactionPin" element={<TransactionPin/>} />
        <Route path="/VerifyPin" element={<VerifyPin/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
