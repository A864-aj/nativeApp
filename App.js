import { AppBar } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button } from 'react-native';
import { Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const[val,setVal]=useState('')
  return (
    
   <>
    <AppBar title="Anurag's App" style={{
      height:100,
      display:'flex',
      justifyContent:'center'
    }}/>
    <View style={styles.container}>
      <Text>Hello My name is Anurag</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <TextInput
        value={val}
        onChangeText={setVal}
        style={{
          height: 40,
          width:200,
          borderColor: 'black',
          padding:9,
          borderWidth: 1,
        }}
     
      />
      <StatusBar style="auto" />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Welcome "+val)}
      />
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
