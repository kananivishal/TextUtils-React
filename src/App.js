import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212121";
      showAlert("success", "Dark Mode Has Been Enabled")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Has Been Enabled")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/textutils/" element={
              <TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />
            } />
            <Route exact path="/about" element={
              <About mode={mode} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
