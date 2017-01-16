import React,{ Component } from 'react';
import {
    Text,
} from 'react-native';

export default class FetchDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:''
        };
    }

    fetchData = (page) => {
        fetch('http://bbs.reactnative.cn/api/category/3')
            .then((response) => response.json())
            .then((responseJson) => {
                page.setState({showText:responseJson.topics[0].title});
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {this.state.text}
                </Text>

            </View>
        );
    }
}