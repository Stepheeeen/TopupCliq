'use-client'
import React from "react";
// styling
import './index.css'
// Routes
// eslint-disable-next-line
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Authentication/Login/index'
import Signup from './Pages/Authentication/Signup/index'
import TransactionPin from './Pages/Authentication/TransactionPin/index'
import VerifyPin from './Pages/Authentication/VerifyPin/index'
import ForgetPassword from './Pages/Authentication/ForgetPassword/index'
import ResetPassword from './Pages/Authentication/ResetPassword/index'
import Dashboard1 from './Pages/Dashboard/UserDashboard/NotLoggedIn'
import Dashboard from './Pages/Dashboard/UserDashboard/LoggedIn'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/TransactionPin" element={<TransactionPin/>} />
        <Route path="/VerifyPin" element={<VerifyPin/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/TopupCliq" element={<Dashboard1/>} />
      </Routes>
    </Router>
  );
}

export default App;
