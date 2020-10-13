import { Platform } from 'react-native';
import colors from '../config/colors';

export default {
	colors,
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		marginLeft: 5,
		alignItems: 'center',
		color: colors.dark,
	},
};
