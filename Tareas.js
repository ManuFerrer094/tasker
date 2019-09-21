import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Tareas extends Component {
  render() {
    return (
      <div className="tareas">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<Tareas/>, document.getElementById('app'));
