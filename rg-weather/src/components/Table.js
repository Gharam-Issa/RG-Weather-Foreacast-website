import React, { Component } from 'react'
import './Table.css'
export class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            today: "Today",
            todayStatus: `${require(`../assets/01d.png`)}`,
            todayTemp: "24°",

            secondDay: "TMP",
            thirdDay: "TMP",
            fourthDay: "TMP",
            fifthDay: "TMP",
            sixthDay: "TMP",

            secondStatus: `${require(`../assets/01d.png`)}`,
            thirdStatus: `${require(`../assets/01d.png`)}`,
            fourthStatus: `${require(`../assets/01d.png`)}`,
            fifthStatus: `${require(`../assets/01d.png`)}`,
            sixthStatus: `${require(`../assets/01d.png`)}`,

            secondTemp: "24°",
            thirdTemp: "24°",
            fourthTemp: "24°",
            fifthTemp: "24°",
            sixthTemp: "24°",

        }
    }

    render() {
        return (
            <div className="grid-block">
                <div className="block">
                    <div className="dayName" id="today">{this.state.today}</div>
                    <div className="info" id="todayInfo">
                        <img className="statusImage" id="todayImage" src={this.state.todayStatus} alt="Weather Status" />
                        <h1 className='temp' id="todayTemp"> {this.state.todayTemp} </h1>
                    </div>
                </div>

                <div className="block">
                    <div className="dayName">{this.state.secondDay}</div>
                    <div className="info">
                        <img className="statusImage" src={this.state.secondStatus} alt="Weather Status" />
                        <h1 className='temp'> {this.state.secondTemp} </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{this.state.thirdDay}</div>
                    <div className="info">
                        <img className="statusImage" src={this.state.thirdStatus} alt="Weather Status" />
                        <h1 className='temp'> {this.state.thirdTemp} </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{this.state.fourthDay}</div>
                    <div className="info">
                        <img className="statusImage" src={this.state.fourthStatus} alt="Weather Status" />
                        <h1 className='temp'> {this.state.fourthTemp} </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{this.state.fifthDay}</div>
                    <div className="info">
                        <img className="statusImage" src={this.state.fifthStatus} alt="Weather Status" />
                        <h1 className='temp'> {this.state.fifthTemp} </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{this.state.sixthDay}</div>
                    <div className="info">
                        <img className="statusImage" src={this.state.sixthStatus} alt="Weather Status" />
                        <h1 className='temp'> {this.state.sixthTemp} </h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default Table
