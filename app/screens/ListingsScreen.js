import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ActivityIndicatorElement from '../components/ActivityIndicator';

import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<Screen style={styles.screen}>
			{getListingsApi.error && (
				<>
					<AppText>Coudn't access the server</AppText>
					<AppButton title="Retry" onPress={getListingsApi.request} />
				</>
			)}
			<ActivityIndicatorElement
				visible={getListingsApi.loading}
				animating={true}
				size="large"
			/>
			<FlatList
				data={getListingsApi.data}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={'$' + item.price}
						imageUrl={item.images[0].url}
						onPress={() =>
							navigation.navigate(routes.LISTING_DETAILS, item)
						}
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
