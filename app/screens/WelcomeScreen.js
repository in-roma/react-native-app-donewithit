import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}
			blurRadius={8}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../assets/logo-red.png')}
				/>
				<Text style={styles.catchphrase}>Sell what you don't need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title={'Login'} />
				<AppButton title={'Register'} color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	catchphrase: {
		position: 'relative',
		top: 10,
	},
	buttonsContainer: {
		padding: 20,
		width: '100%',
	},
});

export default WelcomeScreen;
