import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "../constants/colors";

const NumberContainer = (props) => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: Color.accent,
        borderWidth: 2,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },

    number: {
        color: Color.accent,
        fontSize: 22,
    },
});
export default NumberContainer;
