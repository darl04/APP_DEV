import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
<<<<<<< HEAD

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import { useSelector } from 'react-redux';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { data } = useSelector(state => state.auth);

  useEffect(() => {
=======
import AuthNav from './AuthNav';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

useEffect(() => {
>>>>>>> origin/main
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#000000', true);
    }

<<<<<<< HEAD
    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  // console.log('TEST: ', JSON.stringify(data, null, 2));
  console.log('Auth data:', data);

  let isLoggedIn = !!data;

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
=======
StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);
  
  return (
    <NavigationContainer>
        <AuthNav />
    </NavigationContainer>
  );
};
>>>>>>> origin/main
