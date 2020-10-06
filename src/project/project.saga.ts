import { SagaIterator } from "redux-saga";
import { call, fork, put, race, take } from "redux-saga/effects";
import _ from 'lodash';
import { projectLabelsCancel, projectLabelsFailure, projectLabelsRequest, projectLabelsSuccess, projectPorjectsRequest, projectProjectsCancel, projectProjectsFailure, projectProjectsSuccess } from "./project.action";
import { loadLabels, loadProjects } from "./project.api";
import { LabelModel, ProjectModel } from "./project.model";
import { PayloadAction } from "@reduxjs/toolkit";

export default function* (): SagaIterator {
    yield fork(watchProjects);
    yield fork(watchLabels);
    // yield fork(watchIssues);
}
function* watchProjects(): SagaIterator {
    while (true) {
        console.log('in projects saga');
        yield take(projectPorjectsRequest);
        yield race([
            call(handleProjectsRequest),
            take(projectProjectsCancel)
        ])
    }
}
function* watchLabels(): SagaIterator {
    while (true) {
        console.log('in labels saga');
        const action: PayloadAction<string> = yield take(projectLabelsRequest);
        yield race([
            call(handleLabelsRequest, action.payload),
            take(projectLabelsCancel)
        ])
    }
}
function* watchIssues(): SagaIterator {

}
function* handleProjectsRequest(): SagaIterator {
    try {
        const response = yield call(loadProjects);
        console.log('project response: ', response);

        let projects: ProjectModel[] = [];
        response.forEach(p => {
            projects.push(_.pick(p, ['id', 'name', 'name_with_namespace', 'description', 'avatar_url', 'last_activity_at', 'star_count', 'open_issues_count']))
        })

        console.log('extracted projects:', projects);
        yield put(projectProjectsSuccess(projects));

    } catch (err) {
        yield put(projectProjectsFailure(err.message));
    }
}
function* handleLabelsRequest(project_id: string): SagaIterator {
    try {
        console.log('handle label request');

        const response = yield call(loadLabels, project_id);
        console.log(response);
        
        let labels: LabelModel[] = [];
        response.forEach(p => {
            labels.push(_.pick(p, ['id', 'name', 'color', 'text_color']))
        })
        console.log(labels);
        
        yield put(projectLabelsSuccess(labels))
    } catch (err) {
        yield put(projectLabelsFailure(err.message));
    }
}