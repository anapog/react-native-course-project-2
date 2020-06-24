import React from 'react';
import { TextInput } from 'react-native';

export const SearchField = props => {
	return (
		<TextInput style=
			{
				{ 
					alignSelf: "stretch", 
					paddingBottom: 20
				}
			}
			placeholder='Search...' 
			defaultValue={props.searchString}
			onChangeText={props.setSearchField}/>
	)
}
