import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from '../Validation/Final/Register';
import Login from '../Validation/Final/Login';
import Home from '../Home/Final/Home';
// import Contact from '../CONTACT/Contact';
import Application_Form from '../Loan_Applicant/Final/Loan';
import Contactmedia from '../CONTACT/@mediaContact';
import New_Loan from '../Loan_Applicant/New_Loan/New_Loan';
import Exists_Loan from '../Loan_Applicant/Exists-Loan/Exists_Loan';
import AdminViewLoanPage from '../Loan_Applicant/Final/AdminViewLoanPage';
import AdminViewContactPage from '../Home/Final/AdminViewContactPage';
// import UserViewLoanPage from '../Loanstatus/UserStatusLoanPage';
import UserStatusLoan from '../Loanstatus/UserStatusLoanPage';
import Main from '../MAIN/main';
// import Profile from '../Profile/Profile'
const Router = () => {
  return (
    <Routes>
            {/* <Route path="/" element={<Main/>} /> */}
            {/* <Route path="/" element={<Register/>} /> */}
            <Route path="/Log" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Log_out" element={<Login/>} />
            <Route path="/CONNAV" element={<Contactmedia/>} />
            <Route path="/AdminViewLoanPage" element={<AdminViewLoanPage/>} />
            <Route path="/AdminViewContactPage" element={<AdminViewContactPage/>} />
            <Route path="/FORM" element={<Application_Form/>} />
            {/* <Route path="/GOPROFILE" element={<Application_Form/>} /> */}
            {/* <Route path="/FORM" element={<Profile/>} /> */}
            <Route path="/USERSTATUS" element={<UserStatusLoan/>} />
            <Route path="/NEWLOAN" element={<New_Loan/>} />
            <Route path="/Exists_Loan" element={<Exists_Loan/>} />


    </Routes>
  )
}

export default Router