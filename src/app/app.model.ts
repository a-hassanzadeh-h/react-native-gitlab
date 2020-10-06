import {PayloadAction} from '@reduxjs/toolkit';
import store from './app.store'
export type AppState = ReturnType<typeof store.getState>;

export type AsyncStatus = 'request' | 'cancel' | 'success' | 'failure';

export interface AsyncState<T, S = AsyncStatus, E extends string = string>{
    data?: T,
    status?: S,
    error?: E
}

export type FailureAction<P = void> = PayloadAction<P, string, void, string>;
