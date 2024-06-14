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
import Transactions from './Pages/Transactions/index'
import Beneficiaries from './Pages/Beneficiaries/index'
import Settings from './Pages/Settings/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/transactionPin" element={<TransactionPin/>} />
        <Route path="/verifyPin" element={<VerifyPin/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/resetPassword" element={<ResetPassword/>} />
        <Route path="/topupCliq" element={<Dashboard1/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/beneficiaries" element={<Beneficiaries/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
