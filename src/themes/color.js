import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import sqlite from 'react-native-sqlite-storage';
export const db = sqlite.openDatabase(
    {
        name: 'mainDBOne',
        location: 'default'
    },
    () => { console.log('Database COnnected') },
    err => { console.log('Database Error') }
);

export const COLOR = {
    primaryColor: "#41d7ea",
    secondaryColor: "#2aa2b2",

    gray1: "#e1e5e6",
    gray2: "#c2cacd",

    white: '#fff',
}

export const SIZE = {
    h1: 20,
    h2: 15,

    margin1: 10,
    margin2: 15,

    padding1: 10,
    padding2: 15,

    borderRadious: 20,

    width,
    height
}