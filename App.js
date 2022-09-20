import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigators from './src/navigators/TabNavigators';
import { store } from './store'
import { db } from './src/themes/color';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigators />
      </NavigationContainer>
    </Provider>
  )
}