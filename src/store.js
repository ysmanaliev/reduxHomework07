import { configureStore } from '@reduxjs/toolkit';

import photosReducer from './features/photos/photosSlice';

export default  configureStore({
  reducer: {
    photos: photosReducer,
  },
});