import React, { ReactElement } from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import { TailwindStyles, tw } from "react-native-tailwindcss";
function AppIcon({ icon, text, size = 34 }: AppIconProps) {
  return (
    <View
      style={[
        tw.bgGray600,
        tw.justifyCenter,
        tw.alignCenter,
        tw.selfCenter,
        tw.rounded,
        tw.bgYellow500,
        { height: size, width: size },
      ]}
    >
      {icon || <Text style={[tw.selfCenter, tw.text4xl, tw.textGray600,]}>{text}</Text>}
    </View>
  );
}

interface AppIconProps {
  icon?: ReactElement;
  text: string;
  size?: number;
}
export default AppIcon;
