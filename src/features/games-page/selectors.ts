import { RootState } from '../../store';

const gamesSelector = (state: RootState) => state.gamesReducer;

export default gamesSelector;
