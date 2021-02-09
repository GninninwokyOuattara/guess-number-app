import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
    const [gameStart, setGameStart] = useState(false);
    let content;
    if (!gameStart) {
        content = <GameStartScreen onStart={setGameStart} />;
    } else {
        content = <GameScreen />;
    }
    return (
        <View>
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
