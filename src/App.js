import React, { Component } from 'react';
// import WeatherIcons from 'react-weathericons';

// Components
import WheatherLocation from './components/WeatherLocation/Index';

import './App.css';


class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <WheatherLocation></WheatherLocation>
        </div>
        );
    }
}

export default App;