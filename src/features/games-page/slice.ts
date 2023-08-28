import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameCard } from '../../types/types';
import api from '../../api';

const NAMESPACE = 'gamesPage';
export const fetchGameList = createAsyncThunk(`${NAMESPACE}/fetch`, () => api.games.load());
export interface GameListState {
  games: IGameCard[];
  loading: boolean;
  error: string | undefined;
}

const initialState: GameListState = {
  games: [],
  loading: false,
  error: undefined,
};

export const gameListSlice = createSlice({
  name: NAMESPACE,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGameList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGameList.fulfilled, (state, action: PayloadAction<IGameCard[]>) => {
      state.loading = false;
      state.games = action.payload;
    });
    builder.addCase(fetchGameList.rejected, (state, action) => {
      state.loading = false;
      state.games = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export default gameListSlice.reducer;
