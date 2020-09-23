/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* Core */
import React, { Component } from 'react';

/* Presentational */
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

// import Icon from 'react-native-vector-icons/Feather';

interface User {
  id: number;
  name: string;
  description: string;
  avatar: string;
  thumbnail: string;
  likes: number;
  color: string;
}

interface UserComponent {
  user: User;
  onPress: any;
}

const User: React.FC<UserComponent> = ({ user, onPress, ...rest }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress}>
      <View style={styles.userContainer}>
        <Image style={styles.thumbnail} source={{ uri: user.thumbnail }} />

        <View style={[styles.infoContainer, { backgroundColor: user.color }]}>
          <View style={styles.bioContainer}>
            <Text style={styles.name}>{user.name.toUpperCase()}</Text>
            <Text style={styles.description}>{user.description}</Text>
          </View>
          <View style={styles.likesContainer}>
            {/* <Icon name="heart" size={12} color="#FFF" /> */}
            <Text style={styles.likes}>{user.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default User;

const styles = StyleSheet.create({
  userContainer: {
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'column',
    marginHorizontal: 15,
  },

  thumbnail: {
    width: '100%',
    height: 150,
  },

  infoContainer: {
    backgroundColor: '#57BCBC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },

  bioContainer: {
    flex: 1,
  },

  name: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 10,
  },

  description: {
    color: '#FFF',
    fontSize: 13,
    marginTop: 2,
  },

  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
  },

  likes: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 5,
  },
});
