/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  const errorStyle = [{...style, borderColor: "red"}];

  return <NativeTextInput style={error ? errorStyle : textInputStyle} {...props} />;
};

export default TextInput;