import React from 'react';
import MyBanner from './components/MyBanner';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello Fazilet</Text>
      <MyBanner
        menu="Corbalar"
        desc="birbirinden leziz corbalar"
        color="blue"
      />
      <MyBanner
        menu="Ara sicaklar"
        desc="birbirinden leziz corbalar"
        color="yellow"
      />
      <MyBanner
        menu="Tatlilar"
        desc="birbirinden leziz corbalar"
        color="pink"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
