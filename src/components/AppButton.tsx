import React, { ReactElement } from "react";
import {
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tw } from "react-native-tailwindcss";

function AppButton({
  title,
  onPress,
  handleIconOnPress,
  disabled = false,
  loading,
}: AppButtonProps): ReactElement {
  const Touchable = ({ children }: { children: ReactElement }) =>
    Platform.OS === "android" ? (
      <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
        {children}
      </TouchableNativeFeedback>
    ) : (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        {children}
      </TouchableOpacity>
    );
  return (
    <Touchable>
      <View
        style={[
          disabled ? tw.bgGray500 : tw.bgGray700,
          tw.h12,
          tw.mX2,
          tw.mY2,
          tw.roundedSLg,
          tw.roundedELg,
          tw.justifyCenter,
          tw.itemsCenter,
          tw.flexRow,
          tw.selfCenter,
          tw.w2_3,
          tw.shadowMd,
        ]}
      >
        {loading && (
          <MaterialCommunityIcons
            name="window-close"
            size={24}
            color="white"
            onPress={handleIconOnPress}
            style={[tw.absolute, tw.left0, tw.mL3]}
          />
        )}
        <Text style={[tw.textWhite, tw.textBase, tw.uppercase]}>{title}</Text>
        {loading && (
          <ActivityIndicator
            size={24}
            color="white"
            style={[tw.absolute, tw.right0, tw.mR3]}
          />
        )}
      </View>
    </Touchable>
  );
}

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  handleIconOnPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading: boolean;
}

export default AppButton;
