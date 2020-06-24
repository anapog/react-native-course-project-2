import React from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
	const capitalizeString = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<TouchableOpacity style={styles.listEntry} onPress={() => props.onSelectMovie(props)}>
			<Text>{capitalizeString(props.title)}</Text>
			<Text>{props.year} - {capitalizeString(props.type)}</Text>
		</TouchableOpacity>
	);

}

export const MovieList = props => {
	const renderItem = ({ item }) => <ListItem {...item} onSelectMovie={props.onSelectMovie}></ListItem>;

	return (
		<FlatList 
			renderItem={renderItem} 
			data={props.movies} 
			keyExtractor={item => item.imdbID}
		/>
	);
}

const styles = StyleSheet.create({
	listEntry: {
		marginBottom: 20
	},
});