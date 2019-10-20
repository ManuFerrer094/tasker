import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const calendar = require('../img/iconos/calendar.png')
    const growth = require('../img/iconos/growth.png')
    const teacher = require('../img/iconos/teacher.png')
    const chat = require('../img/iconos/chat.png')

    return (
      <div>
        <div className="container" id="MenuInicio">
        <div className="carta"><a><img  src={calendar} alt="my image" /></a></div>
        <div className="carta"><a><img src={growth} alt="my image" /></a></div>
        <div className="carta"><a><img src={teacher} alt="my image" /></a></div>
        <div className="carta"><a><img src={chat} alt="my image" /></a></div>
          </div>
      </div>
    );
  }
}

export default Homepage;
