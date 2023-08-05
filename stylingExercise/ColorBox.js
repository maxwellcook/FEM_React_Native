import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const textString = `${colorName} ${colorHex}`;
  const style = createColorBoxStyle(colorHex);

  return (
    <View style={style.box}>
      <Text style={style.text}>{textString}</Text>
    </View>
  )
};

const createColorBoxStyle = (colorHex) => StyleSheet.create({
  box: {
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: colorHex,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default ColorBox;
