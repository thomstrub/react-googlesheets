import React, {useState} from 'react';
import './App.css';
import CsvForm from './components/CsvForm/CsvForm'
import axios from 'axios'

function App() {

  const [state, setState] = useState({
    name: "",
    age: "",
    salary: "",
    hobby: ""
  });

  function changeHandler(e){
    setState({
      ...state,
      [e.target.name] : e.target.value
    });
  }
  // https://sheet.best/api/sheets/89f20199-b0c0-4f7c-a906-78597ed9678e
  function submitHandler(e){
    e.preventDefault();
    console.log(state)

    axios.post('https://sheet.best/api/sheets/89f20199-b0c0-4f7c-a906-78597ed9678e', state)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <CsvForm state={state} changeHandler={changeHandler} submitHandler={submitHandler}/>
  );
}

export default App;
