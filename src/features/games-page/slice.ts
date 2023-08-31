import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameCard, GameListState } from '../../types/types';
import api from '../../api';
import { MAX_FETCH_RETRIES } from '../../constants/constants';

const NAMESPACE = 'gamesPage';

export const fetchGameList = createAsyncThunk(
  `${NAMESPACE}/fetch`,
  async () => {
    for (let retry = 0; retry < MAX_FETCH_RETRIES; retry++) {
      try {
        return await api.games.load();
      } catch (error) {
        if (retry === MAX_FETCH_RETRIES - 1) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  },
);

export const fetchGameListByFilters = createAsyncThunk(
  `${NAMESPACE}/fetchByFilters`,
  (params: {
    platform?: string,
    category?: string,
    sortBy?: string }, thunkAPI) => (
    api.games.loadWithFilters(params.platform, params.category, params.sortBy, thunkAPI.signal)
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
    builder.addCase(fetchGameList.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.games = action.payload;
      }
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
