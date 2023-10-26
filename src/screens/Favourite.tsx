import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MovieRow } from '../components/MovieRow';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList } from '../redux/action/homeAction';



const Favourite: React.FC = () => {
    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const { movies, favMovies } = useSelector((state: any) => state.home);
    const [movieList, setMovieList] = useState<any>([]);

    useEffect(() => {
        if (movies) {
            const filterData = movies.filter((x: any, i: number) => x.isFav === true);
            setMovieList(filterData)
        }
    }, [movies])

    const onFavClick = (id: number) => {
        const filterData = movies.map((x: any, i: number) => x.id === id ? { ...x, isFav: false } : { ...x, isFav: x.isFav });
        setMovieList(filterData);
        dispatch(setFavList(filterData));
    }

    const renderMovie = ({ item, i }: any) => {
        return <MovieRow id={i} title={item.title} onFavClick={() => onFavClick(item.id)}
            description={item.description} isFav={item.isFav}
            onClick={() => navigation.navigate('MovieDetail', { movie: item })} />
    };

    return (
        <View style={{ flex: 1, padding: 8 }}>
            <FlatList
                data={movieList}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderMovie}
                ListEmptyComponent={<View style={{ alignItems: 'center', }}><Text>{"No Data found"}</Text></View>}
            />
        </View>
    );
};

export default Favourite;