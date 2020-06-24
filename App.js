import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MovieListScreen from './screens/MovieListScreen';
import MovieScreen from './screens/MovieScreen';


const AppNavigator = createStackNavigator(
	{
		MovieList: MovieListScreen,
		Movie: MovieScreen,
	},
	{
		initialRouteName: "MovieList",
		defaultNavigationOptions: {
			headerTintColor: "#a41034",
			headerStyle: {
				backgroundColor: "#fff",
			},
			headerTitleAlign: 'center',

		}
});

const App = createAppContainer(AppNavigator);

export default App;