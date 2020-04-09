import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView  } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColor ={
  1: "#01CBC6",
  2: "#8B78E6",
  3: "#BB2CD9",
  4: "#2B2B52",
  5: "#1287A5",
  6: "#10A881",
  7: "#F5BCBA",
  8: "#E74292",
  9: "#EA7773",
  10: "#00CCCD"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
}

export default class App extends React.Component {

  playSound = async number => {
    const soundObject =new Audio.Sound();
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() =>{
          soundObject.unloadAsync();
        },playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  };

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style= {styles.gridContainer}>
          <Image 
          style ={styles.logo}
          source={require('./assets/logo.png')}
          />
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[1]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("one")
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[2]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("two")
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[3]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("three")
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[4]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("four")
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[5]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("five")
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[6]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("six")
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[7]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("seven")
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[8]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("eight")
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[9]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("nine")
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ {backgroundColor: listBackgroundColor[10]}, 
              styles.item]}
              onPress = { ()=>{
                this.playSound("ten")
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758AA2'
  },
  gridContainer:{
    flex:1,
    margin: 5
  },
  logo:{
    alignSelf: "center",
    marginTop: 20,

  },
  rowContainer: {
    flexDirection: "row",
  },
  item:{
    flex:1,
    height: 110,
    alignItems:"center",
    justifyContent:"center",
    margin: 2
  },
  itemText: {
    color: "#FFF",
    fontSize: 20,

  },
});
