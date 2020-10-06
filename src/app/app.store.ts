import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './app.reducer';
import saga from './app.saga'

const defaultMiddleware = getDefaultMiddleware({
    thunk: false
})
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer,
    middleware :[
        ...defaultMiddleware,
        sagaMiddleware,

    ],
})

sagaMiddleware.run(saga);
