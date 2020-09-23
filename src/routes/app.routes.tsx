import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../pages/Intro';
import Menu from '../pages/Menu';
import PanResponder from '../pages/PanResponder';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Intro" component={Intro} />
    <App.Screen name="Menu" component={Menu} />
    <App.Screen name="PanResponder" component={PanResponder} />
  </App.Navigator>
);

export default AppRoutes;
