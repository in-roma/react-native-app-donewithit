import React from 'react';

import { Image, Button, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ImageInput({ imageUri }) {
	return (
		<View style={styles.container}>
			{!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
			{imageUri && (
				<Image source={{ uri: imageUri }} style={styles.image} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		overflow: 'hidden',
		width: 100,
	},
	image: {
		height: '100%',
		width: '100%',
	},
});

export default ImageInput;
