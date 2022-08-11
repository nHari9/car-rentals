import './App.css'
 import {Routes,Route} from "react-router-dom"
import Name from "./components/name"
import Date from "./components/date"
import Model from "./components/model"
import Type from "./components/typeofVeh";
import Wheels from "./components/noofwheels";
import Data from './components/data'
import React from 'react'

function App() {

  return (

    <div className="App">
      <Routes>
        <Route  path="/" element={<Name/>}/>
        <Route path="/wheels" element={<Wheels/>}/>
        <Route path="/type" element={<Type/>}/>
        <Route path="/model" element={<Model/>}/>
        <Route  path="/date" element={<Date/>}/>
        <Route  path="/data" element={<Data/>}/>
      </Routes>
    </div>
   
  )
}

export default App
