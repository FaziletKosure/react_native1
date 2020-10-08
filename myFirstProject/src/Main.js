import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'grey',
            margin: 15,
            borderRadius: 10,
          }}>
          <View
            style={{
              backgroundColor: 'orange',
              borderRadius: 100,
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Orange Circle
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'yellow',
              borderRadius: 20,
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'pink',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: 20,
            width: 200,
            height: 370,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Black Box</Text>
        </View>
        <View
          style={{
            backgroundColor: 'brown',
            borderRadius: 100,
            width: 60,
            height: 380,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', transform: [{rotate: '270deg'}]}}>
            Brown Box
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
