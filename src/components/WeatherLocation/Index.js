import React, { Component } from 'react';
import Location from './Location';
import WheatherData from '../WeatherData/Index';
import {SUN, WINDY} from './../../constants/weather'
import './style.css';

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: '10',
    wind: '10 m/s',
}

const data2 = {
    temperature: 30,
    weatherState: WINDY,
    humidity: '4',
    wind: '5 m/s',
}
class WeatherLocation extends Component { 
    constructor() {
        super();

        this.state = {
          city: 'Distrito Nacional',
          data: data,  
        };
        console.log('react constructor');

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log('actualizando...');
        this.setState({
            city: 'La Vega',
            data: data2
        })
    }
    render() {
        const {city, data} = this.state;
        return(        
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WheatherData data={data}></WheatherData>
            <button onClick={this.handleClick}> Actualizar</button>
        </div>)
    }
};


export default WeatherLocation;

