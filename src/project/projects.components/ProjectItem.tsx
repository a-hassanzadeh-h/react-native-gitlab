import React from "react";
import { Text, View, Image, GestureResponderEvent } from "react-native";
import { Badge } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { ProjectModel } from "../project.model";
import { tw } from "react-native-tailwindcss";
import AppIcon from "../../components/AppIcon";
import { TimeAgo } from "../../common/utils";
import AppButton from "../../components/AppButton";
import Touchable from "../../components/Touchable";
function ProjectItem({ item, onPress }: ProjectItemProps) {
  console.log("item: ", item);

  const date: string | undefined = TimeAgo(item.last_activity_at);
  const name: string = item.name.substr(0, 1).toUpperCase();
  return (
    <View style={[tw.w11_12, tw.mLAuto, tw.mRAuto, tw.mB1]}>
      <Badge
        visible={true}
        size={24}
        style={[
          tw.absolute,
          tw.z10,
          tw.border,
          tw.borderWhite,
          tw.shadow,
          tw.bgGreen600,
          { top: -10, left: -10 },
        ]}
      >
        {item.open_issues_count}
      </Badge>
      <View
        style={[
          tw.absolute,
          tw.w8,
          tw.h8,
          tw.shadow,
          tw.z10,
          tw.roundedFull,
          tw.border,
          tw.borderWhite,
          tw.bgGray700,
          tw.itemsCenter,
          tw.justifyCenter,
          { right: -10, top: 16,},
        ]}
      >
        <Ionicons name="ios-arrow-forward" size={18} color="white" style={[]} />
      </View>

      <View style={[tw.mB2]}>
        <View
          style={[
            tw.rounded,
            // tw.border,
            // tw.borderGray600,
            tw.bgGray100,
            tw.overflowHidden,
            tw.shadow,
            // tw.m2,
          ]}
        >
          <Touchable onPress={onPress}>
            <View
              style={[
                tw.flexRow,
                tw.justifyStart,
                tw.alignCenter,
                tw.bgTransparent,
                tw.rounded,
                tw.flexNoWrap,
                tw.p1,
              ]}
            >
              <AppIcon size={60} text={name} />
              <View
                style={[
                  tw.flexRow,
                  tw.flexGrow,
                  tw.justifyBetween,
                  tw.mX2,
                  tw.flexShrink,
                ]}
              >
                <View style={[tw.flexGrow]}>
                  <Text style={[tw.textXl]}>{item.name}</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[tw.textGray600, tw.textBase, { maxWidth: "90%" }]}
                  >
                    {item.name_with_namespace}
                  </Text>
                  <Text style={[tw.textGray600, tw.textSm]}>{date}</Text>
                </View>
              </View>
              {/* <View
          style={[
            tw.flex,
            tw.flexCol,
            tw.justifyBetween,
            tw.itemsCenter,
            tw.flexShrink0,
          ]}
        >
          <View
            style={[
              tw.flexRow,
              tw.justifyBetween,
              tw.rounded,
              tw.bgGray500,
              tw.pX3,
              tw.pY1,
              tw.w16,
            ]}
          >
            <Ionicons name="md-star-outline" size={16} color="white" />
            <Text style={[tw.textWhite]}>{item.star_count}</Text>
          </View>
          <View
            style={[
              tw.flexRow,
              tw.justifyBetween,
              tw.rounded,
              tw.bgGray500,
              tw.pX3,
              tw.pY1,
              tw.w16,
            ]}
          >
            <Ionicons
              name="ios-information-circle-outline"
              size={16}
              color="white"
            />
            <Text style={[tw.textWhite]}>{item.open_issues_count}</Text>
          </View>
        </View> */}
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
}
interface ProjectItemProps {
  item: ProjectModel;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export default ProjectItem;
