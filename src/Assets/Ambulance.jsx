import React from "react";
import { useSelector, useDispatch, useDispatch, useSelector } from "react-redux";
import { requestAmbulanceSuccess } from './redux/reducers/ambulanceReducer';


const Ambulance = () => {
    const useDispatch = useDispatch();
    const useSelector = useSelector((state) => state.ambulance.requests);


    return(
        <div class="min-h-screen bg-gray-100 p-4">
            <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 classs="text-3xl font-bold text-center mb-6">Ambulance</h2>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Your Ambulance Requests</h3>
                    {requests.length === 0 ? (
                        <p class="text-gray-600">You have no Ambulance requests</p>
                    ) : (
                        <ul class="divide-y divide-gray-200">
                            {requusts.map((request) =>  (
                                <li key={request.id} class="py-4">
                                    <p>Ambulance requested on {request.date} </p>
                                    <p>status: {request.status} </p>
                                </li>
                            ))}
                             </ul>
                    ) }
                </div>
                <button
                    class="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg"
                    onClick={() => dispatchEvent(requestAmbulanceSuccess({ id: 1, daye: '2024-09-10', status: 'Pending' }))}
                    >
                        Request Ambulance
                        
                    </button>
            </div>
        </div>
       
    );
};

export default Ambulance;