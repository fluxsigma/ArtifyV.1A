import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar.jsx"
import Artify from "./Artify"

function App() {
  return (
    <div className="app">

<Navbar/> 

<Routes>


<Route path="/" element={<Artify />} />
<Route path="/tryartify" element={<Home />} />


</Routes>

 


    </div>
  );
}

export default App;
