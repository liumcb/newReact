import { put,call, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import { ApiConfig } from '../../utils/service';
import { request } from '../../utils/request';

function* homeSaga(action) {
  try {
    const data = yield call(request, ApiConfig.dictCodePage, action.payload);
    console.log('获取的data====', data);
    // put方法和dispatch一样，都是用于发起action，所以不能跟页面中的action同名，否则会多次调用循环死机
    yield put(actions.homePageSuccess(data));
  } catch (error) {
    console.log(error)
  }
}

export default function* helloSaga() {
    yield takeLatest(actions.HOME_PAGE, homeSaga )
}