import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            jokes: '',
            number: 1
        }
    }


    async componentDidMount() {
        const response = await axios.get(`http://api.icndb.com/jokes/random`)
        this.setState({
            jokes: response.data.value.joke
        })
    }

    _increment = () => {
        this.setState({
            number: this.state.number + 1
        }, this.componentDidMount)
    }

    _decrement = () => {
        if (this.state.number > 1) {
            this.setState({
                    number: this.state.number -1
                }, this.componentDidMount)
        }
    }

    render() {
        return (
            <div>
                <h1>Jokes</h1>
                <ul>
                    {
                        this.state.jokes ? <li>{this.state.jokes}</li> : null
                    }
                </ul>
                <button onClick={this._increment}>Random</button>
            </div>
        )
    }
}
export default Jokes;