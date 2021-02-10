import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert,
    ScrollView,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

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

const reArrangeArray = (arr, min = 0, max = arr.length) => {
    return arr.slice(min, max);
};
let guessArray = generateGuessArray();

let randomChoice = randomIndex(guessArray);

const GameScreen = (props) => {
    console.log(
        "[",
        guessArray[0],
        "...",
        guessArray[guessArray.length - 1],
        "]"
    );
    // const [randomChoice, setRandomChoice] = useState(randomIndex(guessArray));

    const { userChoice, onGameOver, onGameRound } = props;
    const [guess, setGuess] = useState(guessArray[randomChoice]);
    const [pastGuesses, setPastGuesses] = useState([guessArray[randomChoice]]);

    const takeAGuess = (type) => {
        if (guessArray.length > 1) {
            if (type === "lower" && userChoice < guess) {
                guessArray = reArrangeArray(guessArray, 0, randomChoice);
                randomChoice = randomIndex(guessArray);
                setGuess(guessArray[randomChoice]);
                onGameRound((round) => (round += 1));
                setPastGuesses((pastGuesses) => [
                    guessArray[randomChoice],
                    ...pastGuesses,
                ]);
            } else if (type === "higher" && userChoice > guess) {
                guessArray = reArrangeArray(
                    guessArray,
                    randomChoice + 1,
                    guessArray.length
                );
                randomChoice = randomIndex(guessArray);
                setGuess(guessArray[randomChoice]);
                setPastGuesses((pastGuesses) => [
                    guessArray[randomChoice],
                    ...pastGuesses,
                ]);
                onGameRound((round) => (round += 1));
            } else {
                Alert.alert(
                    "DON'T CHEAT",
                    "You know something ain't right...",
                    [{ text: "Sorry", style: "cancel" }]
                );
            }
        } else {
            console.log("WTF");
        }
    };

    useEffect(() => {
        if (guess === userChoice) {
            guessArray = generateGuessArray();
            randomChoice = randomIndex(guessArray);
            // setGuess(-1);
            onGameOver(true);
            console.log("Game Over");
        }
        // return () => {
        //     setGuess(() => false);
        // };
    }, [guess]);

    return (
        <View style={styles.container}>
            <Text>Opponent's guess : </Text>
            <NumberContainer style={styles.numberGuessed}>
                {guess}
            </NumberContainer>
            <Card style={styles.card}>
                {/* <Button
                    title={"Lower"}
                    onPress={() => {
                        takeAGuess("lower");
                    }}
                /> */}
                <MainButton
                    onPress={() => {
                        takeAGuess("lower");
                    }}
                >
                    <Ionicons name="md-remove" size={24} />
                </MainButton>
                {/* <Button
                    title={"Higher"}
                    onPress={() => {
                        takeAGuess("higher");
                    }}
                /> */}
                <MainButton
                    onPress={() => {
                        takeAGuess("higher");
                    }}
                >
                    <Ionicons name="md-add" size={24} />
                </MainButton>
            </Card>
            <ScrollView>
                {pastGuesses.map((pastGuess) => (
                    <View>
                        <Text>{pastGuess}</Text>
                    </View>
                ))}
            </ScrollView>
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

    numberGuessed: {
        borderRadius: 10,
        // width: 50,
    },
});

export default GameScreen;
