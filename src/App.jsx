import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SetConfigForm from "./components/SetConfigForm";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/set_config" element={<SetConfigForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
