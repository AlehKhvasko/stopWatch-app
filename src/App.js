import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

//create three buttons start/ pause/ reset
//onclick method of start
//compare onclick method  with id of buttons
//start button set state to 0 and use another method to count from 0
//count method set time from state + 1 using function setInterval
//reset button set state time to 0
//pause use clear interval function


    this.state = {
      time: 0,
      clearId: 0,
    };

    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  timer(e) {
    e.preventDefault();
    const buttonClicked = e.target.id;
    if(buttonClicked === 'start') {
      let id = setInterval(this.startTimer);
      this.setState({ clearId: id });
    } else if(buttonClicked === 'reset') {
      this.setState({ time: 0 });
    } else if(buttonClicked === 'pause') {
      clearInterval(this.state.clearId);
    }
  }
  startTimer() {
      this.setState({ time: this.state.time + 1 });
  }

  render() {
   return (
     <div className="App">
       <header className="App-header">
         <h1>{this.state.time}</h1>
         <form onClick={this.timer}>
          <button id="start">Start</button>
          <button id="pause">Pause</button>
          <button id="reset">Reset</button>
         </form>
       </header>
     </div>
   );
  }
}

export default App;
