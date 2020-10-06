import { createAction } from "@reduxjs/toolkit";
import {Credential, User} from './auth.model';
import {FailureAction} from '../app/app.model'

export const authLoginRequest = createAction<Credential>('auth/login/request');
export const authLoginSuccess = createAction<User>('auth/login/success');
export const authLoginFailure = createAction<string>('auth/login/failure');
export const authLoginCancel = createAction('auth/login/cancel');