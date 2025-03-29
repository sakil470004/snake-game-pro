import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
    <GameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
