import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import {originals,action} from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url ={originals} title='Netflix Originals' type="tv" />
      <RowPost url ={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
