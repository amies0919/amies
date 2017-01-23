import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    Animated,
    Navigator
} from 'react-native';

//引入博客webview
import Blog from './webview/blog.js';
//引入自定义的IOS组件界面
import CustomComponents from './customComponents/demoList.js';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.touchConfigs={
            underlayColor:'#222',//触摸操作，显示的底层颜色
            delayLongPress:1000//延迟长按相应时间
        };
        this.state={
            fadeAnim:new Animated.Value(0.3)
        }
    }

    /**
     * 增加对animation属性的测试
     */
    componentDidMount() {
        Animated.timing(       // Uses easing functions
            this.state.fadeAnim, // The value to drive
            {
                toValue: 1,        // Target
                duration: 1000,    // Configuration
            }
        ).start();             // Don't forget start!
    }
    jumpToWebWiew(url,title){
        /**
         * @ TODO 改变navigation title颜色
         */
       this.props.navigator.push({
            component:Blog,
            url:url,
            title:title
        })
    }
    jumpToCustomItems(){
       this.props.navigator.push({
           component:CustomComponents,
           title:'学习其他组件'
       })

    }
    /**
     * resizeMode只有contain cover stretch
     * @return {XML}
     */
    render() {
       const slash = 'https://reactnative.cn/docs/0.40/getting-started.html';
       const team ='https://www.v2ex.com/p/7v9TEc53';
        return (
            <View style={styles.container}>
                <Animated.View style={
                [styles.headerWrapper,
                {opacity: this.state.fadeAnim}]
                }>
                    <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                           style={styles.image}
                           resizeMode={Image.resizeMode.cover}
                        />
                    <View style={styles.composerView}>
                        <Text style={styles.author}>图片：logo</Text>
                    </View>
                </Animated.View>
                <Animated.View style={styles.content}>
                    <View style={styles.idioms}>
                        <Text style={[styles.personalText,{lineHeight:23}]}
                              numberOfLines={5}
                            >- 这个React Native开发的APP集成了RN提供的主要组件{'\n'}
                             - 语法采用ECMAScript6{'\n'}
                             - 功能点包括WebView,TabBar,图片浏览,进度条,动画{'\n'}
                             - 可以在这个demo基础上进行二次开发
                    </Text>
                        <Text style={styles.dateAuthor}>简介</Text>
                    </View>
                         <TouchableHighlight
                        {...this.touchConfigs}
                        style={styles.touchHighLight}
                        onPress={this.jumpToWebWiew.bind(this,slash,'官方文档')}>
                        <Text style={styles.textHint}>
                            RN中文官方文档
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        {...this.touchConfigs}
                        style={styles.touchHighLight}
                        onPress={this.jumpToWebWiew.bind(this,team,'v2exapi')}>
                        <Text style={styles.textHint}>
                            v2ex开发接口
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.touchHighLight}
                                        underlayColor={'#222'}//触摸操作，显示的底层颜色
                                        delayLongPress={1000}//延迟长按相应时间
                                        onPress={this.jumpToCustomItems.bind(this,team)}>
                            <Text style={styles.textHint}>其他组件学习</Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
};
/**
 * 心得1:flexDirection在react-native中默认是垂直布局的
 */
var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    headerWrapper:{
        flex:3,
        backgroundColor:'#ddd'
    },
    content:{
      flex:5,
        backgroundColor:'#000'
    },
    image:{
        flex:1
    },
    composerView:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:30,
        backgroundColor:'#000',
        opacity:0.5,
        alignItems:'center'
    },
    author:{
        position:'absolute',
        right:20,
        marginTop:4,
        fontSize:12,
        color:'#fff'
    },
    idioms:{
        flex:2,
        paddingHorizontal:10,
        paddingVertical:17,
        marginTop:17,
        marginBottom:17,
        backgroundColor: '#434243',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    personalText:{
        color:'#fff',
        fontSize:14,
        lineHeight:17
    },
    dateAuthor: {
        fontSize: 14,
        color: 'white',
        position: 'absolute',
        left: 16,
        bottom: 18
    },
    touchHighLight:{
        flex:1,
        marginBottom:10,
        backgroundColor: '#434243',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHint: {
        fontSize: 14,
        color: 'white'
    }
});
export default HomePage;
