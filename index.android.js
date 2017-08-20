/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Articles = require('./articles');
var Details = require('./details');


class NewsList extends Component {

  renderScene(route, navigator) {

    if(route.id =='articles') {
      return <Articles navigator={navigator} {...route.passProps}/>
    }

     if(route.id =='details') {
      return <Details navigator={navigator} {...route.passProps}/>
    }
    
  }


  render() {
    return (
     <Navigator
        initialRoute={{id:'articles'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewsList', () => NewsList);
