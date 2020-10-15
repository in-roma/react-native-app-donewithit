import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import Account from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				// options={{ headerShown: true }}
			/>
			<Tab.Screen
				name="ListingsEdit"
				component={ListingEditScreen}
				// options={{ headerShown: true }}
			/>
			<Tab.Screen
				name="Account"
				component={Account}
				// options={{ headerShown: true }}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
