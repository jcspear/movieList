

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch(input) {
        this.props.handleSearch(input);
    }

    render() {
        return React.createElement(
            "div",
            { className: "search-bar form-inline" },
            React.createElement("input", { id: "search-bar", type: "text" }),
            React.createElement(
                "button",
                { id: "handleSearch", onClick: () => {
                        this.handleSearch(document.getElementById('search-bar').value);
                    } },
                "Search!"
            )
        );
    }
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlU2VhcmNoIiwiaW5wdXQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBTUEsTUFBTixTQUFxQkMsTUFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxpQkFBYUMsS0FBYixFQUFvQjtBQUNoQixhQUFLRixLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLEtBQXhCO0FBQ0g7O0FBRURDLGFBQVE7QUFDSixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsd0JBQWY7QUFDSSwyQ0FBTyxJQUFHLFlBQVYsRUFBdUIsTUFBSyxNQUE1QixHQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFRLElBQUcsY0FBWCxFQUEwQixTQUFTLE1BQU07QUFBQyw2QkFBS0YsWUFBTCxDQUFrQkcsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsS0FBeEQ7QUFBZ0UscUJBQTFHO0FBQUE7QUFBQTtBQUZKLFNBREo7QUFNQztBQWhCNEI7O0FBbUJyQyxlQUFlVixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuIFxyXG4gICAgaGFuZGxlU2VhcmNoKGlucHV0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2goaW5wdXQpO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic2VhcmNoLWJhclwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0naGFuZGxlU2VhcmNoJyBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVTZWFyY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZSk7fX0+U2VhcmNoITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ==