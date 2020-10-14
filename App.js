import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image, StyleSheet, SafeAreaView, View } from 'react-native';

import Screen from './app/components/Screen';

export default function App() {
	const [imageUri, setImageUri] = useState();

	const requestPermission = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (!result.granted)
			alert('You need to enable the PhotoLibrary access');
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) setImageUri(result.uri);
		} catch (error) {
			console.log('error reading image');
		}
	};
	return (
		<Screen>
			<Button title="Select Image" onPress={selectImage} />
			<Image
				source={{ uri: imageUri }}
				style={{ width: 200, height: 200 }}
			/>
		</Screen>
	);
}
