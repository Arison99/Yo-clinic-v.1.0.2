import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import pharmacyReducer from "./pharmacyReducer";
import ambulanceReducer from "./ambulanceReducer";

const rootReducer = combineReducers ({
    auth: authReducer,
    appointments: appointmentsReducer,
    pharmacy: pharmacyReducer,
    ambulance: ambulanceReducer,
});

export default rootReducer;