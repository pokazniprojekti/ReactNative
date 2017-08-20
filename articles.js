/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
} from 'react-native';




class Articles extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      Data: ds.cloneWithRows([]),
    };
  }


renderHeader() {
  return (
    <View style={styles.header}><Text style={styles.headerText}>NEWS</Text></View>
  );
}

 componentDidMount() {
    this.fetchData();
  }


 fetchData() {
    var url = 'https://api.myjson.com/bins/1nrbo';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        this.setState({
          Data: this.state.Data.cloneWithRows(jsonData)

        });
      })

  }


navigate(rowData){

  this.props.navigator.push({
      id:'details',
      //navigationBar: <ActivityDetailNavBar />,
      passProps:{
         rowData: rowData

      }

  });
console.log(rowData)
}



renderRow(rowData){
  if (!rowData.image){var image='http://s2.quickmeme.com/img/c5/c595586b491836bb2135fb603c2f4e5997ce0e2f8e41c30a81af650f568eaff8.jpg'}
  else
  var image=rowData.image;
  ;

  if (!rowData.headline){var headline='No Headline :)'}
  else
  var headline=rowData.headline;
  ;

  if (!rowData.author.username){var username='unknown author'}
  else
  var username=rowData.author.username;
  ;

  return (
    <TouchableHighlight onPress={this.navigate.bind(this, rowData)}
          underlayColor='#ddd'>

        <View style={styles.article}>
            <View style={styles.articleBody}>
              <Image onError={{image}} style={styles.articleImage} source={{ uri: image }} />
              <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>{headline}</Text>
                <Text style={styles.articleAuthor}>{rowData.author.username}</Text>
              </View>
            </View>
         </View>
    </TouchableHighlight>
    );
  }

 render() {
   var content=null;

   if(this.state.Data.getRowCount()===0){
     var text='Loading';
     content=<View style={styles.emptyList}><Text style={styles.emptyListText}>{text}</Text></View>;
   }
   
   else{
     content=<ListView
        dataSource={this.state.Data}
        renderRow={this.renderRow.bind(this)}
        renderHeader={this.renderHeader}
      />;
   }

    return (

      <View style={styles.articleList} >
      {content}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor:'#d1d1d1',
    borderBottomWidth:0.8,
  },

  headerText: {
    color: '#000000'
  },

  articleList: {
    flex: 1,
    flexDirection: 'row'
  },

  article: {
    flex:1,
    padding:15,
    alignItems: 'center',
    borderColor:'#e2e2e2',
    borderBottomWidth:0.6,
    backgroundColor:'#FFFFFF'
  },

  articleImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },

  articleBody:{
    flex: 1,
    flexDirection: 'row',
  },

  articleContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },

  articleTitle:{
    color:'#000000',
    fontSize: 14,
    flexDirection: 'row',
  },

  articleAuthor:{
    fontSize: 11,
    flexDirection: 'row',
  },
  emptyList:{
    flex:1,
    backgroundColor:'#FFF',
    alignItems:'center'
  },
  emptyListText:{
    marginTop:300,
    color:'#999'
  }

});



module.exports=Articles;
