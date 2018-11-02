
import React from 'react';
import PropTypes from 'prop-types';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WeatherTemperature';
import './style.css';

const WheatherData = ({ data: {temperature, weatherState, humidity, wind } }) => {
    return (
        <div className="WeatherDataCont">
            <WheatherTemperature temperature={temperature} weatherState={weatherState} />
            <WheatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

// Validations of props
WheatherData.propTypes = {
    data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
            weatherState: PropTypes.string.isRequired,
        })
}

export default WheatherData;