import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<Homepage/>, document.getElementById('app'));
