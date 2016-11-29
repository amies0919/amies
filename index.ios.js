import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ListView
} from 'react-native';
let PixelRatio = require('PixelRatio');
let pixelRatio = PixelRatio.get();
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let leftStartPoint = totalWidth*0.1;
let componentWidth = totalWidth*0.8;
class Greeting extends Component{
    render(){
        return (
            <Text style={{left:50}}>Hello {this.props.name}!</Text>
        );
    }
}
class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText:true};
        setInterval(()=>{
            this.setState({showText:!this.state.showText});
        },1000);
    }
    render(){
        let display = this.state.showText? this.props.text:'';
        return(
            <Text>{display}</Text>
        );
    }
}
class amies extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin'  
            ])
        };
    }
    render() {
        fetch('https://facebook.github.io/react-native/movies.json').then((response) =>response.json()).then((responseJson) =>{
            console.log(responseJson);
        }).catch((error)=>{console.error(error)});
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
            </View>
        );
    }
};

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
    },
    bigTextPrompts: {
        top:70,
        left: leftStartPoint,
        width: componentWidth
    }
});

AppRegistry.registerComponent('amies', () => amies);
