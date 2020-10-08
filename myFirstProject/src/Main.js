import React from 'react';
import MyBanner from './components/MyBanner';
import MyButton from './components/MyButton';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const food_data = [
  {
    id: 0,
    title: 'Çorbalar',
    desc: 'Birbirinden leziz çorbalar!',
    color: '#e57373',
    isActive: false,
  },
  {
    id: 1,
    title: 'Ara Sıcaklar',
    desc: 'Lezzetlei aparetifler',
    color: '#81d4fa',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ana Yemekler',
    desc: 'Doyurucu lezzetler',
    color: '#ffd54f',
    isActive: false,
  },
  {
    id: 3,
    title: 'Alkolsüz İçecekler',
    desc: 'Buz gibi serinletici lezzetler',
    color: '#cfd8dc',
    isActive: false,
  },
];

const Main = () => {
  return (
    <View style={{flex: 1}}>
      {food_data.map((food) => {
        return (
          <MyBanner
            menu={food.title}
            desc={food.desc}
            color={food.color}
            isActive={food.isActive}
          />
        );
      })}
      {/* <Text>Hello Fazilet</Text>
     
      <MyBanner
        menu="Ara sicaklar"
        desc="birbirinden leziz corbalar"
        color="yellow"
        isActive={true}
      />
      <MyBanner
        menu="Tatlilar"
        desc="birbirinden leziz corbalar"
        color="pink"
        isActive={false}
      /> */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert('Hello')}
        onLongPress={() => alert('Long Press')}>
        <Text style={styles.text}>Yenile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0277bd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
