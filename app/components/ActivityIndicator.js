import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

function ActivityIndicatorElement({ visible = false, animating, size }) {
	if (!visible) return null;
	return <ActivityIndicator />;
}

export default ActivityIndicatorElement;
