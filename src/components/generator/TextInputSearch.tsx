import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface TextInputGenP {
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputGen: React.FC<TextInputGenP> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
      <TextInput
        placeholder="serach for a movie ..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#999ED7",
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default TextInputGen;
