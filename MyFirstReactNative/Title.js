/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Text,
} from 'react-native';

class Title extends Component {
    render() {
        return (

            <Text>
                Hello World!
            </Text>

        );
    }
}

class SubTitle extends Component {
    render() {
        return (

            <Text>
                Oh Yeah!
            </Text>

        );
    }
}

const object = {
    Title : Title,
    SubTitle : SubTitle

};

export default object;
