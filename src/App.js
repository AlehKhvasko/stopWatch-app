import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

//create three buttons start/ pause/ reset

    this.state = {
      time: 0,
      clearId: null
    };

    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  timer(e) {
    e.preventDefault();
    const buttonClicked = e.target.id;
    if(buttonClicked === 'start') {
      let id = setInterval(this.startTimer, 1000);
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
