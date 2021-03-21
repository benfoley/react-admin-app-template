import * as React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import HTML from "react-native-render-html";


export default function EntryDetail({route}: StackScreenProps<RootStackParamList, 'EntryDetail'>) {

    const {title, info} = route.params.entry;
    const contentWidth = useWindowDimensions().width;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {info &&
                <HTML source={{html: info}} contentWidth={contentWidth}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }
});
