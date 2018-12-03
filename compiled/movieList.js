import DisplayMovie from './displayMovie.js';
import Search from './Search.js';

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

    render() {
        return React.createElement(
            'div',
            null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwiU2VhcmNoIiwiQnVpbGRNb3ZpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInRpdGxlIiwiZGlzcGxheSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwibmV3TW92aWVMaXN0IiwiZmlsdGVyIiwibW92aWUiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsWUFBUCxNQUF5QixtQkFBekI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5COztBQUdFLE1BQU1DLFdBQU4sU0FBMEJDLE1BQU1DLFNBQWhDLENBQXlDO0FBQ3JDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQ0ksQ0FDSSxFQUFDQyxPQUFPLFlBQVIsRUFESixFQUVJLEVBQUNBLE9BQU8sU0FBUixFQUZKLEVBR0ksRUFBQ0EsT0FBTyxVQUFSLEVBSEosRUFJSSxFQUFDQSxPQUFPLFVBQVIsRUFKSixFQUtJLEVBQUNBLE9BQU8sWUFBUixFQUxKLENBRk87QUFTWEMscUJBQ0ksQ0FDSSxFQUFDRCxPQUFPLFlBQVIsRUFESixFQUVJLEVBQUNBLE9BQU8sU0FBUixFQUZKLEVBR0ksRUFBQ0EsT0FBTyxVQUFSLEVBSEosRUFJSSxFQUFDQSxPQUFPLFVBQVIsRUFKSixFQUtJLEVBQUNBLE9BQU8sWUFBUixFQUxKO0FBVk8sU0FBYjtBQWtCSDs7QUFFREUsaUJBQWNDLEtBQWQsRUFBcUI7QUFDakIsWUFBSUMsZUFBZSxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQWxCLENBQXlCQyxTQUFTQSxNQUFNTixLQUFOLENBQVlPLFFBQVosQ0FBcUJKLEtBQXJCLENBQWxDLENBQW5CO0FBQ0EsYUFBS0ssUUFBTCxDQUFjO0FBQ1pQLHFCQUFTRztBQURHLFNBQWQ7QUFHSDs7QUFFREssYUFBUztBQUNMLGVBQ0Y7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFNBQU0sWUFBWDtBQUF3QixvQ0FBQyxNQUFELElBQVEsY0FBYyxLQUFLUCxZQUFMLENBQWtCUSxJQUFsQixDQUF1QixJQUF2QixDQUF0QjtBQUF4QixhQURKO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFNBQU0sWUFBWDtBQUVJLHFCQUFLWixLQUFMLENBQVdHLE9BQVgsQ0FBbUJVLEdBQW5CLENBQXVCTCxTQUFTLG9CQUFDLFlBQUQsSUFBYyxPQUFPQSxLQUFyQixHQUFoQztBQUZKO0FBRkYsU0FERTtBQVVMO0FBekNzQzs7QUE0Q3pDLGVBQWViLFdBQWYiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuL2Rpc3BsYXlNb3ZpZS5qcyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXHJcblxyXG5cclxuICBjbGFzcyBCdWlsZE1vdmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vdmllczogXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ0hhY2tlcnMnfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdUaGUgR3JleSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTpcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnSGFja2Vycyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZTogJ1RoZSBHcmV5J30sXHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlOiAnU3Vuc2hpbmUnfSxcclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaGFuZGxlU2VhcmNoIChxdWVyeSkge1xyXG4gICAgICAgICAgdmFyIG5ld01vdmllTGlzdCA9IHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyhxdWVyeSkpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5ld01vdmllTGlzdFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2VhcmNoLWJhcic+PFNlYXJjaCBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9Lz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J21vdmllLWxpc3QnPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzcGxheS5tYXAobW92aWUgPT4gPERpc3BsYXlNb3ZpZSBtb3ZpZT17bW92aWV9IC8+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEJ1aWxkTW92aWVzIl19