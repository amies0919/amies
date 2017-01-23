import React, { Component } from 'react';
import 
{
    View,
    Text,
    StyleSheet,
    PropTypes,
    PixelRatio,
    TouchableHighlight
} from 'react-native';

export default class List extends Component{
    constructor(props){
      super(props);
    }
    static defaultProps={
        title:'',
        touchCallback:function(){},
        disabled:false,
        underlayColor: '#aaa',
    };
    render(){
        return (
            <TouchableHighlight onPress={this.props.touchCallback}
                                underlayColor={this.props.underlayColor}
                                disabled={this.props.disabled}
                >
                <View style={listStyles.list_item}>
                    <Text style={listStyles.list_text}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
var listStyles = StyleSheet.create({
    list_item:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        borderBottomWidth:1/PixelRatio.get(),//set to min boder
        borderBottomColor:'#ddd'
    },
    list_text:{
      fontSize:16
    }
});