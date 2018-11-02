import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WheatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont">
        <span>
        </span>
        <span className="extraInfoText"> {`Humedad: ${humidity}% - `} </span>
        <span className="extraInfoText"> {`Vientos: ${wind}`} </span>
    </div>
);
WheatherExtraInfo.propTypes = {
    humidity: PropTypes.number,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtraInfo;