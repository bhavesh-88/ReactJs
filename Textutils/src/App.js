import './App.css';
import React from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';

function App() {
  const [Mode, setMode] = React.useState('light');
  const [alert, setAlert] = React.useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = (cls) => {
    // removeBodyClasses()
    // console.log(cls);
    // document.body.classList.add("bg-"+cls);
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  };
//   const removeBodyClasses = ()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')
// }
  return (
    <>

      <Navbar title="Textutils" aboutText="About Textutils" mode={Mode} toogleMode = {toggleMode} />
      <Alert alert= {alert}/>
      <div className='container'>
        <Form showAlert={showAlert} heading="Enter the text" mode={Mode}/>
      </div>
    </>
  );
}

export default App;
