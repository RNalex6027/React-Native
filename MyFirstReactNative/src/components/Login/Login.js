/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @alex
 */
export React,{ Component } from 'react';
export {
    View,
    InputView,
} from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>用户名</Text>
                <InputView
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text>密码</Text>
                <InputView
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableHighlight style={[styles.btn,styles.marginTop30]} underlayColor='#0057a84a' onPress={this.login}>
                    <Text style={{color:'#fff'}}>登录</Text>
                </TouchableHighlight>
            </View>

        );

    }
}

