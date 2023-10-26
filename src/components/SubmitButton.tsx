import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type SubmitButtonType = {
    title: string;
    onClick: () => void;
    testID?: string
}

export const SubmitButton = ({ testID, title, onClick }: SubmitButtonType) => {
    return (
        <TouchableOpacity testID={testID} style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});