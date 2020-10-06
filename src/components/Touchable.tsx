import React, { ReactElement } from 'react';
import {GestureResponderEvent, Platform} from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
function Touchable({children, onPress}: TouchableProps){
    return (
        Platform.OS === "android" ? (
            <TouchableNativeFeedback onPress={onPress} style={{backgroundColor: 'transparent'}}>
              {children}
            </TouchableNativeFeedback>
          ) : (
            <TouchableOpacity onPress={onPress} style={{backgroundColor: 'transparent'}}>
              {children}
            </TouchableOpacity>
          )
    );
}
interface TouchableProps{
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    children: ReactElement,
}
export default Touchable;