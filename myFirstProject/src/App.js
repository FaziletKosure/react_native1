import React from 'react';
import MyComponent from './components/MyComponent';
import Function from './components/Function';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const my_name = 'Fazilet';
  // function myFunction() {
  //  return (<View>
  //    <Text style={styles.hello}>Selam Clarusway!</Text>
  //    <Text style={styles.hello}>Selam Clarusway!</Text>
  //  </View>)

  // }
  const isAdmin = true;
  function myFunction(userName) {
    return <Text>{userName}</Text>;

    // return isAdmin ?  <Text style={{fontSize:40}}>Admin kullanicisi</Text>:null
    // if(isAdmin)
    //   return <Text style={{fontSize:40}}>Admin kullanicisi</Text>
    //   return null;

    // return <Text>Uye kullanicisi</Text>
  }
  const cityArray = ['Brussel', 'Ghent', 'Antwerp', 'Brugge'];
  const cities = () => cityArray.map((city) => <Text>{city}</Text>);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY 🎃</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY</Text>
      </View>
      <MyComponent />
      {/* <Text>Hosgelgin {my_name}</Text>
   <Text>Sonuc {5+4}</Text> */}
      {myFunction('Fazilet')}
      {/* { isAdmin ?  <Text style={{fontSize:40}}>Admin kullanicisi</Text>:null} */}
      {isAdmin && <Text style={{fontSize: 40}}>Admin kullanicisi</Text>}
      {cities()}
      <Function />
    </>
  );
  // (<View style={{
  //   backgroundColor :'red',
  //   margin:10,
  //   padding:5
  // }}>
  //   <Text>Merhaba!</Text>
  //   </View>);
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  hello: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
