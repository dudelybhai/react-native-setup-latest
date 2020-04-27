import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    const [users, SetUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => { console.error(res); SetUsers(res.data) })
            .catch(error => console.error(error))
    }, [])
    return (
        <View style={StyleSheet.container}>
            <FlatList keyExtractor={(user) => user.id} data={users} renderItem={({ item }) => (
                <Text style={styles.user}>{item.name}</Text>
            )}>
            </FlatList>
            {/* <ScrollView>
                {
                    users.map(user => <View key={user.id}>
                        <Text style={styles.user}>{user.name}</Text></View>)
                }
            </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    user: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})