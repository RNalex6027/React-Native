
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
/*
 解构
 from 'xxx'
 1.如果没有相对路径，就从node_modules里找
 例外：node_modules里没有，就在@provideModule里找
 */

import ListViewDemo from './ListViewDemo.js';
import FetchDemo from './FetchDemo.js';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    Button,
    Navigator,
} from 'react-native';

class Greating extends Component{
    render(){
        return(
            <Text>你是谁？{this.props.name}</Text>
        );
    }
}


class Blink extends Component{
    constructor(props) {
        super(props);
        this.state={showText: true};

        //每1000毫秒对showText状态做一次取反操作
        //setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式
        //匿名函数，第一个参数是一个匿名函数，第二个参数是时间间隔
        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }
    render(){
        let display = this.state.showText ? this.props.text : ' ';
        return(
            <Text>{display}</Text>
        );
    }
}

//另外一个匿名函数的例子

class PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state = {text:''};
    }
    render(){
        return (
            //TextInput是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，
            //此属性接受一个函数，而此函数会在文本变化时被调用。
            <View style={{padding: 3,flex:1,marginTop:40,height:65,borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE'}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 0, fontSize: 10}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

//ScrollView
/*
 class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
 render() {
 return(
 <ScrollView>
 <View>
 <Text style={{fontSize:10}}>Scroll me plz</Text>
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 </View>
 <View style={{borderTopWidth:1}}>
 <Text style={{fontSize:10}}>If you like</Text>
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 </View>
 <Text style={{fontSize:10}}>Scrolling down</Text>
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Text style={{fontSize:10}}>What's the best</Text>
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Text style={{fontSize:10}}>Framework around?</Text>
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Image source={require('./img/bunny.png')} />
 <Text style={{fontSize:10}}>React Native</Text>
 </ScrollView>
 );
 }
 }
 */
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state={showText: true};
    }
    render() {
        let pic = require('../../img/bunny.png');
        var fd = new FetchDemo();
        var jg;
        //调用fetchdemo生成json数据
        return (
            <View>
                <View style={[styles.height160 , styles.row]}>
                    <View style={[styles.height160 , styles.part_1_left,]}>
                        <Greating name = "Hang"/>
                        <Button
                            onPress={()=>{
                          fd.fetchData(this);
                          this.setState({showText: false})}
                          }
                            title="点我" color="#841584"/>
                        <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>{this.state.showText}</Text>
                    </View>
                    <View style={[styles.height160 , styles.part_1_right,]}>
                        <View style={[styles.row , {flex:1}]}>
                            <View style={[{flex:1}]}>
                                <Blink text = '吃'/>
                                <Blink text = '喝'/>
                                <Blink text = '拉'/>
                                <Blink text = '撒'/>
                            </View>

                            <View style={[{flex:1},{marginTop:-13}]}>
                                <Image source={pic} style={{width: 160, height: 80}}/>
                            </View>
                        </View>
                        <View style={[{flex:1, flexDirection: 'row',borderTopWidth:0.5, borderColor:'#DDD8CE'}]}>
                            <View style={{flex:1, borderRightWidth:1, borderColor:'#DDD8CE',}}>
                                <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>聚餐宴请</Text>
                                <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>朋友家人常聚聚</Text>
                            </View>
                            <View style={{flex:1,}}>
                                <Text style={[styles.font14,{color:'#FF8601', marginTop:8, marginLeft:5}]}>名店抢购</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={[styles.row]}>
                    <View style={{flex:1,borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE', marginTop:40,height:65, flexDirection: 'row',paddingTop:10}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'900', marginLeft:7}}>一元吃大餐</Text>
                            <Text style={{marginLeft:7, fontSize:12, marginTop:3}}>新用户专享</Text>
                        </View>

                    </View>
                    <PizzaTranslator/>
                </View>
                <View style={[styles.row]}>
                    <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE',borderRightWidth: 1,flex:1}}>

                        <View>
                            <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                            <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
                        </View>
                        <Text>一个图片</Text>

                        <View>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
                            </View>
                            <Text>二个图片</Text>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE',flex:1}}>
                        <View>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:27}}>0元餐来袭</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:27}}>免费吃喝玩乐购</Text>
                            </View>
                            <Text>三个图片</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:27}}>热门团购</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:27}}>大家都在买什么</Text>
                            </View>
                            <Text>四个图片</Text>
                        </View>
                    </View>
                </View>

                <View style={{height:100}}>
                    <ListViewDemo />
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        paddingTop:10
    },
    marTop18:{
        marginTop:18,
    },
    marTop14:{
        marginTop:14,
    },
    font14:{
        fontSize:20,
    },
    font10:{
        fontSize:12,
    },
    font30:{
        fontSize:14,
    },
    height160:{
        height: 160
    },
    yue:{
        height:80,
    },
    green:{
        color:'#55A44B',
        fontWeight: '900'
    },
    red:{
        color: '#FF3F0D',
        fontWeight: '900'
    },
    marLeft10:{
        marginLeft:10,
    },
    part_1_left:{
        flex: 1,
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
    },
    part_1_right:{
        flex:2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,
    },
    hanbao:{
        height:55,
        width:55
    }
});



