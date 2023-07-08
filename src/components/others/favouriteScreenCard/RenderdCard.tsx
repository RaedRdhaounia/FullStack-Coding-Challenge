import React from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StarIcon from '../Star';
import {MovieDetails} from '../../../constants/types/reduxState';
import DeleteFromFavoriteIcon from './DeleteButton';
import {imageBaseUrl} from '../../../api/config';

const windowWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemWidth = windowWidth / numColumns;
const RenderCard = ({
  item,
  navigation,
  animatedValue,
}: {
  item: MovieDetails;
  navigation: any;
  animatedValue: Animated.Value;
}) => {
  function handleNavigate() {
    navigation.navigate('Details', {itemId: item.id});
  }

  const animatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 0.7],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 0.7],
          outputRange: [0.8, 1],
        }),
      },
    ],
  };
  return (
    <Animated.View
      style={[styles.cardContainer, {maxWidth: itemWidth - 32}, animatedStyle]}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: imageBaseUrl + item.poster_path,
            }}
            style={styles.image}>
            <View style={styles.header}>
              <View style={styles.icon}>
                <DeleteFromFavoriteIcon itemId={item.id} />
              </View>
              <View style={styles.averageContainer}>
                <StarIcon />
                <Text>{item.vote_average}</Text>
              </View>
            </View>
          </ImageBackground>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RenderCard;
// ==============================|| styles
const styles = StyleSheet.create({
  header: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 2,
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#999ED7',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    alignSelf: 'center',
    color: '#999ED7',
    textAlign: 'center',
  },
  averageContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 120,
  },
});
