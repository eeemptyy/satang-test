import { takeEvery, takeLatest } from 'redux-saga/effects';

import { ActionType } from './actions';
import { workGetTicker } from './tickerSaga';
import { startTimerSaga, stopTimerSaga } from './timerSaga';

function* saga() {
  yield takeLatest(ActionType.GET_TICKER, workGetTicker);
  yield takeLatest(ActionType.START_INTERVAL, startTimerSaga);
  yield takeEvery(ActionType.STOP_INTERVAL, stopTimerSaga);
}

export { saga };
