/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @alex
 * 逻辑是：1.判断平台
 *        2.注册应用
 */
import React, {Component} from 'react';

import {
    Platform,
    AppRegistry,
} from 'react-native';

import MainScreen from './components/MainScreen.js';

export default function start(platform) {
    const MyFirstReactNative = React.createClass ({
        render() {
            if (Platform.OS === 'android') {
                console.log(platform)
                return (
                    <MainScreen />
                );

            }
            else {
                console.log("fuck！");

            }
        }
    })
    AppRegistry.registerComponent('MyFirstReactNative', () => MyFirstReactNative);
}