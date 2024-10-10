import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/authSlice";

const SignIn = () => {
    const [name, setName]  = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ name, email, password}));
    };
    
    return(
        // Sign in page
     <form onSubmit={handleSubmit} 
            className="max-w-xl mx-auto mt-8 bg-white lg:mx-0
                    sm:bg-transparent lg:mt-12 rounded-xl">
            <div>
            <div>
                <label htmlFor="Name" className="">
                </label>
                    <input 
                     type="text"
                     name="Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     id="Name"
                     placeholder="Enter Full Name"
                     className="block w-full px-4 py-4 text-base text-center
                             text-black placeholder-gray-500 transition-all
                             duration-200 border-transparent sm:text-left 
                             focus:border-transparent focus:ring-0 caret-orange-500 "
                             required />
    
            </div>
                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 
                            sm:border-transparent sm:rounded-full 
                            sm:focus-within:border-orange-500 sm:focus-within:ring-1 
                            sm:focus-within:ring-orange-500">
                <label htmlFor="Email" className="sr-only">
                </label> 
                    <input 
                    type="email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="Email"
                    placeholder="Enter e-mail to get started"
                    className="block w-full px-4 py-4 text-base text-center
                            text-black placeholder-gray-500 transition-all
                            duration-200 border-transparent sm:text-left 
                            focus:border-transparent focus:ring-0 caret-orange-500 "
                            required />
                    
                
            </div>
            <div>
                <label htmlFor="Password" className="">
                </label>
                    <input 
                     type="password"
                     name="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     id="Password"
                     placeholder="Enter password"
                     className="block w-full px-4 py-4 text-base text-center
                             text-black placeholder-gray-500 transition-all
                             duration-200 border-transparent sm:text-left 
                             focus:border-transparent focus:ring-0 caret-orange-500 "
                             required />
    
            </div>
            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                               Sign In
                           </button>
           
            </div>
           
           
     </form>
       
    )
}

export default SignIn;