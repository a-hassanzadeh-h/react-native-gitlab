import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { Auth, User } from './auth.model';
import { authLoginCancel, authLoginFailure, authLoginRequest, authLoginSuccess } from './auth.action';

const initialState: Auth = {
    credential: {url:'',accessToken:''},
    login: {},
}
export default createReducer(initialState, {
    [authLoginRequest.type] : state => {
        state.login.status = 'request';
        state.login.error = undefined;
    },
    [authLoginSuccess.type] : (state, action: PayloadAction<User>) =>{
        state.login.status = 'success';
        state.login.data = action.payload;
        
    },
    [authLoginFailure.type] : (state, action: PayloadAction<string>) => {
        state.login.status = 'failure';
        state.login.error = action.payload
    },
    [authLoginCancel.type] : state => {
        state.login.status = 'cancel';
        state.login.error = undefined;
    }
})