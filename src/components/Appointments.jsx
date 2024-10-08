import React, { useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchAppointmentsStart, fetchAppointmentsFailure } from '../Reducers/appointmentsReducer';


function Appointments () {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const appointments = useSelector((state) => state.appointments.appointments);
    useEffect(() => { 
        const fetchAppointments = async () => {
        dispatch(fetchAppointmentsStart());
        try {
            const response = await axios.get('http://localhost:8080/api/appontments', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(fetchAppointmentsStart(response.data));
        } catch (error) {
            dispatch(fetchAppointmentsFailure(response.error));
        }
      };

      if (token) {
        fetchAppointments();
      }
       
     }, [dispatch, token]);

     
    return(
        <div class="min-h-screen bg-gray-100 p-4">
            <div class="maxx-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 class="text-gray-600 font-bold text-center mb-6">Your Appointments</h2>
                <div>
                    {appointments.length === 0 ? (
                        <p class="text-gray-600 text-center">You have no appointments booked.</p>
                    ):(
                        <ul class="divide-y divide-gray-200">
                            {appointments.map((appointment) => (
                                <li key={appointment.id} class="py-4">
                                    <p class="text-lg font-semibold">Appointment with {appointment.doctor} </p>
                                    <p class="text-gray-600"> {appointment.date} at {appointment.time} </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
               
            </div>
        </div>
    );
}

export default Appointments;