import { SagaIterator } from "redux-saga";
import {fork} from 'redux-saga/effects';

import auth from '../auth/auth.saga';
import projects from '../project/project.saga';

export default function* (): SagaIterator{
    yield fork(auth);
    yield fork(projects);
}