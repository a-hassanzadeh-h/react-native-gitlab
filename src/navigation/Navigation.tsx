import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 


import { selectAuth } from "../auth/auth.selector";
import { useSelector } from "react-redux";

import AuthScreen from "../auth/auth.screen";
import * as SplashScreen from "expo-splash-screen";
import useReady from "../app/app.hook";
import DrawerContent from "./DrawerContent";
import Header from "./Header";
import ProjectsScreen from "../project/project.screen";
import TodosScreen from "../todos/todos.screen";
import IssuesScreen from "../issues/issues.screen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  const ready: boolean = useReady();
  const auth = useSelector(selectAuth);
  // console.log("store:", auth);

  // console.log("status", ready);

  useEffect(() => {
    handleSplashScreen(ready);
  }, [ready]);

  return ready ? (
    <NavigationContainer>
      {auth.login.status === "success" ? <DrawerNavigator /> : <AuthScreen />}
    </NavigationContainer>
  ) : null;
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="home" component={TabsNavigator} />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="IssuesStack" component={IssuesStack} options={{tabBarIcon:({color,size}) => (
        <Octicons name="issue-reopened" size={size} color={color} />      )}}/>
      <Tab.Screen name="TodosStack" component={TodosStack}  options={{tabBarIcon: ({color,size}) => (
        <MaterialIcons name="playlist-add-check" size={size} color={color} />
      )}}/>
    </Tab.Navigator>
  );
}

// function ProjectStack() {
//   return (
//     <Stack.Navigator
//       headerMode="screen"
//       screenOptions={{
//         header: ({ scene, previous, navigation }) => (
//           <Header scene={scene} previous={previous} navigation={navigation} />
//         ),
//       }}
//     >
//       <Stack.Screen name="Projects" component={ProjectsScreen} />
//     </Stack.Navigator>
//   );
// }

function TodosStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Todos" component={TodosScreen} />
    </Stack.Navigator>
  );
}

function IssuesStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName='Projects'
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Issues" component={IssuesScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
    </Stack.Navigator>
  );
}
async function handleSplashScreen(hide: boolean) {
  if (!hide) await SplashScreen.preventAutoHideAsync();
  else await SplashScreen.hideAsync();
}

export default MainNavigator;
