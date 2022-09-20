import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { back } from '../themes/icon'
import HeaderComponents from '../components/HeaderComponents';
import { useNavigation } from '@react-navigation/native'

import { COLOR, SIZE, db } from '../themes/color';
import { createTable, addToList, updateList } from '../themes/common';

export default function AddTaskScreen({ route }) {
    const { value, headerText, goBack } = route.params;
    const [inputText, setValue] = useState(value.TaskName);
    const navigation = useNavigation();
    useEffect(() => {
        createTable();
    }, [])
    const press = () => {
        headerText === "Add Task" ? addToList(inputText) : updateList(inputText, value.Id);
        route.params.selectTask();
        navigation.goBack();
    }
    return (
        <>
            <HeaderComponents
                leftIcon={back}
                onPress={() => navigation.goBack()}
                headerText={headerText}
            />
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <TextInput value={inputText} onChangeText={(val) => setValue(val)} placeholder='Enter Task' style={styles.textInputStyle} />
                    <TouchableOpacity
                        style={styles.addTaskButtonStyle}
                        onPress={press}
                    >
                        <Text>
                            {headerText}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        borderRadius: SIZE.borderRadious,
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.width / 1.2,
        height: SIZE.height / 4,
        elevation: 4,
        padding: SIZE.padding1
    },
    textInputStyle: {
        width: '100%',
        borderRadius: SIZE.borderRadious,
        backgroundColor: COLOR.gray1,
        padding: SIZE.padding1,
    },
    addTaskButtonStyle: {
        borderRadius: SIZE.borderRadious,
        padding: SIZE.padding1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.primaryColor,
        width: SIZE.width / 2,
        margin: SIZE.margin2
    }
})