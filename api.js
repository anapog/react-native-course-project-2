
const processMovie = movie => ({
	imdbID: `${movie.imdbID}`,
	title: `${movie.Title}`,
	year: `${movie.Year}`,
	type: `${movie.Type}`,
});

export const fetchMovies = async (searchString) => {
	try {
		const response = await fetch(`https://www.omdbapi.com/?apikey=cdf23b14&s=${searchString}`);
		if (!response.ok) {
			throw new Error(await response.text());
		}

		const results = await response.json();
		if (results.Error) {
			throw new Error(results.Error);
		}

		return results.Search.map(processMovie);
	} catch (err) {
		console.warn(err);
		return [];
	}
};
