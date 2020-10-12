import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image
				style={styles.image}
				source={require('../assets/jacket.jpg')}
			/>
			<View style={styles.containerCardText}>
				<AppText style={styles.cardTitle}>Red Jacket for sale</AppText>
				<AppText style={styles.cardPrice}>100$</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	containerCardText: {
		padding: 20,
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: '500',
	},
	cardPrice: {
		color: colors.secondary,
		fontWeight: '500',
		fontSize: 20,
		marginVertical: 10,
	},
});

export default ListingDetailsScreen;
