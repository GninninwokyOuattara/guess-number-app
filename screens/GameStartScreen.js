import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/colors";

const GameStartScreen = () => {
    const [enteredInput, setEnteredInput] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const inputHandler = (inputText) => {
        setEnteredInput(inputText.replace(/[^0-9]/g, ""));
    };

    const resetHandler = () => {
        setEnteredInput("");
        setConfirmed(false);
    };

    const confirmHandler = () => {
        const input = parseInt(enteredInput);
        if (isNaN(input) || input < 0 || input > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be between 1 and 99.",
                [{ text: "Okay", style: "destructive", onPress: resetHandler }]
            );
            return;
        }
        setConfirmed(true);
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.startGame}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        style={styles.numberInput}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={inputHandler}
                        value={enteredInput}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                color={Color.accent}
                                onPress={resetHandler}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                color={Color.primary}
                                onPress={confirmHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmed && <Text>Chosen number : {enteredInput}</Text>}
            </View>
        </TouchableWithoutFeedback>
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
    },

    // numberInput: {
    //     borderWidth: 1,
    //     width: 200,
    //     height: 40,
    //     marginVertical: 10,
    //     paddingLeft: 10,
    // },

    buttonContainer: {
        width: 300,
        maxWidth: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    button: {
        width: 90,
        // backgroundColor: "red",
    },
});

export default GameStartScreen;
