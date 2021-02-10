import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>In {props.roundNumber}</Text>
            <Text>The number was {props.number}</Text>
            <Button title="NEW GAME" onPress={props.onNewGame} />
        </View>
    );
};

const styles = {
    screen: {
        borderColor: "black",
        // borderWidth: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
};

export default GameOverScreen;
