import DisplayMovie from './displayMovie.js';

class BuildMovies extends React.Component {
    constructor(props) {
        super(props);
        this.movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];
    }

    render() {
        return React.createElement(
            'div',
            { 'class': 'movie-list' },
            this.movies.map(movie => React.createElement(DisplayMovie, { movie: movie }))
        );
    }
}

export default BuildMovies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwiQnVpbGRNb3ZpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3ZpZXMiLCJ0aXRsZSIsInJlbmRlciIsIm1hcCIsIm1vdmllIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxZQUFQLE1BQXlCLG1CQUF6Qjs7QUFHRSxNQUFNQyxXQUFOLFNBQTBCQyxNQUFNQyxTQUFoQyxDQUF5QztBQUNyQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsTUFBTCxHQUNFLENBQ0ksRUFBQ0MsT0FBTyxZQUFSLEVBREosRUFFSSxFQUFDQSxPQUFPLFNBQVIsRUFGSixFQUdJLEVBQUNBLE9BQU8sVUFBUixFQUhKLEVBSUksRUFBQ0EsT0FBTyxVQUFSLEVBSkosRUFLSSxFQUFDQSxPQUFPLFlBQVIsRUFMSixDQURGO0FBUUg7O0FBR0RDLGFBQVM7QUFDTCxlQUNBO0FBQUE7QUFBQSxjQUFLLFNBQU0sWUFBWDtBQUVJLGlCQUFLRixNQUFMLENBQVlHLEdBQVosQ0FBZ0JDLFNBQVMsb0JBQUMsWUFBRCxJQUFjLE9BQU9BLEtBQXJCLEdBQXpCO0FBRkosU0FEQTtBQU9MO0FBdEJzQzs7QUF5QnpDLGVBQWVULFdBQWYiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuL2Rpc3BsYXlNb3ZpZS5qcyc7XHJcblxyXG5cclxuICBjbGFzcyBCdWlsZE1vdmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgIHRoaXMubW92aWVzID0gXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0hhY2tlcnMnfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1RoZSBHcmV5J30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdW5zaGluZSd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3M9J21vdmllLWxpc3QnPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMubW92aWVzLm1hcChtb3ZpZSA9PiA8RGlzcGxheU1vdmllIG1vdmllPXttb3ZpZX0gLz4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEJ1aWxkTW92aWVzIl19