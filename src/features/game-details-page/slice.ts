import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGameDetails } from '../../types/types';
import api from '../../api';
import { MAX_FETCH_RETRIES } from '../../constants/constants';

const NAMESPACE = 'gameDetailsPage';
export const fetchGame = createAsyncThunk(
  `${NAMESPACE}/fetchGame`,
  async (id: string) => {
    for (let retry = 0; retry < MAX_FETCH_RETRIES; retry++) {
      try {
        return await api.game.details(id);
      } catch (error) {
        if (retry === MAX_FETCH_RETRIES - 1) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  },
);

export interface GameDetailsPageState {
  game: IGameDetails | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: GameDetailsPageState = {
  game: undefined,
  loading: false,
  error: undefined,
};

export const gameDetailsPageSlice = createSlice({
  name: NAMESPACE,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.game = action.payload;
      }
    });
    builder.addCase(fetchGame.rejected, (state, action) => {
      state.loading = false;
      state.game = undefined;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export default gameDetailsPageSlice.reducer;
