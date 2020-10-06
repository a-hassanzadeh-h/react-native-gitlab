import axios from 'axios';
import { Credential } from '../auth/auth.model';
import _ from 'lodash';

let ACCESS_TOKEN: string = '';

const client = axios.create();

client.interceptors.request.use(config =>{
    return _.merge(config, {
        headers: {
            'PRIVATE-TOKEN': ACCESS_TOKEN
        }
    })
});    

export const init = (credential: Credential) => {
    ACCESS_TOKEN =  credential.accessToken;
    client.defaults.baseURL = credential.url + '/api/v4';
}
export default client;