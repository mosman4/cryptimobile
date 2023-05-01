import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text> */}
      <TextInput
        placeholder={label}
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 6,
    backgroundColor: "#eeeff2",
    borderRadius: 9,
    fontSize: 16,
  
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
  // label: {
  //   color: 'white',
  //   marginBottom: 4,
  // },
  // labelInvalid: {
  //   color: Colors.error500,
  // },
});
