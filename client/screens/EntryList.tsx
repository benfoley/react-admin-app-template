import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { EntryT, RootStackParamList } from '../types'
import { StackScreenProps } from '@react-navigation/stack';


const Item = ({ item }, navigation) => (
    <View>
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('BirdDetail', {item})}
        >
            <Text>{item.entry_word}</Text>
        </TouchableOpacity>

    </View>
);


export default function EntryList({navigation}: StackScreenProps<RootStackParamList, 'EntryList'>) {

    let entriesRef = firebase.firestore().collection('entries');
    const [ entriesData, setEntries ] = useState<EntryT[]>([]);

    useEffect(() => {
        return entriesRef.onSnapshot((querySnapshot) => {
            const entriesList:any = [];
            querySnapshot.forEach(doc => {
                const { entry_word } = doc.data();
                entriesList.push({id: doc.id, entry_word})
            });
            setEntries(entriesList)
        });
    }, []);

    const renderItem = ({item}) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('EntryDetail', {entry: item})}
        >
            <Text style={styles.link}>{item.entry_word}</Text>
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
        justifyContent: 'center',
    },
    link: {
        fontSize: 32,
        lineHeight: 60,
    }
});
