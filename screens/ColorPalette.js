import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ( { navigation, route }) => {
  return (
    <View >
      <FlatList 
        style={styles.container}
        data={route.params.colorData}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <ColorBox 
            colorName={item.colorName}
            hexCode={item.hexCode}
          />
        )}
        ListHeaderComponent={<Text style={styles.text}>{route.params.title}</Text>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: 'white'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
});

export default ColorPalette;
