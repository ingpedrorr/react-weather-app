import React, { Component } from 'react';
import Location from './Location';
import transformWeather from './../../providers/transformWeather';
import WheatherData from '../WeatherData/Index';
import { api_weather } from './../../constants/api_url';
import './style.css';

class WeatherLocation extends Component { 
    constructor() {
        super();

        this.state = {
          city: 'Distrito Nacional',
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

        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then(data=> {
            console.log('handleClick')
            const newWeather = transformWeather(data);
            console.log( newWeather );
            
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
                : "LOADING..."
            }
            {/* <button onClick={this.handleClick}> Actualizar</button> */}
        </div>)
    }
};


export default WeatherLocation;

