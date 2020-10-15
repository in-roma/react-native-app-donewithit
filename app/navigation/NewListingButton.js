import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color={colors.white}
					size={30}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		height: 60,
		width: 60,
		borderRadius: 30,
		bottom: 20,
		borderColor: colors.white,
		borderWidth: 6,
	},
});

export default NewListingButton;
