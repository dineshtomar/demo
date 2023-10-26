import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import Favourite from '../screens/Favourite';
const Stack = createNativeStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="Favourite" component={Favourite} />
        </Stack.Navigator>
    );
}
export default HomeNavigator;

