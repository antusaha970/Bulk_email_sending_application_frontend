import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SetConfigForm from "./components/SetConfigForm";
import AddMails from "./components/AddMails";
import { useState } from "react";
import { EmailAddressContext } from "./context";
import SendMail from "./components/SendMail";
import ViewMails from "./components/ViewMails";
import SpecificMail from "./components/SpecificMail";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [mail_address, setMail_address] = useState([]);

  return (
    <EmailAddressContext.Provider value={[mail_address, setMail_address]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/set_config" element={<SetConfigForm />}></Route>
        <Route path="/add_mails" element={<AddMails />}></Route>
        <Route path="/send_mails" element={<SendMail />}></Route>
        <Route path="/view_mails" element={<ViewMails />}></Route>
        <Route path="/view_mails/:id" element={<SpecificMail />} />
      </Routes>
    </EmailAddressContext.Provider>
  );
}

export default App;
