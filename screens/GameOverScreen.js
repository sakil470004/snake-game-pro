import { StyleSheet, Text, View } from "react-native";

function GameOverScreen(){
    return(
        <View>
            <Text>Game Over</Text>
            <Text>Thanks for playing!</Text>
        </View>
    )
}
export default GameOverScreen;
const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})