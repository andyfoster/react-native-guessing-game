import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress, style, textStyle }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed, style]
            : [styles.buttonInnerContainer, style]
        }
        onPress={() => {
          onPress();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: 'hidden',
    borderRadius: 28,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
