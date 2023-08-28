import { RootState } from '../../store';

const gameDetailsSelector = (state: RootState) => state.gameDetailsPageReducer;

export default gameDetailsSelector;
