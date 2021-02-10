import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import defaultStyles from "./constants/default-styles";

const fetchFont = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

export default function App() {
    const [userChoice, setUserChoice] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [gameRound, setGameRound] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return (
            <AppLoading
                startAsync={fetchFont}
                onFinish={() => setIsLoading(false)}
                onError={(err) => console.log(err)}
            />
        );
    }

    let content;

    const newGameHandler = () => {
        setGameRound(0);
        setGameStart(false);
        setUserChoice(false);
        setGameOver(false);
    };

    if (gameOver) {
        content = (
            <GameOverScreen
                roundNumber={gameRound}
                number={userChoice}
                onNewGame={newGameHandler}
            />
        );
    } else {
        if (!gameStart) {
            content = (
                <GameStartScreen
                    onStart={setGameStart}
                    onChoice={setUserChoice}
                />
            );
        } else {
            content = (
                <GameScreen
                    userChoice={userChoice}
                    onGameOver={setGameOver}
                    onGameRound={setGameRound}
                />
            );
        }
    }
    return (
        <View style={styles.screen}>
            <Header style={defaultStyles.title} title="Guess a Number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
