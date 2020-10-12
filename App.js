import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Icon from './app/components/Icon';

export default function App() {
	return (
		<Screen>
			<Icon name="email" size={50} backgroundColor="red" />
		</Screen>
	);
}
