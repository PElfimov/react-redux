import {all, put, takeEvery} from 'redux-saga/effects'
import { API_ACTIONS } from 'modules/api/actions';
import { Action } from 'modules/lib/interfaces';
import  api  from 'modules/api/api';
import { apiActions } from 'modules/api/actions';


export function* onApiLoad({payload, type}:Action) {
    const actionType = type.replace(API_ACTIONS.FETCH_START, ``)
    try{
    let response ={}
    yield api.fetch(actionType, payload).then(res=> response = res)
    yield put(apiActions.fetchSuccess(actionType, response))

}catch(e) {
    yield put(apiActions.fetchFailure(actionType, e))
}
}

export function* watchApiLoad() {
    yield takeEvery((action:any) => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad)
}

export function* apiRootSaga() {
    yield all([
        watchApiLoad()
    ])
}