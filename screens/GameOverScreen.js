import { StyleSheet, Text, View } from "react-native";

function GameOverScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.subtitle}>Your score is 0.</Text>
            <Text style={styles.subtitle}>You can try again!</Text>
            <Text style={styles.subtitle}>Or quit the game.</Text>
            <Text style={styles.subtitle}>Thanks for playing!</Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Play Again</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Quit</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Share</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Leaderboard</Text>
            </View>

        </View>
    )
}
export default GameOverScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
})