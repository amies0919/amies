import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';
import IndexPage from './components/index.js';
let PixelRatio = require('PixelRatio');
let pixelRatio = PixelRatio.get();
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let leftStartPoint = totalWidth*0.1;
let componentWidth = totalWidth*0.8;
class amies extends Component {
    render(){
       return (
      <Navigator
          tintColor='#cccccc'
          barTintColor='#cccccc'
          initialRoute={{ name: 'indexPage', component: IndexPage }}
          /**
           * 切换界面方式,只能向前切换，不能向后切换
           */

          configureScene={(route) => {
            let  gestureType = Navigator.SceneConfigs.HorizontalSwipeJump;
            gestureType.gestures.jumpForward=null;
             return gestureType
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} {...route} navigator={navigator} />
          }}>
      </Navigator>
    );
    }
}
AppRegistry.registerComponent('amies', () => amies);
