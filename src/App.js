//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not

  const toggleMode = () => {  // function to toggle dark/light mode.

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#090824"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("light Mode has been enabled", "success")
    }
  }


  const [alert, setAlert] = useState(null)  // To show alerts of confirmations when buttons are used

  const showAlert = (message, type) => {    // Function to show the alert message.
    setAlert({
      msg: message,
      type: type
    })
    setTimeout((showAlert) => {
      setAlert(null);
    }, 3500);
  }


  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About mode={mode} />}></Route>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

