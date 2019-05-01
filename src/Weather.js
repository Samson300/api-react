import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            weather: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=886705b4c1182eb1c69f28eb8c520e20`)
        // console.log(response)
        this.setState({
            weather: response.data.main.humidity
        })
    }


    render() {
        return (
            <div>
                <h1>Weather for Atlanta</h1>
                <ul>
                    {
                        this.state.weather ? <li>Humidity: {this.state.weather}</li> : null
                    }
                </ul>
            </div>
        )
    }
}

export default Weather;