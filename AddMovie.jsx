

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInput (input) {
        this.props.handleInput(input);
    }

    render() {
        return (
        <div>
            <div className="input">
                <input id="input-bar" type="text"/>
                <button id='handleInput' onClick={() => {this.handleInput(document.getElementById('input-bar').value);}}>Add Movie!</button>
            </div>
        </div>
)    }
}

export default AddMovie