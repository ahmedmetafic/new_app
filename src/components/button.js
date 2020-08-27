import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const button = ({onPress}) => {
  const {text, container} = styles;
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Text style={text}>submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 100,
    backgroundColor: '#6699ff',
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default button;
