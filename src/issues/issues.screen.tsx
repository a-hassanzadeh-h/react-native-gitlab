import React, { useEffect } from "react";
import { Modal, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/src/components/List/List";
import { useDispatch, useSelector } from "react-redux";
import Screen from "../components/Screen";
import { projectLabelsRequest } from "../project/project.action";
import { loadLabels } from "../project/project.api";
import { selectLabels } from "../project/project.selector";

function IssuesScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);
  const { project_id } = route.params;
  useEffect(() => {
    dispatch(projectLabelsRequest(project_id));
  },[]);
  return (
    <Screen>
      {labels.status === 'request' ? 
        (<ActivityIndicator  size='large'/> ) :
        (<View></View>)
      }
    </Screen>
  );
}
export default IssuesScreen;
