import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MovieRow } from '../components/MovieRow';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList } from '../redux/action/homeAction';
import { logout } from '../redux/action/authAction';
import { store } from '../redux/store';



const Home: React.FC = (props: any) => {
    const { movies } = useSelector((state: any) => state.home);
    const [movieList, setMovieList] = useState<any>([]);

    useEffect(() => {
        if (movies) setMovieList(movies)
        props.navigation.setOptions({
            title: 'Home',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: '#000',
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Favourite')}>
                        <Text style={{ fontSize: 26, color: 'red' }}>{`♥`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => store.dispatch(logout(props.navigation))} style={{ marginLeft: 8, padding: 4 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>{`Logout`}</Text>
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [movies]);

    const onFavClick = (id: number) => {
        const filterData = movieList.map((x: any, i: number) => x.id === id ? { ...x, isFav: !x.isFav } : { ...x, isFav: x.isFav });
        setMovieList(filterData);
        store.dispatch(setFavList(filterData));
    }

    const renderMovie = ({ item, i }: any) => {
        return <MovieRow id={i} title={item.title} onFavClick={() => onFavClick(item.id)}
            description={item.description} isFav={item.isFav}
            onClick={() => props.navigation.navigate('MovieDetail', { movie: item })} />
    };

    return (
        <View style={{ flex: 1, padding: 8 }}>
            <FlatList
                data={movieList}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderMovie}
            />
        </View>
    );
};

export default Home;