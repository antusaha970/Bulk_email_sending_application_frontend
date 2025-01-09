import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SetConfigForm from "./components/SetConfigForm";
import AddMails from "./components/AddMails";
import { useState } from "react";
import { EmailAddressContext } from "./context";

function App() {
  const [mail_address, setMail_address] = useState([]);

  return (
    <EmailAddressContext.Provider value={[mail_address, setMail_address]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/set_config" element={<SetConfigForm />}></Route>
        <Route path="/add_mails" element={<AddMails />}></Route>
      </Routes>
    </EmailAddressContext.Provider>
  );
}

export default App;
