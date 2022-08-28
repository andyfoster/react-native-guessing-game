import { StyleSheet, Text, View } from 'react-native';

import Title from '../components/Title';

function generateRandomBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
}

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* YOUR GUESS HERE */}
      <View>
        <Text>Higher or lower?</Text>
        <Text>+ - </Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
