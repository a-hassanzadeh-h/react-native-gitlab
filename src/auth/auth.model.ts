import { AsyncState } from "../app/app.model";
 
export interface Auth{
    credential: Credential,
    login : AsyncState<User>,

}
export interface User{
    avatar_url?: string;
    bio?: string;
    email?: string;
    id?: number;
    name?: string;
    state?: string;
    username?: string;
    web_url?: string;
}
export interface Credential{
    url: string,
    accessToken: string,
}