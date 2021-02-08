import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GameStartScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.startGame}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput style={styles.numberInput} />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        padding: 10,
        alignItems: "center",
    },

    startGame: {
        fontSize: 20,
    },

    inputContainer: {
        alignItems: "center",
        paddingVertical: 20,
        shadowColor: "black",
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        backgroundColor: "#fff",
        marginTop: 10,
        elevation: 8,
        borderRadius: 10,
    },

    numberInput: {
        borderWidth: 1,
        width: 200,
        height: 40,
        marginVertical: 10,
        paddingLeft: 10,
    },

    buttonContainer: {
        width: 300,
        maxWidth: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default GameStartScreen;
