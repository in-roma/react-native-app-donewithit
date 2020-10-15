import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<View>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.containerCardText}>
				<AppText style={styles.cardTitle}>{listing.title}</AppText>
				<AppText style={styles.cardPrice}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/mosh.jpg')}
						title="Mosh Hamedani"
						subtitle="5 listings"
					/>
				</View>
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
	userContainer: {
		marginVertical: 20,
	},
});
export default ListingDetailsScreen;
