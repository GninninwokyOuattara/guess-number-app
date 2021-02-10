import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";
import Color from "../constants/colors";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.textContainer}>Game Over</Text>
            <View style={styles.imageContainer}>
                {/* <Image
                    source={require("../assets/success.png")}
                    style={styles.image}
                    resizeMode="cover"
                /> */}
                <Image
                    source={{
                        uri:
                            "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg",
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            {/* <Text>In {props.roundNumber}</Text>
            <Text>The number was {props.number}</Text> */}
            <View style={styles.resultContainer}>
                <Text style={styles.textContainer}>
                    Your phone guessed the right number{" "}
                    <Text style={styles.highlight}>{props.number}</Text> after{" "}
                    <Text style={styles.highlight}>{props.roundNumber} </Text>{" "}
                    round
                </Text>
            </View>
            {/* <Button title="NEW GAME" onPress={props.onNewGame} /> */}
            <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
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

    imageContainer: {
        width: "80%",
        height: 300,
        borderWidth: 2,
        borderRadius: 150,
        overflow: "hidden",
        marginVertical: 10,
    },

    image: {
        // borderWidth: 10,
        // borderColor: "black",
        height: "100%",
        width: "100%",
    },

    resultContainer: {
        // marginHorizontal: 40,
        marginVertical: 20,
    },

    textContainer: {
        textAlign: "center",
        fontFamily: "open-sans-bold",
    },

    highlight: {
        color: Color.accent,
    },
};

export default GameOverScreen;
