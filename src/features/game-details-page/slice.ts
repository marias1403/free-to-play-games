import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameDetails } from '../../types/types';
import api from '../../api';
import { MAX_FETCH_RETRIES } from '../../constants/constants';

const NAMESPACE = 'gameDetailsPage';
export const fetchGame = createAsyncThunk(`${NAMESPACE}/fetchGame`, (id: string) => api.game.details(id));
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
    builder.addCase(fetchGame.fulfilled, (state, action: PayloadAction<IGameDetails>) => {
      state.loading = false;
      state.game = action.payload;
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
