import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [currentTime, setCurrentTime] = useState('then');

  function updateTime() {
    setCurrentTime(Date.now());
  }

  return (
    <>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>{currentTime}</Text>
      </View>
      <View style={styles.container}>
        <Text>Guessing Game</Text>
        <Button title="Time" onPress={updateTime} />
        <StatusBar style="light" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    backgroundColor: 'blue',
    height: 100,
    padding: 5,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 30,
  },
});
