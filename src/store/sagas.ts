import { call, put, takeLatest } from 'redux-saga/effects';
import { ITicker } from '../@types/ticker';
import { ActionType } from './actions';

const tickerFetch = (pair: string): Promise<ITicker> => {
  return fetch(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${pair}`).then(
    (res) => res.json()
  );
};

function* workGetTicker(action: { type: string; pair: string }) {
  const ticker: ITicker = yield call(tickerFetch, action.pair);
  yield put({ type: ActionType.GET_TICKER_SUCCESS, ticker });
}

function* saga() {
  yield takeLatest(ActionType.GET_TICKER, workGetTicker);
}

export { saga };
