import {
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

import * as Haptics from 'expo-haptics';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 430) {
    imageSize = 130;
  }

  const imageStyleDynamic = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyleDynamic]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            You needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    color: 'white',
    fontSize: 24,
    textAlign: 'center ',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  },
});
