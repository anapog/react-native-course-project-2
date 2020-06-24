import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { SearchField } from '../components/SearchField';


export default class MovieListScreen extends React.Component {
	static navigationOptions = () => ({
		headerTitle: 'Movie list',
	});

	state = {
		searchString: '',
		matchingResources: [],
	};

	setSearchField = (searchField) => {
		this.setState({searchField});
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
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		padding: 20
	},
	alertText: {
		color: '#a41034'
	},
});

