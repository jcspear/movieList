import DisplayMovie from './displayMovie.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class BuildMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }],
            display: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
        };
    }

    handleSearch(query) {
        var newMovieList = this.state.movies.filter(movie => movie.title.includes(query));
        this.setState({
            display: newMovieList
        });
    }

    addMovie(input) {
        var movies = this.state.movies;
        movies.push({ title: input });
        this.setState({
            movies: movies,
            display: movies
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { 'class': 'input-bar' },
                React.createElement(AddMovie, { handleInput: this.addMovie.bind(this) })
            ),
            React.createElement(
                'div',
                { 'class': 'search-bar' },
                React.createElement(Search, { handleSearch: this.handleSearch.bind(this) })
            ),
            React.createElement(
                'div',
                { 'class': 'movie-list' },
                this.state.display.map(movie => React.createElement(DisplayMovie, { movie: movie }))
            )
        );
    }
}

export default BuildMovies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwiU2VhcmNoIiwiQWRkTW92aWUiLCJCdWlsZE1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaGFuZGxlU2VhcmNoIiwicXVlcnkiLCJuZXdNb3ZpZUxpc3QiLCJmaWx0ZXIiLCJtb3ZpZSIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJhZGRNb3ZpZSIsImlucHV0IiwicHVzaCIsInJlbmRlciIsImJpbmQiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFlBQVAsTUFBeUIsbUJBQXpCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZUFBckI7O0FBR0UsTUFBTUMsV0FBTixTQUEwQkMsTUFBTUMsU0FBaEMsQ0FBeUM7QUFDckNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFDSSxDQUNJLEVBQUNDLE9BQU8sWUFBUixFQURKLEVBRUksRUFBQ0EsT0FBTyxTQUFSLEVBRkosRUFHSSxFQUFDQSxPQUFPLFVBQVIsRUFISixFQUlJLEVBQUNBLE9BQU8sVUFBUixFQUpKLEVBS0ksRUFBQ0EsT0FBTyxZQUFSLEVBTEosQ0FGTztBQVNYQyxxQkFDSSxDQUNJLEVBQUNELE9BQU8sWUFBUixFQURKLEVBRUksRUFBQ0EsT0FBTyxTQUFSLEVBRkosRUFHSSxFQUFDQSxPQUFPLFVBQVIsRUFISixFQUlJLEVBQUNBLE9BQU8sVUFBUixFQUpKLEVBS0ksRUFBQ0EsT0FBTyxZQUFSLEVBTEo7QUFWTyxTQUFiO0FBa0JIOztBQUVERSxpQkFBY0MsS0FBZCxFQUFxQjtBQUNqQixZQUFJQyxlQUFlLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sTUFBbEIsQ0FBeUJDLFNBQVNBLE1BQU1OLEtBQU4sQ0FBWU8sUUFBWixDQUFxQkosS0FBckIsQ0FBbEMsQ0FBbkI7QUFDQSxhQUFLSyxRQUFMLENBQWM7QUFDWlAscUJBQVNHO0FBREcsU0FBZDtBQUdIOztBQUVESyxhQUFVQyxLQUFWLEVBQWlCO0FBQ2IsWUFBSVgsU0FBUyxLQUFLRCxLQUFMLENBQVdDLE1BQXhCO0FBQ0FBLGVBQU9ZLElBQVAsQ0FBWSxFQUFDWCxPQUFPVSxLQUFSLEVBQVo7QUFDQSxhQUFLRixRQUFMLENBQWM7QUFDVlQsb0JBQVFBLE1BREU7QUFFVkUscUJBQVNGO0FBRkMsU0FBZDtBQUlIOztBQUVEYSxhQUFTO0FBQ0wsZUFDRjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQUssU0FBTSxXQUFYO0FBQXVCLG9DQUFDLFFBQUQsSUFBVSxhQUFhLEtBQUtILFFBQUwsQ0FBY0ksSUFBZCxDQUFtQixJQUFuQixDQUF2QjtBQUF2QixhQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFLLFNBQU0sWUFBWDtBQUF3QixvQ0FBQyxNQUFELElBQVEsY0FBYyxLQUFLWCxZQUFMLENBQWtCVyxJQUFsQixDQUF1QixJQUF2QixDQUF0QjtBQUF4QixhQUZKO0FBR0k7QUFBQTtBQUFBLGtCQUFLLFNBQU0sWUFBWDtBQUVRLHFCQUFLZixLQUFMLENBQVdHLE9BQVgsQ0FBbUJhLEdBQW5CLENBQXVCUixTQUFTLG9CQUFDLFlBQUQsSUFBYyxPQUFPQSxLQUFyQixHQUFoQztBQUZSO0FBSEosU0FERTtBQVdMO0FBbkRzQzs7QUFzRHpDLGVBQWViLFdBQWYiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuL2Rpc3BsYXlNb3ZpZS5qcyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXHJcbmltcG9ydCBBZGRNb3ZpZSBmcm9tICcuL0FkZE1vdmllLmpzJ1xyXG5cclxuXHJcbiAgY2xhc3MgQnVpbGRNb3ZpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtb3ZpZXM6IFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdIYWNrZXJzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnVGhlIEdyZXknfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdW5zaGluZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ0hhY2tlcnMnfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdUaGUgR3JleSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhhbmRsZVNlYXJjaCAocXVlcnkpIHtcclxuICAgICAgICAgIHZhciBuZXdNb3ZpZUxpc3QgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUuaW5jbHVkZXMocXVlcnkpKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBuZXdNb3ZpZUxpc3RcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRNb3ZpZSAoaW5wdXQpIHtcclxuICAgICAgICAgIHZhciBtb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcztcclxuICAgICAgICAgIG1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIG1vdmllczogbW92aWVzLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG1vdmllc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC1iYXInPjxBZGRNb3ZpZSBoYW5kbGVJbnB1dD17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NlYXJjaC1iYXInPjxTZWFyY2ggaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vdmllLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzcGxheS5tYXAobW92aWUgPT4gPERpc3BsYXlNb3ZpZSBtb3ZpZT17bW92aWV9IC8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgQnVpbGRNb3ZpZXMiXX0=