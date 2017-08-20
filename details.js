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
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';

class Details extends Component {

 back()
 {
   this.props.navigator.pop();
 }

  render() {
  if (!this.props.rowData.image){var image='http://s2.quickmeme.com/img/c5/c595586b491836bb2135fb603c2f4e5997ce0e2f8e41c30a81af650f568eaff8.jpg'}
  else
  var image=this.props.rowData.image;
  ;

 if (!this.props.rowData.headline){var headline='No Headline :)'}
  else
  var headline=this.props.rowData.headline;
  ;

  if (!this.props.rowData.author.username){var username='unknown author'}
  else
  var username=this.props.rowData.author.username;
  ;

  if (!this.props.rowData.metaDescription){var description='Sorry but no description available at this moment!'}
  else
  var description=this.props.rowData.metaDescription;
  ;


    return (
    <View style={styles.container}>
       <View style={styles.headerImage}>
          <Image style={styles.image}
              source={{uri: image}}>
               <TouchableHighlight onPress={() => this.back()}>
              <Image
        style={styles.button}
        source={require('./myButton.png')}
      />
              </TouchableHighlight>
          </Image>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headline}>{headline.toUpperCase()}</Text>
          <View style={{flex:1}}>
            <Text style={styles.username}>{username}</Text>
            </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFFFFF',
  },

  headerImage: {
    flexDirection: 'row',
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
  },

  heading: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  headline: {
    fontSize: 25,
    fontWeight: '400',
    color: '#2c2c2c',
    textAlign: 'center',
    flexDirection: 'row',
  },

  username: {
    fontSize: 16,
    color: '#9a9a9a',
    flexDirection: 'row',
    paddingTop: 10,
  },

  description: {
    flexDirection: 'row',
    flex: 1,
  },

  descriptionText: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-start',
  },

  back: {
    justifyContent: 'flex-end',
    padding: 15,
    color: '#ffffff',

  },

  button:{
  width:5,
  height:10,

  padding: 10
  }
});

module.exports=Details;
