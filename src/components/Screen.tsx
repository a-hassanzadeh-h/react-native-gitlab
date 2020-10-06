import { useTheme } from 'react-native-paper';
import React, { ReactElement } from 'react';
import {View, StyleSheet} from 'react-native';
import {TailwindStyles, tw} from 'react-native-tailwindcss';


function Screen({children, styles}: ScreenProps){
    const {colors} = useTheme();
    return (
        <View style={[tw.flexGrow,tw.justifyCenter, tw.alignCenter,{backgroundColor: colors.surface},styles]}>
            {children}
        </View>
    );
}
interface ScreenProps{
    children?: ReactElement | never[],
    styles?: StyleSheet | TailwindStyles[],
}
export default Screen;