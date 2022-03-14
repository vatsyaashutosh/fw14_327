import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [t,tSet] =useState(false);
  return (
    <div className="App">
      {t?<AddHouse/>:<Rentals/>}
      <button onClick={()=>{
          tSet(!t)}
        } className="toggleForm">
        toggleForm
      </button>
      {}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
