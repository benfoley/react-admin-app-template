import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";


export default function EntryDetail({route}: StackScreenProps<RootStackParamList, 'EntryDetail'>) {

    const {entry_word} = route.params.entry;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a {entry_word}.</Text>
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
