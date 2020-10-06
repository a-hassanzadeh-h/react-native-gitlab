import React from "react";
import {Text} from 'react-native';
import {tw} from 'react-native-tailwindcss';

function AppErrorMessage({ error, style, ...probs }) {
  if (typeof error === undefined) return null;
  return <Text style={[tw.textXs,tw.textRed800, ...style]} {...probs}  >{error}</Text>;
}

export default AppErrorMessage;
