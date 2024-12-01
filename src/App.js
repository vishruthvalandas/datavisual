import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dataiteration from './components/Dataiteration';

import Total from './components/Total';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Total />}/>
        <Route path="/dataview" element={<Dataiteration />}/>
      </Routes>
    

     {/* <Total/> */}
    </div>
  );
}

export default App;
