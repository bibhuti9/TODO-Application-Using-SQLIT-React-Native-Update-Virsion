import React from 'react'

// Screens
import HomeScreen from '../screens/HomeScreen'
import AddTaskScreen from '../screens/AddTaskScreen'

import { createStackNavigator } from '@react-navigation/stack';
const Tab = createStackNavigator()
export default function TabNavigators() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='addTask' component={AddTaskScreen} />
        </Tab.Navigator>
    )
}