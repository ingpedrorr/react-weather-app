
import React from 'react';
import PropTypes from 'prop-types';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WeatherTemperature';
// import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY } from '../../constants/weather'
// import PropTypes from 'prop-types';
import './style.css';

const WheatherData = ({ data: {temperature, weatherState, humidity, wind } }) => {
    // const  = data;

    return (
        <div className="WeatherDataCont">
            <WheatherTemperature temperature={temperature} weatherState={weatherState} />
            <WheatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};
WheatherData.propTypes = {
    data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.string.isRequired,
            wind: PropTypes.string.isRequired
        })
}

export default WheatherData;