import React, { useState, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  AnimationContainer,
  AnimatedView,
  AnimationMenuContainer,
  AnimationsMenu,
  AnimationItem,
  AnimationItemTitle,
} from './styles';

interface Animation {
  id: string;
  name: string;
  animation: any;
}

const Menu: React.FC = () => {
  const navigation = useNavigation();

  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  const moveBallWithTiming = useCallback(() => {
    Animated.timing(ballY, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  const moveBallBackToZero = useCallback(() => {
    Animated.timing(ballY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  const moveBallWithSpring = useCallback(() => {
    Animated.spring(ballY, {
      toValue: 200,
      bounciness: 20,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  const moveBallWithDecay = useCallback(() => {
    Animated.decay(ballY, {
      velocity: 0.5,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  const moveBallWithSequence = useCallback(() => {
    Animated.sequence([
      Animated.timing(ballY, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.delay(1000),

      Animated.timing(ballX, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [ballY, ballX]);

  const moveBallWithBackSequence = useCallback(() => {
    Animated.sequence([
      Animated.timing(ballY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.timing(ballX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [ballY, ballX]);

  const moveBallWithParallel = useCallback(() => {
    Animated.parallel([
      Animated.timing(ballY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.timing(ballX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [ballY, ballX]);

  const moveBallWithStagger = useCallback(() => {
    Animated.stagger(300, [
      Animated.timing(ballY, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.timing(ballX, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [ballY, ballX]);

  const moveBallWithLoopAndSequence = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 150,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 150,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.delay(200),

        Animated.timing(ballY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 2,
      },
    ).start();
  }, [ballY, ballX]);

  const animateBallWithInterpoalte = useCallback(() => {
    Animated.timing(ballY, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  const goToPanResponder = useCallback(() => {
    navigation.navigate('PanResponder');
  }, [navigation]);

  const goToApp = useCallback(() => {
    navigation.navigate('Aplicativo');
  }, [navigation]);

  const [animations, setAnimations] = useState<Animation[]>([
    {
      id: '1',
      name: 'Timing 1',
      animation: () => moveBallWithTiming(),
    },
    {
      id: '2',
      name: 'Timing 2',
      animation: () => moveBallBackToZero(),
    },
    {
      id: '3',
      name: 'Spring',
      animation: () => moveBallWithSpring(),
    },
    {
      id: '4',
      name: 'Decay',
      animation: () => moveBallWithDecay(),
    },
    {
      id: '5',
      name: 'Sequence',
      animation: () => moveBallWithSequence(),
    },
    {
      id: '6',
      name: 'Back Sequence',
      animation: () => moveBallWithBackSequence(),
    },
    {
      id: '7',
      name: 'Parallel',
      animation: () => moveBallWithParallel(),
    },
    {
      id: '8',
      name: 'Stagger',
      animation: () => moveBallWithStagger(),
    },
    {
      id: '9',
      name: 'Loop and Sequence',
      animation: () => moveBallWithLoopAndSequence(),
    },
    {
      id: '10',
      name: 'Interpolate',
      animation: () => animateBallWithInterpoalte(),
    },
    {
      id: '11',
      name: 'PanResponder',
      animation: () => goToPanResponder(),
    },
    {
      id: '12',
      name: 'Aplicativo',
      animation: () => goToApp(),
    },
  ]);

  const handleAnimation = useCallback(
    (name: string) => {
      const selectedAnimation = animations.filter(
        (animation) => animation.name === name,
      );

      selectedAnimation[0].animation();
    },
    [animations],
  );

  return (
    <Container>
      <Title>Animações</Title>
      <AnimationContainer>
        <AnimatedView
          as={Animated.View}
          style={{
            top: ballY,
            left: ballX,
            opacity: ballY.interpolate({
              inputRange: [0, 80, 150],
              outputRange: [1, 1, 0.2],
              extrapolate: 'clamp',
            }),
          }}
        />
      </AnimationContainer>
      <AnimationMenuContainer>
        <AnimationsMenu
          horizontal
          showsHorizontalScrollIndicator={false}
          data={animations}
          keyExtractor={(animation) => animation.id}
          renderItem={({ item: animation }) => (
            <AnimationItem onPress={() => handleAnimation(animation.name)}>
              <AnimationItemTitle>{animation.name}</AnimationItemTitle>
            </AnimationItem>
          )}
        />
      </AnimationMenuContainer>
    </Container>
  );
};

export default Menu;
