

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInput(input) {
        this.props.handleInput(input);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "input" },
                React.createElement("input", { id: "input-bar", type: "text" }),
                React.createElement(
                    "button",
                    { id: "handleInput", onClick: () => {
                            this.handleInput(document.getElementById('input-bar').value);
                        } },
                    "Add Movie!"
                )
            )
        );
    }
}

export default AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUlucHV0IiwiaW5wdXQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsTUFBTUMsU0FBN0IsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxnQkFBYUMsS0FBYixFQUFvQjtBQUNoQixhQUFLRixLQUFMLENBQVdDLFdBQVgsQ0FBdUJDLEtBQXZCO0FBQ0g7O0FBRURDLGFBQVM7QUFDTCxlQUNBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFDSSwrQ0FBTyxJQUFHLFdBQVYsRUFBc0IsTUFBSyxNQUEzQixHQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFRLElBQUcsYUFBWCxFQUF5QixTQUFTLE1BQU07QUFBQyxpQ0FBS0YsV0FBTCxDQUFpQkcsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0MsS0FBdEQ7QUFBOEQseUJBQXZHO0FBQUE7QUFBQTtBQUZKO0FBREosU0FEQTtBQU9GO0FBakJpQzs7QUFvQnZDLGVBQWVWLFFBQWYiLCJmaWxlIjoiQWRkTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIEFkZE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUlucHV0IChpbnB1dCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGFuZGxlSW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0LWJhclwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0naGFuZGxlSW5wdXQnIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUlucHV0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1iYXInKS52YWx1ZSk7fX0+QWRkIE1vdmllITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuKSAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllIl19