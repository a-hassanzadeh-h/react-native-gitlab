import { AxiosResponse } from 'axios';

import client from '../common/client';
import { LabelModel, ProjectModel } from './project.model';

export async function loadProjects(): Promise<AxiosResponse<ProjectModel[]>>{
    try{
        const response = await client.get(`/projects`);
        console.log(response);
        
        return response.data;
    }catch(error) {        
      throw Error('Somthing is wrong! please try later')
      
    }
}
export async function loadLabels(project_id: string): Promise<AxiosResponse<LabelModel[]>>{
  try{
    console.log(project_id);
    
    const response = await client.get(`/projects/${project_id}/labels`);
    console.log('labels: ', response);
    return response.data;
    
  }catch(errro){
    console.dir(errro);
    throw Error('Somthing is wrong! please try later')
      
  }
}