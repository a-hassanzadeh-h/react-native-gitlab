import { AsyncState } from "../app/app.model";

export interface Project{
    projects: AsyncState<ProjectModel[]>;
    labels: AsyncState<LabelModel[]>;
    issues: AsyncState<IssuesModel[]>;
    
}


export interface ProjectModel{
    id: string,
    name: string,
    name_with_namespace: string,
    description: string,
    avatar_url: string,
    star_count: number,
    open_issues_count: number,
    last_activity_at: string,
}
export interface LabelModel{
    id: number,
    name: string,
    color: string,
    text_color: string,
}

export interface IssuesModel{

}