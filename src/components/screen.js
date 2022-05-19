import React from 'react';

const screen = (props) => {
    return (
      <div className="screen">
        <input type="text" value = {props.question}/>
        <input type="text" value = {props.answer}/>
      </div>
    )
  }

export default screen;