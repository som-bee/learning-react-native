import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.lightText : styles.darkText}>
        Hello from sombee!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
