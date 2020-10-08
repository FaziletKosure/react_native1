import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyBanner = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>{props.menu}</Text>
          <Text>{props.desc}</Text>
        </View>

        <Text>Aktif Degil</Text>
      </View>
    </View>
  );
};

export default MyBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 7,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
