import { createAction } from "@reduxjs/toolkit";
import { exp } from "react-native-reanimated";
import { LabelModel, ProjectModel } from "./project.model";

export const projectPorjectsRequest = createAction('project/projects/request');
export const projectProjectsSuccess = createAction<ProjectModel[]>('project/projects/success');
export const projectProjectsFailure = createAction<string>('project/projects/failure');
export const projectProjectsCancel = createAction('project/projects/cancel');
export const projectLabelsRequest = createAction<string>('project/labels/request');
export const projectLabelsSuccess = createAction<LabelModel[]>('project/labels/success');
export const projectLabelsFailure = createAction<string>('project/labels/failure');
export const projectLabelsCancel = createAction('project/labels/cancel');