import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Animation {
  id: string;
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #26de81;
`;

export const Title = styled.Text`
  font-size: 64px;
  color: whitesmoke;
  font-family: arial;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  margin: 64px 0;
  text-align: center;
`;

export const AnimationContainer = styled.View`
  height: 45%;
  margin: 0 5%;
  padding: 5%;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`;

export const AnimatedView = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: red;
`;

export const AnimationMenuContainer = styled.View`
  height: 15%;
`;

export const AnimationsMenu = styled(FlatList as new () => FlatList<Animation>)`
  padding: 32px 5%;
`;

export const AnimationItem = styled(RectButton)`
  background-color: #c1c1c1;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const AnimationItemTitle = styled.Text`
  font-family: arial;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #28262e;
`;
