/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @hangtian
 */
import React,{Component} from 'react'
import {
    ListView,
    Text,
    Image,
    View,
} from 'react-native'

export default class ListViewDemo extends Component{

    /*
     初始化模拟数据
     实际中是从其他组建获取数据
     ListView组件必须的两个属性是dataSource和renderRow。
     dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
     rowHasChanged函数也是ListView的必需属性。
     这里我们只是简单的比较两行数据是否是同一个数据（===符号只比较基本类型数据的值，和引用类型的地址）来判断某行数据是否变化了。
     ListView的父组件需指定高度，且高度需要小于所有元素的高度和，否则默认最大高度，没有滑动效果
     */
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])}
    }
    render(){
        return(
            <View style={{paddingTop: 1,}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{borderBottomWidth:1}}>{rowData}</Text>}
                />
            </View>
        );
    }

}