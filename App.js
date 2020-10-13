import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';

import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import AppButton from './app/components/AppButton';
import Icon from './app/components/Icon';

export default function App() {
	return (
		<Screen>
			<AppPicker icon="apps" placeholder="Category" />
			<AppTextInput icon="email" placeholder="Email" />
		</Screen>
	);
}
