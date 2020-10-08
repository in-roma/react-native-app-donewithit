import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function App() {
	return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	setColorWhite: {
		color: 'white',
	},
});
