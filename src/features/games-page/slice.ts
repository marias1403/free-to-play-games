import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameCard, GameListState } from '../../types/types';
import api from '../../api';

const NAMESPACE = 'gamesPage';
export const fetchGameList = createAsyncThunk(`${NAMESPACE}/fetch`, () => api.games.load());

export const fetchGameListByFilters = createAsyncThunk(
  `${NAMESPACE}/fetchByFilters`,
  (params: {
    platform: string | undefined,
    category: string | undefined,
    sortBy: string | undefined }) => (
    api.games.loadWithFilters(params.platform, params.category, params.sortBy)
  ),
);

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

    builder.addCase(fetchGameListByFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchGameListByFilters.fulfilled,
      (state, action: PayloadAction<IGameCard[]>) => {
        state.loading = false;
        state.games = action.payload;
      },
    );
    builder.addCase(fetchGameListByFilters.rejected, (state, action) => {
      state.loading = false;
      state.games = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export default gameListSlice.reducer;
