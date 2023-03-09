import { ITicker } from '../@types/ticker';
import { ActionType, IIntervalAction, ITickerAction } from './actions';

export interface IState {
  ticker?: ITicker;
  pair?: string;
  isRunning: boolean;
  ticks: number;
}

const initialState: IState = {
  ticker: undefined,
  pair: undefined,
  isRunning: false,
  ticks: 0,
};

const reducer = (
  state: IState = initialState,
  action: ITickerAction | IIntervalAction
): IState => {
  switch (action.type) {
    case ActionType.GET_TICKER_SUCCESS:
      return {
        ...state,
        ticker: action.ticker,
      };
    case ActionType.SET_PAIR:
      return {
        ...state,
        pair: action.pair,
      };
    case ActionType.START_INTERVAL:
      return { ...state, isRunning: true };
    case ActionType.STOP_INTERVAL:
      return { ...state, isRunning: false };
    case ActionType.TIMER_TICK:
      return { ...state, ticks: state.ticks + 1 };
    default:
      return state;
  }
};

export { reducer };
