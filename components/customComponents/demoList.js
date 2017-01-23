import NavigationBar from '../../node_modules/react-native-navigationbar/lib/index.js';
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'
import DemoView from './demoDetail.js';//demo展示窗口
import List from '../lib/List.js';//引入列表组件
import LayoutExample from '../lib/Layout.js';//引入布局组件


export default class CustomComponents extends Component{
    constructor(props){
        super(props);
    }

    /**
     * react默认把最后一个参数处理成ResponderSyntheticEvent
     * @param name
     * @param RenderComponent
     * @param tabBar
     */
    passPropsParam(name,RenderComponent,bool){
        this.props.navigator.push({
           component:DemoView,
           backNavName:'查看IOS组件',
           title:name,
           targetComponent:<RenderComponent {...this.props}/>||null,
           tabBar:bool||false
       })
    }
    render(){
        return(
            <View>
                <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={`返回`}
                    backFunc={()=>{this.props.navigator.pop()}}
                    />
                      <List title='整体布局flexbox'
                      touchCallback={()=>this.passPropsParam.call(this,'flex布局',LayoutExample)}
                    />
              
            </View>
        );
    }
}