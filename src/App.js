import React, { Component } from 'react';
// import WeatherIcons from 'react-weathericons';
import LocationList from './components/LocationList.js';
// Components
// import WheatherLocation from './components/WeatherLocation/index.js';

import './App.css';

const cities = [
    'La Vega, DO',
    'Washington DC., US',
    'Bogota,col',
    'Ciudad de México,mx',
    'Madrid,es',
    'Lima,pe',

]
class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <LocationList cities={cities}></LocationList>
        </div>
        );
    }
}

export default App;