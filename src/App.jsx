import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Pharmacy from './components/Pharmacy';
import Ambulance from './components/Ambulance';
import Appointments from './components/Appointments'
import Departments from './components/Departments';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <div>
        <Navbar/>
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pharmacy" element={<Pharmacy/>} />
                <Route path="/Departments" element={<Departments/>} />
                <Route path="/Appointments" element={<Appointments/>} />
                <Route path="/Ambulance" element={<Ambulance/>} />
                <Route path="/Login" element={<SignIn/>} />
                <Route path="/SignIn" element={<SignIn/>} />
            </Routes>
        </>
        <Footer/>
    </div>
    </Router>
  )
}

export default App;
  