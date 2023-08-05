import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBoxExercise1';

const App = () => {
  colorBoxArray = [
    { colorName: 'Cyan', 
      colorHex: '#2aa198' 
    },
    { colorName: 'Blue', 
      colorHex: '#268bd2' 
    },
    { colorName: 'Magenta', 
      colorHex: '#d33682' 
    },
    { colorName: 'Orange', 
      colorHex: '#cb4b16' 
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        {colorBoxArray.map((box, i) =>
          <ColorBox
            key={i}
            colorName={box.colorName}
            colorHex={box.colorHex}
          />
        )}
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    paddingHorizontal: 20
  },
  safeArea: {
    flex: 2,
  },
  text: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default App;
