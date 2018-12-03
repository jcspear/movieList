import DisplayMovie from './displayMovie.js';
import Search from './Search.js'


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

      render() {
          return (
        <div>
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