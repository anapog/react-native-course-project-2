import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
	const capitalizeString = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<View style={styles.listEntry}>
			<Text>{capitalizeString(props.Title)}</Text>
			<Text>{capitalizeString(props.Year)} - {capitalizeString(props.Type)}</Text>
		</View>
	);

}

export const MovieList = props => {
	const renderItem = ({ item }) => <ListItem {...item}></ListItem>;

	return (
		<FlatList renderItem={renderItem} data={props.movies} keyExtractor={item => item.imdbID}/>
	);
}

const styles = StyleSheet.create({
	listEntry: {
		marginBottom: 20
	},
});