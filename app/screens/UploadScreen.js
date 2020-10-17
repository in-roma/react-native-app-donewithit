import React from 'react';
import { View, StyleSheet, Modal, ProgressViewIOSBase } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

function UploadScreen({ progress, visible }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				<Progress.Bar color={colors.primary} progress={progress} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});

export default UploadScreen;
