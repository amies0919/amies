import NavigationBar from '../../node_modules/react-native-navigationbar/lib/index.js';
import React, { Component } from 'react';
import {
    View,
    Text,
    PropTypes
} from 'react-native'
/**
 * 导航条,组件展示类是经过参数传递进来的
 */
export default class DemoView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let RenderComponent = this.props.tabBar ? this.props.targetComponent :
            <View style={{flex:1}}>
                <NavigationBar
                    title={this.props.title}
                    IsBackText={true}
                    backName={`组件列表`}
                    backFunc={()=>{
                            console.log(this)

                    this.props.navigator.pop()
                    }}
                    />
                <View style={{flex:1}}>
                    {this.props.targetComponent}
                 </View>
            </View>
        return RenderComponent;
    }
}