import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class MovieScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: navigation.getParam('Title'),
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.bigFontSize}>Title: {this.props.navigation.getParam('Title')}</Text>
				<Text style={styles.bigFontSize}>Year: {this.props.navigation.getParam('Year')}</Text>
				<Text style={styles.bigFontSize}>Type: {this.props.navigation.getParam('Type')}</Text>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingLeft: 20 
	},
	bigFontSize: {
		fontSize: 16
	}
});