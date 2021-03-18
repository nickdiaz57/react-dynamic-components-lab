import React, { Component } from 'react';

export default class ColorBox extends Component {

  // state = {
  //   todos: [
      
  //   ]
  // }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={(((this.props.opacity * 100) - 10)/100)} /> : null}
      </div>
    )
  }

}

