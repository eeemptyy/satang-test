import { Task } from 'redux-saga';
import {
  call,
  cancel,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { ITicker } from '../@types/ticker';
import { ActionType } from './actions';

let timerTask: Task | null;

const tickerFetch = (pair: string): Promise<ITicker> => {
  // return new Promise<ITicker>((resolve, reject) => { return {} });
  return fetch(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${pair}`).then(
    (res) => res.json()
  );
};

function* workGetTicker(action: { type: string; pair: string }) {
  yield put({ type: ActionType.SET_PAIR, pair: action.pair });

  const ticker: ITicker = yield call(tickerFetch, action.pair);
  yield put({ type: ActionType.GET_TICKER_SUCCESS, ticker });
}

function* timerSaga() {
  while (true) {
    yield delay(5000); // 5s
    const isRunning: boolean = yield select(
      (state: { isRunning: boolean }) => state.isRunning
    );

    if (!isRunning) {
      break; // stop
    }
    const pair: boolean = yield select(
      (state: { pair: boolean }) => state.pair
    );

    yield put({ type: ActionType.TIMER_TICK, pair });
    yield put({ type: ActionType.GET_TICKER, pair });
  }
}
function* startTimerSaga() {
  if (!timerTask) {
    timerTask = yield timerSaga();
  }
}
function* stopTimerSaga() {
  if (timerTask) {
    yield cancel(timerTask);
    timerTask = null;
  }
}

function* saga() {
  yield takeLatest(ActionType.GET_TICKER, workGetTicker);
  yield takeEvery(ActionType.START_INTERVAL, startTimerSaga);
  yield takeEvery(ActionType.STOP_INTERVAL, stopTimerSaga);
}

export { saga };
