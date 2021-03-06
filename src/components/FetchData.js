import React, { Component } from "react"
import axios from 'axios';


class FetchData extends Component{
  constructor(props){
    super(props)
    this.state = ({persons:[], load:true, error:""})
  }
    // state = {
    //     persons : [],
    //     load : false, 
    // }
  
    componentDidUpdate(){
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.inputData}&appid=2de770ef8a7739cc7de10690ac302d19`)
        .then(res=>{
            this.setState({persons:res.data, load:false});
        })
        .catch(err=>{
          this.setState({error:"Page is not found",load:false, persons:err.data});
        })
    }                 
    render(){
      console.log(this.props.inputData)
      console.log(this.state.load)
        return(
            <div>
                {this.state.load ? 
                    (<div>loading...</div>):
                    (<div>{this.state.persons?
                        <div>
                            <div className = "coord" ><b>Coord = </b> (Lat  = {this.state.persons.coord?.lon}), (Lat = {this.state.persons.coord?.lat})</div>
                            <div className = "main" > <b>Main = </b> (Temp  = {this.state.persons.main?.temp}), (Temp_min = {this.state.persons.main?.temp_min}) , (Temp_max = {this.state.persons.main?.temp_max})</div>
                            <div className='timezone' ><b>Timezone = </b>{this.state.persons.timezone}</div>
                        </div>:
                        <div>{this.state.error}</div>}
                    </div>)
                }
            </div>
        )
    }
}
export default FetchData



























// import React, { Component } from "react"
// class FetchData extends Component{
//     // state = {
//     //     load : false,
//     //     person:[]
//     // }
//     constructor(){
//         super()
//         this.state = {person:[],load:false}
//     };
//     async componentDidUpdate(){
//         const url = "http://api.openweathermap.org/data/2.5/weather?q=india&appid=2de770ef8a7739cc7de10690ac302d19";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState ({person:data})
//         // console.log(data.coord);
//         // console.log(data.weather[0].id);
       
//         console.log(this.state.person.coord);
        
//     }
//     render(){
        
//         return(
//             <div>
//                 {/* {this.state.load && !this.state.person ? (<div><h2>loading...</h2></div>):(<div>{this.state.person?.coord}</div>)} */}
//                 {this.state.person? <div>{this.state.person.coord?.lon}</div> :<div>Loding......</div> }
//                 {/* {console.log( this.state.person)} */}
//             </div>
//         )
//     }
// }
// export default FetchData