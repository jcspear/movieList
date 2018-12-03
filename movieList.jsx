import DisplayMovie from './displayMovie.js';


  class BuildMovies extends React.Component{
      constructor(props) {
          super(props);
          this.movies = 
            [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
            ];
      }


      render() {
          return (
          <div class='movie-list'>
          {
              this.movies.map(movie => <DisplayMovie movie={movie} />)
          }
          </div>
      );
    }
  }

  export default BuildMovies