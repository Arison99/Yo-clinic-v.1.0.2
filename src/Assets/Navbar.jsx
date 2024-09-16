import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";

function Navbar () {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    return (
   //navigation bar
 
   <div class="relative">
   <header class="absolute inset-x-0 top-0 z-10 w-full">
       <div class="px-4 mx-auto sm:px-6 lg:px-8">
           <div class="flex items-center justify-between h-16 lg:h-20">
               <div class="flex-shrink-0">
                   <a href="#" title="" class="flex">
                       <img class="w-auto h-8" src="./Images/Logo.png" alt="" />
                   </a>
               </div>
  
               <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                   
                   <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                   </svg>
  
                   
                   <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                   </svg>
               </button>
  
               <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                   <Link to="/" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
  
                   <Link to="/Pharmacy" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pharmacy </Link>
  
                   <Link to="/Departments" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Departments </Link>
  
                   <Link to="/Appointments" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Appointments </Link>
  
                   <Link to="/Ambulance" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Ambulance </Link>

                   <div>
                    {isLoggedIn ? (
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    ) : (
                        <>
                         <Link to="/Signup" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600" role="button"> Login </Link>
                         <Link to="/signup" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600" role="button"> Sign Up </Link>

                        </>
                    )}
                   </div>
  
                  
               </div>
           </div>
       </div>
   </header>
  
   
  
  
  </div>

    )
}

export default Navbar;