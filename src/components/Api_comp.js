import React, { Component } from "react"
import FetchData from "./FetchData";


class Api_comp extends Component{
    constructor(props){
        super(props);
        this.state = {disable:true, search:''}
        this.handleChange = this.handleChange.bind(this);
    } 
    handleChange(event) {
        this.setState({ search: event.target.value});
    }

    handlesubmit() {
        this.setState({
            disable: false,
            // search: this.state.search,
        });
      }
    
    render(){
        console.log(this.state.search, "hiiiii")
        return(
            <div>
                <h1>Weather API</h1>
                <input className='input-box' type='text' disable={this.disable} onChange={this.handleChange} value = {this.state.search} placeholder='Write Something........' ></input>
                <div>
                    {this.state.search.length > 0 ? (<button className='searchBtn' value = {this.state.search} onClick={() => this.handlesubmit()}>search</button>):(<div>{this.disable}</div>)}
                    {/* {this.state.search.length > 0 ? (
                    <button className='searchBtn'disabled={false} onClick={() => this.handlesubmit()}>search</button>
                    ):(
                    <button className='searchBtn'disabled={true} onClick={() => this.handlesubmit()}>search</button>
                    )} */}
                </div>
                <div>
                    {this.state.disable===false && (<FetchData inputData={this.state.search}/>)}
                </div>
                {/* <FetchData /> */}
            </div>
        )
    }
 }
export default Api_comp