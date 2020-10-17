import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import useLocation from '../hooks/useLocation';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
} from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9,
	},
];

function ListingEditScreen(props) {
	const location = useLocation();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing) => {
		setUploadVisible(true);
		const result = await listingsApi.addListings(
			{ ...listing, location },
			(progress) => setProgress(progress)
		);
		setUploadVisible(false);

		if (!result.ok) {
			return alert('could not save the listing entered');
		}
		return alert('Success listing saved');
	};

	return (
		<Screen>
			<UploadScreen
				progress={progress}
				visible={uploadVisible}
			></UploadScreen>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<AppFormImagePicker name="images" />
				<AppFormField
					maxLength={255}
					name="title"
					placeholder="Title"
				/>
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<AppFormPicker
					items={categories}
					name="category"
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					width="50%"
				/>
				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);

	const styles = StyleSheet.create({
		container: {},
	});
}

export default ListingEditScreen;
