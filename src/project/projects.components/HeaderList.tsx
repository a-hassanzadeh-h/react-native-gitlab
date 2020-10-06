import React from 'react';
import {View, Text} from 'react-native';
import {tw } from 'react-native-tailwindcss';
function HeaderList({text}: {text:string}){
    return (
        <View style={[tw.justifyCenter, tw.shadowMd, tw.bgYellow500, tw.roundedBLg, tw.h16, tw.mB3]}>
            <Text style={[tw.text3xl, tw.fontBold, tw.selfCenter, tw.textGray700]}>{text}</Text>
        </View>
    );
}

export default HeaderList;