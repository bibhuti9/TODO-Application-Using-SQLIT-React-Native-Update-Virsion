import { TouchableOpacity, View, Text, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { COLOR, SIZE } from '../themes/color'
import { useNavigation } from '@react-navigation/native'
import { deleteTaskSqlit } from '../themes/common';

export default function ListTask({ value, width, selectTask }) {
    const navigation = useNavigation();

    const deleteTask = () => {
        deleteTaskSqlit(value.Id);
        selectTask();
    }

    return (
        <View style={[styles.card, { width: width }]}>
            <View>
                <Text>{value.TaskName}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('addTask',
                        {
                            value: value,
                            selectTask: selectTask,
                            headerText: "Edit Task",
                            goBack: () => navigation.goBack(),
                        }
                    )}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: SIZE.margin1 }} onPress={deleteTask}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: SIZE.margin1 + 5,
        borderRadius: SIZE.borderRadious,
        marginVertical: SIZE.margin1 - 5,
        backgroundColor: COLOR.white,
        padding: SIZE.padding1 + 10,
        justifyContent: 'space-between'
    }
})