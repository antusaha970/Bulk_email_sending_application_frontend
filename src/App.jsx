import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SetConfigForm from "./components/SetConfigForm";
import AddMails from "./components/AddMails";
import { useState } from "react";
import {
  EmailAddressContext,
  LoginContext,
  PhoneNumberContext,
} from "./context";
import SendMail from "./components/SendMail";
import ViewMails from "./components/ViewMails";
import SpecificMail from "./components/SpecificMail";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import SetConfigFormSMS from "./components/SetConfigFormSMS";
import AddNumber from "./components/AddNumber";
import SendSMS from "./components/SendSMS";

function App() {
  const [mail_address, setMail_address] = useState([]);
  const [phone_number, setPhone_number] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <EmailAddressContext.Provider value={[mail_address, setMail_address]}>
        <PhoneNumberContext.Provider value={[phone_number, setPhone_number]}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/set_config"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <SetConfigForm />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/add_mails"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AddMails />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/send_mails"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <SendMail />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/view_mails"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ViewMails />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/view_mails/:id"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <SpecificMail />
                </PrivateRoute>
              }
            />
            <Route
              path="/set_config_for_sms"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <SetConfigFormSMS />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/add_number"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AddNumber />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/send_sms"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <SendSMS />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </PhoneNumberContext.Provider>
      </EmailAddressContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
