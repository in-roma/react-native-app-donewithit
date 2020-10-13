import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<Screen>
			<Image
				style={styles.logo}
				source={require('../assets/logo-red.png')}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="email"
				keyboardType="email-address"
				placeholder="Email"
				textContentType="email"
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				keyboardType="email-address"
				placeholder="Password"
				secureTextEntry
				textContentType="password"
			/>
			<AppButton
				title="Login"
				onPress={() => console.log('login tapped')}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
