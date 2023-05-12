import { configureStore } from '@reduxjs/toolkit';
import { ursApi } from '../services/URS';
import uploadReducer from '../features/upload';
import authUserReducer from '../features/authUser';

export default configureStore({
  reducer: {
    [ursApi.reducerPath]: ursApi.reducer,
    uploadReducer,
    currentUser: authUserReducer,
  },
});
