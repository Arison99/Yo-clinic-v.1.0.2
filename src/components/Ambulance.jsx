import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAmbulanceSuccess } from '../Reducers/ambulanceReducer'; // Ensure the correct path


const Ambulance = () => {
    const dispatch = useDispatch();
    const requests = useSelector((state) => state.ambulance.requests);


    return(
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Ambulance</h2>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Your Ambulance Requests</h3>
                    {requests.length === 0 ? (
                        <p className="text-gray-600">You have no Ambulance requests</p>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {requests.map((request) =>  (
                                <li key={request.id} className="py-4">
                                    <p>Ambulance requested on {request.date} </p>
                                    <p>status: {request.status} </p>
                                </li>
                            ))}
                             </ul>
                    ) }
                </div>
                <button
                    className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg"
                    onClick={() => dispatch(requestAmbulanceSuccess({ id: new Date().getTime(), date: new Date().toISOString().split('T')[0], status: 'Pending' }))}
                    >
                        Request Ambulance
                        
                    </button>
            </div>
        </div>
       
    );
};

export default Ambulance;