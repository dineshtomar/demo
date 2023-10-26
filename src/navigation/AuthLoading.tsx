import React from "react";
import { ActivityIndicator, View } from "react-native";

export const AuthLoading = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={'black'} />
        </View>
    );
}