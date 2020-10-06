import {selector} from '../common/utils';

export  const selectProjects = selector(state => state.project.projects)();
export  const selectLabels = selector(state => state.project.labels)();
export  const selectIssues = selector(state => state.project.issues)();