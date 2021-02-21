import React, {useState} from 'react';
import './App.css';
import CsvForm from './components/CsvForm/CsvForm'

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
    e.preventDefault();
    console.log(state)
  }

  return (
    <CsvForm state={state} changeHandler={changeHandler} submitHandler={submitHandler}/>
  );
}

export default App;
