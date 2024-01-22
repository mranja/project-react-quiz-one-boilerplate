import React, { Component } from 'react'

export default class QuizComponent  extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Question</h1>
        <p>1 of 15</p>
        <p className='question'>Which is the only mammal that can jump?</p>

        <div className="options">
            <div className="opt">Dog</div>
            <div className="opt">Elephant</div>
            <div className="opt">Goat</div>
            <div className="opt">Lion</div>
        </div>

        <div className="button">
            <button className='prev'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>





      </div>
    )
  }
}