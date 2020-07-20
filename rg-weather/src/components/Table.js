import React, { Component } from 'react';
import './Table.css';
import {Link} from 'react-router-dom';
 




export class Table extends Component {
    

    render() {
        
        //var temp  = this.props.data;
        if(!this.props.data.list){
            return <span>Loading ...</span> 
        }
        return (
            <React.Fragment>
            <div className="grid-block">
                {/* <Link to="/SecondPage"> */}
                <div className="block">
                    <div className="dayName" id="today">Today</div>
                    <div className="info" id="todayInfo">
                        <img className="statusImage" id="todayImage" src={`${require(`../assets/${this.props.data.list[0].weather[0].icon}.png`)}`} alt="Weather Status" />
                        <h1 className='temp' id="todayTemp"> {Math.round(this.props.data.list[0].main.temp)}° </h1>
                    </div>
                </div>
                {/* </Link> */}

                <div className="block">
                    <div className="dayName">{(this.props.convert(this.props.data.list[8].dt).substring(0,3))}</div>
                    <div className="info">
                        <img className="statusImage" src={`${require(`../assets/${this.props.data.list[8].weather[0].icon}.png`)}`} alt="Weather Status" />
                        <h1 className='temp'> {Math.round(this.props.data.list[8].main.temp)}° </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{(this.props.convert(this.props.data.list[16].dt)).substring(0,3)}</div>
                    <div className="info">
                        <img className="statusImage" src={`${require(`../assets/${this.props.data.list[16].weather[0].icon}.png`)}`} alt="Weather Status" />
                        <h1 className='temp'> {Math.round(this.props.data.list[16].main.temp)}° </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{(this.props.convert(this.props.data.list[24].dt)).substring(0,3)}</div>
                    <div className="info">
                        <img className="statusImage" src={`${require(`../assets/${this.props.data.list[24].weather[0].icon}.png`)}`} alt="Weather Status" />
                        <h1 className='temp'> {Math.round(this.props.data.list[24].main.temp)}° </h1>
                    </div>
                </div>
                <div className="block">
                    <div className="dayName">{(this.props.convert(this.props.data.list[32].dt)).substring(0,3)}</div>
                    <div className="info">
                        <img className="statusImage" src={`${require(`../assets/${this.props.data.list[32].weather[0].icon}.png`)}`} alt="Weather Status" />
                        <h1 className='temp'> {Math.round(this.props.data.list[32].main.temp)}° </h1>
                    </div>
                </div>
    

            </div>
            </React.Fragment>
        )
    }
}

export default Table;
