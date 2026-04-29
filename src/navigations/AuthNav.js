import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

import Login from '../screens/auth/Login';
<<<<<<< HEAD
import Register from '../screens/auth/Register';
=======
import HomeScreen from '../screens/HomeScreen';
>>>>>>> origin/main

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
=======
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
>>>>>>> origin/main
    </Stack.Navigator>
  );
};

<<<<<<< HEAD
export default AuthNavigation;
=======
export default AuthNavigation;
>>>>>>> origin/main
