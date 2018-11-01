import React from 'react';
import WeatherIcons from 'react-weathericons';

import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY } from '../../constants/weather'

import PropTypes from 'prop-types';
import './style.css';
const icons = {

    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
}
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = '4x';
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={'cloud'} size={sizeIcon} />;

}
const WheatherTemperature = ({ temperature, weatherState}) => (
    <div className="WeatherTemperatureCont"> 
    {
        getWeatherIcon(weatherState)
    }
    
    <span className="temperature"> 
        {`${temperature}`}
    </span>

    <span className="temperatureType">
        {`C˚`}
    </span>
    

</div>
);

WheatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
};

export default WheatherTemperature;