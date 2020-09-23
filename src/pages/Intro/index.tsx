import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import logoAnimation from '../../assets/animation.json';

const Intro: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Menu');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie
        style={{
          left: '8%',
          top: '5%',
          height: '50%',
          width: '50%',
        }}
        resizeMode="contain"
        source={logoAnimation}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default Intro;
