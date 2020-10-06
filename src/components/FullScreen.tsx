import React from 'react';
import {View} from 'react-native';
import {tw} from 'react-native-tailwindcss';

function FullScreen({children}){
    return(
        <View style={[tw.flexGrow, tw.bgGray100]}>
            {children}
        </View>
    );
}
export default FullScreen;