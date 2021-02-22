import React, {useState, useEffect} from 'react';
import './App.css';
import CsvForm from './components/CsvForm/CsvForm';
import axios from 'axios';

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

  function submitHandler(e){
    const objt = {...state};
    e.preventDefault();
    console.log(objt)

    axios.post(
      'https://sheet.best/api/sheets/89f20199-b0c0-4f7c-a906-78597ed9678e', 
      objt
      )
    .then((response) => {
      console.log(response);
    });
  }

  useEffect(() => {
    axios.get(
      'https://sheet.best/api/sheets/89f20199-b0c0-4f7c-a906-78597ed9678e' 
      
      )
    .then((response) => {
      console.log(response.data, "< ---- = get request");
    });
  }, [])

  return (
    <CsvForm state={state} changeHandler={changeHandler} submitHandler={submitHandler}/>
  );
}

export default App;
