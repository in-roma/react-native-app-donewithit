import React from 'react';
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native';

const messages = [
	{
		id: 1,
		title: 'T1',
		subtitle: 'D1',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		subtitle: 'D2',
		image: require('../assets/mosh.jpg'),
	},
];

function MessagesScreen(props) {
	return (
		<FlatList
			data={messages}
			keyExtractor={(message) => message.id.toString()}
			renderItem={({ item }) => (
				<ListItem
					title={item.title}
					subtitle={item.subtitle}
					image={item.image}
				/>
			)}
		/>
	);
}

export default MessagesScreen;
