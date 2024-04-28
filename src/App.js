import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout (()=>{
      setAlert(null);
    }, 2000)
  }
 
  const toggleMode = () => {

    if ( mode === 'light' ) {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="MY First App" homeText="Home" aboutText="About Us" searchText="Search" searchPlaceholderText="Search Here" /> */}
      {/* <Alert alert = {alert}/>
      <TextForm showAlert = {showAlert} mode={mode} heading="Enter the text to analize below"/> */}
      {/* <About/> */}

      {/* <div>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Alert alert = {alert}/>
            <TextForm showAlert = {showAlert} mode={mode} heading="Enter the text to analize below"/>
          </Route>
        </Routes>
      </div>
      </Router> */}


      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="MY First App" homeText="Home" aboutText="About Us" searchText="Search" searchPlaceholderText="Search Here" />
        <div>
          <Alert alert={alert} />
          <Routes>
            {/* /about 
                /about/home  if we not use exact key for path it always return to about component
            */}
            <Route exact path="/about" element={<About  mode={mode} heading="About" />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analize below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
