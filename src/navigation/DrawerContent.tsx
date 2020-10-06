import React from "react";
import { Text, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Drawer } from "react-native-paper";
import { useSelector } from "react-redux";
import { tw } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'react-native-paper';


import { selectAuth } from "../auth/auth.selector";

function DrawerContent() {
  const auth = useSelector(selectAuth);
  const {colors} = useTheme();
  
  return (
    <DrawerContentScrollView >
      <View style={[tw.p3,{backgroundColor: colors.surface}]}>
        <Avatar.Image source={{ uri: auth.login.data?.avatar_url }} />
        <Text style={[tw.mT2, tw.textBase]}>{auth.login.data?.name}</Text>
        <Text style={[tw.mT1, tw.textGray600]}>
          @{auth.login.data?.username}
        </Text>
      </View>

      <Drawer.Section style={[tw.mT4]}>
        <Drawer.Item
          label="Profile"
          onPress={() => {}}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
        />
        <Drawer.Item
          label="Settings"
          onPress={() => {}}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="settings-outline"
              color={color}
              size={size}
            />
          )}
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          label="Sign Out"
          onPress={() => {}}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
