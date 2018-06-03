import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity,
  Image, FlatList, StatusBar
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {Icon} from 'react-native-elements';

import styles from '../components/styles';
import nav_style from '../components/nav_style';
import NavigationBtn from '../components/NavigationBtn';
import Places from './Places';


// const styles = require('../styles.js')
const items = ['Museums', 'Galleries', 'Monuments'];
const places = [{
  title: "Polin ",
  type: "Museum",
  coordinate: {latitude: 52.220521, longitude: 21.010488}
},
{
  title: "aaa ",
  type: "Gallery",
  coordinate: {latitude: 52.220521, longitude: 21.010488}
}];

//const type = places.filter(x => x.type === 'museum');


class MustSee extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { checked: false };
  // }

  state = {
    checked: [],
  };

  checkItem = item => {
    const { checked } = this.state;

    if (!checked.includes(item)) {
      this.setState({ checked: [...checked, item] });
    } else {
      this.setState({ checked: checked.filter(a => a !== item) });
    }
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
      <View style={{height:'83%'}}>
        <View>
          <FlatList
            data={items}
            extraData={this.state}
            renderItem={({ item }) => (
              <CheckBox
                title={item}
                onPress={() => this.checkItem(item)}
                checked={this.state.checked.includes(item)}
                containerStyle={styles.whiteBigContainer}
                textStyle={styles.text1}
                checkedColor='#4A4A4A'
                uncheckedColor='#4A4A4A'
              />
            )}
          />
        </View>
            
        <View>
          <View style={styles.white_Left_Container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map')}>
              <Icon 
                  name='marker' 
                  type='foundation' 
                  color='#1D3557'
                  size={35}/>
            <Text style={styles.text2}> Show On Map </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.white_Right_Container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Places')}>
              <Icon 
                name='list' 
                color='#1D3557'
                size={40}/>
              <Text style={styles.text2}> Show List </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        </View>
        <View style={{top:'5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center',}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}} >Home</Text>
                </TouchableOpacity>
            </View>
            

            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                <Icon 
                    name='marker' 
                    type='foundation'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Map</Text>
                </TouchableOpacity>
            </View>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Timetable</Text>
                </TouchableOpacity>
            </View>
        
            </View>
        
      </View>
    )
  }
}

export default MustSee;
