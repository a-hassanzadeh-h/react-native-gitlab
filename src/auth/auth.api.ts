import { Credential } from './auth.model';
import client, { init } from '../common/client';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';


const AUTH = '__auth__'

export async function login(credential: Credential): Promise<AxiosResponse<any>> {
    init(credential);
    try {
        const response = await client.get('/user'); 
        console.log(response.data);
               
        return response.data;

    }catch(error) {        
        if(error.response.status == 401)
         throw Error('Access Token is wrong')
        else
         throw Error('Host Url is wrong');
    }
}

export function save(credential: Credential) {
    let str = JSON.stringify(credential);
    AsyncStorage.setItem(AUTH, str);
}
export async function remove(): Promise<void>{
    return await AsyncStorage.removeItem(AUTH);
}
export async function load(): Promise<Credential>{
    const str = await AsyncStorage.getItem(AUTH);
    if(str){
        return JSON.parse(str);
    }
    return {url:'', accessToken:''}
}