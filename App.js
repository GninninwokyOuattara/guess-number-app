import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userChoice, setUserChoice] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [gameRound, setGameRound] = useState(0);
    const [gameOver, setGameOver] = useState(false);
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
            <Header title="Guess a Number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
