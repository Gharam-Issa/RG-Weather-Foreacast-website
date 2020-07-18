import React, { Component } from 'react'
import '../App.css';

import axios from 'axios';


export class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Bethlehem",
            date: "Wed 15/7-2020",
            maxTemp: '20°',
            minTemp: "19°",
            feels: "19.5°",

            status: "Clear",

            windSpeed: "17 km/h",
            humidity: "29%",
            pressure: "1",

            nextDay: "Thu",
            dayAfter: "Fri",
            lastDay: "Sat"

        }


    }
    onChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
        //Call API
        console.log("Submit code")
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=ad8cc942e17c8f242593e8d4a5bc5eb2&units=metric`)
        .then(resp => {
            this.setState({
                maxTemp: `${Math.round(resp.data.main.temp_max)}°`,
                minTemp: `${Math.round(resp.data.main.temp_min)}°`,
                feels : resp.data.main.feels_like,
                status : resp.data.weather.main,
                date : resp.data.main.dt,
                windSpeed : `${resp.data.wind.speed} km/h`,
                humidity : ` ${resp.data.main.humidity} %`,
                pressure: resp.data.main.pressure,

            })
        })

    }
     

    render() {
        return (

            <div className="main" >
                <div>
                    <h1 className='main-text' id="name" >{this.state.name}</h1>
                    <h5 className='main-text' id="date"> {this.state.date} </h5>
                    <div className="temperatures">
                        <h1 className='temp' id="maxTemp">{this.state.maxTemp}</h1>
                        <h2 className='temp' id="minTemp">{this.state.minTemp}</h2>
                    </div>

                    <h5 className='temp' id="feels">Feels Like: {this.state.feels}</h5>
                </div>

                <div id="middleDiv">
                    <img id="statusImage" src={statusImage} alt="Weather Status" />
                    <h1 className='main-text'> {this.state.status} </h1>
                </div>

                <div >
                    <form onSubmit={this.submit}>

                        <input type="search" placeholder="Look for your country..." onChange={this.onChange}

                        ></input>
                        <input id="searchBtn" type="submit" value="Search" ></input>

                    </form>
                    <div id="info">

                        <h3 className='main-text'>Wind Speed: {this.state.windSpeed} </h3>
                        <h3 className='main-text'>Humidity:         {this.state.humidity} </h3>
                        <h3 className='main-text'>{"Pressure: " + this.state.pressure} </h3>
                        
                    </div>

                </div>

            </div>




        )
    }


}

var statusImage = require('../assets/sun.png');

export default Main
