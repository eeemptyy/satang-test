import { call, put } from 'redux-saga/effects';
import { ITicker } from '../@types/ticker';
import { ActionType } from './actions';
import { tickerUrl } from '../constants/urls';

const tickerFetch = (pair: string): Promise<ITicker> => {
  // return new Promise<ITicker>((resolve, reject) => { return {} });
  return fetch(`${tickerUrl}?symbol=${pair}`).then((res) => res.json());
};

export function* workGetTicker(action: { type: string; pair: string }) {
  yield put({ type: ActionType.SET_PAIR, pair: action.pair });

  const ticker: ITicker = yield call(tickerFetch, action.pair);
  yield put({ type: ActionType.GET_TICKER_SUCCESS, ticker });
}
