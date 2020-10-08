import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyBanner = ({menu}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{menu}</Text>
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
