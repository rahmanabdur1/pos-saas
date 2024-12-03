// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { customerApi } from './api/customerApi';

export const store = configureStore({
  reducer: {
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
