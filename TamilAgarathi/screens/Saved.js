import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function SavedScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>
                Saved Screen
        </Text>
        </View>
    );
}