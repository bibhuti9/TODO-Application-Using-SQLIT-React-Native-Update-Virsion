import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { SIZE } from '../themes/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Left Icon
// Left Call Back function
// Header Text

export default function HeaderComponents({ leftIcon, onPress, headerText }) {
    return (
        <View style={styles.headerContainerStyle}>
            <TouchableOpacity onPress={onPress}>
                <Image source={leftIcon} style={styles.imageStyle} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.headerTextStyle}>{headerText}</Text>
            <Text style={{
                height: 25,
                width: 25
            }}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainerStyle: {
        padding: SIZE.padding1,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 25,
        width: 25,
    },
    headerTextStyle: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: SIZE.h1
    }
})