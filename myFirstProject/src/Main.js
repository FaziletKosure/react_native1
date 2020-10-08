import React from 'react';
import MyBanner from './components/MyBanner';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello Fazilet</Text>
      <MyBanner menu="Corbalar" />
      <MyBanner menu="Salatalar" />
      <MyBanner menu="Tatlilar" />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
