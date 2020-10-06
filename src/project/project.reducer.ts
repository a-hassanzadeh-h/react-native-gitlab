import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {FailureAction} from '../app/app.model';
import { projectLabelsCancel, projectLabelsFailure, projectLabelsRequest, projectLabelsSuccess, projectPorjectsRequest, projectProjectsCancel, projectProjectsFailure, projectProjectsSuccess } from "./project.action"
import { LabelModel, Project, ProjectModel } from "./project.model";

const initialState: Project = {
    projects: {},
    labels : {},
    issues: {}
}
export default createReducer(initialState, {
    [projectPorjectsRequest.type] : state => {
        state.projects.status = 'request';
    },
    [projectProjectsSuccess.type] : (state, action: PayloadAction<ProjectModel[]>) => {
        state.projects.status = 'success';
        state.projects.data = action.payload;
    },
    [projectProjectsFailure.type] : (state, action: FailureAction)  => {
        state.projects.status = 'failure';
        state.projects.error = action.error;
    },
    [projectProjectsCancel.type] : state => {
        state.projects.status = 'cancel';
    },
    [projectLabelsRequest.type] : state =>{ 
        state.labels.status = 'request';
    },
    [projectLabelsSuccess.type] : (state, action: PayloadAction<LabelModel[]> )=> {
        state.labels.status = 'success';
        state.labels.data = action.payload;
    },
    [projectLabelsFailure.type] : (state, action: FailureAction) => {
        state.labels.status = 'failure';
        state.labels.error = action.error;
    },
    [projectLabelsCancel.type] : state => {
        state.labels.status = 'cancel';
    }
})