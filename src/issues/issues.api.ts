import { AxiosResponse } from 'axios';
import client from '../common/client';

export async function load(project_id:string | undefined): Promise<AxiosResponse<ProjectModel[]>>{
    try{
        const response = await client.get(`/issues`);
        console.log(response);
        const board = await client.get(`/projects/${project_id}/boards/${response.data[0].id}`);
        console.log(board);
        
        
        return response.data;
    }catch(error) {        
      throw Error('Somthing is wrong! please try later')
      
    }
}
export async function loadBoard(board_id:string | undefined): Promise<AxiosResponse<ProjectModel[]>>{
    try{
        console.log(response);
        
        return response.data;
    }catch(error) {        
      throw Error('Somthing is wrong! please try later')
      
    }
}