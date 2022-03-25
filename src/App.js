import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Router>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      <Footer />
    </Router>
</div>
  );
}

export default App;
