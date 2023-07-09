// ==============================|| store module ||============================== //

// ==============================|| IMPORTS

//-- configureStore methods imports
import {configureStore} from '@reduxjs/toolkit';

//-- combined reducer imports
import rootReducer from './reducers';

// ==============================|| create store for the app ||============================== //

//-- combine Reducers and located to the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
