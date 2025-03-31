import { StyleSheet, Text, View } from "react-native";

function StartScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App!</Text>
            <Text style={styles.subtitle}>Your adventure begins here.</Text>
        </View>
    );
}
export default StartScreen;
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
});