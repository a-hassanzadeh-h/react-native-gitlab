import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SplashScreen from 'expo-splash-screen';

import { selectAuth } from "../auth/auth.selector";
import { authLoginRequest } from "../auth/auth.action";
import { load } from "../auth/auth.api";

function useReady() {
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const prepareResoures = async () =>{
        const credential =  await load();
        dispatch(authLoginRequest(credential));
    }

    useEffect(() => {
        prepareResoures();
    }, []);

    return (auth.login.status === undefined  || auth.login.status === 'request' ) ? false : true;

}
export default useReady;