import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { ROUTES } from '../utils';

import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
=======
>>>>>>> origin/main

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
<<<<<<< HEAD
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
=======
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
>>>>>>> origin/main
    </Stack.Navigator>
  );
};

<<<<<<< HEAD
export default MainNavigation;
=======
export default MainNavigation;
>>>>>>> origin/main
