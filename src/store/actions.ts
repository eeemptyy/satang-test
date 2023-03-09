import { ITicker } from '../@types/ticker';

export enum ActionType {
  GET_TICKER = 'GET_TICKER',
  GET_TICKER_SUCCESS = 'GET_TICKER_SUCCESS',
  START_INTERVAL = 'START_INTERVAL',
  STOP_INTERVAL = 'STOP_INTERVAL',
  TIMER_TICK = 'TIMER_TICK',
  SET_PAIR = 'SET_PAIR',
}

interface ITickerAction {
  type: ActionType.GET_TICKER_SUCCESS | ActionType.SET_PAIR;
  ticker: ITicker;
  pair: string;
}

interface IIntervalAction {
  type:
    | ActionType.START_INTERVAL
    | ActionType.STOP_INTERVAL
    | ActionType.TIMER_TICK;
}

export type { ITickerAction, IIntervalAction };

export const getTicker = (pair: string) => ({
  type: ActionType.GET_TICKER,
  pair: pair,
});

export const startTimer = () => ({ type: ActionType.START_INTERVAL });

export const stopTimer = () => ({ type: ActionType.STOP_INTERVAL });

export const timerTick = () => ({ type: ActionType.TIMER_TICK });
