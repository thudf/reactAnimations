import React, { useState, useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, AnimationContainer, AnimatedView } from './styles';

const Menu: React.FC = () => {
  // const navigation = useNavigation();
  const ball = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value,
        });

        ball.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: ball.x,
            dy: ball.y,
          },
        ],
        { useNativeDriver: false },
      ),

      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    }),
  ).current;

  return (
    <Container>
      <Title>PanResponder</Title>
      <AnimationContainer>
        <AnimatedView
          as={Animated.View}
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateX: ball.x }, { translateY: ball.y }],
          }}
        />
      </AnimationContainer>
    </Container>
  );
};

export default Menu;
