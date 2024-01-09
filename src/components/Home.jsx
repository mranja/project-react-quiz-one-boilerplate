import React from "react";
import "../CSS/Home.css"

class Home extends React.Component{
    render(){
        return(
            <div className="homepage">
                <h1 className="text">Quiz App</h1>
                <button className="playbuttn" >Play</button>
            </div>
        )
    }
}


export default Home;