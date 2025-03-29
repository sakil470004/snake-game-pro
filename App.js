import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/GameScreen';
import { colors } from './constants/colors';
import Status from './components/Status';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.rootBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
