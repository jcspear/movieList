import DisplayMovie from './displayMovie.js';
import Search from './Search.js'
import AddMovie from './AddMovie.js'


  class BuildMovies extends React.Component{
      constructor(props) {
          super(props);
          this.state = {
            movies: 
                [
                    {title: 'Mean Girls'},
                    {title: 'Hackers'},
                    {title: 'The Grey'},
                    {title: 'Sunshine'},
                    {title: 'Ex Machina'},
                ],
            display:
                [
                    {title: 'Mean Girls'},
                    {title: 'Hackers'},
                    {title: 'The Grey'},
                    {title: 'Sunshine'},
                    {title: 'Ex Machina'},
                ],
        }
      }

      handleSearch (query) {
          var newMovieList = this.state.movies.filter(movie => movie.title.includes(query));
          this.setState({
            display: newMovieList
          });
      }

      addMovie (input) {
          var movies = this.state.movies;
          movies.push({title: input});
          this.setState({
              movies: movies,
              display: movies
          })
      }

      render() {
          return (
        <div>
            <div class='input-bar'><AddMovie handleInput={this.addMovie.bind(this)}/></div>
            <div class='search-bar'><Search handleSearch={this.handleSearch.bind(this)}/></div>
            <div class='movie-list'>
                {
                    this.state.display.map(movie => <DisplayMovie movie={movie} />)
                }
            </div>
          </div>
      );
    }
  }

  export default BuildMovies