import {combineReducers} from '@reduxjs/toolkit';
import auth from '../auth/auth.reducer';
import project from '../project/project.reducer';
export default combineReducers({
    auth,
    project,
})