import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import {tw} from 'react-native-tailwindcss';

function Header({ scene, previous, navigation }) {
  const title = scene.route.name;
  const {colors} = useTheme();

  return (
    <Appbar.Header  style={[tw.shadowMd]}>
      <Appbar.Content title={title}/>
    </Appbar.Header>
  );
}
export default Header;
