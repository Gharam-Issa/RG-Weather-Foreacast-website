import React, { Component } from 'react'
import '../App.css';
import Table from './Table'
import './Table.css'
import axios from 'axios';
import SecondPage from './SecondPage';


export class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jsonData: {},
            name: "Bethlehem",
            date: "Wed 15/7/2020",
            maxTemp: '20°',
            minTemp: "19°",
            feels: "19.5°",

            status: "Clear",

            windSpeed: "17 km/h",
            humidity: "29%",
            pressure: "1",

            nextDay: "Thu",
            dayAfter: "Fri",
            lastDay: "Sat",

            statusImage: `${require('../assets/01d.png')}`,

            tempName: "",

            lon: "31.55",
            lat: "31.65"
        }


    }
    onChange = (e) => {
        this.setState({
            tempName: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
        //Call API
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name}&appid=ad8cc942e17c8f242593e8d4a5bc5eb2&units=metric`)
            .then(resp => {

                this.setState({
                    maxTemp: `${Math.round(resp.data.list[0].main.temp_max)}°`,
                    minTemp: `${Math.round(resp.data.list[0].main.temp_min)}°`,
                    feels: `${Math.round(resp.data.list[0].main.feels_like)}°`,
                    status: `${resp.data.list[0].weather[0].main}`,
                    date: this.convert(resp.data.list[0].dt),
                    windSpeed: `${resp.data.list[0].wind.speed} km/h`,
                    humidity: ` ${resp.data.list[0].main.humidity} %`,
                    pressure: resp.data.list[0].main.pressure,
                    statusImage: `${require(`../assets/${resp.data.list[0].weather[0].icon}.png`)}`,
                    name: this.state.tempName,
                    jsonData: resp.data,
                })
            })

    }

    convert = (unix) => {
        var date = new Date(unix * 1000);
        console.log(date);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var day = weekday[date.getDay()];
        day = day.substring(0, 3);

        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var dayOfMonth = date.getDate();

        var format = `${day} ${dayOfMonth}/${month}/${year}`;

        return format;



    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lon: position.coords.longitude,
                    lat: position.coords.latitude
                })
            })
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=ad8cc942e17c8f242593e8d4a5bc5eb2&units=metric`)
                .then(resp => {
                    this.setState({
                        maxTemp: `${Math.round(resp.data.list[0].main.temp_max)}°`,
                        minTemp: `${Math.round(resp.data.list[0].main.temp_min)}°`,
                        feels: resp.data.list[0].main.feels_like,
                        status: resp.data.list[0].weather[0].main,
                        date: this.convert(resp.data.list[0].dt),
                        windSpeed: `${resp.data.list[0].wind.speed} km/h`,
                        humidity: ` ${resp.data.list[0].main.humidity} %`,
                        pressure: resp.data.list[0].main.pressure,
                        jsonData: resp.data,
                    })
                })

        }
        else {
            console.error("Error")
        }
    }

    render() {
        return (
            <React.Fragment>
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
                        <img id="statusImage" src={this.state.statusImage} alt="Weather Status" />
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
                <div style={{
                    height: '20px'
                }}></div>
                <Table data={this.state.jsonData} convert ={this.convert}/>
               
                <SecondPage/>
                
            </React.Fragment>




        )
    }


}





export default Main
