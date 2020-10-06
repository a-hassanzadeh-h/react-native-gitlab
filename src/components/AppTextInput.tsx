import React, { ReactElement } from "react";
import { TextInput, View } from "react-native";
import { tw } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon,...props }): ReactElement {
  return (
    <View
      style={[
        tw.h12,
        tw.bgGray300,
        tw.roundedSLg,
        tw.roundedELg,
        tw.justifyCenter,
        tw.pX3,
        tw.flexRow,
        tw.justifyStart,
      ]}
    >
      <MaterialCommunityIcons name={icon} size={24} style={[tw.selfCenter,tw.mR3]} color='gray' />
      <TextInput {...props} style={[tw.flexGrow]} />
    </View>
  );
}
export default AppTextInput;
