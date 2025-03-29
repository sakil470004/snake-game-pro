import { StyleSheet, Text, View } from "react-native";
import Status from "../components/Status";
import GameBoard from "../components/GameBoard";
import GameController from "../components/GameController";

function GameScreen() {
  return (
    <View style={styles.container}>
<Status/>

<GameBoard/>
        
        <GameController/>
    </View>
  );
}
export default GameScreen;

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})