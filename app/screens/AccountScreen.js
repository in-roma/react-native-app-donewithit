import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';

const menuItems = [
	{
		title: 'My listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

function AccountScreen(props) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Mosh Hamedani"
					subtitle="programingwithmosh@gmail.com"
					image={require('../assets/mosh.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							ImageComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				ImageComponent={
					<Icon name="logout" backgroundColor="#ffe66d" />
				}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

export default AccountScreen;
