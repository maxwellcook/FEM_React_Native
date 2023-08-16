import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ColorButton = ({ title, colorData, navigation }) => {
  console.log(colorData)
  return (
    <View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          navigation.navigate('ColorPalette', { title, colorData })
        }}
      >
        <Text style={styles.text}>{title}</Text>
        <FlatList
          horizontal={true}
          data={colorData.slice(0, 5)}
          renderItem={({ item }) => (
            <View 
              style={[
                styles.colorBox,
                { backgroundColor: item.hexCode }
              ]}
            />
          )}
          keyExtractor={(item) => item.colorName}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  colorBox: {
    width: 30, 
    height: 30, 
    margin: 5
  }
});

export default ColorButton;
