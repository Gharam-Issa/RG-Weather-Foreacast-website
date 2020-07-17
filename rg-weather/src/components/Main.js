import React, { Component } from 'react'

export class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
             value:""
        }
        

    }
Onchange = (e) =>{
    this.setState({
        value : e.target.value
        
    })
    console.log("country name test", this.state.value);
}

// onSubmit=(e) =>{
//     e.preventDefault()
//     this.setState({
//         countryName:""
//     })
// }
    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <form>
                    {/* onSubmit={this.onsubmit} */}
                    <input type="search" placeholder="Enter the country name"  onChange={this.Onchange}
            
                    ></input>
                    <input type="submit" value="add" ></input>
                    
                </form>
                
            </div>
        )
    }
}

export default Main
