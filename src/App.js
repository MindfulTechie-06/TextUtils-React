// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'; 
import './Components/Textformstyle.css';
import Alert from './Components/Alert';

import Acc from './Components/Acc'; // Importing the Acc component
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState('light');
  const [text1, settext1] = React.useState('Enable light Mode');
  const [alert, setAlert] = React.useState(null);

  const [Bgcolor, setBgColor] = React.useState('white');

  const changeColor = (color) => {
    switch (color) {   // ✅ fixed: use parameter "color", not Bgcolor
      case "red":
        setBgColor("red");
        document.body.style.backgroundColor = "red";
        break;
      case "blue":
        setBgColor("blue");
        document.body.style.backgroundColor = "blue";
        break;
      case "green":
        setBgColor("green");
        document.body.style.backgroundColor = "green";
        break;
      case "yellow":
        setBgColor("yellow");   
        document.body.style.backgroundColor = "yellow";
        break;
      default:
        setBgColor("white");
        document.body.style.backgroundColor = "white";
    }
    showAlert(`Color changed to ${color}`, 'success');
  };  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 4500);
  };

  React.useEffect(() => {
    document.title = 'TestUtils';
  }, []);

  const togglemode = () => {
    if (mode === 'light') {
      settext1('Enable Light Mode');
      setMode('dark');
      showAlert('Dark Mode has been enabled', 'success');
      document.body.style.backgroundColor = '#212529';
    } else {
      setMode('light');
      settext1('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
      <Navbar 
        title="TestUtils" 
        mode={mode} 
        text={text1} 
        onColorChange={changeColor}   // ✅ pass as prop
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container">
        
        <Switch>
        {/* <Route exact path="/" component={Textform} /> */}
        <Route path='/about'>

        <Acc/>
        </Route>
<Route path='/home'>
        <Textform  
          showAlert={showAlert} 
          heading="Text Area" 
          mode={mode} 
          onColorChange={changeColor} 
        />
        </Route>
        
      </Switch>
        
      </div>
      </Router>
    </>
  );
}

export default App;
