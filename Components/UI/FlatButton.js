import { Pressable, StyleSheet, Text, View } from 'react-native';

function FlatButton({ children, onPress,pure }) {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      <View style={ pure?null:styles.button}>
        <Text style={[styles.buttonText,pure&&{textAlign:"left"}]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: "orange",
  },
});
