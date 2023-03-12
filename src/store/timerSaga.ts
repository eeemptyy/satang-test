import { Task } from 'redux-saga';
import { cancel, delay, put, select } from 'redux-saga/effects';
import { ActionType } from './actions';

let timerTask: Task | null;

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

export function* startTimerSaga() {
  if (!timerTask) {
    timerTask = yield timerSaga();
  }
}
export function* stopTimerSaga() {
  if (timerTask) {
    yield cancel(timerTask);
    timerTask = null;
  }
}
