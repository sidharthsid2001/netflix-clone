import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import {originals,action, HorrorMovies} from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url ={originals} title='Netflix Originals' type="tv" />
      <RowPost url ={action} title='Action' isSmall/>
      <RowPost url ={HorrorMovies} title='Horror' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
