import { PayloadAction } from "@reduxjs/toolkit";
import { Saga, SagaIterator, } from "redux-saga";
import { call, fork, put, race, take, delay, cancelled } from "redux-saga/effects";
import _ from 'lodash';
import { authLoginCancel, authLoginFailure, authLoginRequest, authLoginSuccess } from "./auth.action";
import { Credential, User } from './auth.model';
import { login, remove, save } from './auth.api'

export default function* (): SagaIterator {
    yield fork(watchLogin);
    yield fork(watchLogout);
}

function* watchLogin(): SagaIterator {
    while (true) {
        console.log('in auth saga');
        const action: PayloadAction<Credential> = yield take(authLoginRequest);
        yield race([
            call(handleLogin, action.payload),
            take(authLoginCancel)
        ]);        
    }
}
function* handleLogin(credential: Credential): SagaIterator {
    try {
        const response = yield call(login, credential);
        const user: User = _.pick(response, ['id', 'name', 'state', 'username', 'web_url', 'avatar_url', 'email', 'bio']);    
        yield call(save, credential);
        yield put(authLoginSuccess(user));
    } catch (err) {   
        console.log(err);
                               
        yield put(authLoginFailure(err.message));
    }
}

function* watchLogout(): SagaIterator{
    while(true){
        yield take(authLoginFailure);
        yield call(handleLogout);
    }
}
function* handleLogout(): SagaIterator{
    try{
        yield call(remove);
    }catch(err){

    }
}