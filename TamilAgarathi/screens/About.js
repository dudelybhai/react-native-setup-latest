import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>
                About Screen
        </Text>
        </View>
    );
}