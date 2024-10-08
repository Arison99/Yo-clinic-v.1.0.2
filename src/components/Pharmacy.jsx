import React from "react";
import { useEffect } from "react";
import { useSelector,} from "react-redux";
import { addToCart } from '../Reducers/pharmacyReducer';
import axios from "axios";


const pharmacy = () => {
    const user = useSelector((state) => state.auth.user);
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const fetchMedications = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/medications/');
                setMedications(response.data);
                 } catch (error) {
             console.error('Error fetching medications', error);
         }
      };

    fetchMedications();
   }, []);

    return(
       <div class="min-h-screen bg-gray-100 p-4">
        <div class="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 class="text-3xl font-bold text-center mb-6">Pharmacy</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Conditionally render the "Add medication" button if the user is a doctor */}
                {user && user.role === 'Doctor' && (
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                        Add Medication
                    </button>
                )}

                {/* Disp;ay list of Medications */}
                <ul class="mt-4">
                    {medications.map((medication) => (
                        <li key={medication.id} class="border p-2 my-2">
                            {medication.name} - Ugx{medication.price}
                        </li>
                    ))}
                </ul>

                {medications.map((medication) => 
                (
                    <div key={medications.id} class="bg-white shadow-md p-4 rounded-lg">

                        <h3 class="text-xl font-semibold mb-2"> {medication.name} </h3>

                        <p class="text-gray-600 mb-2"> {medication.descrition} </p>

                        <p class="text-lg font-bold text-green-600 mb-4"> Shs.{medication.price} </p>

                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => dispatch(addToCart(medication))}>
                            Add to Cart
                        </button>
                        </div>
                ))}
            </div>
        </div>
       </div>

    );
};

export default pharmacy;