import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryList from './screens/EntryList';
import EntryDetail from "./screens/EntryDetail";
import { RootStackParamList } from './types';



export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EntryList"
                          component={EntryList}
                          options={{title: 'Entries'}}
            />
            <Stack.Screen name="EntryDetail"
                          component={EntryDetail}
                          options={({route}) => ({title: route.params.entry.entry_word})}
            />
        </Stack.Navigator>
    );
}
