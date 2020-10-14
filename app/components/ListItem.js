import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({
	title,
	subtitle,
	image,
	ImageComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{ImageComponent}
					{image && <Image style={styles.image} source={image} />}

					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subtitle && (
							<AppText style={styles.subtitle}>
								{subtitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: 'bold',
	},
	subtitle: {
		color: colors.medium,
		fontWeight: '200',
		fontSize: 10,
	},
});

export default ListItem;
