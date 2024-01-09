import React from "react";
import '../CSS/Quiz.css'

class Quiz extends React.Component{


    render(){
        return(
            <div className="container">
                <h1 className="heading">Question</h1>
                <div className="numofquestions">
                    <h4><span>4 </span>of<span> 5</span></h4>
                </div>
                <h2 className="question">Which animal give birth to thier baby after 22 months ? </h2>
                <div className="answers">
                    <div className="options">Dog</div>
                    <div className="options">Cow</div>
                    <div className="options">Elephants</div>
                    <div className="options">Lion</div>
                </div>
                <div className="buttons">
                    
                        <button className="previous" >Previous</button>
                    
                    
                        <button className="next" >Next</button>
                    
                    
                        <button className="quit" >Quit</button>
                    
                </div>
            </div>
        )
    }
}

export default Quiz;