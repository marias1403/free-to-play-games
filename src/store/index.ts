import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../features/games-page/slice';
import gameDetailsPageReducer from '../features/game-details-page/slice';

export const store = configureStore({
  reducer: {
    gamesReducer,
    gameDetailsPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
