import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
	return <MessagesScreen />;
}
