import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';

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
	const movies = props.movies;
	const movieList = movies.map(movie => <ListItem key={movie.imdbID} {...movie}></ListItem>);
	
	return (
		<ScrollView>
			{movieList}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	listEntry: {
		marginBottom: 20
	},
});