import './App.css';
import navbar from './components/navbar';

function App() {
  return (
    
    //navigation bar
    <div>
 
    <nav class = "container px-4 py-2 focus:border-solid focus:border-blue-200 p-5 focus:bg-black-400 shadow  rounded-full">
        <div class = "flex justify-between items-center">
           
            <ul class = "xl:flex xl:items-center  xl:justify-between " id = "navbar">
                <li class = "mx-4 focus:text-blue-300">
                    <a class = "px-4 opacity-50 hover:bg-blue-500" href="#"> Home </a>
                </li>
                <li class = "mx-4 focus:text-blue-300">
                    <a class = "px-4 opacity-50 hover:bg-blue-500" href="#"> Clinic </a>
                </li>
                <li class = "mx-4 focus:text-blue-300">
                    <a class = "px-4 opacity-50 hover:bg-blue-500" href="#"> Departments </a>
                </li>
                <li class = "mx-4 focus:text-blue-300">
                    <a class = "px-4 opacity-50 hover:bg-blue-500" href="#"> Pharmacy </a>
                </li>
             </ul>
         
             <ul class = "xl:items-center focus:justify-end">
                 <li>
                    <button class = "border border-blue-600 bg-blue-600  text-white hover:bg-blue-400 py-1.5 px-4  rounded">
                        Sign In
                    </button>
                </li>
            </ul>
        </div>
 
     </nav>
 
    
 </div>
  );
}
export default App;


