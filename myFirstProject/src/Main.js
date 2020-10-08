import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={styles.grey}>
          <View style={styles.orange}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Orange Circle
            </Text>
          </View>
          <View style={styles.yellow}>
            <Text>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.pink}>
        <View style={styles.black}>
          <Text style={{color: 'white'}}>Black Box</Text>
        </View>
        <View style={styles.brown}>
          <Text style={{color: 'white', transform: [{rotate: '270deg'}]}}>
            Brown Box
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  grey: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
    margin: 15,
    borderRadius: 10,
  },
  orange: {
    backgroundColor: 'orange',
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pink: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'pink',
  },
  black: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: 200,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brown: {
    backgroundColor: 'brown',
    borderRadius: 100,
    width: 60,
    height: 355,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
