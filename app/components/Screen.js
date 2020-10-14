import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
	View,
} from 'react-native';

function Screen(props) {
	return (
		<SafeAreaView style={[styles.screen, props.style]}>
			<View style={[props.style, styles.view]}>{props.children}</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
	},
	view: {
		flex: 1,
	},
});

export default Screen;
