import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondRatio: 0,
      minuteRatio: 0,
      hourRatio: 0,
    }
  }

  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({
      secondRatio,
      minuteRatio,
      hourRatio
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  componentWillUnmount() {
    this.setClock();
  }

  render() {
    const hour = {
      transform: `translate(-50%) rotate(${this.state.hourRatio * 360}deg)`
    }
    const minute = {
      transform: `translate(-50%) rotate(${this.state.minuteRatio * 360}deg)`
    }
    const second = {
      transform: `translate(-50%) rotate(${this.state.secondRatio * 360}deg)`
    }
    return (
      <div className="clock" >
        <div className="hand hour" style={hour}></div>
        <div className="hand minute" style={minute}></div>
        <div className="hand second" style={second}></div>
        <div className="number number1">
          <div>1</div>
        </div>
        <div className="number number2">
          <div>2</div>
        </div>
        <div className="number number3">
          <div>3</div>
        </div>
        <div className="number number4">
          <div>4</div>
        </div>
        <div className="number number5">
          <div>5</div>
        </div>
        <div className="number number6">
          <div>6</div>
        </div>
        <div className="number number7">
          <div>7</div>
        </div>
        <div className="number number8">
          <div>8</div>
        </div>
        <div className="number number9">
          <div>9</div>
        </div>
        <div className="number number10">
          <div>10</div>
        </div>
        <div className="number number11">
          <div>11</div>
        </div>
        <div className="number number12">
          <div>12</div>
        </div>
      </div>
    )
  }
}
