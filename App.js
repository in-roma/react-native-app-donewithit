import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image, StyleSheet, SafeAreaView, View } from 'react-native';

import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
	return <ListingEditScreen />;
}
