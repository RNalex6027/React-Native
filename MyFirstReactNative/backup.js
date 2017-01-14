/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//解构
//from 'xxx'
//1.如果没有相对路径，就从node_modules里找
//例外：node_modules里没有，就在@provideModule里找

import kof from './Title';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class MyFirstReactNative extends Component {
    render() {
        return (
            <View>
                <View style={[styles.height160 , styles.row]}>
                    <View style={[styles.height160 , styles.part_1_left,]}>
                        <Text style={[styles.font30]}>1</Text>
                    </View>
                    <View style={[styles.height160 , styles.part_1_right,]}>
                        <View style={[styles.row , {flex:1}]}>
                            <View style={[{flex:1}]}>
                                <Text style={[styles.font30,{marginLeft:30}]}>吃</Text>
                                <Text style={[styles.font14,{marginLeft:12}]}>喝</Text>
                            </View>
                            <View style={[{flex:1},{marginTop:-13}]}>
                                <Text style={[styles.font30]}>这有个照片</Text>
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

                <View>
                    <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE', marginTop:40,height:65, flexDirection: 'row',paddingTop:10}}>
                        <View style={[{flex:1}]}>
                            <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'900', marginLeft:7}}>一元吃大餐</Text>
                            <Text style={{marginLeft:7, fontSize:12, marginTop:3}}>新用户专享</Text>
                        </View>
                        <Text style={{flex:1}}>这里也是照片</Text>
                    </View>
                </View>


                <View style={[styles.row]}>
                    <View style={{flexDirection: 'row',marginTop:20,borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE',}}>
                        <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1,flex:1}]}>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
                            </View>
                            <Text>一个图片</Text>
                        </View>
                        <View style={[styles.row,{flex:1}]}>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
                            </View>
                            <Text>二个图片</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1,  marginLeft:1,flex:1}]}>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>0元餐来袭</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>免费吃喝玩乐购</Text>
                            </View>
                            <Text>三个图片</Text>
                        </View>
                        <View style={[styles.row,{flex:1}]}>
                            <View>
                                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>热门团购</Text>
                                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>大家都在买什么</Text>
                            </View>
                            <Text>四个图片</Text>
                        </View>
                    </View>
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


AppRegistry.registerComponent('MyFirstReactNative', () => MyFirstReactNative);
