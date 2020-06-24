import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { SearchField } from '../components/SearchField';
import { MovieList } from '../components/MovieList';
import { search } from '../mockData';

export default class MovieListScreen extends React.Component {
	static navigationOptions = () => ({
		headerTitle: 'Movie list',
	});

	state = {
		searchString: '',
		matchingResources: search.Search,
	};

	setSearchField = (searchField) => {
		this.setState({searchField});
	};

	handleSelectMovie = movie => {
		this.props.navigation.push('Movie', movie);
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchField
					searchString={this.state.searchString}
					setSearchField={this.setSearchField}
				>
				</SearchField>
				{ this.state.matchingResources.length < 1 && 
					<Text style={styles.alertText}>No results</Text>
				}
				{ this.state.matchingResources.length > 0 && 
					<MovieList 
						movies={this.state.matchingResources}
						onSelectMovie={this.handleSelectMovie}>
					</MovieList>
				}
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		paddingTop: 20,
		paddingLeft: 20 
		
	},
	alertText: {
		color: '#a41034'
	},
});

