import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
    return (
        <View>
            <Header title="Guess a Number" />
            <GameStartScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
