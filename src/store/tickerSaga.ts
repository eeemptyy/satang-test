import { call, put } from 'redux-saga/effects';
import { ITicker } from '../@types/ticker';
import { ActionType } from './actions';

const tickerFetch = (pair: string): Promise<ITicker> => {
  // return new Promise<ITicker>((resolve, reject) => { return {} });
  return fetch(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${pair}`).then(
    (res) => res.json()
  );
};

export function* workGetTicker(action: { type: string; pair: string }) {
  yield put({ type: ActionType.SET_PAIR, pair: action.pair });

  const ticker: ITicker = yield call(tickerFetch, action.pair);
  yield put({ type: ActionType.GET_TICKER_SUCCESS, ticker });
}
