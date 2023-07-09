// ==============================|| RenderCard module ||============================== //

// ==============================|| IMPORTS
import React from 'react';

//-- native components imports
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//--created components imports
import StarIcon from '../Star';
import DeleteFromFavoriteIcon from './DeleteButton';

//-- ImageURL imports
import {imageBaseUrl} from '../../../api/config';

//-- prop types imports
import {MovieDetails} from '../../../constants/';

// ==============================|| RenderCard component ||============================== //

//-- column number and card with init
const windowWidth = Dimensions.get('window').width; // screen width
const numColumns = 2; // number of card per colum
const itemWidth = windowWidth / numColumns; // card with

/**
 *
 * @name RenderCard
 * @description this components is created to execute a movie animated card
 * @property using animated component we crete an animated card component that used for favorite list items wi upper size one by ne based index
 * @returns React.FC
 * @example
 * <RenderCard navigation={navigation} item={item} animatedValue={animatedValue} />
 */
const RenderCard = ({
  item,
  navigation,
  animatedValue,
}: {
  item: MovieDetails;
  navigation: any;
  animatedValue: Animated.Value;
}) => {
  //-- navigation function declare method
  function handleNavigate() {
    navigation.navigate('Details', {itemId: item.id});
  }

  //-- based on height and width we create a interpolation
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

  //-- render Animated card
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
