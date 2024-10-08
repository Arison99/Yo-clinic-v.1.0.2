import React, { useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { bookAppointmentSuccess } from '../Reducers/appointmentsReducer';


const BookAppointment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleSubmit = async (e) => {
        e.preventdefault();

        try {
            const response = await axios.post(
                'http://localhost:/8080/api/appointments',
                {
                    date,
                    time,
                    doctor,
                },
                {
                    headers: {
                        Authorization:`Bearer ${token}`,
                    },
                }
            );
            dispatch(bookAppointmentSuccess(response.data));
        } catch (error) {
            console.error('Error booking Appointment', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} class="p-4">
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    class="border border-gray-300 p-2"
                    />
            </div>
            <div>
                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    class="border border-gray-300 p-2"
                    />
            </div>
            <div>
                <label htmlFor="doctor">Doctor:</label>
                <input
                    id="doctor"
                    type="text"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    class="border border-gray-300 p-2"
                    />
            </div>
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">

                Book Appointment 

            </button>
        </form>
    );
};

export default BookAppointment;