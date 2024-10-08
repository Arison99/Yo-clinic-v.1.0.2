import { configureStore} from '@reduxjs/toolkit';
import rootReducer from '../Reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    
});