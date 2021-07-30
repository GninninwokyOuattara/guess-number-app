import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
    Dimensions,
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
    const { userChoice, onGameOver, onGameRound, round } = props;
    const [guess, setGuess] = useState(guessArray[randomChoice]);
    const [pastGuesses, setPastGuesses] = useState([]);
    const [screenHeight, setScreenHeight] = useState(
        Dimensions.get("window").height
    );

    const changeEventHandler = () => {
        setScreenHeight(Dimensions.get("window").height);
    };

    useEffect(() => {
        Dimensions.addEventListener("change", changeEventHandler);
        return () => {
            Dimensions.removeEventListener("change");
        };
    }, [screenHeight]);

    const takeAGuess = (type) => {
        if (guessArray.length > 1) {
            if (type === "lower" && userChoice < guess) {
                guessArray = reArrangeArray(guessArray, 0, randomChoice);
                randomChoice = randomIndex(guessArray);
                setGuess(guessArray[randomChoice]);
                onGameRound((round) => (round += 1));
            } else if (type === "higher" && userChoice > guess) {
                guessArray = reArrangeArray(
                    guessArray,
                    randomChoice + 1,
                    guessArray.length
                );
                randomChoice = randomIndex(guessArray);
                setGuess(guessArray[randomChoice]);

                onGameRound((round) => (round += 1));
            } else {
                Alert.alert(
                    "DON'T CHEAT",
                    "You know something ain't right...",
                    [{ text: "Sorry", style: "cancel" }]
                );
            }
        } else {
        }
    };

    useEffect(() => {
        if (guess === userChoice) {
            guessArray = generateGuessArray();
            randomChoice = randomIndex(guessArray);
            onGameOver(true);
        }
    }, [guess]);

    useEffect(() => {
        if (guess !== pastGuesses[0]?.value) {
            setPastGuesses((pastGuesses) => [
                { value: guessArray[randomChoice], round: round.toString() },
                ...pastGuesses,
            ]);
        }
    }, [round]);

    if (screenHeight < 500) {
        return (
            <View style={styles.container}>
                <Text>Opponent's guess : </Text>
                <View style={styles.control}>
                    <MainButton
                        onPress={() => {
                            takeAGuess("lower");
                        }}
                    >
                        <Ionicons name="md-remove" size={24} />
                    </MainButton>
                    <NumberContainer style={styles.numberGuessed}>
                        {guess}
                    </NumberContainer>

                    <MainButton
                        onPress={() => {
                            takeAGuess("higher");
                        }}
                    >
                        <Ionicons name="md-add" size={24} />
                    </MainButton>
                </View>
                <View style={styles.scrollViewContainer}>
                    <FlatList
                        keyExtractor={(item) => item.round}
                        data={pastGuesses}
                        renderItem={(itemData) => (
                            <View style={styles.roundContainer}>
                                <Text style={styles.roundText}>
                                    #{itemData.item.round}
                                </Text>
                                <Text style={styles.roundText}>
                                    {itemData.item.value}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Opponent's guess : </Text>
            <NumberContainer style={styles.numberGuessed}>
                {guess}
            </NumberContainer>
            <Card style={styles.card}>
                <MainButton
                    onPress={() => {
                        takeAGuess("lower");
                    }}
                >
                    <Ionicons name="md-remove" size={24} />
                </MainButton>

                <MainButton
                    onPress={() => {
                        takeAGuess("higher");
                    }}
                >
                    <Ionicons name="md-add" size={24} />
                </MainButton>
            </Card>
            <View style={styles.scrollViewContainer}>
                <FlatList
                    keyExtractor={(item) => item.round}
                    data={pastGuesses}
                    renderItem={(itemData) => (
                        <View style={styles.roundContainer}>
                            <Text style={styles.roundText}>
                                #{itemData.item.round}
                            </Text>
                            <Text style={styles.roundText}>
                                {itemData.item.value}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
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
    },

    scrollViewContainer: {
        flex: 1,
        width: "80%",
    },

    scrollView: {
        flexGrow: 1,

        justifyContent: "flex-end",
        alignItems: "center",
    },
    control: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
    },
    roundContainer: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
});

export default GameScreen;
