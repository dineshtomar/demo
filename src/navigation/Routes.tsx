import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AuthLoading } from './AuthLoading';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { navigationRef } from './RootNavigation';

function Routes() {
  const { userData, loading } = useSelector((state: any) => state.auth);
  if (loading) return <AuthLoading />
  return (
    <NavigationContainer ref={navigationRef}>
      {userData?.username ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
export default Routes;

