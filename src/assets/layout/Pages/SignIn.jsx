import React from "react";

const SignIn = () => {
    return(
        // Sign in page
     <form action ="" method="POST"
            class ="max-w-xl mx-auto mt-8 bg-white lg:mx-0
                    sm:bg-transparent lg:mt-12 rounded-xl">
            <div>
            <div>
                <label for ="Full_Name" class="">
                </label>
                    <input 
                     type = "Full_Name"
                     name = "Full_Name"
                     id = "Full_Name"
                     placeholder="Enter Full_Name"
                     class ="block w-full px-4 py-4 text-base text-center
                             text-black placeholder-gray-500 transition-all
                             duration-200 border-transparent sm:text-left 
                             focus:border-transparent focus:ring-0 caret-orange-500 "
                             required = ""/>
    
            </div>
                <div class ="p-4 sm:p-2 sm:bg-white sm:border-2 
                            sm:border-transparent sm:rounded-full 
                            sm:focus-within:border-orange-500 sm:focus-within:ring-1 
                            sm:focus-within:ring-orange-500">
                <label for="Email"  class="sr-only">
                </label> 
                    <input 
                    type = "Email"
                    name = "Email"
                    id = "Email"
                    placeholder="Enter e-mail to get started"
                    class ="block w-full px-4 py-4 text-base text-center
                            text-black placeholder-gray-500 transition-all
                            duration-200 border-transparent sm:text-left 
                            focus:border-transparent focus:ring-0 caret-orange-500 "
                            required = ""/>
                    
                
            </div>
            <div>
                <label for ="Password" class="">
                </label>
                    <input 
                     type = "Password"
                     name = "Password"
                     id = "Password"
                     placeholder="Enter password"
                     class ="block w-full px-4 py-4 text-base text-center
                             text-black placeholder-gray-500 transition-all
                             duration-200 border-transparent sm:text-left 
                             focus:border-transparent focus:ring-0 caret-orange-500 "
                             required = ""/>
    
            </div>
            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                               Sign In
                           </button>
           
            </div>
           
           
     </form>
       
    )
}

export default SignIn