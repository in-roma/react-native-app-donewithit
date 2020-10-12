import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { FlatList, View } from 'react-native';

const initialMessages = [
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
	const [messages, setMessages] = useState(initialMessages);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={initialMessages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						onPress={() => console.log('message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}

export default MessagesScreen;
