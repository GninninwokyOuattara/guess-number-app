import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Color from "../constants/colors";

const Header = (props) => {
    return (
        <View
            style={{
                ...styles.header,
                ...Platform.select({
                    ios: styles.headerIOS,
                    android: styles.header,
                }),
            }}
        >
            <Text
                style={{
                    ...styles.headerTitle,
                    ...Platform.select({
                        ios: StyleSheet.headerTitleIOS,
                    }),
                    ...props.style,
                }}
            >
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center",
    },

    headerIOS: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },

    headerAndroid: {
        backgroundColor: Color.primary,
    },

    headerTitle: {
        color: "black",
        fontSize: 18,
    },

    headerTitleIOS: {
        color: Color.primary,
    },
});

export default Header;
