import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type MovieRowType = {
    id: number;
    title: string;
    description: string;
    onClick: () => void;
    isFav: boolean;
    onFavClick: () => void;
}

export const MovieRow = ({ title, isFav, onFavClick, description, onClick }: MovieRowType) => {
    return (
        <TouchableOpacity onPress={onClick} style={{ padding: 8, backgroundColor: 'white', marginVertical: 2, borderRadius: 4, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
                    <Text style={{ marginTop: 6, fontSize: 14, fontWeight: '400', color: 'black' }}>{description}</Text>
                </View>
                <TouchableOpacity onPress={onFavClick}>
                    <Text style={{ fontSize: 26, color: 'red' }}>{isFav ? `♥` : `♡`}</Text>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );

}