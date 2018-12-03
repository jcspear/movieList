


class Search extends React.Component {
    constructor(props) {
        super(props);
    }
 
    handleSearch(input) {
        this.props.handleSearch(input);
    }
 
    render(){
        return (  
            <div className="search-bar form-inline">
                <input id="search-bar" type="text"/>
                <button id='handleSearch' onClick={() => {this.handleSearch(document.getElementById('search-bar').value);}}>Search!</button>
            </div>
            )
        }
}

export default Search;