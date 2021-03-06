/**
 * Created by liu on 2016/3/11.
 */

'use strict';
var React = require('react-native');
var MyChart=require('./MyChart');
var NavigationBar = require( '../_thirdpartComponent/NavBar');
var {
    BarChart,
    CombinedChart,
    PieChart,
    LineChart
    }=require('../_thirdpartComponent/react-native-chart');
var {
    AppRegistry,
    Navigator,
    View,
    Text,
    Component,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView,
    BackAndroid,
    ToastAndroid,

    } = React;
var Manager = require('./Manager');
var {width, height, scale} = require('./Style');
var FrontStyles=require('./FrontStyles');
var dataSource4={
    "entryCount": 3,
    "xVals": [
        "活期存款",
        "理财产品",
        "定期存款"
    ],
    "dataSets": [
        {
            "yVals": [
                0.12,
                0.38,
                0.5
            ],
            "colors": [
                "#0066ff",
                "#006600",
                "#ff9933"
            ]
        }
    ]
};


class CustomMsg extends Component {
    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',function(){
            this.props.tabBarShow(true);
              this.props.navigator.pop();
            return true;
        }.bind(this));
    }
    getRandomData(argument) {
    var data={};
    data['xValues']=[];
    data['yValues']=[
        {
            data:[],
            label:'万元',
            config:{
                color:'blue'
            }
        }
    ];
    for (var i = 0; i < 500; i++) {
        data.xValues.push(i+'');
        data.yValues[0].data.push(Math.random()*100);
    };
    return data;
}
    _baseMsg() {
        return (
            <View ref='baseMsgView'>
                <Text style={styles.titleFront}>基本资料</Text>
                <View style={[styles.line]}/>
                <View style={styles.baseMsg}>
                    <View style={styles.photo}>
                        <Image style={{resizeMode: Image.resizeMode.cover}} source={require('./image/photo.jpg')}/>
                    </View>
                    <View style={styles.custMsg}>
                    <View>
                        <View style={styles.custMsgline}>
                            <Text style={styles.custMsgFront}>客户等级:     </Text>
                            <Text style={[styles.custMsgFront,{color:'#ff9933'}]}>金卡</Text>
                        </View>
                        <View style={styles.custMsgline}>
                            <Text style={styles.custMsgFront}>客户号:     </Text>
                            <Text style={[styles.custMsgFront,{color:'#000'}]}>16000000000</Text>
                        </View>
                        <View style={styles.custMsgline}>
                            <Text style={styles.custMsgFront}>客户经理:   </Text>
                            <Text style={[styles.custMsgFront,{color:'#000'}]}>王XX</Text>
                        </View>
                        <View style={styles.custMsgline}>
                            <Text style={styles.custMsgFront}>客户经理号:    </Text>
                            <Text style={[styles.custMsgFront,{color:'#000'}]}>1111</Text>
                        </View>
                    </View>
                    <View style={styles.custMsgline}>
                        <Text style={styles.tipFront}>标签:    </Text>
                        <View style={{marginTop:5, flexDirection: 'row'}} >
                        <View style={{backgroundColor:'#0066ff',marginLeft:5,padding:2}} >
                            <Text style={[styles.tipFront2]}>不喜欢买基金</Text>
                        </View>
                        <View style={{backgroundColor:'#ff9933',marginLeft:5,padding:2}} >
                            <Text style={[styles.tipFront2]}>有小孩</Text>
                        </View>
                        <View style={{backgroundColor:'green',marginLeft:5,padding:2}} >
                            <Text style={[styles.tipFront2]}>私营业主</Text>
                        </View>
                        </View>
                    </View>
                        </View>
                </View>
            </View>
        );
    }


    _assetchg() {
        var dataSource=dataSource4;
        var chartStyles={"animateType":"Y","animateY":1500};
        var yAxis={'position':'LEFT'};
        var xAxis={'position':'BOTTOM'};
        var props={};
        props['dataSource'] = JSON.stringify(dataSource);
        props['xAxis'] = JSON.stringify(xAxis);
        props['yAxis'] = JSON.stringify(yAxis);

        props['chartStyles'] = JSON.stringify(chartStyles);
        return (
            <View style={styles.assetChg}>
                <View style={{backgroundColor: '#fff',justifyContent:'flex-start'}}>
                      <Text style={styles.titleFront}>资产分布情况</Text>
                      <View style={[styles.line]}/>
                </View>
                <View style={{flex:1,height:100 ,padding:5,backgroundColor: '#fff'}}>

                    <PieChart
                        style={{flex:1}}
                        {...props}

                        />

                </View>

            </View>
        );
    }

    _assetmix() {
        return (
            <View style={styles.assetMix}>
                <View  style={{justifyContent:'flex-start'}}>
                       <Text style={styles.titleFront}>资产变动情况</Text>
                       <View style={[styles.line]}/>
                </View>
                <View style={{flex:1,height:100,padding:5}}>
                    <LineChart
                        style={{flex:1}}
                        data={this.getRandomData()}
                        visibleXRange={[0,30]}
                        maxVisibleValueCount={50}
                        xAxis={{drawGridLines:false,gridLineWidth:1,position:"BOTTOM"}}
                        yAxisRight={{enable:false}}
                        yAxis={{startAtZero:false,drawGridLines:false,position:"INSIDE_CHART"}}
                        drawGridBackground={false}
                        backgroundColor={"WHITE"}
                        description={"资产变动"}
                        legend={{enable:true,position:'ABOVE_CHART_LEFT',direction:"LEFT_TO_RIGHT"}}
                        />
                </View>

            </View>
        );
    }

    _custhold() {
        return (
            <View style={styles.custHold}>
                <View>
                <Text style={styles.titleFront}>客户持有产品</Text>
                <View style={[styles.line]}/>
                </View>
                <View>
                    <Text style={[FrontStyles.custHold,{ color:'#009966'}]}>{String.fromCharCode(parseInt('e902', 16))}  悠然白金卡</Text>
                    <Text style={[FrontStyles.custHold,{ color:'#009966'}]}>{String.fromCharCode(parseInt('e902', 16))}  网上银行</Text>
                    <Text style={[FrontStyles.custHold,{ color:'#009966'}]}>{String.fromCharCode(parseInt('e902', 16))}  手机银行</Text>
                    <Text style={[FrontStyles.custHold,{ color:'#009966'}]}>{String.fromCharCode(parseInt('e902', 16))}  短信通</Text>

                </View>
            </View>
        );
    }

    _custnothold() {
        return (
            <View style={styles.custNotHold}>
                <View>
                <Text style={styles.titleFront}>客户未持有产品</Text>
                <View style={[styles.line]}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={[FrontStyles.custHold,{color:'#ff9933'}]}>{String.fromCharCode(parseInt('e902', 16))}  理财账户</Text>
                    <Text style={[FrontStyles.custHold,{color:'#ff9933'}]}>{String.fromCharCode(parseInt('e902', 16))}  贵金属交易</Text>
                    <Text style={[FrontStyles.custHold,{color:'#ff9933'}]}>{String.fromCharCode(parseInt('e902', 16))}  准贷记卡</Text>
                </View>
            </View>
        );
    }

    _importTip() {
        return (
            <View>
                <View>
                <Text style={styles.titleFront}>重要商机提醒</Text>
                <View style={[styles.line]}/>
                </View>
                <ScrollView style={styles.scrollView}
                            horizontal={true}
                            sendMomentumEvents={true}>
                    {this._renderTipItems(tipData)}
                </ScrollView>
            </View>
        );
    }

    _renderTipItems(tipData) {


        return tipData.map(function (items, i) {
            return (

                <View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>

            )
        }.bind(this))

    }
_tabSelectedEvent(){
    this.props.navigator.pop();
    this.props.tabBarShow(true);
}
    _renderHeader() {
        const leftButtonConfig = {
            title: String.fromCharCode(parseInt('f142',16)),
            handler: () => this._tabSelectedEvent(),

            styleText:{
                fontFamily:'Entypo',
                fontSize:40,
            },
        };
        return (


            <NavigationBar
                title={{ title: "客户信息" }}
                leftButton={leftButtonConfig}
                />

        );
    }
    render() {
        this.props.tabBarShow(false);
        return (
            <View style={styles.page}>
                {this._renderHeader()}
                <ScrollView style={{backgroundColor : '#fff',flex:1}}>
                <Text>{this.props.msg}</Text>


                    { this._baseMsg()}

                        {this._assetchg()}
                        {this._assetmix()}

                    <View  style={styles.hold}>
                        { this._custhold()}
                        {this._custnothold()}
                    </View>

            </ScrollView>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    line: {
        marginTop:1,
        height: 1,
        backgroundColor: 'gray'
    },
    custMsgline:{
        flexDirection: 'row',
    },
    titleFront: {
        flex: 1,
        fontSize: 12,
        color: 'gray'
    },
    custMsgFront:{
        fontSize: 12,
        color:"green",
        marginTop:5
    },
    tipFront:{
        fontSize: 12,
        color:"red",
        marginTop:5
    },
    tipFront2:{
        fontSize: 12,
        color:"#fff",

    },
    page: {
        flex: 1,
        //padding: 10

    },
    baseMsg: {
       // backgroundColor: 'red',
        flexDirection: 'row',
        height:height*0.28,
        padding:5
    },
    photo:{
        width:width*0.3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    custMsg:{
        paddingLeft:20,

    },
    assert:{
       // backgroundColor: 'green',
       // flexDirection: 'row',
       // height:height*0.35,
        justifyContent:'space-between'
    },
    assetChg:{
       // backgroundColor: 'green',
        //flexDirection: 'row',
        //width:width*0.42,
        height:height*0.35,
        justifyContent:'flex-start'
    },
    assetMix:{
       // backgroundColor: 'red',
       // flexDirection: 'row',
       // width:width*0.42
        justifyContent:'flex-start'
    },
    hold:{
        //backgroundColor: 'yellow',
       flexDirection: 'row',
        height:height*0.4,
        justifyContent:'space-between'
    },
    custHold:{
      //  backgroundColor: 'green',
      //  flexDirection: 'row',
        width:width*0.42,
        justifyContent:'flex-start'
    },
    custNotHold:{
     //   backgroundColor: 'red',
      //  flexDirection: 'row',
        width:width*0.42
    }

});
module.exports = CustomMsg;