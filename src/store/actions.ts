import { ITicker } from '../@types/ticker';

export enum ActionType {
  GET_TICKER = 'GET_TICKER',
  GET_TICKER_SUCCESS = 'GET_TICKER_SUCCESS',
}

interface ITickerAction {
  type: ActionType.GET_TICKER_SUCCESS;
  ticker: ITicker;
}

export type { ITickerAction };

export const getTicker = (pair: string) => ({
  type: ActionType.GET_TICKER,
  pair: pair,
});
