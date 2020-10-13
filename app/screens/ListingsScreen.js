import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
	{
		id: 1,
		title: 'red jacket for sale',
		price: 100,
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'couch in great condition',
		price: 1000,
		image: require('../assets/couch.jpg'),
	},
	{
		id: 3,
		title: 'red jacket for sale',
		price: 10000,
		image: require('../assets/jacket.jpg'),
	},
];

function ListingsScreen(props) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={'$' + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;