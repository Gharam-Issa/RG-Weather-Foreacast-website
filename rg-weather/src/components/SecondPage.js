import React, { Component } from 'react'
import './Second.css'

export class SecondPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: "Wednesday",
            date: "17/7/2020",
            pic: `${require(`../assets/01d.png`)}`,
            temp: "40°",
            status: "Clear",
            feels: "33/40 Feels Like 30",
            speed:"20 km/h",
            humidity:"100%",
            pressure:"1020",
            sea:"1029",
            lat:"34.43423",
            lon:"31.432423",


        }
    }
    handleClick =(event)=>{
        //Please Route to the first page again
    }
    render() {
        return (
            <div className="second">
                <img id="back" src={require('../assets/back.png')} alt="sun" onClick={this.handleClick}/>

                <h1 className="text" id="day">{this.state.day}</h1>

                <h3 className="text3" id="date">{this.state.date}</h3>

                <div id="pic-temp">
                    <img id="pic" src={this.state.pic} alt="sun" />
                    <h1 className="text" id="temp">{this.state.temp}</h1>
                </div>

                <h1 className="text" id="status">{this.state.status}</h1>
                <h3 className="text3" id="min-max-feels">{this.state.feels}</h3>

                <hr style={{
                    width: '50%'
                }}></hr>

                <div className="extra-info">
                    <div id="left">
                        <h2 className="text2">{"Wind Speed: " + this.state.speed}</h2>
                        <h2 className="text2">{"Humidity: " + this.state.humidity}</h2>
                        <h2 className="text2">{"Pressure: " + this.state.pressure}</h2>
                    </div>
                    <div id="right">
                        <h2 className="text2">{"Sea Level: " + this.state.sea}</h2>
                        <h2 className="text2">{"Latitude: " + this.state.lat}</h2>
                        <h2 className="text2">{"Longitude: " + this.state.lon}</h2>
                    </div>


                </div>
            </div>
        )
    }
}

export default SecondPage
