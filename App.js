import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
