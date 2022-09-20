import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR, db, SIZE } from '../themes/color'
import { useNavigation } from '@react-navigation/native'
import ListTask from '../components/ListTask';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const scrollViewRef = React.useRef();
    const [pos, setPos] = React.useState(0);
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const selectTaskSqlit = async () => {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "SELECT * FROM Task",
                [],
                (err, result) => { setData(result.rows.raw()) }
            )
        })
    }

    useEffect(() => {
        selectTaskSqlit();
    }, [])

    const AddButton = () => {
        return (
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => {
                    navigation.navigate('addTask',
                        {
                            value: "",
                            selectTask: selectTaskSqlit,
                            headerText: "Add Task",
                            goBack: () => navigation.goBack(),
                        }
                    )
                }}
            >
                <Text style={{ fontSize: 25 }}>+</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, }}>
            {/* Add Task Button */}
            <View style={{ flex: 1, marginTop: 10 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {
                        data.map((value, index) => {
                            return (
                                <ListTask
                                    value={value}
                                    key={index}
                                    selectTask={selectTaskSqlit}
                                    width={index == data.length - 1 ? 250 : null}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
            <AddButton />
            {/* List Of Task */}
        </View>
    )
}
const styles = StyleSheet.create({
    addButtonStyle: {
        position: 'absolute',
        bottom: 35,
        right: 15,
        width: 50,
        height: 50,
        borderRadius: SIZE.borderRadious + 30,
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    }
}) 