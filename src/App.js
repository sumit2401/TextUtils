// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import Alert from './components/Alert';

import TextForm from './components/TextForm';

// let name = "Sumit";
// let surname = "Patel"
function App() {
  const [mode, setMode]= useState('light'); //whether dark mode is enable or not
    const[alert, setAlert]= useState(null);
    
    const showAlert = (message, type)=>{// creating js object
      setAlert({
        msg: message,
        Type: type
      })
    }
  const toggleMode = ()=>{
    if(mode==='light'){ 
    setMode('dark'); 
    document.body.style.backgroundColor='#221f1f';
    showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable", "success")
    }

  }

  return (
    <div>
     <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <div className="container mb-3">
  
      <TextForm showAlert={showAlert} heading='Enter the details for verification' mode={mode} />
       {/* <AboutUs/> */}
      </div> 
     
    </div>
  );
}

export default App;
