import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AppButton
				title="login"
				onPress={() => console.log('tapped')}
			></AppButton>
		</View>
	);
}
