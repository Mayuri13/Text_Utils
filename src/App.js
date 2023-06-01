import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

export default function App() {
  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not
  const [symbol, setsymbol] = useState('moon');
  const [color, setcolor] = useState('info');
  const [alert, setAlert] = useState(null);

  function showAlert(msg, type) {
    setAlert({
      msg: msg,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark" && symbol === "sun" && color === "secondary") {
      setmode("light");
      setsymbol("moon");
      setcolor("info")
      document.body.style.backgroundColor = "#c1e4f5";
      document.body.style.color = "black";
      showAlert("Light mode enabled","success")
    } else {
      setmode("dark");
      setsymbol("sun");
      setcolor("secondary")
      document.body.style.backgroundColor = "#19293a";
      document.body.style.color = "white";
      showAlert("Dark mode enabled","success")
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          link="About Me"
          mode={mode}
          symbol={symbol}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <div style={{ height: '50px' }}>
          <Alerts alert={alert} />
        </div>
        <div className='container my-3'>
          <TextForm title="Enter text to analyze" color={color} mode={mode} showAlert={showAlert}/>
        </div>

    </>
  )
}
