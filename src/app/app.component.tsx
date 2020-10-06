import React from "react";
import "react-native-gesture-handler";
import { Provider as ReduxProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import store from "./app.store";
import MainNavigator from "../navigation/Navigation";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <MainNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}
