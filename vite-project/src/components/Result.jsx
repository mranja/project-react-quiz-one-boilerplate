import React from "react";
import "../CSS/Result.css";

class Result extends React.Component {
  render() {
    return (
      <div className="resultcontainer">
        <h1 className="heading-of-resultpage">Result</h1>
        <div className="boxxx">
          <h2>You Need to Practice more dude !</h2>
          <h1>
            Your score is <span>50%</span>
          </h1>
          <div className="results
          
          ">
            <div className="totalnoofqus">
              <h3>Total Number of Question</h3>
              <p>50</p>
            </div>
            <div className="attempted">
              <h3>Total Number of Attempt</h3>
              <p>50</p>
            </div>
            <div className="crtans">
              <h3>Total Number of Correct answer</h3>
              <p>50</p>
            </div>
            <div className="wrongans">
              <h3>Total Number of Wrong answer</h3>
              <p>50</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="playagain">Play Again</button>
          <button id="home">Back to home</button>
        </div>
      </div>
    );
  }
}

export default Result;