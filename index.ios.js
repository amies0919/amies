import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
let PixelRatio = require('PixelRatio');
let pixelRatio = PixelRatio.get();
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let leftStartPoint = totalWidth*0.1;
let componentWidth = totalWidth*0.8;
let amies =  React.createClass ({ 
    getInitialState: function(){
        return {
            inputedNum:'',
            inputedPW:''
        };       
    },
    updateNum: function(inputedNum){
        this.setState({inputedNum});
    },
    updatePW: function(inputedPW){
        this.setState({inputedPW});
    },
    render() {
        //console.log('render has been executed.');
        //console.log('leftStartPoint is:' + leftStartPoint);
        //console.log('componentWidth is :' + componentWidth);
        return (
            <View style={styles.container}>
                <TextInput onChangeText = {this.updateNum} style={styles.numberInputStyle} placeholder={'请输入手机号'} />
                <Text style={styles.textPromptStyle}>
                    您输入的手机号:{this.state.inputedNum}
                </Text>
                <TextInput onChangeText = {this.updatePW} style={styles.passwordInputStyle} placeholder={'请输入密码'} />
                <Text style={styles.bigTextPrompt}>
                确定         
                </Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    numberInputStyle: {
        top: 20,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        height: 70
    },
    textPromptStyle: {
        top: 30,
        left: leftStartPoint,
        width: componentWidth,
        fontSize: 20
    },
    passwordInputStyle: {
        top: 50,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        height: 70
    },
    bigTextPrompt: {
        top:70,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
});

AppRegistry.registerComponent('amies', () => amies);
