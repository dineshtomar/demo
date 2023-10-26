import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type MovieDetailRouteProp = {
  MovieDetail: {
    movie: { id: number; title: string; description: string };
  };
};

const MovieDetail: React.FC = () => {
  const route = useRoute<RouteProp<MovieDetailRouteProp, 'MovieDetail'>>();
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, padding: 8, marginHorizontal: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>{`Title: ${movie.title}`}</Text>
      <Text style={{ marginTop: 6, fontSize: 14, fontWeight: '400', color: 'black' }}>{`Description: ${movie.description}`}</Text>
    </View>
  );
};

export default MovieDetail;