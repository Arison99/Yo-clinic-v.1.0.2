import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from './redux/reducers/pharmacyReducer';
import axios from "axios";
import { fetchMedicationsStart, fetchMedicationsSuccess, fetchMedicationsFailure } from './redux/reducers/pharmacyReducer';


const pharmacy = () => {
    const dispatch = useDispatch();
    const medications = useSelector((state) => state.pharmacy.medications);

    useEffect(() => {
        const fetchMedications = async () => {
            dispatch(fetchMedicationsStart());
            try {
                const response = await axios.get('http://localhost:8080/api/medications/');
                dispatch(fetchMedicationsSuccess(response.data));
                 } Catch (error) {
             dispatch(fetchMedicationsFailure(response.message));
         }
      };

    fetchMedications();
   }, [dispatch]);

    return(
       <div class="min-h-screen bg-gray-100 p-4">
        <div class="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 class="text-3xl font-bold text-center mb-6">Pharmacy</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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