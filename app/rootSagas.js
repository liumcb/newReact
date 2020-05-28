import { all } from 'redux-saga/effects'
import HomeSaga from './pages/home/saga';

// 合并saga
const rootSagas = function* () {
  yield all([
    HomeSaga()
  ])
}

export default rootSagas
