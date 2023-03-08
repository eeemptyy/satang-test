import { ITicker } from '../@types/ticker';
import { ActionType, ITickerAction } from './actions';

export interface IState {
  ticker?: ITicker;
}

const initialState: IState = {
  ticker: undefined,
};

const reducer = (
  state: IState = initialState,
  action: ITickerAction
): IState => {
  switch (action.type) {
    case ActionType.GET_TICKER_SUCCESS:
      return {
        ...state,
        ticker: action.ticker,
      };
    default:
      return state;
  }
};

export { reducer };
