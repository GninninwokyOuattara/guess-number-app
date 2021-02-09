import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateGuessArray = () => {
    let arr = [];
    for (i = 1; i < 100; i++) {
        arr.push(i);
    }
    return arr;
};

const randomIndex = (arr) => {
    const choiceIndex = Math.floor(Math.random() * arr.length);
    return choiceIndex;
};

let guessArray = generateGuessArray();

const reArrangeArray = (arr, min = 0, max = arr.length) => {
    return arr.slice(min, max);
};

const GameScreen = () => {
    console.log(
        "[",
        guessArray[0],
        "...",
        guessArray[guessArray.length - 1],
        "]"
    );
    const [randomChoice, setRandomChoice] = useState(randomIndex(guessArray));
    const [guess, setGuess] = useState();

    const takeAGuess = (type) => {
        if (guessArray.length > 1) {
            if (type === "lower") {
                guessArray = reArrangeArray(guessArray, 0, randomChoice);
            } else {
                guessArray = reArrangeArray(
                    guessArray,
                    randomChoice + 1,
                    guessArray.length
                );
            }
        } else {
            console.log("WTF");
        }
    };

    useEffect(() => {
        setGuess(guessArray[randomChoice]);
        // return () => {
        //     cleanup;
        // };
    }, [randomChoice]);

    return (
        <View style={styles.container}>
            <Text>Opponent's guess : </Text>
            <NumberContainer>{guess}</NumberContainer>
            <Card style={styles.card}>
                <Button
                    title={"Lower"}
                    onPress={() => {
                        takeAGuess("lower");
                        setRandomChoice(randomIndex(guessArray));
                    }}
                />
                <Button
                    title={"Higher"}
                    onPress={() => {
                        takeAGuess("higher");
                        setRandomChoice(randomIndex(guessArray));
                    }}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 2,
        // borderColor: "#000000",
        // borderWidth: 1,
        // width: "80%",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "80%",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default GameScreen;
