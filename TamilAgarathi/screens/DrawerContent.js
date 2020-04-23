import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://s.gravatar.com/avatar/13e99c3f084bfb00b6520fbac0ede9e3?s=80'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Mohammed Safi</Title>
                                <Caption style={styles.caption}>@dudelybhai</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='bookmark-outline' color={color} size={size} />
                        )}
                            label='Saved'
                            onPress={() => { props.navigation.navigate('Saved') }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='settings-outline' color={color} size={size} />
                        )}
                            label='Settings'
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='share-outline' color={color} size={size} />
                        )}
                            label='Share This App'
                            onPress={() => { props.navigation.navigate('Share') }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='account-outline' color={color} size={size} />
                        )}
                            label='Rate us'
                            onPress={() => { props.navigation.navigate('RateUs') }}
                        />


                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='account-check-outline' color={color} size={size} />
                        )}
                            label='Feedback'
                            onPress={() => { props.navigation.navigate('Feedback') }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='account-check-outline' color={color} size={size} />
                        )}
                            label='Privacy Policy'
                            onPress={() => { props.navigation.navigate('PrivacyPolicy') }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Icon name='account-check-outline' color={color} size={size} />
                        )}
                            label='About'
                            onPress={() => { props.navigation.navigate('About') }}
                        />
                        <Drawer.Section title='Preferences'>
                            <TouchableRipple onPress={() => { toggleTheme() }}>
                                <View style={styles.preference}>
                                    <Text>
                                        Dark Theme
                                   </Text>
                                    <View pointerEvents='none'>
                                        <Switch value={isDarkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({ color, size }) => (
                    <Icon name='exit-to-app' color={color} size={size} />
                )}
                    label='Sign Out'
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});