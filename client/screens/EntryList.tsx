import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { EntryT, RootStackParamList } from '../types'
import { StackScreenProps } from '@react-navigation/stack';



export default function EntryList({navigation}: StackScreenProps<RootStackParamList, 'EntryList'>) {

    let entriesRef = firebase.firestore().collection('entry');
    const [ entriesData, setEntries ] = useState<EntryT[]>([]);

    useEffect(() => {
        return entriesRef.onSnapshot((querySnapshot) => {
            const entriesList:any = [];
            querySnapshot.forEach(doc => {
                const { title, info } = doc.data();
                entriesList.push({id: doc.id, title, info})
            });
            setEntries(entriesList)
        });
    }, []);

    const renderItem = ({item}:any) => (
        <TouchableOpacity
            style={styles.linkWrapper}
            key={item.id}
            onPress={() => navigation.navigate('EntryDetail', {entry: item})}
        >
            <Text style={styles.link}>{item.title}</Text>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={entriesData}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linkWrapper: {
        borderBottomColor: 'pink',
        borderBottomWidth: 2,
    },
    link: {
        fontSize: 32,
        lineHeight: 60,
    }
});
