import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/colors";

const MainButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.content}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primary,
        // width: 150,
        // height: 50,
        // padding: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 30,
    },
    innerContainer: {
        // flexDirection: "row",
        // flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        color: "#FFF",
        fontSize: 20,
    },
});

export default MainButton;
