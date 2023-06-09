class ApiService {
  apiKey = '3310740c123ce509202cf05650ab41d5';
  baseUrl = 'https://api.themoviedb.org/3';
  mostPopularUrl = '/trending/movie/day';
  byKeyWordUrl = '/search/company';
  wholeMovieInformationUrl = '/movie/';
  actorsUrl = '/movies/';
  viewsUrl = '/movie/';

  async getMostPopularMovies() {
    let movies = [];
    try {
      await fetch(
        `${this.baseUrl}${this.mostPopularUrl}?api_key=${this.apiKey}`
      )
        .then(response => response.json())
        .then(data => {
          movies = data.results;
        });
    } catch (error) {
      console.log(`fetch error: ${error}`);
    }
    return movies;
  }

  async getMoviesByKeyWord(keyWord) {
    let moviesByKeyWord = null;
    try {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${keyWord}`
      )
        .then(response => response.json())
        .then(data => (moviesByKeyWord = data));
    } catch (error) {
      console.log(`fetch error: ${error}`);
    }
    console.log(moviesByKeyWord);
    return moviesByKeyWord;
  }

  async getWholeMovieInformation(id) {
    let movieInfo = null;
    try {
      await fetch(
        `${this.baseUrl}${this.wholeMovieInformationUrl}${id}?api_key=${this.apiKey}`
      )
        .then(response => response.json())
        .then(data => (movieInfo = data));
    } catch (error) {
      console.log(error);
    }
    return movieInfo;
  }

  async getMovieCast(id) {
    let movieCast = null;
    try {
      await fetch(
        `${this.baseUrl}${this.wholeMovieInformationUrl}${id}?api_key=${this.apiKey}`
      )
        .then(response => response.json())
        .then(data => (movieCast = data));
    } catch (error) {
      console.log(error);
    }
    return movieCast;
  }

  async getMovieReviews(id) {
    let movieReviews = null;
    try {
      await fetch(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`)
        .then(response => response.json())
        .then(data => (movieReviews = data));
    } catch (error) {
      console.log(error);
    }
    return movieReviews;
  }

  async getMovieActors(id) {
    let cast = null;
    try {
      await fetch(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
        .then(response => response.json())
        .then(data => (cast = data));
    } catch (error) {
      console.log(error);
    }
    return cast;
  }
}

export const apiService = new ApiService();
