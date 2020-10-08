import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Button,
	Alert,
	Platform,
} from 'react-native';

export default function App() {
	const handlePress = () => console.log('text clicked');

	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="Click me"
				onPress={() =>
					Alert.prompt('My title', 'hey this is a message', (text) =>
						console.log(text)
					)
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',

		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 120,
	},
	setColorWhite: {
		color: 'white',
	},
});
