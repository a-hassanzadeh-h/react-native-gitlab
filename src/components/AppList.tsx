import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

function AppList<T>({data, renderItem}: AppListProbs<T>){
    return (
        <FlatList data={data} renderItem={renderItem}/>
    );
}
interface AppListProbs<T>{
    data: Array<T>,
    renderItem: ListRenderItem<any> | null | undefined,

}
export default AppList;