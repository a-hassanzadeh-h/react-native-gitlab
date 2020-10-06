import React, { useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {tw} from 'react-native-tailwindcss';
import Screen from "../components/Screen";
import { projectPorjectsRequest } from "./project.action";
import { load } from "./project.api";
import { selectProjects } from "./project.selector";
import ProjectItem from "./projects.components/ProjectItem";
import HeaderList from "./projects.components/HeaderList";
import { ProjectModel } from "./project.model";

function ProjectScreen({navigation}) {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  useEffect(() => {
    dispatch(projectPorjectsRequest());
  }, []);

  function onPressHandler(item: ProjectModel){    
    navigation.navigate('Issues',{project_id:  item.id})
  }
  return (
    <Screen>
      {projects.status === "request" ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          style={[tw.pX1, tw.mT1,]}
          data={projects.data}
          keyExtractor={item => item.id.toString()}
          renderItem={(item) => <ProjectItem item={item.item} onPress={() => onPressHandler(item.item)}/>}
          ListHeaderComponent={<HeaderList text='NilaSoft'/>}
        />
      )}
    </Screen>
  );
}
export default ProjectScreen;
