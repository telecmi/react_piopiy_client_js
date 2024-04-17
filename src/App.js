import React from 'react'
import PIOPIY from "piopiyjs";
import {
  piopiy_start,
  answer,
  reject,
  make_call,
  terminate,
  dtmf,
  hold,
  unhold,
  mute,
  unmute,
  reRegister,
  transfer,
  merge,
  cancel_transfer
} from "./service/piopiy_voice";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: false,
      hangup: false
    }
  }

  componentDidMount() {
    this.piopiy = new PIOPIY({ name: "TeleCMI", debug: false, autoplay: true, ringTime: 60 });
    piopiy_start(this);
  }

  callAnswer = () => {
    answer(this)
  }

  callHangup = () => {
    terminate(this)
  }

  render() {
    return (
      <div>
        <h1>TeleCMI PIOPIY React Example</h1>
        <div style={{ padding: '20px' }}>
          {this.state.answer ?
            <button onClick={() => this.callAnswer()}>answer</button> : this.state.hangup &&
            <button onClick={() => this.callHangup()}>hangup</button>
          }
        </div>
      </div>

    )
  }
}

export default App;
