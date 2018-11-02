import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../providers/getUrlWeatherByCity';
import Location from './Location';
import transformWeather from '../../providers/transformWeather';
import WheatherData from '../WeatherData/Index';
import './style.css';

class WeatherLocation extends Component { 
    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
          city,
          data: null,  
        };

        console.log('constructor');

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleClick();

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    
    handleClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then(data=> {
            // console.log('handleClick')
            const newWeather = transformWeather(data);
            // console.log( newWeather );
            
            this.setState({
                data: newWeather
            })
            // debugger;
        });


      
    }
    render() {
        console.log("3- render");
        const { city, data } = this.state;
        return(        
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            { data ? 
                <WheatherData data={data}></WheatherData> 
                : <CircularProgress size={60} />
            }
            {/* <button onClick={this.handleClick}> Actualizar</button> */}
        </div>)
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}
export default WeatherLocation;

