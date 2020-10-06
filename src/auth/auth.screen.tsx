import React, { ReactElement } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { tw } from "react-native-tailwindcss";
import { Credential } from "./auth.model";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { authLoginCancel, authLoginRequest } from "./auth.action";
import { selectAuth } from "./auth.selector";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormButton from "../components/AppFormButton";
import FullScreen from "../components/FullScreen";

const validationSchema = Yup.object().shape({
  url: Yup.string().required().url().label("Host url"),
  accessToken: Yup.string().required().length(20).label("Access Token"),
});
function AuthScreen(): ReactElement {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  
  const showToastWithGravity = (message:string, gravity:number=ToastAndroid.BOTTOM, duration= 3000) =>{
    ToastAndroid.showWithGravity(message,duration,gravity);
  }
  if(auth.login.status === 'failure') showToastWithGravity(auth.login.error ? auth.login.error : '')

  function handleOnSubmit(values: Credential) {
    dispatch(authLoginRequest(values));
  }
  function handleOnCancel(){    
    dispatch(authLoginCancel());
  }  
  return (
    <FullScreen>
      <View style={[tw.flexGrow, tw.alignCenter, tw.justifyCenter, tw.pX5]}>
        <Text style={[tw.selfCenter, tw.mB5, tw.text3xl, tw.textBlue900]}>Welcome</Text>
        <AppForm
          initialValues={{ url: "https://", accessToken: "" }}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField name="url" placeholder="Host Url" icon="server" />
          <AppFormField
            name="accessToken"
            placeholder="Access Token"
            icon="key"
          />
          <AppFormButton
            name="Submit"
            handleIconOnPress={handleOnCancel}
            loading={auth.login.status === "request" ? true : false}
          />
        </AppForm>
      </View>
    </FullScreen>
  );
}

export default AuthScreen;
