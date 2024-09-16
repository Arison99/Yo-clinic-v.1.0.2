import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Assets/Home';
import Footer from './Assets/Footer';
import SignIn from './Assets/SignIn';
import Pharmacy from './Assets/Pharmacy';
import Ambulance from './Assets/Ambulance';
import Appointments from './Assets/Appointments'
import Departments from './Assets/Departments';
import Navbar from './Assets/Navbar';


function App() {
  return (
    <Router>
    <div class="flex flex-col min-h-screen">
        <Navbar/>
        <div class="flex-grow">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pharmacy" element={<Pharmacy/>} />
                <Route path="/Departments" element={<Departments/>} />
                <Route path="/Appointments" element={<Appointments/>} />
                <Route path="/Ambulance" element={<Ambulance/>} />
                <Route path="/Login" element={<SignIn/>} />
                <Route path="/SignIn" element={<SignIn/>} />
            </Routes>
        </div>
        <Footer/>
    </div>
    </Router>
  )
}

export default App;
  