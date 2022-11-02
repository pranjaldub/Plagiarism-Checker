import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./containers/layout/header"
import InputTextComponent from "./components/inputText"


function App() {

  return (
    <div className="App">
      <Header></Header>
      <InputTextComponent></InputTextComponent>
    </div>

  );
}

export default App;
