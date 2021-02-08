import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.numberInput, ...props.style }}
        ></TextInput>
    );
};

const styles = StyleSheet.create({
    numberInput: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        width: 70,
        height: 30,
        marginVertical: 10,
        textAlign: "center",
    },
});
export default Input;
